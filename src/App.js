import './App.css'
import Signage from './components/Signage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ManagePage from './components/ManagePage'
import LoginPage from './components/LoginPage'

function App() {
  const baseURL = process.env.REACT_APP_API
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = {'/signage'} element={<Signage baseURL={baseURL}/>}/>
          <Route path = {'/manager'} element={<ManagePage baseURL={baseURL}/>}/>
          <Route path = {'/manager/login'} element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
