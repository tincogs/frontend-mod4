import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutUser } from '../actions/auth'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 25px 25px',
  background: 'black',
  textDecoration: 'none',
  color: 'white',
  borderRadius: '10px'
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact style={link}
          activeStyle={{
            background: 'white',
            color: 'black'
          }}
        >Home</NavLink>
        <NavLink
          to="/notes"
          exact
          style={link}
          activeStyle={{
            background: 'white',
            color: 'black'
          }}
        >All Quotes</NavLink>
        <NavLink
          to="/my_notes"
          exact
          style={link}
          activeStyle={{
            background: 'white',
            color: 'black'
          }}
        >My Quotes</NavLink>
        <NavLink
          to="/notes/new"
          exact
          style={link}
          activeStyle={{
            background: 'white',
            color: 'black'
          }}
        >New Quote</NavLink>
        {
          this.props.user
          ?
          <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'white',
            color: 'black'
          }}
        >
          Logout
        </NavLink>
          :
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'white',
            color: 'black'
          }}
        >
          Login
        </NavLink>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {logoutUser} )(Navbar);