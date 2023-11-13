/**
 * ch11/proj/01-3
 * ./src/components/Pages.js
 * 
 * useLocation()
 * https://reactrouter.com/en/main/hooks/use-location
 */

import { useLocation } from "react-router-dom";

export const Home = () => (
  <div>
    <h1>[Home]</h1>
  </div>
);

export const About = () => (
  <div>
    <h1>[About]</h1>
  </div>
);

export const Events = () => (
  <div>
    <h1>[Events]</h1>
  </div>
);

export const Products = () => (
  <div>
    <h1>[Products]</h1>
  </div>
);

export const Contact = () => (
  <div>
    <h1>[Contact]</h1>
  </div>
);

export const Whoops404 = () => {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Resource not found at {location.pathname}</h1>
    </div>
  );
};