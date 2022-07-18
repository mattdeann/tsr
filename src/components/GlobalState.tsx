import { createContext, PropsWithChildren, useReducer } from 'react';

export const initialValues = {
  rValue: true,
  turnOn: () => { },
  turnOff: () => { }
}

export const GlobalContext = createContext(initialValues)

// Provider
type State = {
  rValue: boolean;
  turnOn: () => void;
  turnOff: () => void;
}

type Action =
  | {
    type: 'one'
    // can take a payload
    // payload: any
  }
  | { type: 'two' }
  | { type: 'three' }

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

type Props = { children?: React.ReactNode }

export const GlobalProvider: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues) // next line replaced state with context, dispatch is still its own function



  return (
    <GlobalContext.Provider value={{ rValue: state.rValue, turnOff: () => dispatch({ type: "two" }), turnOn: () => dispatch({ type: "one" }) }}>
      {children}
    </GlobalContext.Provider>
  )
}