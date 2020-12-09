import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import NewNoteForm from './NewNoteForm'
import { connect } from 'react-redux'


const NewNoteContainer = ( props ) => {
    return (
    <div className='App-header'>
    { props.auth
        ?
        <NewNoteForm history={props.history}/>
        :
        <h1>Please log in to submit a new movie quote.</h1>
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

  export default connect(mapStateToProps, null)(NewNoteContainer);