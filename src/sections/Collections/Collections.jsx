import { CategoryCard } from "@/components/CategoryCard"
import { MovieCard } from "@/components/MovieCard"
import { Slider } from "@/components/Slider"
import { SliderNavigation } from "@/components/Slider/components/SliderNavigation"
import { Tabs } from "@/components/Tabs"
import { Section } from "@/layouts/Section"
import { getIdFromTitle } from "@/utils/getIdFromTitle"
import "./Collections.scss"
import { collectionGroups } from "./collectionGroups"

export const Collections = () => {
  return (
    <Tabs
      className="collections container"
      title="collections"
      isEnableOnlyOnMobile
      items={collectionGroups.map((collectionGroup) => ({
        isActive: collectionGroup.isActive,
        title: collectionGroup.title,
        children: (
          <div className="collections__group">
            <p className="collections__title hidden-mobile">
              {collectionGroup.title}
            </p>
            {collectionGroup.items.map((collectionItem, index) => {
              const { title, categoryItems, movieItems, sliderParams } =
                collectionItem

              const titleForamted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`
              const titleId = `${titleForamted}-title`
              const sliderNavigationId = `${titleForamted}-slider-navigation`

              return (
                <Section
                  className="collections__section"
                  title={title}
                  titleId={titleId}
                  actions={
                    <SliderNavigation id={sliderNavigationId} mode="tile" />
                  }
                  isActionsHiddenOnMobile
                  key={index}
                >
                  <Slider
                    sliderParams={sliderParams}
                    navigationTargetElementId={sliderNavigationId}
                    isBeyondTheViewportOnMobileS
                  >
                    {categoryItems?.map((categoryItem, index) => (
                      <CategoryCard {...categoryItem} key={index} />
                    )) ??
                      movieItems?.map((movieItem, index) => (
                        <MovieCard {...movieItem} key={index} />
                      ))}
                  </Slider>
                </Section>
              )
            })}
          </div>
        ),
      }))}
    />
  )
}
