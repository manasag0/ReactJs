import { useState, useCallback, useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow,setNumAllow] = useState(false)
  const [charAllow,setCharAllow] = useState(false)
  const [passward, setPassword] =useState("")

  const generatePassword= useCallback(()=>{
    let password=""
    let string =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVW"
    if(numAllow) string += "0123456789"
    if(charAllow) string += '!@#$%^&*()_+'
    for(let i = 1; i<length;i++){
     const char =  Math.floor(Math.random() * string.length+1);
     password +=string.charAt(char)
    }
    setPassword(password)
  },[length,numAllow,charAllow])

  // use effect to run the function when length changes
  useEffect(() => {
    generatePassword();
    }, [generatePassword]);

    const passwordRef = useRef(null)

    const copyPassword =()=>{
      window.navigator.clipboard.writeText(passward)
      passwordRef.current?.select()  }

  

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-orange-500' >
      <h1 className='text-white text-center my-3 text-3xl '>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden">
      <input type="text" value={passward} className='outline-none w-full py-1 px-3' name="" id="" placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button className='outline-none text-white bg-blue-600 py-0.5 px-5 shrink-0'onClick={copyPassword} >Copy</button>
      </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input 
            type='range'
            value={length}
            min={6}
            max={100}
            className='cursor-pointer'
            name=''
            id=''
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type='checkbox'
            defaultChecked={numAllow}

            onChange={()=>{
              setNumAllow((prev)=>!prev)
            }}
            />
            <label htmlFor="length">Number: </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
            type='checkbox'
            defaultChecked={charAllow}

            onChange={()=>{
              setCharAllow((prev)=>!prev)
            }}
            />
            <label htmlFor="length">Characters: </label>
          </div>
        
        </div>
      </div>
    </>

  )
}

export default App
