
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editNote } from '../actions/index.js'
import { Button, Form } from 'semantic-ui-react'

class NoteEditForm extends Component {
    state = {
             title: this.props.edit.title,
             content: this.props.edit.content,
             user: this.props.edit.user
        }


    handleInputChange = (e) => {
        console.log(this.props)
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      handleSubmit = (e) => {
        e.preventDefault()

        const reqObj = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...this.state})
        }

        fetch(`http://localhost:3000/notes/${this.props.edit.id}`, reqObj)
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            this.setState({
              error: data.error
            })
          } else {
            this.props.editNote(data)
            this.props.history.push('/my_notes')
          }
        })
    }

    render() {
        return (
            <div className='App-header'>
              <Form onSubmit={this.handleSubmit}>
              <h3>Add New Note</h3>
              <Form.Field>
              <input style={{width:'200px'}} name={'title'} placeholder='Title' onChange={this.handleInputChange} value={this.state.title} /><br />
              </Form.Field>
              <Form.Field>
              <textarea style={{width:'300px'}} name={'content'} placeholder='Content' onChange={this.handleInputChange} value={this.state.content} /><br />
              </Form.Field>
              <br />
              <Button type='submit' >Submit</Button>
              </Form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    editNote
}

const mapStateToProps = (state) => {
  return {
    edit: state.edit
  }
}
  export default connect(mapStateToProps, mapDispatchToProps)(NoteEditForm)