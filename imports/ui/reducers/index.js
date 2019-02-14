import { combineReducers } from 'redux';
import LoaderReducer from './loader';

const rootReducer = combineReducers({
  loader: LoaderReducer,
});

export default rootReducer;
