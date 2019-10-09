import React from 'react';
import { object } from 'prop-types';
import axios from 'axios';

import yupSchema from '../../utils/validations/yupSchemaCreator';
import Form from '../../components/Form';

const Create = ({
  match: { params: { model } },
  location: { state: { attributes } },
}) => (
  <>
    <h1>{model}</h1>
    <Form
      onSubmit={(values) => {
        setTimeout(() => {
          axios.post(`http://localhost:3000/${model}`, values);
        }, 500);
      }}
      attributes={attributes}
      validationSchema={yupSchema(attributes)}
    />
  </>
);

export default Create;

Create.propTypes = {
  match: object.isRequired,
  location: object.isRequired,
};
