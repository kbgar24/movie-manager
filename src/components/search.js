import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, List } from 'semantic-ui-react';
import _ from 'lodash';

const genreOptions = [
  { key: 'null', text: '', value: '' },
  { key: 'h', text: 'Horror', value: 'horror' },
  { key: 'a', text: 'Action', value: 'action' },
  { key: 'd', text: 'Drama', value: 'drama' },
  { key: 'c', text: 'Comedy', value: 'comedy' },
];

const ratingOptions = [
  { key: 'null', text: '', value: '' },
  { key: '1', text: '5', value: '5' },
  { key: '2', text: '4', value: '4' },
  { key: '3', text: '3', value: '3' },
  { key: '4', text: '2', value: '2' },
  { key: '5', text: '1', value: '1' },
];

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      actors: [],
      actor: '',
      title: '',
      year: '',
      rating: '',
      genre: '',
    }
    this.debouncedHandleChange = this.handleChange
  }
  
  handleAddActor = (e) => {
    const { actor, actors } = this.state;
    actor && this.setState({
      actor: '',
      title: '',
      year: '',
      genre: '',
    });
  }

  handleChange = (e, data) => {
    const { value, placeholder } = data;
    const type = placeholder.toLowerCase();
    const isNumber = (string) => /^\d+$/.test(string);
    if (type === 'year' && value.length) {
      if (value.length > 4 || !isNumber(value)) {
        return;
      }
    }
    console.log('search change!');
    this.setState({ [type]: value }, this.filterVideos);
  }



  filterVideos = () => {
    const { title, year, genre, rating, actor } = this.state;
    const { movies } = this.props;
    const visibleMovies = movies.filter((movie) => {
      if (title && !movie.title.toLowerCase().includes(title.toLowerCase())){
        return false;
      }
      if (year && !movie.year.includes(year)) {
        return false;
      }
      if (genre && movie.genre !== genre) {
        return false;
      }
      if (rating && movie.rating !== rating){
        return false;
      }
      if (actor && !movie.actors.map(char => char.toLowerCase()).some(ch => ch.includes(actor.toLowerCase()))){
        return false;
      }
      return true;
    })
    this.props.updateVisibleMovies(visibleMovies);
     
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Title' placeholder='Title' value={this.state.title} onChange={this.debouncedHandleChange} />
            <Form.Field control={Input} label='Year' placeholder='Year' value={this.state.year} onChange={this.debouncedHandleChange} />
            <Form.Field control={Select} label='Genre' options={genreOptions} placeholder='Genre' value={this.state.genre} onChange={this.debouncedHandleChange} />
            <Form.Field control={Select} label='Rating' options={ratingOptions} placeholder='Rating' value={this.state.rating} onChange={this.debouncedHandleChange} />
            <Form.Field control={Input} label='Actor' placeholder='Actor' value={this.state.actor} onChange={this.debouncedHandleChange} />
          </Form.Group>
        </Form>
      </div>
    )
  }
}
