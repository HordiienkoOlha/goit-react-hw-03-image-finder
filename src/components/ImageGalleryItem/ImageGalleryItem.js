import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  tags,
  webformatURL,
  largeImageURL,
  onClickPicture,
}) => {
  return (
    <li className={s.imageGalleryItem}>
      <a className="item" href={largeImageURL}>
        <img
          // className="gallery-image img-fluid pt-2"
          src={webformatURL}
          alt={tags}
        />
      </a>
    </li>
  );
};

export default ImageGalleryItem;
