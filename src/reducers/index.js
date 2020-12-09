import { combineReducers } from 'redux'
import userReducer from './userReducer'
import notesReducer from './notesReducer'
import editReducer from './editReducer'

export default combineReducers({
    user: userReducer,
    notes: notesReducer,
    edit: editReducer
})