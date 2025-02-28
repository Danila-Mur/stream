import classNames from "classnames"
import { Image } from "minista"
import { Button } from "../Button"
import "./MoviesBannerCard.scss"

export const MoviesBannerCard = ({
  title,
  titleId,
  TitleTag = "h2",
  description,
  imgSrc,
  isSmallPaddingY = false,
}) => {
  return (
    <div className="movie-banner-card">
      <Image className="movie-banner-card__image" src={imgSrc} />
      <div
        className={classNames("movie-banner-card__inner", {
          "movie-banner-card__inner--small-padding-y": isSmallPaddingY,
        })}
      >
        <div className="movie-banner-card__body">
          <TitleTag className="movie-banner-card__title h3" id={titleId}>
            {title}
          </TitleTag>
          <div className="movie-banner-card__description hidden-mobile">
            <p>{description}</p>
          </div>
        </div>
        <footer className="movie-banner-card__footer">
          <Button
            className="movie-banner-card__play-button"
            iconName="play"
            label="Play Now"
          />
          <div className="movie-banner-card__actions">
            <Button
              iconName="plus"
              label="Add to playlist"
              isLabelHidden
              mode="black-06"
            />
            <Button
              iconName="like"
              label="Like"
              isLabelHidden
              mode="black-06"
            />
            <Button
              iconName="volume"
              label="Mute"
              isLabelHidden
              mode="black-06"
            />
          </div>
        </footer>
      </div>
    </div>
  )
}
