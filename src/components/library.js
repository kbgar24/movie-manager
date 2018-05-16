import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import axios from 'axios';



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
 
  }

  componentDidMount(){
    this.props.getMovies();
  }

  render() {
    return (
      <div style={cardContainer}>
        { this.props.movies.map((movie, i) => (
          <Card key={i} style={cardCSS}>
            <Image style={{ height: '300px', width: '200px', margin: '0px auto' }} src='https://ia.media-imdb.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL_.jpg' />
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
              </Card.Meta>
              <Card.Description>
                <p><strong>Genre: </strong>{movie.genre}</p>
                <strong>Starring: </strong>
                <p style={{  }}>
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
    )
  }
}
