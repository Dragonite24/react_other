import { styled, theme } from 'ui/styles'
import { Button, ButtonProps } from './Button'

const Wrapper = styled(Button)`
  display: flex;
  max-width: 300px;
  width: 100%;
  max-height: 60px;
  height: 100%;
  align-items: center;
  justify-content: center;

  border: 1px solid ${theme.palette.grey};
  border-radius: 16px;

  &:hover {
    border: 1px solid ${theme.palette.black};
    background-color: ${theme.palette.grey};
  }
`

export const OutlinedButton: React.FC<ButtonProps> = (props) => <Wrapper {...props}>{props.children}</Wrapper>
