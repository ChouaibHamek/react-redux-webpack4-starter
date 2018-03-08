import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchExpressData } from './actions'

class HomePage extends Component {

  componentWillMount(){
    this.props.fetchExpressData()
  }

  render(){
    return(
      <div className="home-page">
        <p>Welcome to the home page</p>
        <p style={{ color: '#de3f3f' }}>{this.props.express.express}</p>
      </div>
    )
  }
}

function mapSateToprops(state){
  return { express: state.express }
}

export default connect(mapSateToprops, { fetchExpressData })(HomePage)
