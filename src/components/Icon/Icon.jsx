import classNames from "classnames"
import { Icon as MinistaIcon } from "minista"
import "./Icon.scss"

export const Icon = ({ className, name, hasFill = false, ariaLabel }) => {
  return (
    <span className={classNames(className, "icon")} aria-label={ariaLabel}>
      <MinistaIcon
        iconId={name}
        fill={hasFill ? "currentColor" : "none"}
        stroke={hasFill ? "none" : "currentColor"}
      />
    </span>
  )
}
