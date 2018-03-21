import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Header from '../common/header.jsx'
import requireAuth from '../common/require_auth.jsx'
import SecretPage from '../pages/secret-page.jsx'

const homeBackgroundStyle = {
  height: '100%',
  background: '#f7f7f7',
}

const homeBodyStyle = {
  height: '100%',
  paddingTop: '75px',
}

class HomePage extends Component {
  render() {
    const { match } = this.props
    return (
      <div
        className="home-page"
        style={homeBackgroundStyle}
      >
        <Header />
        <Container text style={homeBodyStyle}>
          <Route path={`${match.url}secret-page`} component={requireAuth(SecretPage)} />
          <Route exact path={match.url} component={() => (<p>Landing Page</p>)} />
        </Container>
      </div>
    )
  }
}

export default HomePage
