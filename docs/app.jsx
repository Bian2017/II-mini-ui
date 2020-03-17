import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import 'at-ui-style';
import Index from './pages/index.jsx';
import Docs from './pages/docs.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/docs" component={Docs} />
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('container')
);
