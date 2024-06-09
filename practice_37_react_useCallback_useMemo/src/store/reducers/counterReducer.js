import { counterActionTypes } from "../actions/counterActions";

const defaultState = {
  count: 0
}

export const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case counterActionTypes.INCREMENT: {
      return {...state, count: state.count + 1}
    }
    case counterActionTypes.DECREMENT: {
      return {...state, count: state.count - 1}
    }
    default: return state;
  }
}