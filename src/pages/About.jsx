import '../styles/normalize.css'
import Banner from '../components/Banner'
import aboutBanner from '../assets/about__banner.png'
import Collapse from '../components/Collapse'

function About() {
  return (
    <div>
      <Banner banner={aboutBanner} />

      <Collapse />
    </div>
  )
}

export default About
