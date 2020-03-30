import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import TimeLineContainer from '../TimeLineContainer';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TimeLineContainer}/>
      </Switch>
    </Router>
  )
};

export default Routes;