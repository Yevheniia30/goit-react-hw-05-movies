// import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesInfo.module.css';
// import { routes } from 'routes';
import { Search } from 'components/Search';
import { MovieItem } from 'components/MovieItem';
import { Loader } from 'components/Loader';

export const MoviesInfo = ({
  isSearch,
  isHome,
  handleSubmit,
  isLoading,
  movies,
  error,
  notFound,
}) => {
  return (
    <div className={s.mWrapper}>
      {isSearch && <Search onSubmit={handleSubmit} />}
      {isHome && <h2>Trending today</h2>}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>Something went wrong, try again</p>
      ) : notFound ? (
        <p>{notFound}</p>
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
