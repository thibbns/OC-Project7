import '../styles/collapse.scss'
import { useState } from 'react'
import arrowTop from '../assets/arrow__top.svg'

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse__title">
        <div className="collapse__title__text">{title}</div>
        <div
          className={`collapse__title__arrow ${isOpen ? 'rotate-180' : ''}`}
          onClick={handleToggle}
        >
          <div>
            <img src={arrowTop} alt="arrow" />
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
    </div>
  )
}

export default Collapse
