import { NavLink } from 'react-router-dom';

// import PropTypes from 'prop-types';
import s from './Navigation.module.css';
import { routes } from 'routes';

export const Navigation = () => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink
          to={routes.home}
          className={({ isActive }) =>
            isActive ? s.active + ' ' + s.navlink : s.navlink
          }
        >
          Home
        </NavLink>
        <NavLink
          to={routes.movies}
          className={({ isActive }) =>
            isActive ? s.active + ' ' + s.navlink : s.navlink
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

// Navigation.propTypes = {};
