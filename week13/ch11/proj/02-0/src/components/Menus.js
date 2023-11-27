/**
 * ch11/proj/02-0
 * ./src/components/Menus.js
 */

import { NavLink } from "react-router-dom";

export const MainMenu = () => (
  <nav className="main-menu">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/events">Events</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/contact">Contact us</NavLink>
  </nav>
);

export const AboutMenu = () => (
  <div className="about-menu">
    <li><NavLink to="/about">Company</NavLink></li>
    <li><NavLink to="/about/history">History</NavLink></li>
    <li><NavLink to="/about/services">Services</NavLink></li>
    <li><NavLink to="/about/locations">Locations</NavLink></li>
  </div>  
);