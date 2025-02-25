import classNames from "classnames"
import "./Content.scss"

export const Content = ({ children, isResetPaddingTop = false }) => {
  return (
    <main
      className={classNames("content", {
        "content--reset-padding-top": isResetPaddingTop,
      })}
    >
      {children}
    </main>
  )
}
