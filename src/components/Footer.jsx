import K from '../assets/K.svg'
import Group from '../assets/Group.svg'
import S from '../assets/S.svg'
import A from '../assets/A.svg'
import '../styles/footer.scss'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={K} alt="K" />
        <img src={Group} alt="A" />
        <img src={S} alt="S" />
        <img src={A} alt="A" />
      </div>
      <div className="footer__copyright">© 2020 Kasa. All rights reserved</div>
    </div>
  )
}

export default Footer
