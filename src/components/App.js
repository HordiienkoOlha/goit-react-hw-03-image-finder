import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import { getPhotos } from '../services/api';
import { mapper } from '../helpers/mapper';

import s from '../components/App.module.css';

class App extends Component {
  state = {
    queryInput: '',
    page: 1,
    photos: [],
    isLoading: false,
    error: null,

    largeImageURL: '',
    active: false,
    setModalActive: true,
  };
  onSearch = queryInput => {
    this.setState({ queryInput });
  };
  onSelectImage = largeImageURL => {
    this.setState({ largeImageURL });
  };
  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevName = prevState.queryInput;
    const nextName = this.state.queryInput;

    if (prevName !== nextName) {
      this.fetchPhotos(nextName, page);
    }
    if (prevState.page !== page) {
      this.fetchPhotos(nextName, page);
    }
  }

  fetchPhotos = (query, page) => {
    this.setState({ isLoading: true });
    getPhotos(query, page)
      .then(({ data }) =>
        this.setState(prevState => ({
          photos: [...prevState.photos, ...mapper(data.hits)],
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };
  onLoadMore = () => {
    let { page } = this.state;
    page += 1;
    this.setState({ page });
  };
  openModal = () => this.setState({ active: true });
  closeModal = () => this.setState({ active: false });
  render() {
    const { onSearch, onLoadMore, onSelectImage, openModal, closeModal } = this;
    const { isLoading, photos, active, largeImageURL } = this.state;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={onSearch} />
        {isLoading && <Loader />}
        <ImageGallery
          photos={photos}
          largeImageURL={largeImageURL}
          onClick={onSelectImage}
          openModal={openModal}
        />

        {active && (
          <Modal
            largeImageURL={largeImageURL}
            alt={'enlarged image'}
            active={active}
            closeModal={closeModal}
          />
        )}

        {photos.length > 0 && (
          <Button name={'Load more'} onHandle={onLoadMore}></Button>
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default App;

//  <button
//           type="button"
//           onClick={() =>
//             this.setState({
//               largeImageURL:
//                 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736877_150.jpg',
//             })
//           }
//         >
//           open
//         </button>
//         }
