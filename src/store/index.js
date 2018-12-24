import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '@/redux';
import { apiMiddleware } from 'redux-api-middleware';

const middlwares = [thunkMiddleware, apiMiddleware];

export default function configureStore() {
  return createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware.apply(this, middlwares),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
