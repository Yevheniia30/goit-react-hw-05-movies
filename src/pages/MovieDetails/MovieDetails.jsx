import s from './MovieDetails.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieByIdReq } from 'services/api';
import defaultImage from '../../assets/defaultImage1.jpg';
// import PropTypes from 'prop-types';

export const MovieDetails = props => {
  const [movie, setMovie] = useState({});

  console.log(movie);

  console.log('useParams', useParams());
  const id = useParams().movieId;
  console.log('id', id);

  useEffect(() => {
    console.log('useefrct');

    const getMovieById = async () => {
      try {
        const data = await getMovieByIdReq(id);
        setMovie(data);
      } catch (error) {
        console.log('error', error);
      }
    };
    getMovieById();
  }, [id]);

  const { title, poster_path, overview, release_date, genres } = movie;

  const genresStr = genres?.map(({ name }) => {
    let name1 = '';
    name1 += name;
    return name1;
  });

  console.log('genresStr', genresStr);

  return (
    <div className={s.card}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300/${poster_path}`
            : defaultImage
        }
        alt=""
      />
      <h3>{title}</h3>
      <b>{release_date?.slice(0, 4)}</b>
      <p>
        {genresStr?.map(item => (
          <span>{item?.toLowerCase()} </span>
        ))}
      </p>
      <p>{overview}</p>
    </div>
  );
};

MovieDetails.propTypes = {};
