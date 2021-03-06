import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'
import RaisedButton from 'material-ui/RaisedButton'
import styles from './form_material_styles'
import { Grid, Row, Col } from 'react-flexbox-grid';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const FormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit}>
      <Row center="xs">
        <Col xs={10} sm={6} md={3} lg={5}>
          <Field name="email" type="email" component={renderField} label="Email" />
        </Col>
      </Row>
      <Row center="xs">
        <Col xs={12} sm={6} md={3} lg={5}>
          <div>
            <label>Sex</label>
            <div>
              <label>
                <Field name="sex" component="input" type="radio" value="male" />
                {' '}
                Male
              </label>
              <label>
                <Field name="sex" component="input" type="radio" value="female" />
                {' '}
                Female
              </label>
              <Field name="sex" component={renderError} />
            </div>
          </div>
        </Col>
      </Row>
      <Row center="xs">
        <Col xs={12} sm={6} md={3} lg={5}>
          <RaisedButton
            type="button"
            label="Prev"
            primary={true}
            onClick={previousPage}
            style={styles.raisedButtonStyle}
          />
          <RaisedButton
            type="submit"
            label="Next"
            primary={true}
            style={styles.raisedButtonStyle}
          />
        </Col>
      </Row>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FormSecondPage)
