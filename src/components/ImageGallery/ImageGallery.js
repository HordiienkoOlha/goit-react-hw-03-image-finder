import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = () => {
  return (
    <ul class={s.imageGallery}>
      <li>
        <ImageGalleryItem />
      </li>
    </ul>
  );
};
export default ImageGallery;
