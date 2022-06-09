import { BrowserRouter as Router } from 'react-router-dom'

import { RootRouter } from 'rootRouter'

export const RootApp: React.FC = () => {
  return (
    <Router>
      <RootRouter />
    </Router>
  )
}
