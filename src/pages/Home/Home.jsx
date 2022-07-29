import { useState, useEffect } from 'react';
import { getMoviesReq } from 'services/api';
import { MoviesInfo } from 'components/MoviesInfo';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getMoviesReq();
        console.log('movies page data', data);
        setMovies(data);
      } catch (error) {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return <MoviesInfo movies={movies} isLoading={isLoading} />;
};
