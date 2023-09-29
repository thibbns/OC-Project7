import '../host/host.scss'

function Host({ name, picture }) {
  return (
    <div className="host">
      <div className="host__name">
        {name.split(' ')[0]}
        <br />
        {name.split(' ')[1]}
      </div>
      <div className="host__photo"></div>
      <img src={picture} alt="hôte" />
    </div>
  )
}

export default Host
