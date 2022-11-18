import './App.css'
import EventCreate from './EventCreate'
import EventSelect from './EventSelect'

function App() {
  const baseURL = process.env.REACT_APP_API
  return (
    <div className="App">
      <EventCreate baseURL={baseURL}/>
      <br></br>
      <EventSelect baseURL={baseURL}/>
    </div>
  )
}

export default App
