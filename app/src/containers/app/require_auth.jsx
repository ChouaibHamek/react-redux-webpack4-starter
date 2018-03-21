import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        console.log('componentWillMount')
        this.props.history.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        console.log('componentWillUpdate')
        this.props.history.push('/');
      }
    }

    renderComposedComponent() {
      return this.props.authenticated? <ComposedComponent {...this.props} />: null
    }

    render() {
      return this.renderComposedComponent()
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
