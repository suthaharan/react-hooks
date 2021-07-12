import React, { useState } from 'react';
import {ClassCounter} from './components/ClassCounter';
import FuncObject from './components/FuncObject';
import FuncArray from './components/FuncArray';
import { HookEffect1 } from './components/HookEffect1';
import { HookEffect2 } from './components/HookEffect2';

function App() {

  // function initialCount(){
  //   console.log("Initial count setter called!");
  //   return 5;
  // }
  // // const [count, setCount] = useState((initialCount));

  // const [count, setCount] = useState(() => initialCount());

  const [state, setCount] = useState({count: 2, flight: 'dhl' });
  const count = state.count;
  const flight = state.flight;

  function decrementCount(){
    //setCount(passCount => passCount-1);
    setCount(prevState => {
      return {...prevState, count: prevState.count-1};
    })
  }
  function incrementCount(){
    //setCount(passCount => passCount+1);
    setCount(prevState => {
      return {...prevState, count: prevState.count+1};
    })
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}-{flight}</span>
      <button onClick={incrementCount}>+</button>
      <ClassCounter />
      <FuncObject />
      <FuncArray />
      <HookEffect1 />
      <HookEffect2 />
    </>
  );
}

export default App;
