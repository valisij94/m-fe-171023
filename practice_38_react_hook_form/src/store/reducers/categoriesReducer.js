import { categoriesActionTypes } from "../actions/categoriesActions";

const initialState = {
  categories: [],
  error: '',
  isFetching: false
}

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoriesActionTypes.START_REQUEST : {
      return { ...state, isFetching: true };
    }
    case categoriesActionTypes.FINISH_REQUEST: {
      return { ...state, categories: action.payload, isFetching: false }
    }
    case categoriesActionTypes.ERROR_REQUEST: {
      return { ...state, error: action.error }
    }
    default: return state;
  }
}