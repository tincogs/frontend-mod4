
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/index.js'
import { Button, Form } from 'semantic-ui-react'

class NewNoteForm extends Component {
    state = {
             title: '',
             content: '',
             user_id: this.props.user.id
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
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...this.state})
        }

        fetch('http://localhost:3000/notes', reqObj)
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            this.setState({
              error: data.error
            })
          } else {
            this.props.addNote(data)
            this.props.history.push('/my_notes')
          }
        })
    }

    render() {
        return (
            <div className='App-header'>
              <Form onSubmit={this.handleSubmit}>
              <h3>Add New Quote</h3>
              <Form.Field>
              <input style={{width:'200px'}} name={'title'} placeholder='Title' onChange={this.handleInputChange} value={this.state.value} /><br />
              </Form.Field>
              <Form.Field>
              <textarea style={{width:'300px'}}name={'content'} placeholder='Content' onChange={this.handleInputChange} value={this.state.value} /><br />
              </Form.Field>
              <br />
              <Button type='submit' >Submit</Button>
              </Form>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addNote: addNote
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
  export default connect(mapStateToProps, mapDispatchToProps)(NewNoteForm)