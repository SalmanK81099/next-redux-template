import axios from 'axios';
import { PRODUCT_ACTION_TYPES } from './products.types';

export const fetchProductsStart = () => ({
  type: PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = (products) => ({
  type: PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: PRODUCT_ACTION_TYPES.FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProductsStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchProductsStart());

    try {
      const { data, status } = await axios.get(
        'https://fakestoreapi.com/products'
      );

      dispatch(fetchProductsSuccess(data));
    } catch (error) {
      dispatch(fetchProductsFailure(error));
    }
  };
};
