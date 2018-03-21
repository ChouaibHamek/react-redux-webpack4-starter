import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSecretMessage } from './actions_pages.js'

class SecretPage extends Component {
  componentWillMount(){
    this.props.fetchSecretMessage()
  }
  render(){
    return <p>{this.props.secretMessage}</p>
  }
}

function mapStateToProps(state) {
  return { secretMessage: state.pages.secretMessage }
}
export default connect(mapStateToProps, { fetchSecretMessage })(SecretPage)
