import React, { useState, useEffect, useCallback } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';
import searchImages from '../API/searchImages';
import css from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [largeImageUrl, setLargeImageUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const fetchImages = useCallback(() => {
    setLoading(true);

    searchImages(query, page)
      .then((fetchedImages) => {
        setImages((prevImages) => [...prevImages, ...fetchedImages]);
        setLoading(false);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch((error) => {
        console.log('Error fetching images:', error);
        setLoading(false);
      });
  }, [query, page]);

  useEffect(() => {
    if (!isInitialLoad) {
      fetchImages();
    }
  }, [fetchImages, isInitialLoad]);

  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setIsInitialLoad(false);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (id) => {
    const clickedImage = images.find((image) => image.id === id);
    if (clickedImage) {
      setLargeImageUrl(clickedImage.largeImageURL);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={css.mainContainer}>
      <div className={css.searchContainer}>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery images={images} onItemClick={handleImageClick} />
        {loading && <Loader />}
        {!isInitialLoad && !!images.length && !loading && (
          <Button onClick={handleLoadMore}>Load more</Button>
        )}
        {showModal && (
          <Modal largeImageUrl={largeImageUrl} alt="Large Image" onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
};

export default App;
