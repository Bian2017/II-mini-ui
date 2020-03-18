import React, { Component } from 'react';

import PageHeader from '../components/header';
import '../assets/style/index.scss';

class Index extends Component {
  render() {
    return (
      <div className="wrapper">
        <PageHeader />
        <div className="bg-container">
          <div className="bg-top-border"></div>
          <div className="bg-top-shadow"></div>
        </div>
      </div>
    );
  }
}

export default Index;
