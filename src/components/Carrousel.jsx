import '../styles/carrousel.scss'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ArrowNext from '../assets/right-arrow.svg'
import ArrowPrev from '../assets/left-arrow.svg'

function Carrousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex < 0 ? items.length - 1 : newIndex)
  }

  const handleNext = () => {
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex >= items.length ? 0 : newIndex)
  }

  return (
    <div className="carrousel-container">
      <img
        className={`arrow-prev ${items.length === 1 ? 'hidden' : ''}`}
        onClick={handlePrevious}
        src={ArrowPrev}
        alt="Arrow-left"
      />

      <div className="carrousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carrousel-item ${
              index === currentIndex ? 'active' : ''
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <img src={item} alt={`a ${index}`} />
          </div>
        ))}
      </div>

      <div className="bullet-points">
        {items.length === 1 ? null : `${currentIndex + 1}/${items.length}`}
      </div>

      <img
        className={`arrow-next ${items.length === 1 ? 'hidden' : ''}`}
        onClick={handleNext}
        src={ArrowNext}
        alt="Arrow-right"
      />
    </div>
  )
}

function FetchCarrousel() {
  const [logements, setLogements] = useState([])
  const { logementId } = useParams()

  useEffect(() => {
    fetch('/logements.json')
      .then((response) => response.json())
      .then((data) => {
        setLogements(data)
      })
      .catch((error) => {
        console.error('erreur', error)
      })
  }, [])

  const logement = logements.find((logement) => logement.id === logementId)

  if (!logement) {
    return <div>logement introuvable</div>
  }

  return (
    <div>
      <Carrousel items={logement.pictures} />
    </div>
  )
}

export default FetchCarrousel
