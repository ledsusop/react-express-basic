import React, { Component, PropTypes } from 'react';
import Header  from './components/Header';
import Content from './components/Content';

export default class App extends Component {
  render() {


    return (
        <div id="main-content">
            <Header content={this.props.headerContent}/>
            <Content content={this.props.mainContent}/>
        </div>
    );
  }
}

App.propTypes = {};