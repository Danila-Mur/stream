import classNames from "classnames"
import "./Logo.scss"

export const Logo = ({ className, loading = "lazy" }) => {
  const title = "Home"

  return (
    <a
      className={classNames(className, "logo")}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        src="/logo.svg"
        alt=""
        className="logo__image"
        width={199}
        height={60}
        loading={loading}
      />
    </a>
  )
}
