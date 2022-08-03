import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { routes } from 'routes';
import { Navigation } from 'components/Navigation';
import { Loader } from 'components/Loader';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        color: '#cacaca',
        padding: '0 20px',
      }}
    >
      <Navigation />
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </div>
  );
};
