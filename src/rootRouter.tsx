import { useRoutes } from 'react-router'

import { Form, Home } from 'app/pages'
import { paths } from 'app/shared/router'

export const RootRouter: React.FC = (): JSX.Element => {
  const routes = useRoutes([
    {
      path: paths.home,
      element: <Home />
    },
    {
      path: paths.form,
      element: <Form />
    }
  ])

  return <>{routes}</>
}
