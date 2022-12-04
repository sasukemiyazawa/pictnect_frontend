import './App.css'
import ManagePage from './components/ManagePage'

function App() {
  const baseURL = process.env.REACT_APP_API
  return (
    <div className="App">
      <ManagePage baseURL={baseURL}/>
    </div>
  )
}

export default App
