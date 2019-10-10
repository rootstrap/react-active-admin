import React, { useMemo } from 'react';
import { object } from 'prop-types';
import AddIcon from '@material-ui/icons/Add';

import Table from '../../components/Table';
import FloatingButton from '../../components/FloatingButton';
import useIndex from '../../hooks/models/useIndex';

const Index = ({
  match: { params: { model } },
  location: { state: { attributes }, state },
}) => {
  const index = useIndex(model);

  const headers = useMemo(() => (
    attributes && Object.entries(attributes).map(([key]) => ({ title: key, field: key }))
  ), [attributes]);

  return (
    <>
      <h1>{model}</h1>
      <Table
        headers={headers}
        rows={index}
      />
      <FloatingButton
        to={{
          pathname: `${model}/new`,
          state: { ...state },
        }}
        Icon={AddIcon}
      />
    </>
  );
};

export default Index;

Index.propTypes = {
  match: object.isRequired,
  location: object.isRequired,
};
