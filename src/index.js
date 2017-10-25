import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Axios from 'axios' //http请求
import 'antd/dist/antd.min.css' //antd css库
React.Component.prototype.$http = Axios

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
