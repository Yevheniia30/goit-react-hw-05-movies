import { useState, useEffect } from 'react';
import { getMoviesSearchReq } from 'services/api';
import { MoviesInfo } from 'components/MoviesInfo';
import { useSearchParams, useParams } from 'react-router-dom';

export const Movies = props => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(null);
  // const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  // console.log('matchPath', matchPath);
  // console.log('useLocation', useLocation());
  // const { pathname } = useLocation();
  console.log('searchParams', searchParams);
  console.log('useParams', useParams());

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      setNotFound(null);
      setError(null);
      try {
        const data = await getMoviesSearchReq(query);
        console.log('movies page data', data);
        if (!data.length) {
          setNotFound(`No movies found for ${query}`);
        } else setMovies(data);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };
    if (query) {
      getMovies();
    }
  }, [query]);

  const handleSubmit = query => {
    if (query === '') {
      return;
    }
    // console.log('data', data);
    // setSearch(query);
    setSearchParams({ query });
  };

  return (
    <MoviesInfo
      isSearch={true}
      handleSubmit={handleSubmit}
      movies={movies}
      isLoading={isLoading}
      error={error}
      notFound={notFound}
    />
  );
};
