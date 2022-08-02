import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieItem.module.css';
import { routes } from 'routes';
import { useLocation } from 'react-router-dom';
// import {
//   useMatch,
//   useLocation,
//   useSearchParams,
//   useParams,
// } from 'react-router-dom';

export const MovieItem = ({ item }) => {
  // const { pathname } = useLocation();
  // const { movieId } = useParams();
  // console.log('useSearchParams', useSearchParams());

  console.log('useLocation()', useLocation());
  const location = useLocation();

  return (
    <li className={s.item}>
      <Link
        to={routes.moviedetails.replace(':movieId', item.id)}
        state={{ from: location }}
      >
        {/* <Link to={`${pathname}/movies/${movieId}`}> */}
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
