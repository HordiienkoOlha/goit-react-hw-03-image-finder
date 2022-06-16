import PropTypes from 'prop-types';
import { Component } from 'react';

import s from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    closeModal: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }
  onKeyDown = e => {
    if (e.code === 'Escape') this.props.closeModal();
  };
  render() {
    const { largeImageURL, closeModal } = this.props;
    return (
      <div className={s.overlay} onClick={closeModal}>
        <div className={s.modal}>
          <img src={largeImageURL} alt="Big card" />
        </div>
      </div>
    );
  }
}

export default Modal;
