import { useState } from 'react'
import './App.css'
import GetCamComponent from './components/GetCamComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Capturando video</h1>
        <GetCamComponent/>
      </div>
    </>
  )
}

export default App
