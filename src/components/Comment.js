import React from "react";

const COMMENT_URL = 'http://localhost:3000/api/v1/comments'
export default class Comment extends React.Component {

  state = {
    commentArea: ''
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
  onSubmit = e => {
    e.preventDefault()
    fetch(COMMENT_URL, {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: this.state.commentArea
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      // .then(newUser => {
      //     this.props.addNewUser(newUser)
      //     this.setState({
      //       commentArea: ''
      //     })
      // })
    this.props.fetchComments()
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    const postComments = this.props.comments.filter(
      (comment) => comment.post_id === this.props.post.id)
  
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
        <form onSubmit={this.onSubmit} className="ui reply form">
          <div className="field">
            <textarea name="commentArea" value={this.state.commentArea} onChange={this.onChange}></textarea>
          </div>
          <button className="ui labeled submit icon button" type="submit">
            <i className="icon edit blue" type="submit"></i> Add Reply
          </button>
        </form>
      </div>
    );
  }
}
