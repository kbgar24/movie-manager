import React, { Component } from 'react';
import Search from '../search';
import MovieFormContainer from '../containers/movieFormContainer';
import LibraryContainer from '../containers/libraryContainer';

export default class MainPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.state); 
    return (
      <div>
        <MovieFormContainer />
        <hr/>
        <LibraryContainer />
        <Search />
      </div>
    );
  }
}
