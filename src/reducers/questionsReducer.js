import { GET_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  questions: [],
};

const questionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_QUESTIONS:
    return { ...state, questions: action.payload };
  default:
    return state;
  }
};

export default questionsReducer;
