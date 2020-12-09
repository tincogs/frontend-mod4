
import React from 'react';
import { connect } from 'react-redux'
import { loginUser } from '../actions/auth'
import { Button, Checkbox, Form } from 'semantic-ui-react'


class Login extends React.Component {
  state = {
    username: '',
    error: null
  }

  handleInputChange = (e) => {
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
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:3000/users', reqObj)
    .then(resp => resp.json())
    .then(data => {

      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.props.loginUser(data)
        this.props.history.push('/')
      }
    })

  }


  render(){

    return (
      <div className='App-header'>
        <Form onSubmit={this.handleSubmit}>
        {this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null}
        <h3>Sign in</h3>
          <Form.Field>
          <input style={{width:'200px'}}placeholder='Username' name={'username'} onChange={this.handleInputChange} value={this.state.username} />
          <br />
          </Form.Field>
          <br />
          <Button type='submit' value='login' >Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  loginUser: loginUser
}

export default connect(null, mapDispatchToProps)(Login)