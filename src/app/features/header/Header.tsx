import { paths } from 'app/shared/router'
import { styled, theme } from 'ui/styles'
import { Button } from 'ui/components'

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  flex-direction: row;
  background-color: ${theme.palette.grey};
`

const Content = styled.nav`
  display: flex;
  flex-direction: row;
  max-width: 1000px;
  width: 100%;
`

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Button to={paths.home}>HOME</Button>
        <Button to={paths.form}>FORM</Button>
      </Content>
    </Wrapper>
  )
}
