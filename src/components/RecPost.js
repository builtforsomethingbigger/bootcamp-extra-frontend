import React from 'react';
import { useHistory } from 'react-router-dom';

function RecPost(props) {
    let history = useHistory()
    const findAuthor = (authors, postId) => {
        const commentAuthor = authors.find((author) => author.id === postId);
        if (commentAuthor) {
            return commentAuthor.username;
        } else {
            return "Author";
        } 
      };
    return(
        <div className="ui list table blue" onClick={() => history.push(`/posts/${props.id}`)}>
                <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td><h3 className="header">{props.title}</h3></td>
                        </tr>
                        <tr>
                            <td className="description"><b>Author:</b> {findAuthor(props.authors, props.user_id)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}
export default RecPost;