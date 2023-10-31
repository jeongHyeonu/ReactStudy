/**
 * ch07/ex/ex34-1
 * ./src/index.js
 * 
 * reference code: ch07/02-1.html ~ ch07/02-4.html
 */

import { createRoot } from 'react-dom/client';
import App from './App';

const element = document.getElementById('root')
const root = createRoot(element);
root.render(
  <App />
);
