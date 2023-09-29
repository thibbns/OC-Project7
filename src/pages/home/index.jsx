import React, { useState, useEffect } from 'react'
import '../home/index.scss'
import CardPrinciple from '../../components/cardPrinciple/CardPrinciple'
import Banner from '../../components/banner/Banner'
import banner from '../../assets/banner.png'

function Body() {
  const [logements, setLogements] = useState([])

  // On effectue une requete HTTP pour récupérer les données de notre fichier json
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
        {/* j'ai ajouté à title un "\n" pour forcer un saut de ligne en fonction du css  */}
      </div>
      <div className="background">
        {/* grace à la méthode map on crée la liste des cardPrinciple que l'on affiche sur cette page  */}
        {logements.map(({ cover, title, id }) => (
          <CardPrinciple id={id} cover={cover} title={title} key={id} />
        ))}
      </div>
    </div>
  )
}

export default Body
