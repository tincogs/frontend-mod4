const editReducer = (state={}, action) => {
    switch(action.type){
      case 'EDIT_NOTE':
        return action.editedNote
      default:
        return state
    }
  }

  export default editReducer