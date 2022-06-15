import { Component } from 'react';

import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    largeImageURL: '',
  };

  onChangeSelect = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.largeImageURL);
    this.setState({ largeImageURL: '' });
  };

  render() {
    const { tags, webformatURL } = this.props;
    return (
      <li className={s.imageGalleryItem} onSubmit={this.onChangeSelect}>
        <img src={webformatURL} alt={tags} onClick={this.props.openModal} />
      </li>
    );
  }
}

export default ImageGalleryItem;
