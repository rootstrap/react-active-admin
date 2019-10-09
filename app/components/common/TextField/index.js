import React from 'react';
import { object } from 'prop-types';
import { ErrorMessage } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

const TextField = ({ field, field: { name }, form: { errors, touched } }) => {
  const classes = useStyles();

  return (
    <FormControl
      fullWidth
      className={classes.formControl}
      error={!!touched[name] && !!errors[name]}
    >
      <InputLabel>{name}</InputLabel>
      <Input
        {...field}
      />
      <FormHelperText>
        <ErrorMessage name={name} />
      </FormHelperText>
    </FormControl>
  );
};

export default TextField;

TextField.propTypes = {
  field: object.isRequired,
  form: object.isRequired,
};
