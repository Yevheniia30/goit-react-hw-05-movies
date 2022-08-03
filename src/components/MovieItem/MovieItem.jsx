import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieItem.module.css';
import { routes } from 'routes';
import { useLocation } from 'react-router-dom';

export const MovieItem = ({ item }) => {
  const location = useLocation();

  return (
    <li className={s.item}>
      <Link
        to={routes.moviedetails.replace(':movieId', item.id)}
        state={{ from: location }}
      >
        <span className={s.title}>{item.title ?? item.original_title}</span>
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
