import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from './action';
import * as types from './type';
import * as api from '../api/movie';

function* searchMovieSaga({ name }) {
  try {
    yield put(actions.startSearchMovie(true));
    const response = yield call(api.searchMovieByKeywords, name);

    if (response) {
      yield put(actions.searchMovieSuccess(response));
    } else {
      yield put(
        actions.searchMovieFail({
          code: 404,
          message: 'not found',
        })
      );
    }
  } catch (e) {
    yield put(actions.searchMovieFail(e));
  } finally {
    yield put(actions.cancelSearchMovie(false));
  }
}

export function* followSearchMovie() {
  yield takeLatest(types.SEARCH_MOVIE, searchMovieSaga);
}
