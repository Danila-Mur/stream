import { RatingView } from "@/components/RatingView"
import "./Ratings.scss"

export const Ratings = ({ items = [] }) => {
  return (
    <div className="ratings">
      <ul className="ratings__list">
        {items.map(({ title, ratingValue }, index) => (
          <li className="ratings__item" key={index}>
            <h4 className="ratings__title">{title}</h4>
            <RatingView value={ratingValue} label={ratingValue} />
          </li>
        ))}
      </ul>
    </div>
  )
}
