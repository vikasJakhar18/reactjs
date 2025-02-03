//App.jsx

import './App.css'
import Counter from './components/counter'

function App() {

  return (
    <>
      <Counter/>
    </>
  )
}

export default App

//Components.....................................................
//Counter.jsx
import React, { useState } from 'react'
import './Counter.css'

export default function counter() {

 const [count,setCount]=useState(0)
  return (
    <div className='counter'>
      <p id='para'> you have clicked {count} times</p>
      <button id='btn' onClick={()=>{setCount(count+1)}}> click me!</button>
    </div>
  )
}

//Counter.css

.counter{
    background-color: #fff;
    color: black;
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    padding: 1.5rem;
    border: 2px solid black;
}

