import React from 'react';
import { format } from "date-fns";

function Comment(props) {

  const postComments = props.comments.filter(comment => comment.user_id === props.posts.user_id)
  
  const formatDate = (date) => {
    const parsedDate = date.split('T')
    return parsedDate[0]
  }

  console.log(props.authors)
  return (
    <div className="ui text container">
      <h3 className="ui dividing header">Comments</h3>
      {postComments.map(comment => 
      <div className="ui comments">
        <div className="comment">
          <div className="content">
            <a className="author">{props.authors.username}</a>
            <div className="metadata">
              <span className="date">Posted: {formatDate(comment.created_at)}</span>
            </div>
            <div className="text">
              {comment.text}
            </div>
          </div>
        </div>
        
      </div>
      )}
      <form class="ui reply form">
          <div class="field">
            <textarea></textarea>
          </div>
          <div class="ui labeled submit icon button">
            <i class="icon edit blue"></i> Add Reply
          </div>
        </form>
    </div>
  );
}

export default Comment;
