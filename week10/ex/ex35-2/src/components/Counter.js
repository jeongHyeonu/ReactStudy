/**
 * ch07/ex/proj/ex07-03-2
 * ./src/components/Counter.js
 */

import React, { useState } from 'react';
import { useCounter } from '../hooks/hooks';
import Door from './Door';
import Passenger from './Passenger';

const Counter = ({ max }) => {
  const [maxSeat, setMaxSeat] = useState(max);
  const [count, empty, full, increaseCount, decreaseCount] = useCounter(maxSeat);
  
  const onChangeMaxSeat = e => setMaxSeat(e.target.value);
  
  return (
    <>
      <Door full={full} />
      <Passenger count={count} />
      <h2>{count} of {maxSeat} seated</h2>
      <div>
        <input value={maxSeat} placeholder={max} onChange={onChangeMaxSeat} />
        <button onClick={decreaseCount} disabled={empty}>Get out</button>
        <button onClick={increaseCount} disabled={full}>Get in</button>
      </div>      
      <p>Custom hooks example at WF1 week 9</p>
    </>    
  )
};

export default Counter;