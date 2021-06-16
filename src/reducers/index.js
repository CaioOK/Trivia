import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  questionsReducer,
  loginReducer,
});

export default rootReducer;
