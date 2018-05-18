import React, { Component } from 'react'
import { Button, Header, Image, Modal, Progress } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class SaveModal extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      progress: 20,
      isSaving: props.isSaving,
      saveError: props.saveError
    }
  }

  componentDidMount(){
    this.handleIncrementProgress();
  }

  static getDerivedStateFromProps = ({ isSaving, saveError, showModal }, prevState) => {
    const progress = !isSaving ? 100 : prevState.progress;
    return ({
    ...prevState,
    progress,
    isSaving,
    saveError,
  })
}

  handleIncrementProgress = () => {
    const incrementProgress = () => {
      const { progress } = this.state;
      const distance = 100 - progress;
      const newProgress = progress + (distance / 5);
      this.setState({ progress: newProgress });
    };
    
    setInterval(incrementProgress, 750);
  }

  render(){
    { !this.state.isSaving && !this.state.saveError && this.setState }
    return (
      <Modal className='saveModal' open={this.props.showModal}>
        <Modal.Header className='homeflix'>HomeFlix <span style={{ color: 'white' }}>   |    Add New Film</span></Modal.Header>
        <Modal.Content >
          <Modal.Description>
            { this.state.progress !== 100 && !this.state.saveError && <h3 className='modalh3' style={{ textAlign: 'center' }}>Your Movie is being Saved</h3> }
            { this.state.progress === 100 && <h3 className='modalh3' style={{ textAlign: 'center' }}>Movie successfully saved!</h3> }
            { this.state.saveError && <h3 className='modalh3' style={{ textAlign: 'center' }}>Error saving movie!</h3>}
            
            <Progress 
              active
              percent={this.state.progress}
              size='medium' 
              indicating
              autoSuccess  
              error={this.state.saveError}
            />
          </Modal.Description>
          <div className='modalBtnDiv'>
          <Link to='/'>
              <Button size='large' onClick={this.props.handleModalClose}>
              Go to Library
            </Button>
          </Link>
          <Button size='large' onClick={this.props.handleModalClose}>
            Add another Film
          </Button>
          </div>
        </Modal.Content>
      </Modal>
    )
  }

}
