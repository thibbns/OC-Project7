import { Link } from 'react-router-dom'
import '../styles/normalize.css'
import '../styles/Header.scss'
import Logo from '../assets/logo.svg'

function Header() {
  return (
    <div className="header">
      <img id="logo" src={Logo} alt="logo" />
      <div className="header__links">
        <div className="header__links__first-button">
          <Link to="/">Accueil</Link>
        </div>
        <div className="header__links__secondary-button">
          <Link to="/a-propos">A propos</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
