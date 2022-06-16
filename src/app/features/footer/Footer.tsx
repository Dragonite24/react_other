import { styled, theme } from 'ui/styles'

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
  flex-direction: row;
  background-color: ${theme.palette.grey};
`

const Content = styled.nav`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  width: 100%;
`

export const Footer = () => {
  return (
    <Wrapper>
      <Content>Footer</Content>
    </Wrapper>
  )
}
