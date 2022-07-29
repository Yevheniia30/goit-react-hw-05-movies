import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieItem.module.css';
import { routes } from 'routes';
// import { useMatch } from 'react-router-dom';

export const MovieItem = ({ item }) => {
  return (
    <li className={s.item}>
      <Link to={routes.moviedetails.replace(':movieId', item.id)}>
        <span className={s.title}>{item.title}</span>
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
