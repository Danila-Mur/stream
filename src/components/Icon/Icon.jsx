import classNames from "classnames"
import { Icon as MinistaIcon } from "minista"
import "./Icon.scss"

export const Icon = ({ className, name, hasFill = false }) => {
  return (
    <span className={classNames(className, "icon")}>
      <MinistaIcon
        iconId={name}
        fill={hasFill ? "currentColor" : "none"}
        stroke={hasFill ? "none" : "currentColor"}
      />
    </span>
  )
}
