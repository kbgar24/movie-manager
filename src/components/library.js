import React, { Component } from 'react'
import { Card, Icon, Image, Dropdown } from 'semantic-ui-react'
import axios from 'axios';
import Search from './search';


const cardContainer = {
  // display: 'flex',
  // flexWrap: 'wrap',
  // justifyContent: 'center',
};

const cardCSS = {
  display: 'inline-block',
  margin: '40px',
}

const starStyle = {
  right: '15px',
  position: 'absolute',
  marginTop: '-25px',
}




export default class Library extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: props.movies,
      visibleMovies: props.movies,
      sortBy: 'TITLE',
      order: 1,
      showSearch: false,
    }
 
  }

  componentDidMount(){
    this.props.getMovies();
  }

  static getDerivedStateFromProps = ({movies, showSearch}, prevState) => ({ 
    ...prevState,
    movies,
    visibleMovies: movies,
    showSearch,
  })

  updateVisibleMovies = (visibleMovies) => {
    this.setState({ visibleMovies })
  }

  handleDelete = (_id) => {
    this.props.deleteMovie(_id);
  }

  handleChange = (e, {placeholder, value}) => {
    if (placeholder === 'Sort By'){
      this.setState({ sortBy: value }, this.handleSort)
    } else {
      this.setState({ order: value }, this.handleSort)
    }
  }

  handleSort = () => {
    const { sortBy, order } = this.state;
    this.props.sortBy(sortBy, order);
  }

  render() {
    return (
      <div>
        <div>
          <h1 className='pageHeader'>{ this.state.showSearch ? 'Advanced Search' : 'Library'} </h1>
        </div>
        <div className='seperatorDiv'></div>
        <div>
          { this.state.showSearch && <Search updateVisibleMovies={this.updateVisibleMovies} movies={this.state.movies}/> }
        </div>
        <div className='cardContainer'>

        { this.state.visibleMovies.map((movie, i) => (
          <Card key={i} style={cardCSS}>
            <span onClick={(e) => { this.handleDelete(movie._id) }}>x</span>
            <Image style={{ height: '300px', width: '200px', margin: '0px auto' }} src={ movie.imageUrl } />
            <Card.Content>
              <Card.Header>
                {movie.title}
                <div style={starStyle}>
                  {
                    Array(Number(movie.rating)).fill().map((e, i) => (
                      <Image key={i} style={{ height: '15px', width: '15px', margin: '0px auto' }} src='https://cdn2.iconfinder.com/data/icons/august/PNG/Star%20Gold.png' />
                    ))
                  }
                </div>

              </Card.Header>
              <Card.Meta>
                {movie.year}
                <Image style={{ height: '18px', display: 'block' }} src={`/assets/img/${movie.mpaa}.png`} />
              
              </Card.Meta>
              <Card.Description>
                <p><strong>Genre: </strong>{movie.genre}</p>
                <strong>Starring: </strong>
                <p className='actorParagraph'>
                  { 
                    movie.actors.join(', ')
                  }
                </p>
        </Card.Description>
            </Card.Content>
            <Card.Content extra>
            </Card.Content>
          </Card>
      ))}
        </div>
      
      </div>
    )
  }
}
