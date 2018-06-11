
import React from 'react'
import { withRouteData, Link } from 'react-static'
//


class Home extends React.Component{
    constructor(props){
      super(props);
      console.log("bloh props");
      console.log(props);
    }
    render(){
        let posts = this.props.posts;
      return(
        <div>
        <h1>It's blog time.</h1>
        <br />
        All Posts:
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      )
    }
  }
  
  export default withRouteData(Home);
  