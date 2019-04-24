import { combineReducers } from 'redux';
import authReduser from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  auth: authReduser,
  errors: errorReducer,
  profile: profileReducer
});
