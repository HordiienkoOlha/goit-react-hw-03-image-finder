import PropTypes from 'prop-types';
import { Component } from 'react';

import s from './Modal.module.css';

class Modal extends Component {
  state = {
    active: true,
  };
  onCloseModal = event => {
    event.preventDefault();
    // if (event.onKeyPress === 'Escape') {
    //   this.props.closeModal;
    // }
  };
  render() {
    const { largeImageURL, alt, closeModal } = this.props;
    const { onCloseModal } = this;
    return (
      <div className={s.overlay} onClick={closeModal}>
        <div className={s.modal} onClick={onCloseModal}>
          <img src={largeImageURL} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;
