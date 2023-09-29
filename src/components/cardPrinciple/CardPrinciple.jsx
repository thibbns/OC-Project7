import { Link } from 'react-router-dom'
import '../cardPrinciple/cardPrinciple.scss'

function CardPrinciple({ cover, name, title, id }) {
  return (
    <div className="card-principle">
      <Link to={`/fiche-logement/${id}`}>
        <div className="image-container">
          <img src={cover} alt={`${name} cover`} />
          <div className="image-container__filter"> </div>
        </div>
        <div className="card-principle__title">
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default CardPrinciple
