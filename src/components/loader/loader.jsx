import '../loader/loader.scss'

function Loader() {
  return (
    <div className="loader">
      <div className="anim_loader">
        <div className="point--primary"></div>
        <div className="point--secondary"></div>
        <div className="point--tertiary"></div>
      </div>
      <div className="chargement">Chargement en cours</div>
    </div>
  )
}

export default Loader
