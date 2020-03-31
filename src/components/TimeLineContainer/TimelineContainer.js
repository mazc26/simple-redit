import React, { Fragment, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import Timeline from '../Timeline';
import ExpandedInfo from '../ExpandedInfo';
import { CircularProgress } from '@material-ui/core';

import './TimelineContainer.scss';

const TimelineContainer = ({ fetchPosts, isFetchingPosts }) => {
  useEffect(() => {
    fetchPosts({after: "", count: 0});
  }, [])

  if (isFetchingPosts) {
    return (
      <div className="circular-progress-container">
        <CircularProgress size={90} />
      </div>
    )
  }

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={4}>
          <Timeline />
        </Grid>
        <Grid item xs={8}>
          <ExpandedInfo />
        </Grid>
      </Grid>
    </Fragment>
  )
};

export default TimelineContainer;