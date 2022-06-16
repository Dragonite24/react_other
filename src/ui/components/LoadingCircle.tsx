import { styled, theme } from 'ui/styles'

import { spin } from './кeyframes'

export const LoadingCircle = styled.div<{ isSmall?: boolean }>`
  position: absolute;
  display: flex;
  width: ${({ isSmall }) => (isSmall ? 30 : 60)}px;
  height: ${({ isSmall }) => (isSmall ? 30 : 60)}px;
  z-index: 1;

  border-width: 4px;
  border-style: solid;
  border-color: ${theme.palette.black} ${theme.palette.black} ${theme.palette.black} transparent;
  border-radius: 50%;

  animation: ${spin} ${theme.transition.slide}ms linear infinite;
  -webkit-animation: ${spin} ${theme.transition.slide}ms linear infinite;

  &:before,
  &:after {
    position: absolute;
    content: '';
    width: ${({ isSmall }) => (isSmall ? 0 : 3)}px;
    height: ${({ isSmall }) => (isSmall ? 0 : 3)}px;
    border-radius: 50%;
    background: ${theme.palette.black};
    left: 4px;
  }

  &:before {
    top: 9%;
  }

  &:after {
    bottom: 9%;
  }
`
