import { Icon } from "@/components/Icon"
import classNames from "classnames"
import "./Badge.scss"

export const Badge = ({
  className,
  // '' - default | 'accent'
  mode = "",
  isBig = false,
  children,
  iconName,
  hasFillIcon,
  iconAriaLabel,
}) => {
  return (
    <div
      className={classNames(className, "badge", {
        [`badge--${mode}`]: mode,
        "badge--big": isBig,
      })}
    >
      {iconName && (
        <Icon
          className="badge__icon"
          name={iconName}
          hasFill={hasFillIcon}
          ariaLabel={iconAriaLabel}
        />
      )}
      <span>{children}</span>
    </div>
  )
}
