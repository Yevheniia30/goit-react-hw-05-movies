import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviewsReq } from 'services/api';
// import defaultImg from '../../assets/defaultImage1.jpg';
// import PropTypes from 'prop-types';
import s from './Reviews.module.css';

export const Reviews = props => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  console.log('movieId', movieId);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const data = await getMovieReviewsReq(movieId);
        console.log('data', data);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieReviews();
  }, [movieId]);

  return (
    <ul className={s.cast}>
      {reviews.map(item => (
        <li key={item.id}>
          <p>Author: {item.author}</p>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};

Reviews.propTypes = {};
