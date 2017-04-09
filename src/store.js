import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadProducts } from './actions';

import { LOAD_PRODUCTS_SUCCESS, DESTROY_PRODUCT_SUCCESS, CREATE_PRODUCT_SUCCESS, SET_FAVORITE_PRODUCT, UNSET_FAVORITE_PRODUCT } from './constants';

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

const favoriteProductReducer = (state= {}, action)=> {
  switch(action.type){
    case SET_FAVORITE_PRODUCT:
      state = action.product;
      break;
    case UNSET_FAVORITE_PRODUCT:
      state = {};
      break;
  }
  return state;
}

const combined = combineReducers({
  products: productsReducer,
  favoriteProduct: favoriteProductReducer
});

const store = createStore(combined, applyMiddleware(thunk));


store.dispatch(loadProducts());

export default store;
