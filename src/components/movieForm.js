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

const mpaaRatingOptions = [
  { key: '1', text: 'G', value: 'G' },
  { key: '2', text: 'PG', value: 'PG' },
  { key: '3', text: 'PG-13', value: 'PG-13' },
  { key: '4', text: 'R', value: 'R' },
  { key: '5', text: 'NC-17', value: 'NC-17' },
  { key: '6', text: 'Unrated', value: 'Unrated' },
  
];

export default class MovieForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      actors: [],
      actor: '',
      title: '',
      year: '',
      rating: '',
      genre: '',
      mpaa: '',
    }
  }


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
    const { actors, title, year, genre, rating, mpaa, actor } = this.state;
    !actors.length && actor && actors.push(actor);
    const movieInfo = { actors, title, year, genre, rating, mpaa };
    console.log('movieInfo: ', movieInfo);
    this.props.addMovie(movieInfo);
    this.setState({
      actor: '',
      title: '',
      rating: '',
      genre: '',
      year: '',
      mpaa: '',
      actors: []
    })
    
  }

  handleDelete = (i) => {
    const { actors } = this.state;
    const newActors = !i ? [] : actors.slice().splice(i, 1);
    this.setState({
      actors: newActors,
    })
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <h1 style={{margin: '20px'}}>Add New Film</h1>
        <div className='addMovieContent'>
      <div className='addMovieForm'>
      <Form size='huge'>
        {/* <Form.Group widths='equal'> */}
          <div>
          <Form.Field control={Input} label='Title' placeholder='Title' value={this.state.title} onChange={this.handleChange} />
          </div>
            <div>
          <Form.Field control={Input} label='Year' placeholder='Year' value={this.state.year} onChange={this.handleChange} />
            </div>
            <div>
          <Form.Field control={Select} label='Genre' options={genreOptions} placeholder='Genre' value={this.state.genre} onChange={this.handleChange} />
            </div>
            <div>
          <Form.Field control={Select} label='Rating' options={ratingOptions} placeholder='Rating' value={this.state.rating} onChange={this.handleChange} />
            </div>
            <div>
          <Form.Field control={Select} label='MPAA' options={mpaaRatingOptions} placeholder='MPAA' value={this.state.mpaa} onChange={this.handleChange} />
            </div>
          <div>
          <Form.Field control={Input} label='Actor' placeholder='Actor' value={this.state.actor} onChange={this.handleChange} />
          <Button onClick={this.handleAddActor} style={{display: 'none'}}></Button>
          </div>
        {/* </Form.Group> */}
        <Form.Field control={Button} onClick={this.handleSubmit}>Submit</Form.Field>
      </Form>
      </div>
      <div className='actorListDiv'>
            <h3>
              Actor List
            </h3>
              <List className='actorList'>
                {
                  this.state.actors.map((actor, i) => (
                    <List.Item 
                      key={i}
                      onClick={() => {this.handleDelete(i)}}
                      style={{ cursor: 'pointer' }}
                    >
                      {actor}
                    </List.Item>
                  ))
                }
              </List>
                </div>
        </div>
      </div>
        
    )
  }
}
