import { createGlobalStyle } from 'styled-components'

import { theme } from './'
import './reset.css'

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${theme.fontFamily.openSans}, sans-serif;
    color: ${theme.palette.white};

    &.m-show-modal {
      overflow: hidden;
    }
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  b,
  strong {
    font-weight: 600;
  }
`
