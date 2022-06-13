import { Component } from 'react';
import { Rings } from 'react-loader-spinner';

import ImageGalleryItem from 'components/ImageGalleryItem';
import { getPhotos } from '../../services/api';
import { mapper } from 'helpers/mapper';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    page: 1,
    photos: [],
    isLoading: false,
    isShow: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.queryInput;
    const nextName = this.props.queryInput;
    // if (prevState.isShow !== isShow || prevProps.queryInput !== queryInput) {

    if (prevState.isShow !== this.state.isShow || prevName !== nextName) {
      this.setState({ isLoading: true });

      console.log(nextName);
      this.fetchPhotos(nextName, this.state.page);
    }
  }
  fetchPhotos = (query, page) => {
    this.setState({ isLoading: true });
    getPhotos(query, page)
      .then(({ data }) => this.setState({ photos: mapper(data.hits) }))
      .catch(error => console.log(error))
      .finally(this.setState({ isLoading: false, isShow: true }));
    //
  };
  render() {
    const { isLoading, photos } = this.state;
    return (
      <>
        {isLoading && (
          <div className={s.spinner}>
            <Rings color="#3f51b5" height={80} width={80} />
          </div>
        )}
        <p>{this.props.queryInput}</p>
        {/* {this.state.query && <p>{this.state.query}</p>} */}
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
      </>
    );
  }
}
export default ImageGallery;
