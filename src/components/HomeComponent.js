'use strict';

import React from 'react';
// import { Button } from 'antd';
import 'styles//Home.scss';
// components
import Head from './section/HeadComponent'

// interface HomeProps {}
// interface HomeState {}
class HomeComponent extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this)
    return (
      <div className="home-component">
        <Head/>
        {/* Please edit src/components///HomeComponent.js to update this component! */}
      </div>
    );
  }
}

HomeComponent.displayName = 'HomeComponent';

// Uncomment properties you need
HomeComponent.propTypes = {};
// HomeComponent.defaultProps = {};

export default HomeComponent;
