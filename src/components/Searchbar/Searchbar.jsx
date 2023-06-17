import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import Search from '../icons/search.png';
import Notiflix from 'notiflix';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === '') {
      Notiflix.Notify.failure('Please enter a search query');
    } else if (query.trim().length < 3) {
      Notiflix.Notify.failure('Search query should be at least 3 characters long');
    } else {
      onSubmit(query);
      setQuery('');
    }
  };

  return (
    <header>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchBtn}>
          <img src={Search} alt="Search Icon" className={css.searchIcon} />
        </button>

        <input
          className={css.searchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
