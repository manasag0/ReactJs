// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'

function App() {
  const [counter,setCouter] = useState(0)
  const addValue = () =>{
    setCouter(counter +1);
  }
  const removeValue =() =>{
    setCouter(counter-1);
  }
  const reset=()=>{
    setCouter(0)
  }
  return (
    <>
      <h1>Manasa learning react</h1>
      <h2>Conter Value:{counter}</h2>
      <button onClick={addValue}>Add value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
      {" "}<button onClick={reset}>React</button>
      <p>footer{counter}</p>
    </>
  )
}

export default App
