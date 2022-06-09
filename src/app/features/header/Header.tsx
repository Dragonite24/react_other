import { styled, theme } from 'ui/styles'
import { paths } from 'app/shared/router'
import { Button } from 'ui/components'

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  flex-direction: row;
  background-color: ${theme.palette.grey};
`
export const Header = () => {
  return (
    <Wrapper>
      <Button to={paths.home}>HOME</Button>
      <Button to={paths.form}>FORM</Button>
    </Wrapper>
  )
}
