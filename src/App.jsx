import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { routes } from 'routes';
import { Navigation } from 'components/Navigation';
import { Loader } from 'components/Loader';
// import { LangProvider } from 'interfaceContext';
import { useContext } from 'react';
import { InterfaceContext } from 'interfaceContext';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('./components/Cast'));
const Reviews = lazy(() => import('./components/Reviews'));

const StyledApp = styled.div`
  height: 100vw;
  background-color: ${props =>
    props.theme === 'dark' ? '#162133' : '#acaaaa'};

  color: ${props => (props.theme === 'dark' ? '#acaaaa' : '#000')};
`;

// color: #acaaaa;

export const App = () => {
  const { theme } = useContext(InterfaceContext);

  return (
    // <LangProvider>
    <StyledApp theme={theme}>
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
    </StyledApp>
    // </LangProvider>
  );
};
