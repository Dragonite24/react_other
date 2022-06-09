import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { createBrowserHistory } from 'history'

import { configureStore } from './configureStore'
import { RootApp } from 'RootApp'

import './ui/styles/global'

const history = createBrowserHistory()
const store = configureStore(history)

const root = createRoot(document.getElementById('root')!)
root.render(
  <ReduxProvider store={store}>
    <RootApp />
  </ReduxProvider>
)
