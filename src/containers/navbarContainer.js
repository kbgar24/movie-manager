import { connect } from 'react-redux';
import Navbar from '../components/navbar';
import { sortBy } from '../actions/movieActions';

const mapDispatchToProps = dispatch => ({
  sortBy: (criteria, order) => dispatch(sortBy(criteria, order)),
});

export default connect(null, mapDispatchToProps)(Navbar);