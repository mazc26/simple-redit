import ExpandedInfo from './ExpandedInfo';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  expandedInfo: state.common.expandedInfo,
})

export default connect(mapStateToProps, {})(ExpandedInfo);