'use strict';

import React from 'react';

import { Button } from 'antd';
require('antd/lib/button/style');
require('styles//Login.css');

class LoginComponent extends React.Component {
  render() {
    return (
      <div className="login-component">
        Please edit src/components///LoginComponent.js to update this component!
        <Button type="primary" icon="search" onClick={()=>{alert('11')}}>login</Button>
      </div>
    );
  }
}

LoginComponent.displayName = 'LoginComponent';

// Uncomment properties you need
// LoginComponent.propTypes = {};
// LoginComponent.defaultProps = {};

export default LoginComponent;
