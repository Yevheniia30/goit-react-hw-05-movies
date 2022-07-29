// import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesInfo.module.css';
// import { routes } from 'routes';
import { Search } from 'components/Search';
import { MovieItem } from 'components/MovieItem';

export const MoviesInfo = ({ isSearch, handleSubmit, isLoading, movies }) => {
  return (
    <div className={s.mWrapper}>
      {isSearch && <Search onSubmit={handleSubmit} />}

      {isLoading ? (
        <p>isLoading...</p>
      ) : (
        <ul className={s.list}>
          {movies.map(item => (
            <MovieItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

MoviesInfo.propTypes = {
  isSearch: PropTypes.bool,
  handleSubmit: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
