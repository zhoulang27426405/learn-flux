import React, { useState, useEffect } from 'react'
import { createStore, applyMiddleware } from './redux'
import reducer from './reducers/index'

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
  <h1>{value}</h1>
  <button onClick={onIncrement}>+</button>
  <button onClick={onDecrement}>-</button>
  </div>
)

// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT': return state + 1
//     case 'DECREMENT': return state - 1
//     default: return state
//   }
// }

function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

function logger2({ getState }) {
  return next => action => {
    console.log('will dispatch2', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch2', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

const store = createStore(reducer, 0, applyMiddleware(logger2, logger))
console.log(store.getState())
// {
//   counter: 0,
//   todos: []
// }

store.dispatch({
  type: 'ADD_TODO',
  text: 'Use Redux'
})
console.log(store.getState())
// {
//   counter: 0,
//   todos: [ 'Use Redux' ]
// }

const App = () => {
  const [ count, setCount ] = useState(store.getState().counter)

  useEffect(() => {
    return store.subscribe(() => setCount(store.getState().counter))
  })

  return (
    <Counter
      value={count}
      onIncrement={() => store.dispatch({type: 'INCREMENT'})}
      onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />
  )
}

export default App
