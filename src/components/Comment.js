import React from 'react';
// import { Route, Switch } from 'react-router-dom';

function Comment(props) {
  console.log(props)
  return (
    <div className="ui text container">
      <div className="ui comments">
        <h3 className="ui dividing header blue">Comments</h3>
        <div className="comment">
          <div className="content">
            <a className="author">{props.user}</a>
            <div className="metadata">
              <span className="date">{props.created_at}</span>
            </div>
            <div className="text">
              {props.comment}
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="content">
            <a className="author">Elliot Fu</a>
            <div className="metadata">
              <span className="date">Yesterday at 12:30AM</span>
            </div>
            <div className="text">
              <p>This has been very useful for my research. Thanks as well!</p>
            </div>
          </div>
          <div className="comments">
            <div className="comment">
              <div className="content">
                <a className="author">Jenny Hess</a>
                <div className="metadata">
                  <span className="date">Just now</span>
                </div>
                <div className="text">
                  Elliot you are always so right :)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="content">
            <a className="author">Joe Henderson</a>
            <div className="metadata">
              <span className="date">5 days ago</span>
            </div>
            <div className="text">
              Dude, this is awesome. Thanks so much
            </div>
          </div>
        </div>
        <form className="ui reply form">
          <div className="field">
            <textarea></textarea>
          </div>
          <div className="ui labeled submit icon button">
            <i className="icon edit blue"></i> Add Reply
          </div>
        </form>
      </div>
    </div>
  );
}

export default Comment;
