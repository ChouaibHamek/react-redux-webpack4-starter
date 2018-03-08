import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from './posts_actions'
import _ from 'lodash'

class Posts extends Component {
  componentWillMount(){
    this.props.fetchPosts()
  }
  renderPostsList(){
    return _.map( this.props.posts, post =>
      <li key={post.id}>
        {post.title}
      </li>
    )
  }
  render(){
    return(
      <div>
        <h3>Posts</h3>
        <ul>
          {this.renderPostsList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(Posts)
