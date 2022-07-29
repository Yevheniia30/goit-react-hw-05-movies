// import PropTypes from 'prop-types';

import s from './MovieDetails.module.css';
import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieByIdReq } from 'services/api';
// import defaultImage from '../../assets/defaultImage1.jpg';
// import { Cast } from 'components/Cast';
// import { Reviews } from 'components/Reviews';

export const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  console.log(movie);

  console.log('useParams', useParams());
  const { movieId } = useParams();
  console.log('movieId', movieId);

  // console.log('useMatch', useMatch());

  useEffect(() => {
    // console.log('useefrct');

    const getMovieById = async () => {
      setIsLoading(true);

      try {
        const data = await getMovieByIdReq(movieId);
        setMovie(data);
      } catch (error) {
        console.log('error', error);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieById();
  }, [movieId]);

  const { title, poster_path, overview, release_date, genres } = movie;

  const genresStr = genres?.map(({ name }) => {
    let name1 = '';
    name1 += name;
    return name1;
  });

  console.log('genresStr', genresStr);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={s.card}>
          <img
            src={
              // poster_path
              // ?
              `https://image.tmdb.org/t/p/w300/${poster_path}`
              // : defaultImage
            }
            width="300"
            alt={title}
          />
          <h3 className={s.mainTitle}>{title}</h3>
          <b>{release_date?.slice(0, 4)}</b>
          <p>
            {genresStr?.map(item => (
              <span>{item?.toLowerCase()} </span>
            ))}
          </p>
          <p>{overview}</p>
          <div className={s.links}>
            <Link to="cast" className={s.link}>
              <span className={s.title}>Cast</span>
            </Link>
            <Link to="reviews" className={s.link}>
              <span className={s.title}>Reviews</span>
            </Link>
          </div>

          <Outlet />
        </div>
      )}
    </>
  );
};

// MovieDetails.propTypes = {};
