import './NavBar.css'
import { Link } from "react-router-dom";

const NavBarComponent = () => {
    
    return(
        <>
            <div className='header_NavBart'>
                <nav className="NavBarT">
                    <div className='NavBarT_flex'>
                        <div className="NavBarT_right">
                            <div className='NavBarT_Links'>
                                <Link className='NavBarT_Link' to={'/'}> Inicio </Link>
                                <Link className='NavBarT_Link' to={'/SobreNosotros'}> Sobre Nosotros </Link>
                                <Link className='NavBarT_Link' to={'/Noticias'}> Noticias </Link>
                                <Link className='NavBarT_Link' to={'/IniciarSesion'}> Iniciar Sesion </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default NavBarComponent;