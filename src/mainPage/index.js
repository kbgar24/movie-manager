import React, { Component } from 'react';
import MovieForm from '../movieForm';

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.state); 
    return (
      <div>
        <div>Hello World</div>
        <MovieForm />
      </div>
    );
  }
}
