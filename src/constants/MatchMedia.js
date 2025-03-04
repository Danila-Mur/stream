import { pxToRem } from "@/utils/pxToRem"

export const MatchMedia = {
  mobile: window.matchMedia(`(width < = ${pxToRem(767)}rem)`),
}
