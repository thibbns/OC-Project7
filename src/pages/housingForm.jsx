import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Collapse from '../components/Collapse'
import '../styles/HousingForm.scss'
import Rate from '../assets/_Rate.svg'
import Carousel from '../components/Carousel'
import Error from '../pages/Error'

function HousingForm() {
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
    return <Error />
  }

  const { title, description, location, host } = logement

  return (
    <div>
      <Carousel />

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
            <img src={host.picture} alt="1" />
          </div>
          <div className="presentation__host-star__stars"></div>
          <img src={Rate} alt="rate" />
        </div>
      </div>

      <div className="collapses">
        <div className="abcd">
          <Collapse title={'description'} description={description} />
        </div>
        <div className="abcd">
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
  )
}

export default HousingForm
