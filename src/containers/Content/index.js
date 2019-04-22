import React from 'react';
import { connect } from 'react-redux';
import { pureComponent } from 'react-decoration';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import Default from '../Default';
import Weather from '../../components/Weather';
import Map from '../../components/Map';
import Account from '../../components/Account';

import {
  MainContainer
} from './styles';

@pureComponent
class Content {
  render() {
    const { 
      match,
      location
    } = this.props;
    return (
      <MainContainer>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300 }}
            classNames="fade"
          >
            <div className="route-section">
              <Switch location={location}>
                <Route exact path={match.url} component={Default} />
                <Route path="/weather" component={Weather} />
                <Route path="/map" component={Map} />
                <Route path="/account" component={Account} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </MainContainer>
    );
  }
}

export default withRouter(connect(null, null)(Content))
