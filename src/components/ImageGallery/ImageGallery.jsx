import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onItemClick }) => (
  <ul className={css.imgGallery}>
    {images.map((image, index) => (
      <ImageGalleryItem
        key={`${image.id}_${index}`}
        imageUrl={image.webformatURL}
        alt={image.alt}
        onClick={() => onItemClick(image.id)}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ImageGallery;

