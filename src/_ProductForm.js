import React, { Component } from 'react';

const _ProductForm = ({ createProduct, onNameChange, name })=> (
  <form onSubmit={ createProduct }>
    <div className='form-group'>
    <input className='form-control' value={ name } onChange={ onNameChange }/>
    </div>
    {
      !name ? (
        <button className='btn btn-primary' disabled='disabled'>Save</button>
      ): (
        <button className='btn btn-primary'>Save</button>
      )
    }
  </form>
);

export default _ProductForm;
