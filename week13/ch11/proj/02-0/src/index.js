/**
 * ch11/proj/02-0
 * ./src/index.js
 */

// import react, react-dom/client, react-router-dom and module
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const element = document.getElementById('root')
const root = createRoot(element);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
