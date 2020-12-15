import * as types from './type';

const initialState = {
  loading: null,
  movies: [],
  error: null,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_SEARCH:
      return { ...state, loading: action.loading };
    case types.CANCEL_SEARCH:
      return { ...state, loading: action.loading };
    case types.SEARCH_SUCCESS:
      return { ...state, movies: action.data, error: null };
    case types.SEARCH_FAIL:
      return { ...state, movies: [], error: action.error };
    default:
      return state;
  }
};
