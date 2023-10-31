/**
 * ch07/ex/ex33-1
 * ./src/components/Counter.js
 */
// import reference libraries and modules
/* code here */
import React, { useState } from 'react';

const Counter = props => {
  // useState(): 
  // declare a state variable and a state update function
  // with initial value from props
  /* code here */
  const [value, setValue] = useState(props.value)
  
  return (
    <div>
      <p>Current counter value is <b>{value}</b>.</p>
      <button onClick={()=>{setValue(value-1)}}>-1</button>
      <button onClick={()=>{setValue(value+1)}}>+1</button>
    </div>    
  )
};

// export this component
/* code here */
export default Counter;