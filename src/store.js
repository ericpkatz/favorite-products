import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { LOAD_PRODUCTS_SUCCESS, DESTROY_PRODUCT_SUCCESS, CREATE_PRODUCT_SUCCESS } from './constants';

const productsReducer = (state=[], action)=> {
  switch(action.type){
    case LOAD_PRODUCTS_SUCCESS:
      state = action.products;
      break;
    case DESTROY_PRODUCT_SUCCESS:
      state = state.filter(product=> product.id != action.product.id);
      break;
    case CREATE_PRODUCT_SUCCESS:
      state = state.concat([action.product]);
      break;
  }
  return state;
};

const combined = combineReducers({
  products: productsReducer
});

const store = createStore(combined, applyMiddleware(thunk));

const loadProductsSuccess = (products)=> ({
  type: LOAD_PRODUCTS_SUCCESS,
  products: products
});

const destroyProductSuccess = (product)=> ({
  type: DESTROY_PRODUCT_SUCCESS,
  product: product
});

const createProductSuccess = (product)=> ({
  type: CREATE_PRODUCT_SUCCESS,
  product: product
});

const loadProducts = ()=> {
  return (dispatch)=> {
    return axios.get('/api/products')
      .then(response => dispatch(loadProductsSuccess(response.data)));
  };
};

const destroyProduct = (product)=> {
  return (dispatch)=> {
    return axios.delete(`/api/products/${product.id}`)
      .then(response => dispatch(destroyProductSuccess(product)));
  };
};

const createProduct = (product)=> {
  return (dispatch)=> {
    return axios.post(`/api/products/`, product)
      .then(response => dispatch(createProductSuccess(response.data)));
  };
};

export { destroyProduct, createProduct };

store.dispatch(loadProducts());

export default store;
