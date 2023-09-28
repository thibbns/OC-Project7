import { Link } from 'react-router-dom'
import '../error/error.scss'

function Error() {
  return (
    <div className="main-wrapper">
      <div className="error-number">404</div>
      <div className="error-description">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link to="/">
        <div className="error-back-home">Retourner sur la page d’accueil</div>
      </Link>
    </div>
  )
}

export default Error
