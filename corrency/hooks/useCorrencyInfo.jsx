import { useEffect, useState } from 'react'

export default function useCorrencyInfo(currency) {
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(``)
        .then(res => res.json())
        .then((res) => {
            setData(res[currency])
            })
    },[currency] )
  return (
    <div>
      {data}
    </div>
  )
}
