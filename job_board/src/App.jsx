import { useState } from 'react'

import './App.css'

const END_POINT = "https://hacker-news.firebaseio.com/v0/jobstories.json"
const EXAMPLES = {
  "by": "jamilbk",
  "id": 35908337,
  "score": 1,
  "time": 1683838872,
  "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
  "type": "job",
  "url": "https://www.ycombinator.com/companies/firezone/jobs"
}

function App() {
  const [items, setItems] = useState([])
  function

  return (
    <div>
       <h1>Hacker News</h1>
       {
        items.length<1?(
          <p>Loading...</p>
        ):(
          <div>
            <div className='items' role='list'>
              <KobPosting />
            </div>

        )
       }
    </div>
  )
}

export default App
