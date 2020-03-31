import React, { Fragment } from 'react';
import { Button } from '@material-ui/core';

import Post from '../Post';
import Pagination from '../Pagination';

import './Timeline.scss';

const Timeline = ({ posts, readPosts, dismissAll, fetchPosts }) => {
  const getUnreadStatus = id => {
    return !readPosts.includes(id);
  }

  return (
    <Fragment>
      <div className="main-title">Reddit posts</div>
      <div className="timeline-container">
        {
          posts.length ? posts.map((post, index) => (
            <Post
              key={index}
              unread={getUnreadStatus(post.data.id)} 
              post={post.data} 
            />
          )) :
          <div className="no-more-posts"> 
            <div>
            Theres no posts, click here to reload.
            </div>
            <div className="reload-button">
              <Button 
                className="btn"
                size="medium"
                variant="contained" 
                onClick={()=> fetchPosts({after:"", count: 0})}
              >
                Reload posts
              </Button>
            </div>
          </div>
        }
        {
          <Pagination />
        }
        {
          !!posts.length &&
          <div
            className="dismiss-all" 
            onClick={()=> dismissAll()}
          >
         × Dismiss all
          </div>
        }
      </div>
    </Fragment>
  )
} 

export default Timeline;