export default {
  colors: {
    black: '#000000',
    grey: '#888',
    darkgrey: '#666',
    primary: '#02DBB6',
  },
  fonts: {
    default: "'Helvetica Neue', sans-serif",
    black: "'HelveticaNeue-CondensedBlack', sans-serif",
    light: "'HelveticaNeue-Light', sans-serif",
    classic: 'Roboto,sans-serif',
  },
  spacer: space => `${space * 1}rem`,
  medias: {
    desktopL: '(max-width: 1899px)',
    desktop: '(max-width: 1439px)',
    tablet: '(max-width: 1023px)',
    mobile: '(max-width: 768px)',
    mobileM: '(max-width: 479px)',
    mobileS: '(max-width: 319px)',
    portrait: '(orientation: portrait)',
  },
}
