import React, { Fragment } from 'react';

import { parseDate } from '../../utils/parseDate';
import { getThumbnail } from '../../utils/getThumbnail';

import './Post.scss';
import { Grid } from '@material-ui/core';

const Post = ({ post, unread, setReadStatus, dismissPost, setExpandedInfo }) => {
  const handleClick = () => {
    if (unread) {
      setReadStatus(post.id)
    }
    setExpandedInfo(post)
  }

  return (
    <Fragment>
      <div
        onClick={handleClick}
        className="post-container">
        <Grid container>
          <Grid item xs={1}>
            {unread ? <div className="unread-dot"></div> : null}
          </Grid>
          <Grid item lg={2} md={12}>
            <div className="thumbnail">
              {getThumbnail(post.thumbnail)}
            </div>
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={12}>
                <div className="post-title">
                  {post.title}
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="post-author">
                  Author: {post.author}
                </div>
              </Grid>
              <Grid container>
                <Grid item xs={6}>
                  <div className="post-created-hour">{parseDate(post.created_utc)}</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="post-comments">{post.num_comments} comments</div>
                </Grid>
                <Grid item xs={12}>
                  <div
                    onClick={() => dismissPost(post.id)}
                    className="dismiss-post">
                    × Dismiss post
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  )
}

export default Post;