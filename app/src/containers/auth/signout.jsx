import React, { Component } from 'react'
import { Grid, Message } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { signoutAction } from './actions_auth'

class Signout extends Component {
  componentWillMount() {
    this.props.signoutAction()
  }
  render() {
    return(
      <Grid
        textAlign="center"
        verticalAlign="middle"
        style={{height:'100%'}}
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Message
            color="blue"
            size="massive"
            header="You are Signed Out!"
            content="Thanks for visiting DevOps"
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(null, { signoutAction })(Signout)
