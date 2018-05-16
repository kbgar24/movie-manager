import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const data = [
  {
    title: 'The Lion King',
    year: '1994',
    actors: ['Simba', 'Mufasa', 'Nala', 'Scar'],
    genre: 'Animation',
    rating: 5
  },
  {
    title: 'The Lion King',
    year: '1994',
    actors: ['Simba', 'Mufasa', 'Nala', 'Scar'],
    genre: 'Animation',
    rating: 4
  },
  {
    title: 'The Lion King',
    year: '1994',
    actors: ['Simba', 'Mufasa', 'Nala', 'Scar'],
    genre: 'Animation',
    rating: 3
  },
  {
    title: 'The Lion King',
    year: '1994',
    actors: ['Simba', 'Mufasa', 'Nala', 'Scar'],
    genre: 'Animation',
    rating: 1
  }
]

const cardContainer = {
  // display: 'flex',
  // flexWrap: 'wrap',
  // justifyContent: 'center',
};

const cardCSS = {
  display: 'inline-block',
  margin: '40px',
}

export default class Library extends Component {
  state = { }

  render() {
    return (
      <div style={cardContainer}>
        { data.map((movie, i) => (
          <Card key={i} style={cardCSS}>
            <Image style={{ height: '300px', width: '200px', margin: '0px auto' }} src='https://ia.media-imdb.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_UX182_CR0,0,182,268_AL_.jpg' />
            <Card.Content>
              <Card.Header>
                {movie.title}
              </Card.Header>
              <Card.Meta>
                {movie.year}
                <br/>
                {
                  Array(Number(movie.rating)).fill().map((e, i) => (
                    <Image key={i} style={{ height: '15px', width: '15px', margin: '0px auto' }} src='https://cdn2.iconfinder.com/data/icons/august/PNG/Star%20Gold.png' />
                  ))
                }
              </Card.Meta>
              <Card.Description>
                { 
                  movie.actors.map((actor, i) => (
                    <div key={i}>{actor}</div>
                  ))
                }
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
