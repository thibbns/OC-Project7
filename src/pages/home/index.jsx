import { logements } from '../../datas/logements'
import '../../styles/normalize.css'
import '../../styles/index.scss'
import CardPrinciple from '../../components/CardPrinciple'
import Banner from '../../components/Banner'
import banner from '../../assets/banner.png'

function Body() {
  return (
    <body>
      <div>
        <Banner banner={banner} title={'Chez vous, partout et ailleurs'} />
      </div>
      <div className="background">
        {logements.map(({ cover, host, title, id }) => (
          <CardPrinciple id={id} cover={cover} name={host.name} title={title} />
        ))}
      </div>
    </body>
  )
}

export default Body
