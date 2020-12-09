import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import NoteCard from './NoteCard'
import NoteShow from './NoteShow'
import { connect } from 'react-redux'


const NotesContainer = ( props ) => {
    return (
      <Switch>
        <Route path='/notes/:noteId' render={(route) => {
            debugger
            const id = route.match.params.noteId
            const note = this.state.notes.find(note => note.id === id)
            return <NoteShow note={note}/>
        }} />
        <Route path='/' render={() => {
          return <div>
          {
            props.notes.map(note => {
              return <NoteCard key={note.id} {...note} history={props.history}/>
            })
          }
          </div>
        }} />
    </Switch>
  )
}

const mapStateToProps = (state) => {
    return {
      notes: state.notes
    }
  }

  export default connect(mapStateToProps, null)(NotesContainer);