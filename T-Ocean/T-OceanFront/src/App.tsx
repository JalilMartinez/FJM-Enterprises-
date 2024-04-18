
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBarComponent from './components/principalComponents/NavBarComponent/NavBarComponet'
import FooterComponent from './components/principalComponents/FooterComponent/FooterComponent'
function App() {

  return (
    <>
      <NavBarComponent></NavBarComponent>
      <Outlet></Outlet>

      <FooterComponent></FooterComponent>
    </>
  )
}

export default App
