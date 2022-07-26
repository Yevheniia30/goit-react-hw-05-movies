import { NavLink } from 'react-router-dom';

// import PropTypes from 'prop-types';
import s from './Navigation.module.css';
import { routes } from 'routes';
// import { Search } from 'components/Search';

export const Navigation = props => {
  return (
    <header className={s.header}>
      <nav>
        <NavLink
          //   exact
          to={routes.home}
          className={({ isActive }) =>
            isActive ? s.active + ' ' + s.navlink : s.navlink
          }
          //   className={s.navlink}
          //   activeClassName={s.active}
          //   activeClassName={s.active}
        >
          Home
        </NavLink>
        <NavLink
          to={routes.movies}
          className={({ isActive }) =>
            isActive ? s.active + ' ' + s.navlink : s.navlink
          }

          //   className={s.navlink}
          //   activeClassName={s.active}
        >
          Movies
        </NavLink>
      </nav>
      {/* <Search /> */}
    </header>
  );
};

Navigation.propTypes = {};
