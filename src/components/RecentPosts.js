import React from 'react';
import RecPost from './RecPost';

function RecentPosts(props) { 
  return (
    <div className="ui list marg_10">
        <div className="font_20 font_blue pad_10 stroke"><b>RECENT POSTS</b></div>
        {props.posts.sort((a,b) => b.date - a.date).map(post => 
            <RecPost key={post.id} {...post} authors={props.authors} />
        ).splice(0, 5)}
    </div>
  );
}

export default RecentPosts;
