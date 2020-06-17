import React from 'react'

export default class YouTube extends React.Component{
    state = {
        queryString: ''
    }

    iframeConvert = () => {
        const stringArray = this.state.queryString.split('=')
        this.setState({
            queryString: stringArray[1]
        })
    }

    render(){

        return(
            <div id="youTube" style={{display: this.props.display? 'block' : 'none'}}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${this.state.queryString}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        )
    }
}