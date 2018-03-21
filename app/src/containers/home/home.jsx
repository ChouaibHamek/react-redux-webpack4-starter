import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchExpressData } from './actions_home';

const serverMessageStyle = { color: '#de3f3f' };

class Home extends Component {
  componentWillMount() {
    this.props.fetchExpressData();
  }

  render() {
    const { message } = this.props.express;
    return (
      <div className="home">
        <p>Welcome to the matcher platform</p>
        <p>Server Message: <span style={serverMessageStyle}>{message}</span></p>
      </div>
    );
  }
}

Home.propTypes = {
  fetchExpressData: PropTypes.func.isRequired,
  express: PropTypes.shape({ message: PropTypes.string }).isRequired,

};

function mapSateToprops(state) {
  return { express: state.express };
}

export default connect(mapSateToprops, { fetchExpressData })(Home);
