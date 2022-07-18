import React, { useReducer, useContext } from 'react'
import { GlobalContext } from './GlobalState';

// Example for useReducer, used to handle complex state transitions (can probably be done cleaner with useState tbh)


export const BetterReducer = () => {

  const {rValue, turnOn, turnOff} = useContext(GlobalContext);

  return (
    <div>
      <h1>{rValue.toString()}</h1>
      <button onClick={turnOn}>Action One</button>
      <button onClick={turnOff}>Action Two</button>
      <button onClick={turnOn}>Action Three</button>
    </div>
  )
}
