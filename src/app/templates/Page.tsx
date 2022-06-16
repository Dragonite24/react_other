import React from 'react'

import { styled } from 'ui/styles'
import { Header } from 'app/features/header/Header'
import { Footer } from 'app/features'

const Main = styled.main`
  flex: 1 0;
  overflow: hidden;
  max-width: 1000px;
  width: 100%;
`

export const Page: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
