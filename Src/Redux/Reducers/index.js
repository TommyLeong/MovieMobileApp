import {combineReducers} from 'redux';
import configureStore from '../CreateStore';
import generalReducer from './GeneralReducer';

export const reducers = combineReducers({
  general: generalReducer,
});

export default () => {
  const {store} = configureStore(reducers);

  return store;
};
