import { useState, useEffect } from 'react';
import { getMoviesReq } from 'services/api';
import { MoviesInfo } from 'components/MoviesInfo';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getMoviesReq();
        console.log('movies page data', data);
        setMovies(data);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <MoviesInfo
      isHome={true}
      movies={movies}
      isLoading={isLoading}
      error={error}
    />
  );
};

export default Home;
