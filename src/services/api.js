import axios from 'axios';

const key = 'c4360f2fc66490777a6befee451fce21';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org',
});

export const getMoviesReq = async () => {
  const { data } = await instance.get(`/3/trending/movie/day?api_key=${key}`);
  // console.log('data', data);
  return data.results;
};

export const getMovieByIdReq = async id => {
  const { data } = await instance.get(`/3/movie/${id}?api_key=${key}`);
  // console.log('data mivie by id', data);
  return data;
};

export const getMoviesSearchReq = async search => {
  const { data } = await instance.get(
    `/3/search/movie?query=${search}&api_key=${key}`
  );
  // console.log('data', data);
  return data.results;
};

export const getMovieCastReq = async id => {
  const { data } = await instance.get(`/3/movie/${id}/credits?api_key=${key}`);
  // console.log('data', data);
  return data.cast;
};

export const getMovieReviewsReq = async id => {
  const { data } = await instance.get(`/3/movie/${id}/reviews?api_key=${key}`);
  // console.log('data', data);
  return data.results;
};
