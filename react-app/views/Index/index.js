import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Index = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const { match: { params: { model } } } = props;
      const { data } = await axios.get(`http://localhost:3000/${model}`);
      setItems(data)
    })()
  }, []);

  return (
    <ul>
      {items.map(item => <li>{JSON.stringify(item)}</li>)}
    </ul>
  )
}

export default Index
