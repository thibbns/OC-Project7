import React, { useState, useEffect } from 'react'
import '../../styles/index.scss'
import CardPrinciple from '../../components/cardPrinciple/CardPrinciple'
import Banner from '../../components/banner/Banner'
import banner from '../../assets/banner.png'

function Body() {
  const [logements, setLogements] = useState([])

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

  return (
    <div>
      <div className="main-wrapper">
        <Banner banner={banner} title={'Chez vous,\npartout et ailleurs'} />
      </div>
      <div className="background">
        {logements.map(({ cover, title, id }) => (
          <CardPrinciple id={id} cover={cover} title={title} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Body
