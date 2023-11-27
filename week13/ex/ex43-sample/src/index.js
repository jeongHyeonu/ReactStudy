/**
 * ch11/ex/ex43-1
 * ./src/index.js
 * 
 * BrowserRouter:
 * https://reactrouter.com/en/main/router-components/browser-router
 */

import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Home</h1>
        <Link to="about">About</Link>
      </div>
    )
  },
  {
    path: "about",
    element: (
      <div>
        <h1>About</h1>
        <Link to="/">Home</Link>
      </div>
    )
  }
])

const element = document.getElementById('root')
const root = createRoot(element);
root.render(
  <RouterProvider router={router} />
);
