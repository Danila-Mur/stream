import poscssPxToRem from "postcss-pxtorem"

export default ({ env }) => {
  const isProd = env === "production"
  const plugins = []

  if (isProd) {
    plugins.push(
      poscssPxToRem({
        propList: ["*"],
        mediaQuery: true,
      })
    )
  }

  return {
    plugins,
  }
}
