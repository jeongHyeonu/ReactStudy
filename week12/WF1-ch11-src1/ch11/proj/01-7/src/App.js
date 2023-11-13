/**
 * ch11/proj/01-7
 * ./src/App.js
 *
 * useRoutes()
 * https://reactrouter.com/en/main/hooks/use-routes
 */

import { Navigate, useRoutes } from 'react-router-dom';
import { Home, About, Events, Products, Contact, Whoops404, Services, History, Locations } from "./components/Pages";

const App = () => {

  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About />, children: [
      { path: "services", element: <Services /> },
      { path: "history", element: <History /> },
      { path: "locations", element: <Locations /> }
    ] },
    { path: "events", element: <Events /> },
    { path: "products", element: <Products /> },
    { path: "contact", element: <Contact /> },
    { path: "*", element: <Whoops404 /> },
    { path: "services", element: <Navigate replace to="/about/services" /> },
    { path: "history", element: <Navigate replace to="/about/history" /> },
    { path: "locations", element: <Navigate replace to="/about/locations" /> }
  ]);

  return element;
};

export default App;