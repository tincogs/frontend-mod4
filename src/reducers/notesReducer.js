
const notesReducer = (state=[], action) => {
    let updatedNotes = []
    let sortedNotes = []
    switch(action.type){
        case 'FETCH_NOTES_SUCCESS':
            return action.notes.sort((a,b) => a.id - b.id)
        case 'ADD_NOTE':
            return [...state, action.newNote]
        case 'EDIT_NOTE':
            sortedNotes = state.map(note => {
                if(note.id === action.editedNote.id){
                  return action.editedNote
                } else {
                  return note
                }
              })
            updatedNotes = sortedNotes.sort((a,b) => a.id - b.id)
            return updatedNotes
        case 'DELETE_NOTE':
            updatedNotes = state.filter(note => note.id !== action.id)
            console.log(updatedNotes)
            return updatedNotes
        default:
            return state
    }
}

export default notesReducer