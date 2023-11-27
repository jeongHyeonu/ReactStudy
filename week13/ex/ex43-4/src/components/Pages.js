/**
 * ch11/ex/ex43-4
 * ./src/components/Pages.js
 */

import { useLocation, Link, Outlet } from "react-router-dom";

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

/**
 * Introduction
 * - Introduction의 sub-component: Greetings, Objectives, History, Contacts
 */

// <Outlet /> 컴포넌트를 사용하여 레이아웃 구성
// - 하위 컴포넌트가 렌더링 될 때, 라우팅 구조에 따라 해당 컴포넌트의 상위 컴포넌트를 함께 반환
export const Introduction = () => (
  <div>
    <h1>#Introduction#</h1>
    <div>
      // code here
    </div>
  </div>
);

/** Greetings 컴포넌트 생성하고, export */
export const Greetings = () => (
  // code here
);

/** Objectives 컴포넌트 생성하고, export */
export const Objectives = () => (
  // code here
);

/** History 컴포넌트 생성하고, export */
export const History = () => (
  // code here
);

/** Contacts 컴포넌트 생성하고, export */
export const Contacts = () => (
  // code here
);


/**
 * Members
 * - Faculty, Labs, Committees
 */
export const Members = () => (
  <div>
    <h1>#Members#</h1>
    <div>
      <Outlet />
    </div>
  </div>
);

export const Faculty = () => (
  <div>
    <h3>Faculty</h3>
  </div>
);

export const Labs = () => (
  <div>
    <h3>Labs</h3>
  </div>
);

export const Committees = () => (
  <div>
    <h3>Committees</h3>
  </div>
);


/**
 * Coureses
 * - Majors, Curriculums, Graduation
 */
export const Courses = () => (
  <div>
    <h1>#Course#</h1>
    <div>
      <Outlet />
    </div>
  </div>
);

export const Majors = () => (
  <div>
    <h3>Majors</h3>
  </div>
);

export const Curriculums = () => (
  <div>
    <h3>Curriculums</h3>
  </div>
);

export const Graduation = () => (
  <div>
    <h3>Graduation requirements</h3>
  </div>
);


/**
 * Activities
 * - Clubs, Capstone-design, Competitions, Coding-lounge
 */
export const Activities = () => (
  <div>
    <h1>#Student Activities#</h1>
    <div>
      <Outlet />
    </div>
  </div>
);

export const Clubs = () => (
  <div>
    <h3>Clubs</h3>
  </div>
);

export const Capstone = () => (
  <div>
    <h3>Capstone-design</h3>
  </div>
);

export const Competitions = () => (
  <div>
    <h3>Competitions</h3>
  </div>
);

export const Lounge = () => (
  <div>
    <h3>Coding-lounge</h3>
  </div>
);


/**
 * Boards
 */
export const Boards = () => (
  <div>
    <h1>#Boards#</h1>
  </div>
);


/**
 * Notfound
 */
export const Notfound = () => {
  const locations = useLocation();
  return (
    <div>
      <h3>Page not found at {locations.pathname}</h3>
    </div>
  );
};