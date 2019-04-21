import { combineReducers } from 'redux';
import authReduser from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReduser,
  errors: errorReducer
});
