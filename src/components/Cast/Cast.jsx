import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCastReq } from 'services/api';
import defaultImg from '../../assets/defaultImage1.jpg';
import s from './Cast.module.css';
import { useLang } from 'hooks/useInterface';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { language } = useLang();
  const { movieId } = useParams();
  // console.log('movieId', movieId);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await getMovieCastReq(movieId, language);
        // console.log('data', data);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieCast();
  }, [movieId, language]);

  return (
    <ul className={s.cast}>
      {cast.map(item => (
        <li key={item.id} className={s.item}>
          <img
            src={
              item.profile_path
                ? `https://image.tmdb.org/t/p/w200/${item.profile_path}`
                : defaultImg
            }
            width="100"
            alt={item.name}
          />
          <p>
            {item.name ?? item.original_name} - {item.character || 'character'}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
