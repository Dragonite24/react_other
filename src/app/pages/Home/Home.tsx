import { useDispatch } from 'react-redux'

import { Page } from 'app/templates/Page'
import { OutlinedButton } from 'ui/components'
import { styled } from 'ui/styles'

import { useHome } from './Home.hooks'
import { fetchUsersRequest } from 'store'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
`

export const Home = () => {
  const { users } = useHome()
  const dispatch = useDispatch()

  return (
    <Page>
      <Wrapper>
        <OutlinedButton onPress={() => dispatch(fetchUsersRequest())}>Click</OutlinedButton>
        <div>Users: {users.length}</div>
      </Wrapper>
    </Page>
  )
}
