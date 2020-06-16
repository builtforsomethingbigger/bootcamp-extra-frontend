import React from 'react';
import { useHistory } from 'react-router-dom';



function Postcard(props) {
  // console.log(props)
  let history = useHistory()

  const { id, title, description } = props
  // console.log(props)
  return (
    // <div className="ui items">
    //   <div className="item">
    //     <div className="image">
    //       <img src={url_link} alt='#'/>
    //     </div>
    //     <div className="content">
    //       <a className="header">{title}</a>
    //       <div className="meta">
    //         <span>{description}</span>
    //       </div>
    //       <div className="description">
    //         <p></p>
    //       </div>
    //       <div className="extra">
    //         likes: {likes}
    //       </div>
    //     </div>
    //   </div>

    // </div>

    <div className="ui marg_10">
      <div className="ui left aligned table pad_20">
        <div className="content">
          <h1 className="header" onClick={() => history.push(`/posts/${id}`)} >{title}</h1>
          <div className="description"><b>Description:</b> {description}</div>
          <button onClick={() => history.push(`/posts/${id}`)} > Visit Post </button>
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