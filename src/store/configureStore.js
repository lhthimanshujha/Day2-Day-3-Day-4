import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../redux/reducers/rootReducer';
import loggerMiddleware from '../redux/middleware/loggerMiddleware';

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );

  return store;
};

export default configureStore;
