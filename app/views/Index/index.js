import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';

import Table from '../../components/Table';
import FloatingButton from '../../components/FloatingButton';

const Index = ({
  match: { params: { model } },
  location: { state: { attributes }, state },
}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:3000/${model}`);
      setItems(data);
    })();
  }, []);

  return (
    <>
      <h1>{model}</h1>
      <Table
        columns={Object.keys(attributes)}
        rows={items}
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
