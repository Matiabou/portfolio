import '../styles/Navbar.css'

export function Navbar() {
    return (
            <nav className="navbar-container">
            <a className='navbar-element' href="#inicio">
                Inicio
            </a>
            <a className='navbar-element' href="#proyectos">
                Proyectos
            </a>
            <a className='navbar-element' href="#sobre-mi">
                Sobre mí
            </a>
            <a className='navbar-element' href="#contacto">
                Contacto
            </a>
            </nav>
    )
}