import axios from 'axios';
import PropTypes from 'prop-types'

const key = 'c4360f2fc66490777a6befee451fce21';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export const getMoviesReq = async () => {
  const { data } = await instance.get(`/trending/movie/day?api_key=${key}`);
  // console.log('data', data);
  return data.results;
};

export const getMovieByIdReq = async id => {
  const { data } = await instance.get(`/movie/${id}?api_key=${key}`);
  // console.log('data mivie by id', data);
  return data;
};

export const getMoviesSearchReq = async query => {
  const { data } = await instance.get(`/search/movie?api_key=${key}`, {
    params: { query },
  });
  // console.log('data', data);
  return data.results;
};

export const getMovieCastReq = async id => {
  const { data } = await instance.get(`/movie/${id}/credits?api_key=${key}`);
  // console.log('data', data);
  return data.cast;
};

export const getMovieReviewsReq = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews?api_key=${key}`);
  // console.log('data', data);
  return data.results;
};

getMovieReviewsReq.propTypes={
  id: PropTypes.func.isRequired
}
