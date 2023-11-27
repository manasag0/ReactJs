
import { useState } from 'react'
import './tictactoe.css'

let data = [ "","","","","","","","","", ]

const tictactoe = () =>{
    let [count,setCount] = useState(0);
    let [lock,setLock]  =  useState(false)

    const toggle = (e,num) =>{
        if(lock){
            return 0;
        }
        if(count%2===0){
            e.target.innerHTML = `<img src="${'react/src/assets/circle-ring.png'}">`;
            data[num]="x";
            setCount(++count)
        }else{
            e.target.innerHTML = `<img src="${'react/src/assets/cancel.png'}">`;
            data[num] ="o";
            setCount(++count)
        }        
    }

 }

function Tictactoe() {
  return (
    <div className='text-center'>
      <h2 className=' text-green-600 text-5xl text-waight-600 text-center mb-10 font-bold'>Tictac toe</h2>
        <div className='container-a flex justify-center space-x-1'>
            <div className="row1 space-y-1">
                <div className="boxes" onClick={(e)=>{toggle()}}></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
            <div className="row1 space-y-1">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>
            <div className="row1 space-y-1">
                <div className="boxes"></div>
                <div className="boxes"></div>
                <div className="boxes"></div>
            </div>

        </div>

        <button className='bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded  mt-10 w-15 min-w-678' >Reset</button>
    </div>
  )
}

export default Tictactoe
