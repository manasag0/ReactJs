

import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("aqua")

  // function changeColor(color){
  //   setColor(color)
  // }

  return (
 
      <div className="w-full h-screen bg-green-200" style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-green-500' >
      <button className='bg-gray-400 rounded-md p-1 m-1 w-16' onClick={()=>setColor("red")} >red</button> 
      <button onClick={()=>setColor("green")} className='bg-gray-400 rounded-md p-1 m-1 w-16'>green</button>
      <button onClick={()=>setColor("yellow")}className='bg-gray-400 rounded-md p-1 m-1 w-16'>Yellow</button>
      <button onClick={()=>setColor("white")} className='bg-gray-400 rounded-md p-1 m-1 w-16'>white</button>
      <button onClick={()=>setColor("aqua")}className='bg-gray-400 rounded-md p-1 m-1 w-16'>aqua</button>
      <button onClick={()=>setColor("gray")}className='bg-gray-400 rounded-md p-1 m-1 w-16'>gray</button>
      <button onClick={()=>setColor("#342")}className='bg-gray-400 rounded-md p-1 m-1 w-16'>#342</button>

      </div>
      </div>
      </div>

  )
}

export default App
