import { COUNTER_ACTION_TYPES } from './counter.types';

const INITIAL_STATE = {
  count: 0,
  loading: false,
  error: false,
};

export const counterReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    // case COUNTER_ACTION_TYPES.INCREMENT:
    //   return {
    //     ...state,
    //     count: state.count + 1,
    //   };
    // case COUNTER_ACTION_TYPES.DECREMENT:
    //   return {
    //     ...state,
    //     count: state.count - 1,
    //   };
    // case COUNTER_ACTION_TYPES.SET_COUNT:
    //   return {
    //     ...state,
    //     count: payload,
    //   };
    // case COUNTER_ACTION_TYPES.RESET_COUNT:
    //   return {
    //     ...state,
    //     count: 0,
    //   };
    case COUNTER_ACTION_TYPES.SET_COUNT_START:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case COUNTER_ACTION_TYPES.SET_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        count: payload,
      };

    case COUNTER_ACTION_TYPES.SET_COUNT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
