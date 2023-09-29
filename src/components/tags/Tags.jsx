import '../tags/tags.scss'

function Tags({ items }) {
  return (
    <ul className="tags">
      {items.map((item, index) => (
        <li className="tags__tag" key={index}>
          <div className="tags__tag__text">{item}</div>
        </li>
      ))}
    </ul>
  )
}

export default Tags
