import { Accordion } from "@/components/Accordion"
import { AccordionGroup } from "@/components/AccordionGroup"
import { EpisodeCard } from "@/components/EpisodeCard"
import "./Seasons.scss"
import { seasonItems } from "./seasonItems"

export const Seasons = () => {
  return (
    <AccordionGroup className="seasons" mode="dark" isOrderedList={false}>
      {seasonItems.map(({ title, subtitle, episodes }, index) => (
        <Accordion
          title={title}
          titleLevelClassName="h4"
          subtitle={subtitle}
          id={`season-${index}`}
          name="seasons"
          isOpen={index === 0}
          isArrowButton
        >
          <ul className="seasons__list">
            {episodes.map((episode, index) => (
              <li className="seasons__item" key={index}>
                <EpisodeCard {...episode} />
              </li>
            ))}
          </ul>
        </Accordion>
      ))}
    </AccordionGroup>
  )
}
