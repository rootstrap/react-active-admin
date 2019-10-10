import React from 'react';
import { object } from 'prop-types';
import { isEmpty } from 'lodash';

import Form from '../../components/Form';
import useShow from '../../hooks/models/useShow';

const Show = ({
  match: { params: { model, id } },
  location: { state: { attributes } },
}) => {
  const item = useShow(model, id);

  return (
    <>
      <h1>{model}</h1>
      {!isEmpty(item) && (
        <Form
          disabled
          attributes={attributes}
          initialValues={item}
        />
      )}
    </>
  );
};

export default Show;

Show.propTypes = {
  match: object.isRequired,
  location: object.isRequired,
};
