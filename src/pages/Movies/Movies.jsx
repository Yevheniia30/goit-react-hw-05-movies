import { useState, useEffect } from 'react';
import { getMoviesSearchReq } from 'services/api';
import { MoviesInfo } from 'components/MoviesInfo';
import { useSearchParams } from 'react-router-dom';
import { useLang } from 'hooks/useInterface';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(null);
  // const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const { language } = useLang();

  // console.log('searchParams', searchParams);
  // console.log('useParams', useParams());

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      setNotFound(null);
      setError(null);
      try {
        const data = await getMoviesSearchReq(query, language);
        // console.log('movies page data', data);
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
  }, [query, language]);

  const handleSubmit = query => {
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

export default Movies;
