import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, List } from 'semantic-ui-react';
import { genreOptions, mpaaRatingOptions, ratingOptions } from '../config';

export default class Search extends Component {
  
  state = {
    actors: [],
    actor: '',
    title: '',
    year: '',
    rating: '',
    genre: '',
    mpaa: '',
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
    this.setState({ [type]: value }, this.filterVideos);
  }

  filterVideos = () => {
    const { title, year, genre, rating, actor, mpaa } = this.state;
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
      if (mpaa && movie.mpaa !== mpaa){
        return false;
      }
      if (actor && !movie.actors.map(char => char.toLowerCase()).some(ch => ch.includes(actor.toLowerCase()))){
        return false;
      }
      return true;
    })
    console.log('this.props; ', this.props);
    this.props.updateVisibleMovies(visibleMovies);
  }

  render() {
    const { title, year, actor, genre, rating, mpaa } = this.state
    return (
      <div className='searchBar'>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='Title' placeholder='Title' value={title} onChange={this.handleChange} />
            <Form.Field control={Input} label='Year' placeholder='Year' value={year} onChange={this.handleChange} />
            <Form.Field control={Select} label='Genre' options={genreOptions} placeholder='Genre' value={genre} onChange={this.handleChange} />
            <Form.Field control={Select} label='Rating' options={ratingOptions} placeholder='Rating' value={rating} onChange={this.handleChange} />
            <Form.Field control={Select} label='MPAA' options={mpaaRatingOptions} placeholder='MPAA' value={mpaa} onChange={this.handleChange} />
            <Form.Field control={Input} label='Actor' placeholder='Actor' value={actor} onChange={this.handleChange} />
          </Form.Group>
        </Form>
      </div>
    )
  }
}
