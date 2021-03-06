import { createSelector } from 'reselect';

const movieSelector = (state) => state.movie;

export const loadingSearch = createSelector(
  movieSelector,
  (item) => item.loading
);

export const getDataMovie = createSelector(
  movieSelector,
  (item) => item.movies.results
);
