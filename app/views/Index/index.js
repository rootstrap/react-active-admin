import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';
import { singular } from 'pluralize';
import axios from 'axios';

const Index = (props) => {
  const {
    match: { params: { model } },
    location: { state },
  } = props;
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
      <Link
        to={{
          pathname: `${model}/new`,
          state: { ...state },
        }}
      >
        {`new ${singular(model)}`}
      </Link>
      <ul>
        {items.map(item => <li>{JSON.stringify(item)}</li>)}
      </ul>
    </>
  );
};

export default Index;

Index.propTypes = {
  match: object.isRequired,
  location: object.isRequired,
};
