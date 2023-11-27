/**
 * ch11/ex/ex43-1
 * ./src/components/Pages.js
 * Components: Home, Introduction, Members, Courses, Activities, Boards
 */

import { useLocation,Link } from "react-router-dom";

export const Home = () => (
  <div>
    <h1>#Home#</h1>
    <nav>
      <ul>
        <li><Link to="intro">Introduction</Link></li>
        <li><Link to="members">Members</Link></li>
        <li><Link to="courses">Courses</Link></li>
        <li><Link to="activities">Activities</Link></li>
        <li><Link to="boards">Boards</Link></li>
      </ul>
    </nav>
  </div>
);

export const Introduction = () => (
  <div>
    <h1>#Introduction#</h1>
  </div>
);

export const Members = () => (
  <div>
    <h1>#Members#</h1>
  </div>
);

export const Courses = () => (
  <div>
    <h1>#Course#</h1>
  </div>
);

export const Activities = () => (
  <div>
    <h1>#Student Activities#</h1>
  </div>
);

export const Boards = () => (
  <div>
    <h1>#Boards#</h1>
  </div>
);

export const NotFound = () => {
  const locations = useLocation();
  return (
    <div>
      <h1>Page not found at {locations.pathname}</h1>
    </div>
  );
};