import * as yup from 'yup';

const createYupSchema = (schema, [attribute, config]) => {
  const { type, validations = [] } = config;
  if (!yup[type]) {
    return schema;
  }
  let validator = yup[type]();
  validations.forEach((validation) => {
    const { params, type: validationType } = validation;
    if (!validator[validationType]) {
      return;
    }
    validator = validator[validationType](...params);
  });
  return { ...schema, [attribute]: validator };
};

const yupSchema = attributes => yup.object()
  .shape(Object.entries(attributes).reduce(createYupSchema, {}));

export default yupSchema;
