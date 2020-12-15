import { all, call, put } from 'redux-saga/effects';
import { followSearchMovie as movieSaga } from './movie/saga';

export default function* rootSaga() {
  yield all([call(movieSaga)]);
}
