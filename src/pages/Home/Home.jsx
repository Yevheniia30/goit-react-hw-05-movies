import { useState, useEffect } from 'react';
import { getMoviesReq } from 'services/api';
import { MoviesInfo } from 'components/MoviesInfo';
import { useLang } from 'hooks/useInterface';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { language, lang } = useLang();

  // const language = useMemo(() => {
  //   if (lang === 'ua') return 'uk';
  //   return 'en';
  // }, [lang]);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getMoviesReq(language);
        // console.log('movies page data', data);
        setMovies(data);
      } catch (error) {
        setError({ error });
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [language]);

  return (
    <MoviesInfo
      isHome={true}
      movies={movies}
      isLoading={isLoading}
      error={error}
      lang={lang}
    />
  );
};

export default Home;
