import { useState } from 'react'
import './App.css'
import GetCamComponent from './components/GetCamComponent'
import GetCamCVComponent from './components/GetCamCVComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Capturando video</h1>
        {/* <GetCamComponent/> */}
        <h1>Captura video open cv</h1>
        <GetCamCVComponent/>
      </div>
    </>
  )
}

export default App
