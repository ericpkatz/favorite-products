import axios from 'axios';

import { LOAD_PRODUCTS_SUCCESS, DESTROY_PRODUCT_SUCCESS, CREATE_PRODUCT_SUCCESS, SET_FAVORITE_PRODUCT, UNSET_FAVORITE_PRODUCT } from './constants';

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

const setFavoriteProduct = (product)=> (
  {
    type: SET_FAVORITE_PRODUCT,
    product
  }
);

const unsetFavoriteProduct = (product)=> (
  {
    type: UNSET_FAVORITE_PRODUCT,
  }
);

export { destroyProduct, createProduct, setFavoriteProduct, unsetFavoriteProduct, loadProducts };
