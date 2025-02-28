import { Badge } from "../Badge"
import { RatingView } from "../RatingView"
import "./ReviewCard.scss"

export const ReviewCard = ({ name, subtitle, description, ratingValue }) => {
  return (
    <div className="review-card">
      <header className="review-card__header">
        <div className="review-card__author">
          <h4 className="review-card__name h6">{name}</h4>
          <p className="review-card__subtitle">{subtitle}</p>
        </div>
        <Badge>
          <RatingView value={ratingValue} label={ratingValue} />
        </Badge>
      </header>
      <div className="review-card__body">
        <p>{description}</p>
      </div>
    </div>
  )
}
