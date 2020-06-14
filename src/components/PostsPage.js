import React from 'react';
import Postcard from './Postcard'


const PostsPage = (props) => {

  console.log(props.posts)

  return (
    <div className="PostsPage">
  
      {props.posts.map(post => <Postcard key={post.id} {...post} />  )}
    </div>
  );
}

export default PostsPage;
