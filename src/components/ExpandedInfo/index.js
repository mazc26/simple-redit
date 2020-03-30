import ExpandedInfo from './ExpandedInfo';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  expandedInfo: state.common.ExpandedInfo,
})

export default connect(mapStateToProps, {})(ExpandedInfo);