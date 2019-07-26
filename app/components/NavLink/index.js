import React from 'react';
import { Link } from 'react-router-dom';
import { string, object } from 'prop-types';

const NavLink = ({ label, model }) => (
  <Link
    to={{
      pathname: `/${label}`,
      state: { ...model },
    }}
  >
    {label}
  </Link>
);

export default NavLink;

NavLink.propTypes = {
  label: string.isRequired,
  model: object.isRequired,
};
