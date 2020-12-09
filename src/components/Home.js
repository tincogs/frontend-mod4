import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className='App-header'style={{alignItems:'center'}}>
                <h1>Assorted Movie Quotes</h1>
                <h3> Whaddya want from me? </h3><br />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YlyXZG2dupo?controls=0&amp;start=7&end=23"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}