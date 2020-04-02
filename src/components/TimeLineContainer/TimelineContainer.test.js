import React from 'react';
import { shallow } from 'enzyme'

import TimelineContainer from '../TimeLineContainer/TimelineContainer';

it('renders without crashing', () => {
  shallow(
    <TimelineContainer />
  )
})