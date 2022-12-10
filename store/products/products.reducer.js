import { PRODUCT_ACTION_TYPES } from './products.types';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export const productReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
