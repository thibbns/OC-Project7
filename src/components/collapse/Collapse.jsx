import '../collapse/collapse.scss'
import { useState } from 'react'
import arrow from '../../assets/arrow.svg'

function Collapse({ title, description }) {
  // useState pour ouverture et fermeture du composant collapse avec rotation de la fleche

  const [isOpen, setIsOpen] = useState(false)

  // fonction d'inversion de l'etat de isOpen

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="collapse">
      <div className="collapse__title">
        <div className="collapse__title__text">
          <h4>{title}</h4>
        </div>
        {/* au clic sur la fleche on execute handleToggle pour rotation de la fleche en fonction de isOpen  */}

        <div
          className={`collapse__title__arrow ${isOpen ? 'rotate-180' : ''}`}
          onClick={handleToggle}
        >
          <div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      {/* deroulement du collapse en fonction de isOpen  */}
      <div
        className={`collapse__description  ${
          isOpen ? 'collapse__description--open' : ''
        }`}
      >
        <div className="collapse__description__text">{description}</div>
      </div>
    </section>
  )
}

export default Collapse
