import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';

import './Pagination.scss';

const Pagination = ({ fetchPosts, after, isFetchingMorePosts, posts }) => {
  return (
    <div className="pagination-container">
      {
        !!posts.length && after &&
        <div className="load-more-btn-container">
          <Button
            size="medium"
            variant="contained" 
            className="btn"
            onClick={()=> fetchPosts({after, count: posts.length})}
            disabled={isFetchingMorePosts}
          >
            {
              isFetchingMorePosts ?
              <CircularProgress 
                size={20}
                className="circular-progress" 
              /> :
              "Load More"
            }
          </Button>
        </div>
      }
    </div>
  )
}

export default Pagination;