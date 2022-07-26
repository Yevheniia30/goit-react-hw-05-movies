import { Route, Routes } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
// import { Cast } from 'components/Cast';
// import { Reviews } from 'components/Reviews';
import { routes } from 'routes';
import { Navigation } from 'components/Navigation';
import { NotFound } from 'pages/NotFound';
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
        backgroundColor: '#162133',
        color: '#cacaca',
        padding: '0 20px',
      }}
    >
      {/* <Routes>
        {pagesRoutes.map(({ element, path, exact }) => (
          <Route key={path} path={path} exact={exact} element={element} />
        ))}
      </Routes> */}
      <Navigation />
      <Routes>
        <Route path={routes.home} exact="true" element={<Home />} />
        <Route path={routes.movies} exact="true" element={<Movies />} />
        <Route
          path={routes.moviedetails}
          exact="true"
          element={<MovieDetails />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
