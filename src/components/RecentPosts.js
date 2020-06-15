import React from 'react';


function RecentPosts(props) {
  return (
    <div className="ui list marg_10">
        <div>RECENT POSTS</div>
        {props.posts.sort((a,b) => b.likes - a.likes).map(post => 
            <div className="ui list aligned table">
                <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td><h3 className="header">{post.title}</h3></td>
                        </tr>
                        <tr>
                            <td className="description"><b>Author:</b> {post.author}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ).splice(0, 5)}
    </div>
  );
}

export default RecentPosts;
