import React from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

const ProductsPage = ({ products, destroyProduct })=> (
  <div className='well'>
    <ProductForm />
    <ProductList />
  </div>
);

export default ProductsPage;

