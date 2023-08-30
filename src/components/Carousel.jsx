import '../styles/carousel.scss'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ArrowNext from '../assets/right-arrow.svg'
import ArrowPrev from '../assets/left-arrow.svg'

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className="carousel-container">
      <img
        className={`arrow-prev ${items.length === 1 ? 'hidden' : ''}`}
        onClick={handlePrev}
        src={ArrowPrev}
        alt="Arrow-left"
      />

      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? 'active' : ''
            }`}
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

function FetchCarousel() {
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
      <Carousel items={logement.pictures} />
    </div>
  )
}

export default FetchCarousel
