import React from 'react';
import { object } from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavLink from './NavLink';

import indexes from '../utils/resources/indexes';

import Index from '../views/Index';
import Create from '../views/Create';

const App = ({ data }) => {
  const renderNavBar = () => {
    const nav = indexes(data);

    return (
      <nav>
        {Object.keys(nav).map(model => <NavLink key={model} label={model} model={nav[model]} />)}
      </nav>
    );
  };

  return (
    <Router>
      <div>
        {renderNavBar()}
        <Route path="/:model" exact component={Index} />
        <Route path="/:model/new" exact component={Create} />
        <Route path="/:model/:id/edit" exact component={Index} />
      </div>
    </Router>
  );
};

export default App;

App.propTypes = {
  data: object,
};

App.defaultProps = {
  data: {},
};

