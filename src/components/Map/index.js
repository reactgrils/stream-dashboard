import React from 'react';
import { pureComponent } from 'react-decoration';
import { connect } from 'react-redux';


@pureComponent
class Map {
  render() {
    return (
      <div>
        Map
      </div>
    )
  }
}


export default connect(null, null)(Map);