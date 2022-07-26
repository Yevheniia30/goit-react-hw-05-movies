import s from './Movies.module.css';

import { useState, useEffect } from 'react';
import { getMoviesReq } from 'services/api';
import { Search } from 'components/Search';

// import React from 'react';
// import PropTypes from 'prop-types';

export const Movies = props => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getMoviesReq();
        console.log('movies page data', data);
        setMovies(data);
      } catch (error) {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <div className={s.mWrapper}>
      <Search />
      {isLoading ? (
        <p>isLoading...</p>
      ) : (
        <ul className={s.list}>
          {movies.map(item => (
            <li key={item.id} className={s.item}>
              <h4 className={s.title}>{item.title}</h4>

              {/* <img src={ } /> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Movies.propTypes = {};
