import './App.css'
import Getdata from './components/Getdata'
import Senddata from './components/Senddata'
import Signage from './components/Signage'

function App() {
  const baseURL = "http://localhost:3001/api/v1/"
  return (
    <div className="App">
      {/* <Getdata baseURL={baseURL}/> */}
      {/* <Senddata baseURL={baseURL}/> */}
      <Signage baseURL={baseURL}/>
    </div>
  )
}

export default App
