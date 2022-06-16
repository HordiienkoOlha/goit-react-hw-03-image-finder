import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ tags, webformatURL, largeImageURL, openModal }) => {
  return (
    <li className={s.imageGalleryItem}>
      <img
        src={webformatURL}
        datalink={largeImageURL}
        alt={tags}
        onClick={openModal}
      />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
