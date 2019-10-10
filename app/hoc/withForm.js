import React, { PureComponent } from 'react';
import { object, func } from 'prop-types';
import { isEmpty } from 'lodash';
import { Formik } from 'formik';

const withForm = WrappedComponent => (
  class extends PureComponent {
    static propTypes = {
      validationSchema: object,
      initialValues: object,
      onSubmit: func,
    }

    static defaultProps = {
      validationSchema: {},
      initialValues: {},
      onSubmit: () => {},
    }

    handleSubmit = async (values, { setSubmitting, setStatus }) => {
      const { onSubmit } = this.props;
      try {
        await onSubmit(values, { setSubmitting, setStatus });
      } catch (e) {
        isEmpty(e.errors) ? setStatus(e.error) : setStatus(e.errors);
      } finally {
        setSubmitting(false);
      }
    };

    render() {
      const { initialValues, validationSchema } = this.props;
      console.log(initialValues);
      return (
        <Formik
          onSubmit={this.handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {formikProps => <WrappedComponent {...this.props} {...formikProps} />}
        </Formik>
      );
    }
  }
);

export default withForm;

