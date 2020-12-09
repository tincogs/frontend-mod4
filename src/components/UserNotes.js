

import React from 'react'
import { connect } from 'react-redux'
import { deleteNote, editNote } from '../actions/index'
import { Button, Form } from 'semantic-ui-react'


class UserNotes extends React.Component {

  handleDelete = () => {
    fetch(`http://localhost:3000/notes/${this.props.id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then(data => {
      this.props.deleteNote(this.props.id)
    })
  }

  handleEdit = () => {
    console.log(this.props)
    // this.props.history.push(`/notes/edit/${this.props.id}`)
  }


  render(){
    const cardStyle = { border: '1px solid white',  padding: '2%', width: '400px', height: '150px', display: 'center'}
    const headerStyle = this.props.completed ? { color: 'red'} : {color: 'black'}

    return (
      <div className='App-header' style={{alignItems:'center'}}>
      <h2 style={headerStyle} >{this.props.title}</h2>
      <p style={headerStyle} >{this.props.content}</p>
      <Button onClick={this.handleDelete} style={{width:'400px'}}>Delete Quote</Button>
      <br />
      <Button onClick={() => {
        this.props.editNote(this.props)
        this.props.history.push(`/notes/edit/${this.props.id}`)
      }} style={{width:'400px'}} >
      Edit Quote
      </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserNotes)