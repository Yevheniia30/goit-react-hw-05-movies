import axios from 'axios';

const key = 'c4360f2fc66490777a6befee451fce21';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org',
});

export const getMoviesReq = async () => {
  const { data } = await instance.get(`/3/trending/movie/day?api_key=${key}`);
  console.log('data', data);
  return data.results;
};
