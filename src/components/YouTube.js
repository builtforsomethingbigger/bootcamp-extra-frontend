import React from 'react'

export default class YouTube extends React.Component{
    
    
    render(){    
        return(
            <div style={{display: this.props.display? 'block' : 'none'}}>
                <button className="youTubeClose" onClick={this.props.onClick}>Close Video</button>
                <iframe id="youTube"
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${this.props.link}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen">
                </iframe>
            </div>
        )
    }
}
