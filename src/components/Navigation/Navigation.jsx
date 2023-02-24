// import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { routes } from 'routes';
import { useLang } from 'hooks/useInterface';
// import { LangContext } from 'langContext';

import LangSwitcher from 'components/LangSwitcher/LangSwitcher';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';
import local from 'local.json';
export const Navigation = () => {
  // const { lang, theme } = useContext(LangContext);
  const { lang, theme } = useLang();
  console.log('lang', lang);

  return (
    <header className={theme === 'light' ? s.light_header : s.header}>
      <nav>
        <NavLink
          to={routes.home}
          className={({ isActive }) =>
            isActive ? s.active + ' ' + s.navlink : s.navlink
          }
        >
          {/* Home */}
          {local.home[lang]}
        </NavLink>
        <NavLink
          to={routes.movies}
          className={({ isActive }) =>
            isActive ? s.active + ' ' + s.navlink : s.navlink
          }
        >
          {/* Movies */}
          {local.movies[lang]}
        </NavLink>
      </nav>
      <div>
        <LangSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
