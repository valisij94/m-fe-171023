
export const counterActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export const incrementAction = () => {
  return {
    type: counterActionTypes.INCREMENT
  };
};

export const decrementAction = () => {
  return {
    type: counterActionTypes.DECREMENT
  };
};