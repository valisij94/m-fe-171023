export const categoriesActionTypes = {
  START_REQUEST: `CATEGORIES/START_REQUEST`,
  FINISH_REQUEST: `CATEGORIES/FINISH_REQUEST`,
  ERROR_REQUEST: `CATEGORIES/ERROR_REQUEST`
}

export const requestCategoriesAction = () => {
  return async (dispatch) => {
    try {
      dispatch( startCategoriesRequestAction() );
      const response = await fetch('https://dummyjson.com/products/categories');
      const categories = await response.json();
      dispatch( finishCategoriesRequestAction(categories) );
    }
    catch (error) {
      dispatch( errorCategoriesRequestAction(error) );
    }
  }
}

export const startCategoriesRequestAction = () => {
  return {
    type: categoriesActionTypes.START_REQUEST
  }
}

export const finishCategoriesRequestAction = ( payload ) => {
  return {
    type: categoriesActionTypes.FINISH_REQUEST,
    payload
  };
}

export const errorCategoriesRequestAction = ( error ) => {
  return {
    type: categoriesActionTypes.ERROR_REQUEST,
    error
  };
}
