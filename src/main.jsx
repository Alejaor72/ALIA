import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';


const appContainer = document.getElementById('root');
const root = createRoot(appContainer);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

console.log(appContainer);