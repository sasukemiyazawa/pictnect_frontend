import './App.css';
import './PageEventCreate'

function App() {
  const baseURL = process.env.REACT_APP_API
  return (
    <div className="App">
      <PageEventCreate baseURL={baseURL}/>
    </div>
  );
}

export default App;
