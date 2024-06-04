export const productActionTypes = {
  START_REQUEST: `PRODUCTS/START_REQUEST`,
  FINISH_REQUEST: `PRODUCTS/FINISH_REQUEST`,
  ERROR_REQUEST: `PRODUCTS/ERROR_REQUEST`
}

export const startProductsRequestAction = () => {
  return {
    type: productActionTypes.START_REQUEST
  };
}

export const finishProductsRequestAction = ( payload ) => {
  return {
    type: productActionTypes.FINISH_REQUEST,
    payload
  };
}

export const errorProductsRequestAction = ( error ) => {
  return {
    type: productActionTypes.ERROR_REQUEST,
    error
  };
}
