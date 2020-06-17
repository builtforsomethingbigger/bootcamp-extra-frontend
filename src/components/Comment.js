import React from "react";

const COMMENT_URL = 'http://localhost:3000/api/v1/comments'
export default class Comment extends React.Component {

  state = {
    user_id: '',
    post_id: '',
  }

  findAuthor = (authors, userId) => {
    const commentAuthor = authors.find((author) => author.id === userId);
    if (commentAuthor) {
      return commentAuthor.username;
    } else {
      return "Author";
    }
  };

  formatDate = (date) => {
    const parsedDate = date.split("T");
    return parsedDate[0];
  };


  render() {
    const postComments = this.props.comments.filter(
      (comment) => comment.post_id === this.props.post.id)
      // console.log(this.props)
  
    return (
      <div className="ui text container commentContainer">
        <h3 className="ui dividing header">Comments</h3>
        {postComments.map((comment) => 
          (<div key={comment.id} className="ui comments">
            <div className="comment">
              <div className="content">
                <a className="author">
                  {this.findAuthor(this.props.authors, comment.user_id)}
                </a>
                <div className="metadata">
                  <span className="date">
                    Posted: {this.formatDate(comment.created_at)}
                  </span>
                </div>
                <div className="text">{comment.text}</div>
              </div>
            </div>
          </div>)
        )}
      </div>
    );
  }
}
