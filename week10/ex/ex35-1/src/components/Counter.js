/**
 * ch07/ex/ex35-1
 * ./src/components/Counter.js
 */

import React, { useReducer, useState } from 'react';
import Door from './Door';
import Passenger from './Passenger';

const Counter = ({ max }) => {
  const [maxSeat, setMaxSeat] = useState(max);
  const reducer = (state, action) => {
    switch (action.type){
      case 'INC':
        return state >= maxSeat ? state : state + 1;
      case 'DEC':
        return state == 0 ? state : state - 1;
      default:
        return state;
    }
  }
  const [counter, dispatch] = useReducer(reducer, 0);
  const increaseCount = () => dispatch({ type: 'INC' });
  const decreaseCount = () => dispatch({ type: 'DEC' });

  const onChangeCapacity = e => setMaxSeat(e.target.value); 
  
  const isFull = counter >= maxSeat;
  const isEmpty = counter == 0;

  return (
    <>
      <Door full={isFull} />
      <Passenger count={counter} />
      <h2>{counter} of {maxSeat} seated</h2>
      <div>
        <input value={maxSeat} placeholder={maxSeat} onChange={onChangeCapacity} />
        <button onClick={decreaseCount} disabled={isEmpty}>Get off</button>
        <button onClick={increaseCount} disabled={isFull}>Take in</button>
      </div>
      <p>useState() and useReducer() hooks example at WF1 week 9</p>
    </>    
  )
};

export default Counter;