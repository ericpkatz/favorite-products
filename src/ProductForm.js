import React, { Component } from 'react';
import { createProduct } from './store';
import { connect } from 'react-redux';

class ProductForm extends Component{
  constructor(){
    super();
    this.state = { name: ''};
    this.onNameChange = this.onNameChange.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }
  createProduct(ev){
    this.props.createProduct(this.state)
      .then(()=> this.setState({ name: ''}));
  }
  onNameChange(ev){
    this.setState({ name: ev.target.value });
  }
  render(){
    return (
      <form onSubmit={ this.createProduct }>
        <div className='form-group'>
        <input className='form-control' value={ this.state.name } onChange={ this.onNameChange }/>
        </div>
        {
          !this.state.name ? (
            <button className='btn btn-primary' disabled='disabled'>Save</button>
          ): (
            <button className='btn btn-primary'>Save</button>
          )
        }
      </form>
    );
  }
};

const mapDispatchToProps = ( dispatch ) =>(
  {
    createProduct: (product)=> dispatch(createProduct(product))
  }
);
export default connect(null, mapDispatchToProps)(ProductForm);
