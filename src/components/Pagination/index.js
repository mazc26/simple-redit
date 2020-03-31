import Pagination from './Pagination';
import { connect } from 'react-redux';

import { fetchPosts } from '../../store/reducers/common';

const mapStateToProps = state => ({
  posts: state.common.posts,
  after: state.common.after,
  isFetchingMorePosts: state.common.isFetchingMorePosts,
});

export default connect(mapStateToProps, { fetchPosts })(Pagination)