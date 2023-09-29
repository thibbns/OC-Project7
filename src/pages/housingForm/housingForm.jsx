import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/collapse/Collapse'
import '../housingForm/housingForm.scss'
import Carrousel from '../../components/carrousel/Carrousel'
import Error from '../error/Error'
import Rating from '../../components/rating/Rating'
import Loader from '../../components/loader/loader'
import Tags from '../../components/tags/Tags'
import Host from '../../components/host/Host'

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

  if (isLoading) {
    return <Loader />
  }

  const logement = logements.find((logement) => logement.id === logementId)

  if (!logement) {
    return <Error />
  }

  const { title, description, location, host, rating } = logement

  return (
    <article>
      <div className="main-wrapper">
        <Carrousel items={logement.pictures} />

        <div className="presentation">
          <div className="presentation__housing">
            <div className="presentation__housing__title">
              <h3>{title}</h3>
            </div>
            <div className="presentation__housing__location">{location}</div>

            <Tags items={logement.tags} />
          </div>

          <div className="presentation__host-star">
            <Host name={host.name} picture={host.picture} />

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
    </article>
  )
}

export default HousingForm
