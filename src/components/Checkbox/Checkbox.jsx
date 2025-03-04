import { getIdFromTitle } from "@/utils/getIdFromTitle"
import classNames from "classnames"
import "./Checkbox.scss"

export const Checkbox = ({
  className,
  label,
  id = getIdFromTitle(label),
  isRequired,
}) => {
  return (
    <label className={classNames(className, "checkbox")} htmlFor={id}>
      <input
        className="checkbox__input"
        id={id}
        type="checkbox"
        required={isRequired}
      />
      <span className="checkbox__label">{label}</span>
    </label>
  )
}
