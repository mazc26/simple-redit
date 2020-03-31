import Post from './Post';
import { connect } from 'react-redux';

import { setReadStatus, dismissPost, setExpandedInfo } from '../../store/reducers/common';

const mapDispatchToProps = {
  dismissPost,
  setReadStatus,
  setExpandedInfo,
}

export default connect(null, mapDispatchToProps)(Post);