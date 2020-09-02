import AppDispatcher from '../dispatcher/AppDispatcher'

const ButtonActions = {
  addNewItem: function(text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text
    })
  }
}

export default ButtonActions
