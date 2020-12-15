
import * as types from './type';

export const searchMovie = (name) => ({
  type: types.SEARCH_MOVIE,
  name,
});

export const startSearchMovie = (loading) => ({
  type: types.START_SEARCH,
  loading,
});

export const cancelSearchMovie = (loading) => ({
  type: types.CANCEL_SEARCH,
  loading,
});

export const searchMovieSuccess = (data) => ({
  type: types.SEARCH_SUCCESS,
  data,
});

export const searchMovieFail = (error) => ({
  type: types.SEARCH_FAIL,
  error,
});
