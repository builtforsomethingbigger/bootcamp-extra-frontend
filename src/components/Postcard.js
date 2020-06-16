import React from 'react';
import { useHistory } from 'react-router-dom';



function Postcard(props) {
  let history = useHistory()

  const { id, title, description, likes } = props
  console.log(props)
  return (
    <div className="PostsPage pad_10">
      <div className="ui marg_10 container floatCard radius_round">
          <div className="ui left aligned table pad_20 blue">
              <div className="content" onClick={() => history.push(`/posts/${id}`)}>
                  <table>
                      <tbody>
                          <tr>
                              <td><h1 className="header"  >{title}</h1></td>
                          </tr>
                          <tr>
                              <td className="description"><b>Description:</b> {description}</td>
                          </tr>
                          <tr>
                              <td className="extra"><b>likes:</b> {likes}</td>
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