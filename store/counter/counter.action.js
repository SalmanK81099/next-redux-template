import { COUNTER_ACTION_TYPES } from './counter.types';

export const createAction = (type, payload) => ({ type, payload });

export const increment = () => createAction(COUNTER_ACTION_TYPES.INCREMENT);

export const decrement = () => createAction(COUNTER_ACTION_TYPES.DECREMENT);

export const setCount = (number) =>
  createAction(COUNTER_ACTION_TYPES.SET_COUNT, number);

export const resetCount = () => createAction(COUNTER_ACTION_TYPES.RESET_COUNT);

export const setCountStart = () =>
  createAction(COUNTER_ACTION_TYPES.SET_COUNT_START);
export const setCountSuccess = (number) =>
  createAction(COUNTER_ACTION_TYPES.SET_COUNT_SUCCESS, number);
export const setCountFailure = (error) =>
  createAction(COUNTER_ACTION_TYPES.SET_COUNT_FAILURE, error);

//create a fake api call
const fakeApiCall = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number > 0) {
        resolve(number);
      } else {
        reject('Number must be greater than 0');
      }
    }, 2000);
  });
};

export const setCountStartAsync = (number) => {
  return async (dispatch) => {
    dispatch(setCountStart());
    try {
      const res = await fakeApiCall(number);

      dispatch(setCountSuccess(res));
    } catch (error) {
      dispatch(setCountFailure(error));
    }
  };
};
