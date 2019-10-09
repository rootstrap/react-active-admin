import React, { Component } from 'react';
import { object } from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavLink from './NavLink';

import indexes from '../utils/resources/indexes';

import Index from '../views/Index';
import Create from '../views/Create';

class App extends Component {
  renderNavBar = () => {
    const { models } = this.props;
    const nav = indexes(models);

    return (
      <nav>
        {Object.keys(nav).map(model => <NavLink key={model} label={model} model={nav[model]} />)}
      </nav>
    );
  }

  render() {
    return (
      <Router>
        <div>
          {this.renderNavBar()}
          <Route path="/:model" exact component={Index} />
          <Route path="/:model/new" exact component={Create} />
          <Route path="/:model/:id/edit" exact component={Index} />
        </div>
      </Router>
    );
  }
}

export default App;

App.propTypes = {
  models: object,
};

App.defaultProps = {
  models: {},
};

