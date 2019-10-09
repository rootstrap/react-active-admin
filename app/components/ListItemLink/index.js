import React, { useMemo, forwardRef } from 'react';
import {
  bool,
  object,
  string,
  element,
  oneOfType,
} from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as RouterLink } from 'react-router-dom';

const ListItemLink = ({ icon, primary, to, selected }) => {
  const renderLink = useMemo(
    () => forwardRef((itemProps, ref) => (
      <RouterLink
        to={to}
        {...itemProps}
        innerRef={ref}
        selected={selected}
      />
    )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

ListItemLink.propTypes = {
  primary: string.isRequired,
  to: oneOfType([string, object]).isRequired,
  icon: element,
  selected: bool,
};

ListItemLink.defaultProps = {
  icon: null,
  selected: false,
};

export default ListItemLink;
