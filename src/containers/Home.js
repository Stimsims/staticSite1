import React from 'react'
import { withRouteData, Link } from 'react-static'
//
import logoImg from '../logo.png'

class Home extends React.Component{
  constructor(props){
    super(props);
    console.log("home props");
    console.log(props);
  }
  render(){
    return(
      <div>
        <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
        <img src={logoImg} alt="" />
        All Posts:
        <ul>
          {this.props.posts.map(post => (
            <li key={post.id}>
              <Link to={`/post/${post.id}/`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default withRouteData(Home);
