import React, { Fragment } from 'react';

import { parseDate } from '../../utils/parseDate';
import { getThumbnail } from '../../utils/getThumbnail';

import './Post.scss';

const Post = ({ post, unread, setReadStatus, dismissPost }) => {
  return (
    <Fragment>
      <div
        onClick={unread ? ()=> setReadStatus(post.id) : null} 
        className="post-container">
        <div>
          {
            unread ? <div className="unread-dot"></div> : null
          }
        </div>
        <div>
          title:
          {post.title}
        </div>
        <div>
          author:
          {post.author}
        </div>
        <div>
          time:
          {parseDate(post.created_utc)}
        </div>
        <div>
          Thumbnail: 
          {getThumbnail(post.thumbnail)}
        </div>
        <div>
          Comments: 
          {post.num_comments}
        </div>
      </div>
      <div
        onClick={()=> dismissPost(post.id)} 
        className="dismiss-post">
        DISMISS POST
      </div>
    </Fragment>
  )
}

export default Post;