import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, List } from 'semantic-ui-react';
import axios from 'axios';

const genreOptions = [
  { key: 'h', text: 'Horror', value: 'horror' },
  { key: 'a', text: 'Action', value: 'action' },
  { key: 'd', text: 'Drama', value: 'drama' },
  { key: 'c', text: 'Comedy', value: 'comedy' },
];

const ratingOptions = [
  { key: '1', text: '5', value: '5' },
  { key: '2', text: '4', value: '4' },
  { key: '3', text: '3', value: '3' },
  { key: '4', text: '2', value: '2' },
  { key: '5', text: '1', value: '1' },
];

export default class MovieForm extends Component {
  state = {
    actors: [],
    actor: '',
    title: '', 
    year: '',
    rating: '',
    genre: '',
  }

  handleChange = (e, { value }) => this.setState({ value })

  handleAddActor = (e) => {
    const { actor, actors } = this.state;
    actor && this.setState({
      actors: [...actors, actor],
      actor: '',
    });
  }

  handleChange = (e, data) => {
    const { value, placeholder } = data;
    const type = placeholder.toLowerCase();
    const isNumber = (string) => /^\d+$/.test(string);
    if (type === 'year' && value.length){
      if (value.length > 4 || !isNumber(value)){
        return;
      } 
    }
    this.setState({ [type]: value });
  }

  handleSubmit = () => {
    const { actors, title, year, genre, rating } = this.state;
    const movieInfo = { actors, title, year, genre, rating };
    console.log('movieInfo: ', movieInfo);
    axios.post('/api/addMovie', { movieInfo } )
    .then(() => { console.log('Successfully added movie') })
    .catch((e) => { console.error('Error adding note!') });
  }

  render() {
    const { value } = this.state
    return (
      <div>
      <List>
        { 
          this.state.actors.map((actor, i) => (
            <List.Item key={i}>{actor}</List.Item>
          )) 
        }
      </List>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field control={Input} label='Title' placeholder='Title' value={this.state.title} onChange={this.handleChange} />
          <Form.Field control={Input} label='Year' placeholder='Year' value={this.state.year} onChange={this.handleChange} />
          <Form.Field control={Select} label='Genre' options={genreOptions} placeholder='Genre' value={this.state.genre} onChange={this.handleChange} />
          <Form.Field control={Select} label='Rating' options={ratingOptions} placeholder='Rating' value={this.state.rating} onChange={this.handleChange} />
          <Form.Field control={Input} label='Actor' placeholder='Actor' value={this.state.actor} onChange={this.handleChange} />
          <Button onClick={this.handleAddActor}>Add Actors</Button>
        </Form.Group>
        <Form.Field control={Button} onClick={this.handleSubmit}>Submit</Form.Field>
      </Form>
        </div>
    )
  }
}