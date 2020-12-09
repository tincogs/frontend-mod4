import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import UserNotes from './UserNotes'
import { connect } from 'react-redux'


const UserNotesContainer = ( props ) => {
    return (
    <div className='App-header'>
    { props.auth
        ?
        props.notes.map(note => {
            if (note.user.id === props.auth.id){
                return <UserNotes key={note.id} {...note} history={props.history}/>
            }
        })
        :
        <h1>You have no quotes saved.<br /> Log in to submit your favorites!</h1>
    }
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      notes: state.notes,
      auth: state.user
    }
  }

  export default connect(mapStateToProps, null)(UserNotesContainer);