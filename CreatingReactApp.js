//App.js

import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Hello , My name is Vikas Choudhary</p>
    </>
  )
}

export default App

//index.css

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

body{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
