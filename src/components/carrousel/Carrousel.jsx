import '../carrousel/carrousel.scss'
import React, { useState } from 'react'
import ArrowNext from '../../assets/right-arrow.svg'
import ArrowPrev from '../../assets/left-arrow.svg'

function Carrousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fonction pour passer à l'image précédente
  const handlePrevious = () => {
    const newIndex = currentIndex - 1
    setCurrentIndex(newIndex < 0 ? items.length - 1 : newIndex)
  }

  // Fonction pour passer à l'image suivante
  const handleNext = () => {
    const newIndex = currentIndex + 1
    setCurrentIndex(newIndex >= items.length ? 0 : newIndex)
  }

  return (
    <section className="carrousel-container">
      {/* fleche précédente  */}
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
            <img src={item} alt={`visuel-logement ${index}`} />
          </div>
        ))}
      </div>
      {/* position dans le carrousel  */}
      <div className="bullet-points">
        {items.length === 1 ? null : `${currentIndex + 1}/${items.length}`}
      </div>
      {/* fleche suivante  */}
      <img
        className={`arrow-next ${items.length === 1 ? 'hidden' : ''}`}
        onClick={handleNext}
        src={ArrowNext}
        alt="Arrow-right"
      />
    </section>
  )
}
export default Carrousel
