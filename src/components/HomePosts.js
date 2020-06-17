import React from 'react';
import { useHistory } from 'react-router-dom';

function HomePosts(props) {
    let history = useHistory()

    const findAuthor = (authors, postId) => {
        const commentAuthor = authors.find((author) => author.id === postId);
        if (commentAuthor) {
            return commentAuthor.username;
        } else {
            return "Author";
        }
    };

    return (  
        <div className="PostsPage margin_left_20">
            {props.posts.sort((a, b) => b.likes - a.likes).map(post =>
                <div key={post.id} className="ui marg_10 container floatCard radius_round">
                    <div className="ui left aligned table pad_20 blue">
                        <div className="content" onClick={() => history.push(`/posts/${post.id}`)}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><h1 className="header">{post.title}</h1></td>
                                    </tr>
                                    <tr>
                                        <td className="description"><b>Author:</b> {findAuthor(props.authors, post.user_id)}</td>
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