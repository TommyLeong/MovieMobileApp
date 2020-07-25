import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';

export default (rootReducer) => {
  const middleware = [];
  const enhancers = [];

  middleware.push(ReduxThunk);
  enhancers.push(applyMiddleware(...middleware));

  const createAppropriateStore = createStore;
  const store = createAppropriateStore(rootReducer, compose(...enhancers));
  console.log(store);

  return {store};
};
