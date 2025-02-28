import "./Tags.scss"

export const Tags = ({ items = [] }) => {
  return (
    <div className="tags">
      <ul className="tags__list">
        {items.map((item, index) => (
          <li className="tags__item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
