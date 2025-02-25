import classNames from "classnames"
import "./Grid.scss"

export const Grid = ({ columns = 1, children }) => {
  return (
    <ul
      className={classNames("grid", {
        [`grid--${columns}`]: columns > 1,
      })}
    >
      {children.map((child, index) => (
        <li className="grid__item" key={index}>
          {child}
        </li>
      ))}
    </ul>
  )
}
