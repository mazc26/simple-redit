import Post from './Post';
import { connect } from 'react-redux';

import { setReadStatus, dismissPost } from '../../store/reducers/common';

const mapDispatchToProps = {
  dismissPost,
  setReadStatus,
}

export default connect(null, mapDispatchToProps)(Post);