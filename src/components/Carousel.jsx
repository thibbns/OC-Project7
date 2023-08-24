import '../styles/carousel.scss'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ArrowRight from '../assets/right-arrow.svg'
import ArrowLeft from '../assets/left-arrow.svg'

function Carousel() {
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
    return <div>Logement introuvable</div>
  }
  console.log(logement.pictures.length)
  console.log(logement.pictures[0])
  return (
    <div className="image-gallery">
      <div className="image-gallery__container">
        <img
          className="image-gallery__picture"
          key={1}
          src={logement.pictures[0]}
          alt={`A`}
        />
      </div>
      <img className="arrow-right" src={ArrowRight} alt="Arrow-right" />
      <img className="arrow-left" src={ArrowLeft} alt="Arrow-left" />
    </div>
  )
}

export default Carousel

/* {logement.pictures.map((picture, index) => (
        <img
          className="image-gallery__picture"
          key={index}
          src={pictures[0]}
          alt={`${index + 1}`}
        />
      ))}

      */
