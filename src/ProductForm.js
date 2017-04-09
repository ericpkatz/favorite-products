import React, { Component } from 'react';
import { createProduct } from './actions';
import { connect } from 'react-redux';
import _ProductForm from './_ProductForm';

class ProductForm extends Component{
  constructor(){
    super();
    this.state = { name: ''};
    this.onNameChange = this.onNameChange.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }
  createProduct(ev){
    ev.preventDefault();
    this.props.createProduct(this.state)
      .then(()=> this.setState({ name: ''}));
  }
  onNameChange(ev){
    this.setState({ name: ev.target.value });
  }
  render(){
    return (
      <_ProductForm createProduct={ this.createProduct} name={ this.state.name } onNameChange={ this.onNameChange } /> 
    );
  }
};

const mapDispatchToProps = ( dispatch ) =>(
  {
    createProduct: (product)=> dispatch(createProduct(product))
  }
);
export default connect(null, mapDispatchToProps)(ProductForm);
