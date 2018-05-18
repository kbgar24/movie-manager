import { connect } from 'react-redux';
import SaveModal from '../components/saveModal';

const mapStateToProps = ({ isSaving, saveError }) => ({
  isSaving,
  saveError
})

export default connect(mapStateToProps)(SaveModal);