import React, { useReducer } from 'react'

// Example for useReducer, used to handle complex state transitions (can probably be done cleaner with useState tbh)

const initialState = { rValue: true }

type State = {
  rValue: boolean;
}

type Action = {
  type: string;
  // can take a payload
  // payload: any
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'one':
      return { rValue: true }
    case 'two':
      return { rValue: false }
    default:
      return state
  }
}

export const ReducerButtons = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <button onClick={() => dispatch({type: "one"})}>Action One</button>
      <button onClick={() => dispatch({type: "two"})}>Action Two</button>
    </div>
  )
}
