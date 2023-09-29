import '../tags/tags.scss'

function Tags({ items }) {
  return (
    <ul className="presentation__housing__tags">
      {items.map((item, index) => (
        <li className="presentation__housing__tags__tag" key={index}>
          <div className="presentation__housing__tags__tag__text">{item}</div>
        </li>
      ))}
    </ul>
  )
}

export default Tags
