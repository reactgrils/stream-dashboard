import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import {
  Avatar
} from './avatar'
import {
  HeaderSearch
} from './search';
import {
  HeaderContainer
} from './styles';

class Header extends PureComponent {
  render() {
    return (
      <HeaderContainer>
        <HeaderSearch />
        <Avatar />
      </HeaderContainer>
    );
  }
}

export default connect(null, null)(Header);