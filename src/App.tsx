import './index.scss';
import { ErrorBoundary } from './components';
import { Security } from './auth/Security';
import Routes from './routes/Routes';
import React from 'react';
import setLangFromStorage from './i18n/setLangFromStorage';

function App() {
  React.useEffect(() => {
    setLangFromStorage(localStorage, 'i18nextLng');
  })
  return (
    <ErrorBoundary>
      <Security>
        <Routes />
      </Security>
    </ErrorBoundary>
  )
}

export default App
