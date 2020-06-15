import React from 'react';
import Postcard from './Postcard'


class PostsPage extends React.Component {

  // console.log(props.posts)

  render(){
    return (
      <div className="PostsPage">
    
        {this.props.posts.map(post => <Postcard key={post.id} {...post} />  )}
      </div>
    );
  }
}


export default PostsPage;
