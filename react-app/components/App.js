import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import data from 'data'
import Index from '../views/Index'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              {Object.keys(data).map(name => <li><Link to={`/${name}`}>{name}</Link></li>)}
            </ul>
          </nav>
          <Route path={`/:model`} exact component={Index} />
          <Route path={`/:model/new`} exact component={Index} />
          <Route path={`/:model/:id/edit`} exact component={Index} />
        </div>
      </Router>
    );
  }
}

export default App;

