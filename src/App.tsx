import './index.scss'
import { ErrorBoundary } from './components'
import { Security } from './auth/Security'
import Routes from './routes/Routes'

function App() {
  return (
    <ErrorBoundary>
      <Security>
        <Routes />
      </Security>
    </ErrorBoundary>
  )
}

export default App
