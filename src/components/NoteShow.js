import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom';

const NoteShow = (props) => {
    // let noteID = parseInt(props.match.params.noteId)
    // let note = this.props.notes.find(note => note.id == noteID)
    console.log(props.location.noteProps)
    console.log(props.match.params.noteId)
    console.log(props)
    return (
        <Route path='/notes/:noteId' render={(route) => {
            const id = route.match.params.noteId
            const note = props.notes.find(note => note.id == id)
            return (
                <div className='App-header'>
                    <h1>{note.title}</h1>
                    <h1>{note.content}</h1>
                </div>
             ) }} />
      );
}

const mapStateToProps = (state) => {
    return{
        notes: state.notes
    }
}

export default connect(mapStateToProps, null)(NoteShow)