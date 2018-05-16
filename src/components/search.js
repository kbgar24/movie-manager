import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea, List } from 'semantic-ui-react';

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

const data = window.data = [
{
  title: 'The Lion King',
    year: '1994',
      actors: ['Denzel Washington', 'Halle Berry', 'James Dolan', 'Beyonce Knowles', 'Denzel Washington', 'Halle Berry', 'James Dolan', 'Beyonce Knowles'],
        genre: 'Animation',
          rating: 5
},
{
  title: 'The Little Mermaid',
    year: '1996',
      actors: ['Ariel', 'King Tritan', 'Octopus', 'Sebastian'],
        genre: 'Animation',
          rating: 4
},
{
  title: 'Aladdin',
    year: '1992',
      actors: ['Aladdin', 'Jasmine', 'Genie', 'Sultan'],
        genre: 'Animation',
          rating: 3
},
{
  title: 'Beauty and the Beast',
    year: '1989',
      actors: ['Beast', 'Belle', 'Potts', 'Candlestick'],
        genre: 'Animation',
          rating: 1
}
]

export default class Search extends Component {
  state = {
    actors: [],
    actor: '',
    title: '',
    year: '',
    rating: '',
    genre: '',
    results: [],
  }

  handleChange = (e, { value }) => this.setState({ value })

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
    this.setState({ [type]: value }, this.handleSearch);
  }

  handleSearch = () => {
    console.log('handlSearch called!');
    const { title, year, genre, rating, actor } = this.state;
    let results;
    if (title) {
      results = searchByTitle(title);
    } 
    if ()

    function searchByTitle(title){
      const formattedTitle = title.toLowerCase().trim();
      data.filter((movie) => {}
        movie.title.toLowerCase().includes(formattedTitle)
      ));
      return results;
    }

    function searchByYear(year, data) {
      return data.filter((movie) => (
        movie.year === year
      ));
      return results;
    }

    function searchByGenre(genre, data) {
      return data.filter((movie) => (
        movie.genre === genre
      ));
    }

    function searchByRating(rating, data) {
      return data.filter((movie) => (
        movie.rating === rating
      ));

    }

    function searchByActor(actor, data){ 
      return data.filter((movie) => (
        movie.actors.map((actor) => actor.toLowerCase()).includes(actor.toLowerCase().trim())
      ));
    }

    console.log('results: ', results);

    this.setState({results});
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <List>
          {
            this.state.results.map((result, i) => (
              <List.Item key={i}>{result.title}</List.Item>
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
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      </div>
    )
  }
}
