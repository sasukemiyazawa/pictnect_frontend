import './App.css'
import Getdata from './components/Getdata'
import Senddata from './components/Senddata'

function App() {
  const baseURL = "http://localhost:3001/api/v1/"
  return (
    <div className="App">
      <Getdata baseURL={baseURL}/>
      <br/>
      <br/>

      <Senddata baseURL={baseURL}/>
    </div>
  )
}

export default App
