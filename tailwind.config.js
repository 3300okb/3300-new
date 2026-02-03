/**
 * @param {string | number} px
 * @returns
 */
const pxToRem = (px) => {
  const pxValue = parseInt(px, 10)
  const baseFontSize = 16
  return pxValue / baseFontSize + 'rem'
}

/**
 * The numbers here mean that if you write
 * `text-30`, then `font-size: 30px;`
 * becomes `font-size: 1.875rem;`.
 */
const FONTSIZE_DESIGN_TOKENS = [
  9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 24, 26, 30,
]

/**
 * The numbers here mean that if you write
 * `p-30`, then `padding: 30px;`
 * becomes `padding: 1.875rem;`.
 */
const SPACING_DESIGN_TOKENS = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20, 21, 22, 24,
  25, 28, 30, 32, 34, 39, 40, 42, 43, 44, 45, 50, 54, 56, 60, 80, 90, 100, 120,
  180, 200, 300,
]

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx,html}'],
  theme: {
    fontSize: {
      /**
       * Custom font style [font-size, line-height]
       */
      // l: [pxToRem(16), pxToRem(26)],
      // m: [pxToRem(15), pxToRem(25)],
      // s: [pxToRem(13), pxToRem(21)],
      ...FONTSIZE_DESIGN_TOKENS.reduce((obj, token) => {
        obj[`${token}`] = pxToRem(token)
        return obj
      }, {}),
    },
    spacing: {
      ...SPACING_DESIGN_TOKENS.reduce((obj, token) => {
        obj[`${token}`] = pxToRem(token)
        return obj
      }, {}),
    },
  },
}
