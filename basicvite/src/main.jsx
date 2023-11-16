import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './styles/main.css'
const MyApp=()=>{
    return(<div>
        <h1>Hello World</h1>
    </div>
    )
}
export default MyApp;

// const Link =(
//     <a href='https://google.com'rel='noreferrer' target='_blank'>Visit google</a>
// )

const readReact = React.createElement(
    'a',
    {href:"https://google.com",target:"_target"},
    "click to visite Google SE"
)

ReactDOM.createRoot(document.getElementById('root')).render(
   <div>
   <App />
   <MyApp />
   {readReact}
    </div>
)
