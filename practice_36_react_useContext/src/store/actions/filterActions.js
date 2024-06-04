
export const filterActionTypes = {
  APPLY_CATEGORY_FILTER: 'FILTER/APPLY_CATEGORY_FILTER'
}

export const applyCategoryFilterAction = (payload) => {
  return {
    type: filterActionTypes.APPLY_CATEGORY_FILTER,
    payload
  };
};
