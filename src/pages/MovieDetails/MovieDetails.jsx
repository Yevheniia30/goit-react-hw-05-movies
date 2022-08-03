// import PropTypes from 'prop-types';

import s from './MovieDetails.module.css';
import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieByIdReq } from 'services/api';
import { routes } from 'routes';
import { Loader } from 'components/Loader';
import { FaArrowLeft } from 'react-icons/fa';

import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // console.log(movie);
  const location = useLocation();
  // console.log('location', location);

  // console.log('useParams', useParams());
  const { movieId } = useParams();
  // console.log('movieId', movieId);

  useEffect(() => {
    const getMovieById = async () => {
      setIsLoading(true);

      try {
        const data = await getMovieByIdReq(movieId);
        setMovie(data);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };
    getMovieById();
  }, [movieId]);

  const { title, poster_path, vote_average, overview, release_date, genres } =
    movie;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <>
          <p>Something went wrong. try again</p>
          <Link to={routes.home} className={s.go}>
            <span style={{ color: '#000' }}>Go to homepage</span>
          </Link>
        </>
      ) : (
        <div className={s.card}>
          <Link to={location?.state?.from ?? routes.home} className={s.go}>
            <FaArrowLeft />
            Go back
          </Link>
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            width="300"
            alt={title}
          />
          <h3 className={s.mainTitle}>{title}</h3>
          <b>{release_date?.slice(0, 4)}</b>
          <p>User score: {Math.round(vote_average) * 10}%</p>
          <p>
            {genres?.map(item => (
              <span key={item.id}>{item.name?.toLowerCase()} </span>
            ))}
          </p>
          <p className={s.text}>{overview}</p>
          <div className={s.links}>
            <Link
              to={routes.cast}
              state={{ from: location.state?.from }}
              className={s.link}
            >
              <span className={s.title}>Cast</span>
            </Link>
            <Link
              to={routes.reviews}
              state={{ from: location.state?.from }}
              className={s.link}
            >
              <span className={s.title}>Reviews</span>
            </Link>
          </div>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
