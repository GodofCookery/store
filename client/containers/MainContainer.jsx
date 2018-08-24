import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeftSidebarMenuComponent from '../components/LeftSidebarMenuComponent.jsx'; 

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LeftSidebarMenuComponent />
        H3llo from react MainContainer
      </div>
    );
  }
}


export default MainContainer;