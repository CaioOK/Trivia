import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: '',
  name: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email: action.payload.gravatarEmail,
      name: action.payload.name,
    };
  default:
    return state;
  }
}

export default loginReducer;
