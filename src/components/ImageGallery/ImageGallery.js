import { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { getPhotos } from '../../services/api';
import { mapper } from 'helpers/mapper';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    page: 1,
    photos: [],
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevName = prevProps.queryInput;
    const nextName = this.props.queryInput;

    if (prevName !== nextName) {
      // this.setState({ isLoading: true });
      // console.log(this.state.page);
      this.fetchPhotos(nextName, page);
    }
    if (prevState.page !== page) {
      // this.setState({ isLoading: true });
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

    // this.setState(prevState => ({
    //   photos: [...prevState.photos, ...photos],
    // }));
  };
  render() {
    const { isLoading, photos } = this.state;
    return (
      <>
        {isLoading && <Loader />}
        {/* <Loader /> */}
        <ul className={s.imageGallery}>
          {photos.map(({ id, tags, webformatURL, largeImageURL }) => {
            // console.log(id, tags, webformatURL, largeImageURL);
            return (
              <ImageGalleryItem
                key={id}
                id={id}
                alt={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
              />
            );
          })}
        </ul>
        {photos.length > 0 && (
          <Button name={'Load more'} onHandle={this.onLoadMore}></Button>
        )}
      </>
    );
  }
}
export default ImageGallery;
