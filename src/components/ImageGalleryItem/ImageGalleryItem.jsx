import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ imageUrl, alt, onClick }) => (
  <li className={css.galleryItem}>
    <img className={css.galleryImg} src={imageUrl} alt={alt} onClick={onClick} />
  </li>
);

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
