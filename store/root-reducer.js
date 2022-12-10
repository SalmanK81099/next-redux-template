import { combineReducers } from 'redux';
import { counterReducer } from './counter/counter.reducer';
import { productReducer } from './products/products.reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  products: productReducer,
});

export default rootReducer;
