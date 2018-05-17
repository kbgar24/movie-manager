import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import MovieForm from './movieForm';

const AddFilmModal = (props) => (
  <Modal trigger={props.trigger}>
    <Modal.Header>Add New Film</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='' />
      <Modal.Description>
        <MovieForm />
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default AddFilmModal