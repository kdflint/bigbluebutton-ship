import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import NavBar from './NavBar.jsx';

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavBar {...this.props}>
        {this.props.children}
      </NavBar>
    );
  }
}

export default createContainer(() => {
  return {
    presentationTitle: 'IMDT 1004 Design Process',
    hasUnreadMessages: true,
  };
}, NavBarContainer);
