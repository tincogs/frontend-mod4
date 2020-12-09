import './App.css';
import Navbar from './components/Navbar'
import NotesContainer from './components/NotesContainer'
import UserNotesContainer from './components/UserNotesContainer'
import Home from './components/Home'
import Login from './components/Login'
import NoteEditForm from './components/NoteEditForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotesSuccess } from './actions/index'
import NewNoteContainer from './components/NewNoteContainer';
import NoteShow from './components/NoteShow';

class App extends Component {

  componentDidMount(){
    fetch('http://localhost:3000/notes')
    .then(resp => resp.json())
    .then(notes=> {
      this.props.fetchNotesSuccess(notes)
      })
    }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar style={{position:'fixed'}}/>
            <br />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route exact path='/notes' component={NotesContainer} />
            <Route exact path='/my_notes' component={UserNotesContainer} />
            <Route exact path='/notes/new' component={NewNoteContainer} />
            <Route path='/notes/edit' component={NoteEditForm} />
            <Route exact path='/notes/:noteId' component={NoteShow} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  fetchNotesSuccess: fetchNotesSuccess
}

export default connect(null, mapDispatchToProps)(App)