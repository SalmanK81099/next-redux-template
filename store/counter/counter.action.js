import { COUNTER_ACTION_TYPES } from './counter.types';

export const createAction = (type, payload) => ({ type, payload });

export const increment = () => createAction(COUNTER_ACTION_TYPES.INCREMENT);

export const decrement = () => createAction(COUNTER_ACTION_TYPES.DECREMENT);

export const setCount = (number) =>
  createAction(COUNTER_ACTION_TYPES.SET_COUNT, number);

export const resetCount = () => createAction(COUNTER_ACTION_TYPES.RESET_COUNT);
