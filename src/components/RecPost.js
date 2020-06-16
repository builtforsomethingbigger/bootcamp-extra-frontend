import React from 'react';


function RecPost(props) {
    return(
        <div className="ui list table blue">
                <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <td><h3 className="header">{props.title}</h3></td>
                        </tr>
                        <tr>
                            <td className="description"><b>Author:</b> {props.author}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    )
}
export default RecPost;