import { Icon } from "@/components/Icon"
import classNames from "classnames"
import "./Button.scss"

export const Button = ({
  type = "button",
  href,
  target,
  // '' - default | 'trasnsparent' | 'black-10'
  mode = "",
  label,
  isLabelHidden = false,
  iconName,
  // 'before' | 'after'
  iconPosition = "before",
  hasFillIcon,
}) => {
  const isLink = href !== undefined
  const Component = isLink ? "a" : "button"
  const linkProps = { href, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon className="button__icon" name={iconName} hasFill={hasFillIcon} />
  )

  return (
    <Component
      className={classNames(classNames, "button", {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
    >
      {iconPosition === "before" && iconComponent}
      {!isLabelHidden && <span className="button__label">{label}</span>}
      {iconPosition === "after" && iconComponent}
    </Component>
  )
}
