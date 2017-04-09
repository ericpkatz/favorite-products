import React, { Component} from 'react';

export default class App extends Component{
  constructor(props){
    super();
    this.specialNumber = props.specialNumber; 
  }
  render(){
    return (
      <div className='container'>
        <h1>Acme</h1>
        { this.props.children }
      </div> 
    );
  }
}
