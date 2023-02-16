import './App.css'
import Signage from './components/Signage'

function App() {
  const baseURL = "http://localhost:3001/api/v1/"
  return (
    <div className="App">
      <Signage baseURL={baseURL}/>
    </div>
  )
}

export default App
