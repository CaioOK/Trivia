import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import loginReducer from './loginReducer';
import answerReducer from './answersReducer';

const rootReducer = combineReducers({
  questionsReducer,
  loginReducer,
  answerReducer,
});

export default rootReducer;
