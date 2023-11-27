/**
 * ch11/ex/ex43-3
 * ./src/components/Pages.js
 */

import { useLocation, Link,Outlet } from "react-router-dom";

// 하위에 Introduction, Members, Courses, Activities, Boards 컴포넌트를 링크로 연결
// 예: Introduction 클릭하는 경우, localhost:3000/intro 을 통해 <Introduction />으로 이동
export const Home = () => (
  <div>
    <h1>#Home#</h1>
    <nav>
      <ul>
        <li>Introduction</li>
        <li>Members</li>
        <li>Courses</li>
        <li>Activities</li>
        <li>Boards</li>
      </ul>
    </nav>
  </div>
);

export const Introduction = () => (
  <div>
    <h1>#Introduction#</h1>
    <div>
      <Outlet/>
    </div>
  </div>
);

export const Greetings = () => (
  <div>
    <h1>#Greetings#</h1>
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

export const Notfound = () => {
  const locations = useLocation();
  return (
    <div>
      <h3>Page not found at {locations.pathname}</h3>
    </div>
  );
};