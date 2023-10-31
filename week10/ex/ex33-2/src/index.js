/**
 * ch07/ex/ex33-2
 * ./src/index.js
 * 
 * reference code: ch07/02-1.html ~ ch07/02-4.html
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const element = document.getElementById('root')
const root = createRoot(element);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
