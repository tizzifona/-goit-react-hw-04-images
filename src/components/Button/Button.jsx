import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';
import Load from '../icons/load-more.png';

const Button = ({ onClick, children }) => (
  <button className={css.loadBtn} type="button" onClick={onClick}>
    {children}
    <img src={Load} alt="Load Icon" className={css.loadIcon} />
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
