import { ADD_ANSWER } from '../actions';

const INITIAL_STATE = {
  answer: 0,
};

function answerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ADD_ANSWER:
    return {
      ...state,
      answer: action.payload + state.answer,
    };
  default:
    return state;
  }
}

export default answerReducer;
