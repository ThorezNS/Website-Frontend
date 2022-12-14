import pxToRem from './px-to-rem'

const theme = {
  spacing: {
    base: pxToRem(12),
    full: pxToRem(12),
    half: pxToRem(6),
    third: pxToRem(4),
    quarter: pxToRem(3),
    double: pxToRem(24)
  },
  color: {
    background: '#000000',
    navBackground: '#1e1e1e',
    primary: '#f9f9f9',
    secondary: '#ff99aa',
    secondaryHighlight: '#ffbbcc',
    accent: '#bb0022',
    skeleton: '#771111'
  }
}

export default theme
