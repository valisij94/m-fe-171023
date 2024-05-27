import { productActionTypes } from "../actions/productsActions";

const initialState = {
  products: [],
  isFetching: false,
  error: ''
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productActionTypes.START_REQUEST: {
      return { ...state, isFetching: true };
    }
    case productActionTypes.FINISH_REQUEST: {
      return {
        ...state,
        products: action.payload,
        isFetching: false,
        error: ''
      }
    }
    case productActionTypes.ERROR_REQUEST: {
      return {
        ...state,
        error: action.error,
        isFetching: false
      }
    }
    default: return state;
  }
}