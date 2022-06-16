import { LoadingCircle } from 'ui/components'
import { styled } from 'ui/styles'

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
`

export const LoadingScreen = () => (
  <Wrapper>
    <LoadingCircle />
  </Wrapper>
)
