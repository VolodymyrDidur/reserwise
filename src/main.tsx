import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx'
import './i18n/i18n.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Router>
      <App />
    </Router>
)
