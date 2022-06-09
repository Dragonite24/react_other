import { styled, theme } from 'ui/styles'

const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  height: 150px;
  flex-direction: row;
  background-color: ${theme.palette.grey};
`
export const Footer = () => {
  return <Wrapper>Footer</Wrapper>
}
