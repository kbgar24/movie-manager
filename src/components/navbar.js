import React, { Component } from 'react'
import { Menu, Input, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// import AddFilmModal from './addFilmModal';
const sortOptions = [
  { key: '1', value: 'TITLE', text: 'Title' },
  { key: '2', value: 'RELEASE', text: 'Release Date' },
  { key: '3', value: 'CREATED', text: 'Date Added' },
];

const orderOptions = [
  { key: '1', value: 1, text: 'Ascedending' },
  { key: '2', value: -1, text: 'Descending' },
]

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleChange = (criteria, value) => {
    if (criteria === 'sortBy') {
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
    const { activeItem } = this.state
    // const location = this.context.router.getCurrentParams;
    // console.log('location: ', location);
    return (
      <Menu secondary color={'black'}>
        <Menu.Item className='homeFlix' header>HomeFlix</Menu.Item>
        <Link to='/'>
          <Menu.Item name='library' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} />
        </Link>
        <Link to='/addFilm'>
          <Menu.Item name='addFilm' active={activeItem === 'addFilm'} onClick={this.handleItemClick} />
        </Link>
        <Link to='/advancedSearch'>
          <Menu.Item name='advancedSearch' active={activeItem === 'advancedSearch'} onClick={this.handleItemClick} />
        </Link>
          <Dropdown item text='Sort By'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => { this.handleChange('sortBy', 'TITLE') }}>Title</Dropdown.Item>
              <Dropdown.Item onClick={() => { this.handleChange('sortBy', 'RELEASE') }}>Release Date</Dropdown.Item>
              <Dropdown.Item onClick={() => { this.handleChange('sortBy', 'CREATED') }}>Date Added</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        <Dropdown item text='Order'>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => { this.handleChange('order', 1) }}>Ascending</Dropdown.Item>
            <Dropdown.Item onClick={() => { this.handleChange('order', -1) }}>Descending</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {/* </div> */}
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
