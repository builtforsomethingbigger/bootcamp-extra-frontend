import React from 'react';


function Postcard(props) {
  // console.log(props)
  const { title, description, likes, url_link } = props
  console.log(props)
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

    <div class="ui container marg_10">
      <div class="ui left aligned table pad_20">
        <div class="content">
          <h1 class="header">{title}</h1>
          <div class="description"><b>Description:</b> {description}</div>
          <div><b>Resource Link:</b> <a class="header"> {url_link}</a></div>
          <div className="extra"><b>likes:</b> {likes}</div>
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