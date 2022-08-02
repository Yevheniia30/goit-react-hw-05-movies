import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
// import { Cast } from 'components/Cast';
// import { Reviews } from 'components/Reviews';
import { routes } from 'routes';
import { Navigation } from 'components/Navigation';
// import { NotFound } from 'pages/NotFound';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';
// import { pagesRoutes } from 'pages/pagesRoutes';

// console.log('pagesRoutes', pagesRoutes);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101',
        // backgroundColor: '#162133',
        color: '#cacaca',
        padding: '0 20px',
        // height: '100%',
      }}
    >
      <Navigation />
      <Routes>
        <Route path={routes.home} exact="true" element={<Home />} />
        <Route path={routes.movies} exact="true" element={<Movies />} />
        <Route
          path={routes.moviedetails}
          exact="true"
          element={<MovieDetails />}
        >
          <Route path={routes.cast} exact="true" element={<Cast />} />
          <Route path={routes.reviews} exact="true" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to={routes.home} replace />} />
      </Routes>
    </div>
  );
};
