// import React from 'react'
import "./CounterApp.css"
import { useState } from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='dis'>
      <h1 className='header'>{count}</h1>
      <button className='btn' onClick={() => {setCount(count+1)}}>Increment</button>
      <button className='btn' onClick={() => {setCount(0)}}>Reset</button>
      <button className='btn' onClick={() => {setCount(count-1)}}>Decrement</button>
    </div>
  )  
}
export default CounterApp
