import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// import AddFilmModal from './addFilmModal';

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item header>Homeflix</Menu.Item>
        <Link to='/'>
          <Menu.Item name='library' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
        </Link>
        <Link to='/addFilm'>
          <Menu.Item name='addFilm' active={activeItem === 'addFilm'} onClick={this.handleItemClick} />
        </Link>
        <Link to='/advancedSearch'>
          <Menu.Item name='advancedSearch' active={activeItem === 'advancedSearch'} onClick={this.handleItemClick} />
        </Link>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
