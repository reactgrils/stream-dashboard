import React from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';
// import { geoMercator, geoPath, geoCentroid } from 'd3-geo';
// import { range, sum } from 'd3-array';
// import { scaleThreshold } from 'd3-scale';

// import worldData from '../../asset/world';

import {
  ContentContainer
} from './styles';

@pureComponent
class DefaultPage {

  render() {

    return (
      <ContentContainer>
        <svg>
        </svg>
      </ContentContainer>
    );
  }
}

DefaultPage.defaultProps = {
  data: [5, 10, 1, 3, 5, 50],
  size: [500, 500]
};

export default connect(null, null)(DefaultPage);