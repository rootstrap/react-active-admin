import React, { useMemo, forwardRef } from 'react';
import {
  string,
  object,
  oneOfType,
} from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const FloatingButton = ({ to, color, Icon }) => {
  const classes = useStyles();

  const renderLink = useMemo(
    () => forwardRef((itemProps, ref) => (
      <RouterLink
        to={to}
        {...itemProps}
        innerRef={ref}
      />
    )),
    [to],
  );

  return (
    <Fab
      color={color}
      className={classes.fab}
      component={renderLink}
    >
      <Icon />
    </Fab>
  );
};

export default FloatingButton;

FloatingButton.propTypes = {
  to: oneOfType([string, object]).isRequired,
  Icon: object.isRequired,
  color: string,
};

FloatingButton.defaultProps = {
  color: 'primary',
};
