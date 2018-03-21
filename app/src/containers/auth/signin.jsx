import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment, Input } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import LogoImg from '../../assets/images/logo.png'
import { signinAction } from './actions_auth'
import fieldValidation from '../../components/field_validation.jsx'
import { emailValidation, requiredValidation } from './validation'

const signInBackgroundStyle = {
  height: '100%',
  background: '#f7f7f7',
}

class Signin extends Component {
  submitForm({ email, password}) {
    this.props.signinAction({ email, password, history:this.props.history })
  }
  renderErrorMessage() {
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
    return (
      <Grid
        textAlign="center"
        style={signInBackgroundStyle}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={LogoImg} />
            {' '}Sign-in to your account
          </Header>
          <Form size="large" onSubmit={this.props.handleSubmit(this.submitForm.bind(this))}>
            <Segment stacked>
              <Field
                component={fieldValidation}
                name='email'
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail Address"
                validate={[requiredValidation, emailValidation]}
              />
              <Field
                component ={fieldValidation}
                name='password'
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                validate={requiredValidation}
              />
              {this.renderErrorMessage()}
              <Button color="teal" fluid size="large">Login</Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

function mapStateToProps(state) {
  return { authError: state.auth.error }
}

export default reduxForm({
  form: 'signin',
})(
connect(mapStateToProps, { signinAction })(Signin)
)
