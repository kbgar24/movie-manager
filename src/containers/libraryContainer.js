import { connect } from 'react-redux';
import Library from '../components/library';
import { deleteMovie } from '../actions/movieActions';

const mapStateToProps = state => { 
  console.log('state from mStP Library: ', state);
  return { movies: state.movies }
}

const mapDispatchToProps = dispatch => ({
  deleteMovie: id => dispatch(deleteMovie(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Library);