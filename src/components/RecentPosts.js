import React from 'react';
import RecPost from './RecPost';

function RecentPosts(props) {
  return (
    <div className="ui list marg_10">
        <div className="font_20 pad_10"><b>RECENT POSTS</b></div>
        {props.posts.sort((a,b) => b.likes - a.likes).map(post => 
            <RecPost key={post.id} {...post} />
        ).splice(0, 5)}
    </div>
  );
}

export default RecentPosts;
