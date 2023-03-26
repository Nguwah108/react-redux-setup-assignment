import { useState } from 'react'
import './App.css'
import ComponentA from './components/ComponentA'

function App() {
   const [count, setCount] = useState(0)

  return (
    <div className="App">
    <ComponentA/>
    </div>
  )
}

export default App
