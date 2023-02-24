import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviewsReq } from 'services/api';
import s from './Reviews.module.css';
import { useLang } from 'hooks/useInterface';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  const { language } = useLang();
  // console.log('movieId', movieId);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const data = await getMovieReviewsReq(movieId, language);
        // console.log('data', data);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieReviews();
  }, [movieId, language]);

  return (
    <>
      {!reviews.length ? (
        <p>This movie has no reviews yet</p>
      ) : (
        <ul className={s.cast}>
          {reviews.map(item => (
            <li key={item.id} className={s.rew}>
              <p>
                <span className={s.name}>{item.author}</span> posted{' '}
                {item.created_at.slice(0, 10)}:
              </p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
