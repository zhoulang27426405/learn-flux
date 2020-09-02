import { event } from '../util'
const ListStore = {
  items: [],

  getAll: function() {
    return this.items
  },

  addNewItemHandler: function(text) {
    this.items.push(text)
  },

  emitChange: function() {
    event.emit('change')
  },

  addChangeListener: function(callback) {
    event.on('change', callback);
  },

  removeChangeListener: function(callback) {
    event.off('change', callback);
  }
}

export default ListStore
