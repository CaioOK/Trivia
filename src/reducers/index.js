import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import loginReducer from './loginReducer';
import answerReducer from './answersReducer';
import timerReducer from './timerReducer';

const rootReducer = combineReducers({
  questionsReducer,
  loginReducer,
  answerReducer,
  timerReducer,
});

export default rootReducer;
