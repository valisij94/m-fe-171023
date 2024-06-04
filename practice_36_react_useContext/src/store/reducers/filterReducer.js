import { filterActionTypes } from '../actions/filterActions.js';

const initialState = {
  category: ''
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterActionTypes.APPLY_CATEGORY_FILTER: {
      const newFilter = action.payload === 'all' ? '' : action.payload;
      return { ...state, category: newFilter }
    }
    default: return state;
  }
}