import { combineReducers } from 'redux';
import authReduser from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import postReduser from './postReduser';

export default combineReducers({
  auth: authReduser,
  errors: errorReducer,
  profile: profileReducer,
  post: postReduser
});
