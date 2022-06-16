import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  id,
  tags,
  webformatURL,
  largeImageURL,
  openModal,
}) => {
  return (
    <li className={s.imageGalleryItem}>
      <img
        id={id}
        src={webformatURL}
        datalink={largeImageURL}
        alt={tags}
        onClick={openModal}
      />
    </li>
  );
};

export default ImageGalleryItem;
