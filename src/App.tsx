import React, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { Head } from './components/Head';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ReducerButtons } from './components/ReducerButtons';
import { BetterReducer } from './components/BetterReducer';
import { useClickOutside } from './useClickOutside';
import { GlobalProvider } from './components/GlobalState';


function App() {

  const ref = useRef<HTMLDivElement>(null!)
  useClickOutside(ref, () => { console.log("Clicked outside") })


  return (
    <GlobalProvider>
      <div className="App" ref={ref}>
        <Head title={"hello"} isActive={false} />
        <Button onClick={e => {
          e.preventDefault()
          console.log(e)
        }}>
          Hello FC
        </Button>
        <ReducerButtons />
        <BetterReducer />
        <Input />
      </div>
    </GlobalProvider>
  );
}

export default App;
