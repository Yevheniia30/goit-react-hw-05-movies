import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize: 40,
        color: '#010101',
      }}
    >
      <Home />
      <Movies />
      <MovieDetails />
      <Cast />
      <Reviews />
    </div>
  );
};
