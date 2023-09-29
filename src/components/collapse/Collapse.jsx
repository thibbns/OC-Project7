import '../collapse/collapse.scss'
import { useState } from 'react'
import arrow from '../../assets/arrow.svg'

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className="collapse">
      <div className="collapse__title">
        <div className="collapse__title__text">
          <h4>{title}</h4>
        </div>
        <div
          className={`collapse__title__arrow ${isOpen ? 'rotate-180' : ''}`}
          onClick={handleToggle}
        >
          <div>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>

      <div
        className={`collapse__description ${
          isOpen ? 'collapse__description--open' : ''
        }`}
      >
        <div className="collapse__description__text">{description}</div>
      </div>
    </section>
  )
}

export default Collapse
