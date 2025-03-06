import postcssPresetEnv from "postcss-preset-env"
import poscssPxToRem from "postcss-pxtorem"

export default ({ env }) => {
  const isProd = env === "production"
  const plugins = []

  if (isProd) {
    plugins.push(
      poscssPxToRem({
        propList: ["*"],
        mediaQuery: true,
      }),
    )

    plugins.push(postcssPresetEnv())
  }

  return {
    plugins,
  }
}
