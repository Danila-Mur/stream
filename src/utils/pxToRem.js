export const pxToRem = (px) => {
  const htmlElemetFontSize = parseInt(
    getComputedStyle(document.documentElement).fontSize,
  )

  return px / htmlElemetFontSize
}
