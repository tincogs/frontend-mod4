

import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { deleteNote, editNote } from '../actions/index'

const link = {
  padding: '12px',
  margin: '0 25px 25px',
  background: 'black',
  textDecoration: 'none',
  color: 'white',
  borderRadius: '10px'
}

class NoteCard extends React.Component {

  render(){
    const cardStyle = { border: '1px solid white',  padding: '2%', width: '400px', height: '150px', display: 'center'}
    const headerStyle = this.props.completed ? { color: 'red'} : {color: 'black'}

    return (
      <div className='App-header'>
        <NavLink
          to={{
            pathname:`/notes/${this.props.id}`,
          ...this.props}}
          style={link}
          >{this.props.title}</NavLink>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = {
  deleteNote,
  editNote
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteCard)