/**
 * ch11/proj/01-5
 * ./src/components/Pages.js
 * 
 * <Link />: 
 * https://reactrouter.com/en/main/components/link
 */

import { useLocation, Link, Outlet } from "react-router-dom";

export const Home = () => (
  <div>
    <h1>[Home]</h1>
    <nav>
      <ul>
        <li><Link to="about">About</Link></li>
        <li><Link to="events">Events</Link></li>
        <li><Link to="products">Products</Link></li>
        <li><Link to="contact">Contact us</Link></li>
      </ul>      
    </nav>
  </div>
);

export const About = () => (
  <div className="about">
    <h1>[About]</h1>
    <div className="about_div">
      <Outlet />
    </div>    
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

export const Services = () => (
  <div className="services">
    <h1>[Services]</h1>
  </div>
);

export const History = () => (
  <div>
    <h1>[History]</h1>
  </div>
);

export const Locations = () => (
  <div>
    <h1>[Locations]</h1>
  </div>
);
