
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBarComponent from './components/principalComponents/NavBarComponent/NavBarComponet'
function App() {

  return (
    <>
      <NavBarComponent></NavBarComponent>
      <Outlet></Outlet>
    </>
  )
}

export default App
