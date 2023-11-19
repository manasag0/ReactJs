
import './App.css'
import Card from './components/Card'

function App() {

let newArr =[1,2,4,5,5]
  return (
    <>
      <Card username="Veena" role="eng.."  myarr ={newArr}/>
      <Card username="maria" role="door opener"/>
    </>
  )
}

export default App
