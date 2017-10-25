// require('normalize.css/normalize.css');
// require('styles/App.css');
import 'normalize.css/normalize.css'
import 'styles/App.css'
import React from 'react';
import {Router, Route, Redirect} from 'react-router';
import History from 'history/createHashHistory';
// components
import Home from './HomeComponent'
import Login from './LoginComponent'

class AppComponent extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="index">
        {/* <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div> */}
        <Router history={History()} >
          <div>
            <Route exact path='/' render={() => (
                <Redirect to="/home"/>
            )} />
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
