import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item header>Homeflix</Menu.Item>
        <Menu.Item name='library' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
        <Menu.Item name='addFilm' active={activeItem === 'addFilm'} onClick={this.handleItemClick} />
        <Menu.Item name='recentlyAdded' active={activeItem === 'recentlyAdded'} onClick={this.handleItemClick} />
        <Menu.Item name='advancedSearch' active={activeItem === 'advancedSearch'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          {/* <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} /> */}
        </Menu.Menu>
      </Menu>
    )
  }
}
