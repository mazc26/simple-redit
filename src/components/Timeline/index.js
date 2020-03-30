import Timeline from './Timeline';
import { connect } from 'react-redux';

import { dismissAll, fetchPosts } from '../../store/reducers/common';

const mapStateToProps = state => ({
  posts: state.common.posts,
  readPosts: state.common.readPosts,
});

const mapDispatchToProps = {
  fetchPosts, 
  dismissAll,
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline)