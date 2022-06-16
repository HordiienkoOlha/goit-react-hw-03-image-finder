import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ photos, onSubmit, openModal }) => {
  return (
    <ul
      className={s.imageGallery}
      onClick={e => {
        console.log(e.target.attributes);
        onSubmit(e.target.attributes.getNamedItem('datalink').value);
      }}
    >
      {photos.map(({ id, tags, webformatURL, largeImageURL }) => {
        // console.log(id, tags, webformatURL, largeImageURL);
        return (
          <ImageGalleryItem
            key={id}
            id={id}
            alt={tags}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSubmit: PropTypes.func,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
