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
    largeImageURL: null,
    active: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevName = prevState.queryInput;
    const prevPage = prevState.page;
    const nextName = this.state.queryInput;

    if (prevName !== nextName || prevPage !== page) {
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
  onSearch = queryInput => {
    this.setState({ queryInput });
    this.setState({ photos: [] });
    this.setState({ page: 1 });
  };
  addLink = newLink => {
    this.setState({
      largeImageURL: newLink,
    });
  };
  openModal = () => {
    this.setState({ active: true });
  };
  closeModal = () => this.setState({ active: false });
  render() {
    const { onSearch, onLoadMore, addLink, openModal, closeModal } = this;
    const { isLoading, photos, active, id, largeImageURL } = this.state;
    return (
      <div className={s.app}>
        <Searchbar onSubmit={onSearch} />

        {photos.length > 0 && (
          <>
            <ImageGallery
              onSubmit={addLink}
              photos={photos}
              openModal={openModal}
            />
          </>
        )}
        {(isLoading && <Loader />) ||
          (photos.length > 0 && (
            <Button name={'Load more'} onHandle={onLoadMore} />
          ))}
        {active && (
          <Modal
            id={id}
            largeImageURL={largeImageURL}
            alt={'enlarged image'}
            active={active}
            closeModal={closeModal}
          />
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
// {isLoading && <Loader />}
// {photos.length > 0 && (
//   <>
//     <ImageGallery
//       onSubmit={addLink}
//       photos={photos}
//       openModal={openModal}
//     />
//     <Button name={'Load more'} onHandle={onLoadMore} />
//   </>
// )}
