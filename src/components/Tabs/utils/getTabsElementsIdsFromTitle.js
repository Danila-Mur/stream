import { getIdFromTitle } from "@/utils/getIdFromTitle"

export const getTabsElementsIdsFromTitle = (title) => {
  const titleFormated = getIdFromTitle(title)

  return {
    buttonId: `${titleFormated}-tab`,
    contentId: `${titleFormated}-tabpanel`,
  }
}
