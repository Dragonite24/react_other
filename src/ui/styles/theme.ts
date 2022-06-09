export const theme = {
  palette: {
    white: '#FFFFFF',
    grey: '#717171',
    black: '#000000'
  },
  fontFamily: {
    openSans: 'OpenSans'
  },
  transition: {
    hover: 300,
    slide: 800,
    burgerMenu: 500
  },
  typography: {
    h1: {
      fontSize: '24px',
      lineHeight: '40px',
      fontWeight: '600'
    },
    h2: {
      fontSize: '18px',
      lineHeight: '30px',
      fontWeight: '600'
    }
  }
}

export type Theme = typeof theme
