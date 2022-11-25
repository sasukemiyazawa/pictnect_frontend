import './App.css'
import EventPage from './components/manageEvent/EventPage'

function App() {
  const baseURL = process.env.REACT_APP_API
  return (
    <div className="App">
      <EventPage baseURL={baseURL}/>
    </div>
  )
}

export default App
