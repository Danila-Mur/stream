import { Badge } from "@/components/Badge"
import { Icon } from "@/components/Icon"
import { Image } from "minista"
import "./CategoryCard.scss"

export const CategoryCard = ({ title, images = [], badge }) => {
  return (
    <a className="category-card" href="/movies">
      <div className="category-card__images">
        {images.map((imgSrc, index) => (
          <Image className="category-card__image" src={imgSrc} key={index} />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">
          {badge && (
            <Badge className="category-card__badge" mode="accent" isBig>
              {badge}
            </Badge>
          )}
          <span>{title}</span>
        </h3>
        <Icon className="category-card__icon" name="arrow-right" />
      </div>
    </a>
  )
}
