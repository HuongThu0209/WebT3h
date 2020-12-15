import { combineReducers } from 'redux';
import counterReducer from './counter/reducer';
import { movieReducer } from './movie/reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const configMoviePersist = {
  key: 'MoviePersist',
  storage,
  whitelist: ['movies'],
};

const rootReducer = combineReducers({
  counter: counterReducer,
  movie: persistReducer(configMoviePersist, movieReducer),
});

export default rootReducer;
