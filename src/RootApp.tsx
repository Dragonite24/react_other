import { LoadingScreen } from 'app/features/loading'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { RootState } from 'rootReducer'
import { RootRouter } from 'rootRouter'
import { GlobalStyles } from 'ui/styles/global'

export const RootApp: React.FC = () => {
  const toggleLoading = useSelector((state: RootState) => state.loading)

  return (
    <Router>
      {toggleLoading.loading && <LoadingScreen />}
      <RootRouter />
      <GlobalStyles />
    </Router>
  )
}
