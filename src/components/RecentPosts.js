import React from 'react';


function RecentPosts(props) {
  // console.log(props)
  const { title, author, likes } = props
  console.log(props)
  return (
    <div className="ui list marg_10">
  
        {props.posts.sort((a,b) => b.likes - a.likes).map(post => 
            <div>
                <div className="ui left aligned table">
                    <div>
                        <table>
                            <tr>
                                <td><h3 className="header">{post.title}</h3></td>
                            </tr>
                            <tr>
                                <td className="description"><b>Author:</b> {post.author}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            
        )}
    </div>
  );
}

export default RecentPosts;
