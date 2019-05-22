
import React, { useState } from 'react'

function BtnHook() {

  // Declare a new state variable : "counter" & its setter method.
  const [counter, setCounter] = useState(4)  // setting the initial val to 4.


  return (
    <div>
      <h2>Clicked count:  {counter} </h2> <br /><br />
      <button onClick={() => setCounter(counter + 1)}> Increment</button>
    </div>
  )
}

export default BtnHook ;