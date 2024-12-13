import './App.css'
import Article from './components/Article'

function App() {
  return (
    <div className="App">
      <Article name="Fahrudin" titles={["Tutorial React", "Node Js"]} />
      <br />
      <Article name="Fahrudin" titles={["Tutorial React", "Node Js"]} />
    </div>
  )
}

export default App
