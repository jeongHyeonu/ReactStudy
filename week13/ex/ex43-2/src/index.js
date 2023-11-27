/**
 * ch11/ex/ex43-2
 * ./src/index.js
 * 
 * BrowserRouter:
 * https://reactrouter.com/en/main/router-components/browser-router
 */

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
