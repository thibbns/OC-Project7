import '../styles/collapse.scss'
import { useState } from 'react'
import arrowTop from '../assets/arrow__top.svg'
import arrowDown from '../assets/arrow__down.svg'

function Collapse({ title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="collapse">
      <div className="collapse__title">
        <div className="collapse__title__text">{title}</div>
        <div className="collapse__title__arrow">
          <div onClick={() => setIsOpen(false)}>
            <img src={arrowTop} alt="arrow top" />
          </div>
        </div>
      </div>
      <div className="collapse__description">
        <div className="collapse__description__text">{description}</div>
      </div>
    </div>
  ) : (
    <div className="collapse">
      <div className="collapse__title">
        <div className="collapse__title__text">{title}</div>
        <div className="collapse__title__arrow">
          <div onClick={() => setIsOpen(true)}>
            <img src={arrowDown} alt="arrow down" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collapse
