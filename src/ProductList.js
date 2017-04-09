import React from 'react';
import { connect } from 'react-redux';
import { destroyProduct, setFavoriteProduct, unsetFavoriteProduct } from './actions';

const ProductList = ({ products, destroyProduct, favoriteProduct, setFavoriteProduct, unsetFavoriteProduct })=> (
    <ul className='list-group'>
    {
      products.map( product => {
        return (
          <li className='list-group-item' key={ product.id}>
            { product.name }
            {
              favoriteProduct.id === product.id ? (
                <button onClick={ ()=> unsetFavoriteProduct(product)} className='btn btn-success pull-right'>Unset Favorite</button>
              ):(
                <div>
                  <button onClick={ ()=> setFavoriteProduct(product)} className='btn btn-primary pull-right'>Set As Favorite</button>
                  <button onClick={ ()=> destroyProduct(product)} className='btn btn-danger pull-right'>x</button>
                </div>
              )
            }
            <br style={{ clear: 'both'}} />
          </li>
        );
      })
    }
    </ul>
);

const mapDispatchToProps = (dispatch)=> (
  {
    destroyProduct: (product)=> dispatch(destroyProduct(product)),
    setFavoriteProduct: (product)=> dispatch(setFavoriteProduct(product)),
    unsetFavoriteProduct: ()=> dispatch(unsetFavoriteProduct()),
  }
);

const mapStateToProps = (state)=> (
  {
    products: state.products,
    favoriteProduct: state.favoriteProduct
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
