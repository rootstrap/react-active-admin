import React from 'react';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';
import { singular } from 'pluralize';

import useIndex from '../../hooks/models/useIndex';

const Index = ({
  match: { params: { model } },
  location: { state },
}) => {
  const index = useIndex(model);

  return (
    <>
      <h1>{model}</h1>
      <Link
        to={{
          pathname: `${model}/new`,
          state: { ...state },
        }}
      >
        {`new ${singular(model)}`}
      </Link>
      <ul>
        {index && index.map(item => <li key={item.id}>{JSON.stringify(item)}</li>)}
      </ul>
    </>
  );
};

export default Index;

Index.propTypes = {
  match: object.isRequired,
  location: object.isRequired,
};
