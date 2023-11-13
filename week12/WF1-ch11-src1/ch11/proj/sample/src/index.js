/**
 * ch11/lec/proj/ch11-00
 * ./src/index.js
 */

// import react, react-dom/client, react-router-dom and module
// 
// import { BrowserRouter } from 'react-router-dom';
// import App from './App';

import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Home</h1>
        <Link to="about">About us</Link>
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
]);

const element = document.getElementById('root')
const root = createRoot(element);
root.render(
  <RouterProvider router={router} />
);
