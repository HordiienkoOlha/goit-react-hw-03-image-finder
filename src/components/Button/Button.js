import PropTypes from 'prop-types';

import s from './Button.module.css';

const Button = ({ name, onHandle }) => {
  return (
    <>
      <button className={s.button} type="button" onClick={onHandle}>
        {name}
      </button>
    </>
  );
};

Button.protoType = {
  button: PropTypes.string.isRequired,
  onHandle: PropTypes.func.isRequired,
};

export default Button;
