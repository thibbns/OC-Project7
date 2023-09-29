import '../host/host.scss'

function Host({ name, picture }) {
  return (
    <div className="presentation__host-star__host">
      <div className="presentation__host-star__host__name">
        {name.split(' ')[0]}
        <br />
        {name.split(' ')[1]}
      </div>
      <div className="presentation__host-star__host__photo"></div>
      <img src={picture} alt="hôte" />
    </div>
  )
}

export default Host
