import React from 'react';
import { object } from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemLink from './ListItemLink';

import indexes from '../utils/resources/indexes';

import Index from '../views/Index';
import Create from '../views/Create';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const App = ({ data }) => {
  const classes = useStyles();
  const navigation = indexes(data);

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar />
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="left"
        >
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {Object.keys(navigation).map(model => (
              <ListItemLink
                key={model}
                to={{
                  pathname: `/${model}`,
                  state: { ...navigation[model] },
                }}
                primary={model}
              />
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div>
            <Route path="/:model" exact component={Index} />
            <Route path="/:model/new" exact component={Create} />
            <Route path="/:model/:id/edit" exact component={Index} />
          </div>
        </main>
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
