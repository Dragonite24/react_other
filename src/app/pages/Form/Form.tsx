import React from 'react'

import { Page } from 'app/templates/Page'
import { styled } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Form: React.FC = () => {
  return (
    <Page>
      <Wrapper></Wrapper>
    </Page>
  )
}
