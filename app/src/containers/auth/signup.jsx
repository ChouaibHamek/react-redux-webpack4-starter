import React, { Component } from 'react'
import { Button, Form, Grid, Label, Header, Image, Message, Segment } from 'semantic-ui-react'
import { requiredValidation, emailValidation } from './validation'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import fieldValidation from '../../components/field_validation.jsx'
import { signUpAction } from './actions_auth.js'

const signUpBackgroundStyle = {
  height: '100%',
  background: '#f7f7f7',
}

class Signup extends Component {
  submitForm({ email, password }) {
    this.props.signUpAction({ email, password, history: this.props.history })
  }
  renderServerErrorMessage() {
    if (this.props.authError) {
      return(
        <Message
          size='small'
          negative
          header={this.props.authError}
        />
      )
    }
  }
  render() {
    return(
      <Grid
        textAlign="center"
        verticalAlign="middle"
        style={signUpBackgroundStyle}
      >
        <Grid.Column style={{maxWidth: 450}}>
          <Header as="h2" color="blue" textAlign="center">
            Sign Up for a new account!
          </Header>
          <Segment stacked color="blue">
            <Form size="large" onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
              <Field
                component={fieldValidation}
                fluid
                label="Name"
                name="name"
                icon="user"
              />
              <Field
                component={fieldValidation}
                fluid
                name="email"
                label="E-Mail Address"
                labelRequired
                icon="mail"
              />
              <Field
                component={fieldValidation}
                fluid
                type="password"
                name="password"
                labelRequired
                label="Password"
                icon="lock"
              />
              <Field
                component={fieldValidation}
                fluid
                type="password"
                labelRequired
                name="passwordConfirm"
                label="Confirm Password"
                icon="lock"
              />
              {this.renderServerErrorMessage()}
              <Button color="blue" fluid size="large">Sign Up</Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

function validate(values) {
  const errors = {}
  errors.email = requiredValidation(values.email)
  if (!errors.email) {
    errors.email = emailValidation(values.email)
  }
  errors.password = requiredValidation(values.password)
  errors.passwordConfirm = requiredValidation(values.passwordConfirm)
  if (!errors.passwordConfirm) {
    errors.passwordConfirm = values.password == values.passwordConfirm ? undefined : 'Confirmation does not match password'
  }
  return errors
}

function maptStateToProps(state) {
  return { authError: state.auth.error }
}

export default reduxForm({
  validate,
  form: 'signup',
})(
connect(maptStateToProps, { signUpAction })(Signup)
)
