import React, { useState, useEffect } from 'react'
import ButtonActions from '../actions/ButtonActions'
import ListStore from '../stores/ListStore'

const MyButtonController = () => {
  const [ items, setItems ] = useState([])

  useEffect(() => {
    ListStore.addChangeListener(() => setItems([...ListStore.getAll()]))
    return () => ListStore.removeChangeListener()
  })
  function onClick() {
    ButtonActions.addNewItem('new item')
  }
  return (
    <div>
      <ul>{items.map((item, i) => (<li key={i}>{item}</li>))}</ul>
      <button onClick={onClick}>New Item</button>
    </div>
  )
}

export default MyButtonController
