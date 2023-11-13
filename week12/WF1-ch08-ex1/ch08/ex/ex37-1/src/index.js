/**
 * ch08/ex/ex37-1
 * ./src/index.js
 */

import { createRoot } from 'react-dom/client';
import App from "./App";

const element = document.getElementById("root");
const root = createRoot(element);
root.render(
  <App />
);
