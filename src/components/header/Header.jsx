import { Link } from 'react-router-dom'
import '../header/header.scss'
import Logo from '../../assets/logo.svg'

function Header() {
  return (
    <header className="header">
      <img id="logo" src={Logo} alt="logo" />
      <nav className="header__links">
        <button className="header__links__first-button">
          <Link to="/">Accueil</Link>
        </button>
        <button className="header__links__secondary-button">
          <Link to="/a-propos">A propos</Link>
        </button>
      </nav>
    </header>
  )
}

export default Header
