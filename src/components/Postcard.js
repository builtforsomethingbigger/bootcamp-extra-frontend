import React from 'react';
import { useHistory } from 'react-router-dom';



function Postcard(props) {
  let history = useHistory()
  const findAuthor = (authors, postId) => {
    const commentAuthor = authors.find((author) => author.id === postId);
    if (commentAuthor) {
        return commentAuthor.username;
    } else {
        return "Author";
    } 
  };
  const { id, title, description, likes } = props
  return (
    <div className="PostsPage pad_10">
      <div className="ui marg_10 container floatCard radius_round">
          <div className="ui left aligned table pad_20 blue">
              <div className="content" onClick={() => history.push(`/posts/${id}`)}>
                  <table>
                      <tbody>
                          <tr>
                              <td colSpan="2"><h1 className="header"  >{title}</h1></td>
                          </tr>
                          <tr>
                              <td colSpan="2" className="description"><b>Description:</b> {description}</td>
                          </tr>
                          <tr>
                              <td className="extra"><b>Author:</b> {findAuthor(props.authors, props.user_id)}</td>
                              <td className="extra"><b>Likes:</b> {likes}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
</div>

  );
}

export default Postcard;

// t.string "title"
// t.string "description"
// t.integer "likes"
// t.string "url_link"
// t.datetime "created_at", precision: 6, null: false
// t.datetime "updated_at", precision: 6, null: false