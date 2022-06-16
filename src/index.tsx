import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { createBrowserHistory } from 'history'

import { RootApp } from 'RootApp'
import 'ui/styles/global'

import { rootStore } from './rootStore'

const history = createBrowserHistory()
const store = rootStore(history)

const root = createRoot(document.getElementById('root')!)

root.render(
  <ReduxProvider store={store}>
    <RootApp />
  </ReduxProvider>
)
