import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import axios from 'axios';
import { handleRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';
import { userReducer } from './reducers/authReducer';

axios.defaults.withCredentials = true;

export const configureStore = () => {
  const { requestsReducer, requestsSagas } = handleRequests({
    driver: createDriver(
      axios.create({
        baseURL: 'http://localhost:8000',
      }),
    ),
  });

  const reducers = combineReducers({
    requests: requestsReducer,
    user: userReducer
  });

  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  );

  function* rootSaga() {
    yield all(requestsSagas);
  }

  sagaMiddleware.run(rootSaga);
  return store;
};
