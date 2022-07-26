import { routes } from 'routes';
import { Home } from './Home';
import { Movies } from './Movies';
import { MovieDetails } from './MovieDetails';

export const pagesRoutes = [
  { element: Home, exact: true, path: routes.home },
  { element: Movies, exact: false, path: routes.movies },
  { element: MovieDetails, exact: false, path: routes.moviedetails },
];
