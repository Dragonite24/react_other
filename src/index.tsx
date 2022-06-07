import { createRoot } from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { createBrowserHistory } from 'history'

import { configureStore } from './configureStore'
import { App } from 'App'

const history = createBrowserHistory()
const store = configureStore(history)

const root = createRoot(document.getElementById('root')!)
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
)
