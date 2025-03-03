import { Button } from "@/components/Button"
import { Icon } from "@/components/Icon"
import { PersonCard } from "@/components/PersonCard"
import { Ratings } from "@/components/Ratings"
import { ReviewCard } from "@/components/ReviewCard"
import { Slider } from "@/components/Slider"
import { SliderNavigation } from "@/components/Slider/components/SliderNavigation"
import { Tags } from "@/components/Tags"
import "./MovieDetails.scss"

export const MovieDetails = ({ seasons }) => {
  const titleId = "movie-details-title"
  const castSliderNavigationId = "movie-cast-slider-navigation"

  const castItems = [
    {
      imgSrc: "/src/assets/images/people/1.jpg",
      imgAlt: "Ivan Ivanov",
    },
    {
      imgSrc: "/src/assets/images/people/2.jpg",
      imgAlt: "Ivan Ivanov",
    },
    {
      imgSrc: "/src/assets/images/people/3.jpg",
      imgAlt: "Ivan Ivanov",
    },
    {
      imgSrc: "/src/assets/images/people/4.jpg",
      imgAlt: "Ivan Ivanov",
    },
    {
      imgSrc: "/src/assets/images/people/5.jpg",
      imgAlt: "Ivan Ivanov",
    },
    {
      imgSrc: "/src/assets/images/people/6.jpg",
      imgAlt: "Ivan Ivanov",
    },
    {
      imgSrc: "/src/assets/images/people/7.jpg",
      imgAlt: "Ivan Ivanov",
    },
    {
      imgSrc: "/src/assets/images/people/8.jpg",
      imgAlt: "Ivan Ivanov",
    },
    {
      imgSrc: "/src/assets/images/people/1.jpg",
      imgAlt: "Ivan Ivanov",
    },
    {
      imgSrc: "/src/assets/images/people/2.jpg",
      imgAlt: "Ivan Ivanov",
    },
  ]

  const reviewItems = [
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 4.5,
    },
    {
      name: "Swaraj",
      subtitle: "From India",
      description:
        "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
      ratingValue: 5,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 3.5,
    },
    {
      name: "Swaraj",
      subtitle: "From India",
      description:
        "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
      ratingValue: 4,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 2.5,
    },
    {
      name: "Swaraj",
      subtitle: "From India",
      description:
        "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
      ratingValue: 2,
    },
    {
      name: "Aniket Roy",
      subtitle: "From India",
      description:
        "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
      ratingValue: 3.5,
    },
    {
      name: "Swaraj",
      subtitle: "From India",
      description:
        "A restless king promises his lands to the local tribals in exchange of a stone (Panjurli, a deity of Keradi Village) wherein he finds solace and peace of mind.",
      ratingValue: 4,
    },
  ]

  return (
    <section className="movie-details container" aria-labelledby={titleId}>
      <h2 className="visually-hidden" id={titleId}>
        Detailed movie information
      </h2>
      <div className="movie-details__main">
        {seasons && (
          <div className="movie-details__panel movie-details__panel--seasons">
            <div className="movie-details__group movie-details__group--big-gap-y">
              <h3 className="h4">Seasons and Episodes</h3>
              {seasons}
            </div>
          </div>
        )}
        <div className="movie-details__panel movie-details__panel--description">
          <div className="movie-details__group">
            <h3 className="movie-details__title">Description</h3>
            <div className="movie-details__description">
              <p>
                A fiery young man clashes with an unflinching forest officer in
                a south Indian village where spirituality, fate and folklore
                rule the lands.
              </p>
            </div>
          </div>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Cast</h3>
            <SliderNavigation
              id={castSliderNavigationId}
              hasPagination={false}
              mode="rounded"
              buttonMode="black-08"
            />
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: "auto",
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: "auto",
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              },
            }}
          >
            {castItems.map((item, index) => (
              <PersonCard {...item} key={index} />
            ))}
          </Slider>
        </div>
        <div className="movie-details__panel movie-details__panel--large-gap-y">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Reviews</h3>
            <Button
              mode="black-08"
              iconName="plus"
              label="Add Your Review"
              href="/"
            />
          </header>
          <Slider
            navigationMode="rounded"
            isNavigationHiddenMobile={false}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                  allowTouchMove: false,
                },
              },
            }}
          >
            {reviewItems.map((item, index) => (
              <ReviewCard {...item} key={index} />
            ))}
          </Slider>
        </div>
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel">
          <div className="movie-details__groups">
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="calendar" />
                <span>Released Year</span>
              </h3>
              <div className="movie-details__description">
                <time dateTime="2022" className="h6">
                  2022
                </time>
              </div>
            </div>

            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="translate" />
                <span>Available Languages</span>
              </h3>
              <Tags
                items={["English", "Hindi", "Tamil", "Telegu", "Kannada"]}
              />
            </div>

            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="star" />
                <span>Ratings</span>
              </h3>
              <Ratings
                items={[
                  { title: "IMDb", ratingValue: 4.5 },
                  { title: "Streamvibe", ratingValue: 4 },
                ]}
              />
            </div>

            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon name="gernes" />
                <span>Gernes</span>
              </h3>
              <Tags items={["Action", "Adventure"]} />
            </div>

            <div className="movie-details__group">
              <h3 className="movie-details__title">Director</h3>
              <PersonCard
                name="Rishab Shetty"
                subtitle="From India"
                imgSrc="/src/assets/images/people/director.jpg"
              />
            </div>

            <div className="movie-details__group">
              <h3 className="movie-details__title">Music</h3>
              <PersonCard
                name="B. Ajaneesh Loknath"
                subtitle="From India"
                imgSrc="/src/assets/images/people/music.jpg"
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}
