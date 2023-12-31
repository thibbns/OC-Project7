import '../banner/banner.scss'

function Banner({ banner, title }) {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      <div className="banner__container">
        <div className="banner__container__title">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default Banner
