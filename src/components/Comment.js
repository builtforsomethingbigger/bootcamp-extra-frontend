import React from 'react';

function Comment(props) {

  const postComments = props.comments.filter(comment => comment.user_id === props.posts.user_id)
  
  const formatDate = (date) => {
    const parsedDate = date.split('T')
    return parsedDate[0]
  }

  return (
    <div className="ui text container commentContainer">
      <h3 className="ui dividing header">Comments</h3>
      {postComments.map(comment => 
      <div key={comment.id} className="ui comments">
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
      <form className="ui reply form">
          <div className="field">
            <textarea></textarea>
          </div>
          <div className="ui labeled submit icon button">
            <i className="icon edit blue"></i> Add Reply
          </div>
        </form>
    </div>
  );
}

export default Comment;
