// import { Component } from 'react';

import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ photos, onClickPicture }) => {
  return (
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
            onClickPicture={onClickPicture}
          />
        );
      })}
    </ul>
  );
};
export default ImageGallery;
