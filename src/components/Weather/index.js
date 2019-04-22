import React from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';

import {
  WeatherContainer
} from './styles';

@pureComponent
class Weather {
  render() {
    return (
      <WeatherContainer>
        weather
      </WeatherContainer>
    )
  }
};

export default connect(null, null)(Weather);


