// import s from './Movies.module.css';
// import { useMatch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesSearchReq } from 'services/api';
// import { Search } from 'components/Search';
// import { Link } from 'react-router-dom';
// import { routes } from 'routes';
import { MoviesInfo } from 'components/MoviesInfo';

// import React from 'react';
// import PropTypes from 'prop-types';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  // console.log('usematch', useMatch());

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getMoviesSearchReq(search);
        console.log('movies page data', data);
        setMovies(data);
      } catch (error) {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    };
    if (search) {
      getMovies();
    }
  }, [search]);

  const handleSubmit = data => {
    console.log('data', data);
    setSearch(data);
  };

  return (
    <MoviesInfo
      isSearch={true}
      handleSubmit={handleSubmit}
      movies={movies}
      isLoading={isLoading}
    />
  );
};
