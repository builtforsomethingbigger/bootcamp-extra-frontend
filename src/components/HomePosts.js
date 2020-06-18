import React from 'react';

export default class HomePosts extends React.Component {

    state = {
        index: 0
    }

    nextIndex = e => {
        const index = this.state.index
        if (index < this.props.posts.length){
            this.setState({
                index: index + 5
              })
        }
    }

    prevIndex = e => {
        const index = this.state.index
        this.setState({
            index: index - 5
          })
    }
    
    findAuthor = (authors, postId) => {
        const commentAuthor = authors.find((author) => author.id === postId);
        if (commentAuthor) {
            return commentAuthor.username;
        } else {
            return "Author";
        }
    };


    render(){
        console.log(this.state)
    return (  
        <div className="PostsPage margin_left_20">
            {this.props.posts.sort((a, b) => b.likes - a.likes).map(post =>
                <div key={post.id} className="ui marg_10 container floatCard radius_round" onClick={this.onClick}>
                    <div className="ui left aligned table pad_20 blue">
                        <div className="content" onClick={() => this.props.history.push(`/posts/${post.id}`)}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td colSpan="2"><h1 className="header">{post.title}</h1></td>
                                    </tr>
                                    <tr>
                                        <td className="description"><b>Author:</b> {this.findAuthor(this.props.authors, post.user_id)}</td>
                                        <td className="extra"><b>likes:</b> {post.likes}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                </div>
            )
            .slice(this.state.index, this.state.index+5)
            }
            <table className="pad_20" width="380" border="0" cellSpacing="0" cellPadding="0" align="left">
                <tr>
                    <td width="190" ><button class="ui left labeled icon button" onClick={this.prevIndex}><i class="left arrow icon"></i>Previous Page</button></td>
                    <td width="190" ><button class="ui right labeled icon button" onClick={this.nextIndex}>Next Page<i class="right arrow icon"></i></button></td>
                </tr>
            </table>

        </div>
    )}
}
