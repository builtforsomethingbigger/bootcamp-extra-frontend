import React from 'react';

function HomePosts(props) {
    return (  
        <div className="PostsPage pad_10">
            {props.posts.sort((a, b) => b.likes - a.likes).map(post =>
                <div key={post.id} className="ui marg_10 container floatCard radius_round">
                    <div className="ui left aligned table pad_20">
                        <div className="content">
                            <table>
                                <tbody>
                                    <tr>
                                        <td><h1 className="header">{post.title}</h1></td>
                                    </tr>
                                    <tr>
                                        <td className="description"><b>Author:</b> {post.author}</td>
                                    </tr>
                                    <tr>
                                        <td className="extra"><b>likes:</b> {post.likes}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>

            )}
        </div>
    );
}

export default HomePosts;