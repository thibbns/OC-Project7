import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Collapse from '../components/Collapse'
import '../styles/housingForm.scss'
import Carrousel from '../components/Carrousel'
import Error from './Error'
import Rating from '../components/Rating'

function HousingForm() {
  const [logements, setLogements] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { logementId } = useParams()

  useEffect(() => {
    async function fetchLogements() {
      try {
        const response = await fetch('/logements.json')
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données')
        }
        const data = await response.json()
        setLogements(data)
        setIsLoading(false)
      } catch (error) {
        console.error('Erreur', error)
        setIsLoading(false)
      }
    }

    fetchLogements()
  }, [])

  const logement = logements.find((logement) => logement.id === logementId)

  if (!logement) {
    return 'chargement en cours'
  }

  const { title, description, location, host, rating } = logement

  return (
    <div>
      {isLoading ? (
        <p>Chargement en cours</p>
      ) : (
        <div className="main-wrapper">
          <Carrousel />

          <div className="presentation">
            <div className="presentation__housing">
              <div className="presentation__housing__title">{title}</div>
              <div className="presentation__housing__location">{location}</div>

              <ul className="presentation__housing__tags">
                {logement.tags.map((item, index) => (
                  <li className="presentation__housing__tags__tag" key={index}>
                    <div className="presentation__housing__tags__tag__text">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="presentation__host-star">
              <div className="presentation__host-star__host">
                <div className="presentation__host-star__host__name">
                  {host.name.split(' ')[0]}
                  <br />
                  {host.name.split(' ')[1]}
                </div>
                <div className="presentation__host-star__host__photo"></div>
                <img src={host.picture} alt="hôte" />
              </div>
              <div className="presentation__host-star__stars">
                <Rating rating={rating} />
              </div>
            </div>
          </div>

          <div className="collapses">
            <div className="collapse-container">
              <Collapse title={'Description'} description={description} />
            </div>
            <div className="collapse-container">
              <Collapse
                title={'Equipements'}
                description={
                  <ul>
                    {logement.equipments.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HousingForm
