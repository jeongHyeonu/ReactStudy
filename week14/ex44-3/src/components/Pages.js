/**
 * ch11/ex/ex44-3
 * ./src/components/Pages.js
 */

import { useLocation, Link, Outlet } from "react-router-dom";
import { MainMenu, IntroMenu, MembersMenu, CoursesMenu, ActivitiesMenu } from "./Menu";

const PageTemplate = ({ children }) => (
  <div className="page">
    <MainMenu />
    {children}
  </div>
);

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
 * - Greetings, Objectives, History, Contacts
 */
export const Introduction = () => (
  <PageTemplate>
    <section>
      <IntroMenu />
      <Outlet />
    </section>
  </PageTemplate>
);

export const Greetings = () => (
  <div>
    <h3>Greetings</h3>
  </div>
);

export const Objectives = () => (
  <div>
    <h3>Education objectives</h3>
  </div>
);

export const History = () => (
  <div>
    <h3>Division history</h3>
  </div>
);

export const Contacts = () => (
  <div>
    <h3>Contacts and Locations</h3>
  </div>
);


/**
 * Members
 * - Faculty, Labs, Committees
 */
export const Members = () => (
  <PageTemplate>
    <section>
      <MembersMenu />
      <Outlet />
    </section>
  </PageTemplate>
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
  <PageTemplate>
    <section>
      <CoursesMenu />
      <Outlet />
    </section>
  </PageTemplate>
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
  <PageTemplate>
    <section>
      <ActivitiesMenu />
      <Outlet />
    </section>
  </PageTemplate>
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
  <PageTemplate>
    <section>
      <h2>This area is for boards</h2>
    </section>
  </PageTemplate>
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