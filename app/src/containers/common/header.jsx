import React, { Component } from 'react'
import { Container, Menu, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import LogoImg from '../../assets/images/logo.png'

const signInStyle = {
  marginRight: '10px',
}

class Header extends Component {
  renderAuthButtons(){
    if (this.props.authenticated) {
      return(
        <Button as={Link} to='/signout' basic icon color="red" size="tiny" labelPosition="left">
          <Icon name="sign out" />
          Sign Out
        </Button>
      )
    } else {
      return [
        <Button key={'signin'} as={Link} to='/signin' style={signInStyle} basic icon color="green" size="tiny" labelPosition="left">
          <Icon name="sign in" />
          Sign In
        </Button>,
        <Button key={'signup'} as={Link} to='/signup' basic icon color="blue" size="tiny" labelPosition="left">
          <Icon name="signup" />
          Sign Up
        </Button>
      ]
    }
  }
  render() {
    return (
      <div>
        <Menu
          borderless
          fixed="top"
          size="large"
        >
          <Container text>
            <Menu.Item position="left" style={{padding:'3px'}}>
              <Link to='/'>
                <Image style={{'fontSize':27}} avatar src={LogoImg} />
              </Link>
            </Menu.Item>
            <Menu.Item position="right">
              {this.renderAuthButtons()}
            </Menu.Item>
          </Container>
        </Menu>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated }
}
export default connect(mapStateToProps)(Header)
