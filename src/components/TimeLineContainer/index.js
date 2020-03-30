import TimelineContainer from './TimelineContainer';
import { connect } from 'react-redux';

import { fetchPosts } from '../../store/reducers/common';

const mapStateToProps = state => ({
  isFetchingPosts: state.common.isFetchingPosts,
}) 

export default connect(mapStateToProps, { fetchPosts })(TimelineContainer);