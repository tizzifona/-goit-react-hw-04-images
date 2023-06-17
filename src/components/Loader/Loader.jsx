import React from 'react';
import css from './Loader.module.css';
import LoaderIcon from './loader.gif';

const Loader = () => (
    <div className={css.loader}>
      <img src={LoaderIcon} alt="Loader Icon"/>
  </div>
);

export default Loader;
