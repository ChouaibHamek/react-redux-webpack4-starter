import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import Header from '../header/header'
import Signin from '../auth/signin'
import { fetchExpressData } from './actions'

const appBodyStyle = {
  marginTop: '70px',
  height: '100%',
}

class HomePage extends Component {
  componentWillMount() {
    this.props.fetchExpressData()
  }

  render() {
    return (
      <div
        className="home-page"
        style={{ background: '#f7f7f7' }}
      >
        <Header />
        <Container text style={appBodyStyle}>
          <Signin />
        </Container>
      </div>
    )
  }
}

function mapSateToprops(state) {
  return { express: state.express }
}

export default connect(mapSateToprops, { fetchExpressData })(HomePage)
