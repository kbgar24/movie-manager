import { connect } from 'react-redux';
import Library from '../components/library';
import { deleteMovie, getMovies, sortBy } from '../actions/movieActions';

const mapStateToProps = state => { 
  console.log('state from mStP Library: ', state);
  return { movies: state.movies }
}

const mapDispatchToProps = dispatch => ({
  deleteMovie: id => dispatch(deleteMovie(id)),
  getMovies: () => dispatch(getMovies()),
  sortBy: (criteria, order) => dispatch(sortBy(criteria, order)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Library);