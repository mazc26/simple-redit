import React from 'react';
import { Grid } from '@material-ui/core';

import { getThumbnail } from '../../utils/getThumbnail';

import './ExpandedInfo.scss';
import { parseDate } from '../../utils/parseDate';

const ExpandedInfo = ({ expandedInfo }) => {
  return (
    <div className="expanded-info-container">
      <Grid container justify="center" alignItems="center">
        {
          expandedInfo ? 
          <Grid container>
            <Grid item xs={12}>
              <Grid container className="thumbnai-expanded-container">
                <Grid item xs={2}>
                  <div className="thumbnail">
                    {getThumbnail(expandedInfo.thumbnail)}
                  </div>
                </Grid>
                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={12}>
                      <div className="thumbnail">
                        {parseDate(expandedInfo.created_utc)}
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <div className="content-container">
                        <div className="title">Comments:</div>
                        <div className="expanded-title">{expandedInfo.num_comments}</div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div className="content-container">
                <div className="title">Title:</div>
                <div className="expanded-title">{expandedInfo.title}</div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="content-container">
                <div className="title">Author:</div>
                <div className="expanded-title">{expandedInfo.author}</div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="content-container">
                <div className="title">Subreddit:</div>
                <div className="expanded-title">{expandedInfo.subreddit}</div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="content-container">
                <div className="title">Source:</div>
                <div className="expanded-title">{expandedInfo.url}</div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="content-container">
                <div className="title">Domain:</div>
                <div className="expanded-title">{expandedInfo.domain}</div>
              </div>
            </Grid>
          </Grid> :
          "Please select any post to expand its information" 
        }
      </Grid>
    </div>
  )
};

export default ExpandedInfo;