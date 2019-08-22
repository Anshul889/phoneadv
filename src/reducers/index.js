import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import numberReducer from './numberReducer';

export default combineReducers({
  numbers: numberReducer,
  form: formReducer,
})
