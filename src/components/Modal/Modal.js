const Modal = ({ picture, alt }) => {
  return (
    <div className="overlay">
      <div className="modal">
        <img src={picture} alt={alt} />
      </div>
    </div>
  );
};
export default Modal;
