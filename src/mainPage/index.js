import React, { Component } from 'react';
import MovieForm from '../movieForm';
import Library from '../library';
import Search from '../search';

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.state); 
    return (
      <div>
        {/* <MovieForm /> */}
        <hr/>
        {/* <Library /> */}
        <Search />
      </div>
    );
  }
}
