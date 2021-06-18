import { UPDATE_TIMER } from '../actions';

const INITIAL_STATE = {
  timer: 30,
};

const timerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_TIMER:
    return { ...state, timer: state.timer - 1 };
  default:
    return state;
  }
};

export default timerReducer;
