import s from './Movies.module.css';

import { useState, useEffect } from 'react';
import { getMoviesReq, getMoviesSearchReq } from 'services/api';
import { Search } from 'components/Search';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

// import React from 'react';
// import PropTypes from 'prop-types';

export const Movies = props => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  // useEffect(() => {
  //   const getMovies = async () => {
  //     setIsLoading(true);
  //     try {
  //       const data = await getMoviesReq();
  //       console.log('movies page data', data);
  //       setMovies(data);
  //     } catch (error) {
  //       console.log('error');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getMovies();
  // }, []);

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
    <div className={s.mWrapper}>
      <Search onSubmit={handleSubmit} />
      {isLoading ? (
        <p>isLoading...</p>
      ) : (
        <ul className={s.list}>
          {movies.map(item => (
            <li key={item.id} className={s.item}>
              <Link to={routes.moviedetails.replace(':movieId', item.id)}>
                <span className={s.title}>{item.title}</span>
              </Link>

              {/* <img src={ } /> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Movies.propTypes = {};
