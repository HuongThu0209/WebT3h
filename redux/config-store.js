import { createStore, applyMiddleware } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const configRootPersist = {
  key: 'AppMoviePersist',
  storage,
  whitelist: ['movies'],
};

const rootReducerPersist = persistReducer(configRootPersist, rootReducer);

export const configStore = (loadState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducerPersist,
    loadState,
    applyMiddleware(sagaMiddleware, logger)
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(configStore, { debug: true });
