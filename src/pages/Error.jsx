import { Link } from 'react-router-dom'
import '../styles/error.scss'

function Error() {
  return (
    <div>
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
