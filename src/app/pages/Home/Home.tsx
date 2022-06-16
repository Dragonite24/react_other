import { useDispatch } from 'react-redux'

import { Page } from 'app/templates/Page'
import { OutlinedButton } from 'ui/components'
import { styled } from 'ui/styles'

import { useHome } from './Home.hooks'
import { getUsersThunkCreator } from 'store/users/actions'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Home = () => {
  const { users } = useHome()
  const dispatch = useDispatch()

  return (
    <Page>
      <Wrapper>
        <OutlinedButton onPress={() => dispatch(getUsersThunkCreator())}>Click</OutlinedButton>
        <span>Users: {users.length}</span>
      </Wrapper>
    </Page>
  )
}
