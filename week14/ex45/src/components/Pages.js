/**
 * ch11/ex/ex45
 * ./src/components/Pages.js
 */

import { useLocation, Link, Outlet, useParams } from "react-router-dom";
import { MainMenu, IntroMenu, MembersMenu, CoursesMenu, ActivitiesMenu } from "./Menu";
import '../style/style.css'
import majorData from "../data/major-data.json"

const PageTemplate = ({ children }) => (
  <div className="page">
    <MainMenu />
    {children}
  </div>
);

export const Home = () => (
  <div className="home">
    <h2 className="home_logo">#Home#</h2>
    <nav className="top-menu-nav">
      <ul className="top-menu">
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
    <section className="intro">
      <IntroMenu />
      <Outlet />
    </section>
  </PageTemplate>
);

export const Greetings = () => (
  <div className="greetings">
    <h3>Greetings</h3>
  </div>
);

export const Objectives = () => (
  <div className="objectives">
    <h3>Education objectives</h3>
  </div>
);

export const History = () => (
  <div className="history">
    <h3>Division history</h3>
  </div>
);

export const Contacts = () => (
  <div className="contacts">
    <h3>Contacts and Locations</h3>
  </div>
);


/**
 * Members
 * - Faculty, Labs, Committees
 */
export const Members = () => (
  <PageTemplate>
    <section className="members">
      <MembersMenu />
      <Outlet />
    </section>
  </PageTemplate>
);

export const Faculty = () => (
  <div className="faculty">
    <h3>Faculty</h3>
  </div>
);

export const Labs = () => (
  <div className="labs">
    <h3>Labs</h3>
  </div>
);

export const Committees = () => (
  <div className="committees">
    <h3>Committees</h3>
  </div>
);


/**
 * Coureses
 * - Majors->MajorList & MajorInfo, Curriculums, Graduation
 */
export const Courses = () => (
  <PageTemplate>
    <section className="courses">
      <CoursesMenu />
      <Outlet />
    </section>
  </PageTemplate>
);

export const MajorList = () => (
  <div className="majorlist">
    <h3>{majorData.length} Majors in Division of Computer Engineering</h3>
    <ul>
      {
        // List from majorData using Name and Id properties
        // ex) <li><Link to=Id>Name</Link></li>
        // code here
      }
    </ul>
  </div>
);

export const MajorInfo = () => {
  const { id } = useParams();   // 현재 URL의 동적 매개변수 정보를 담고 있는 객체 반환

  // 데이터 majorData로부터 Id 값이 동적 매개변수 id와 동일한 값을 갖는 요소 obj1을 major에 반환
  const major = majorData.reduce( 
    // code here
  );

  if (!major) return <div>No major information</div>;

  return (
    <div className="majorinfo">
      <h3>Major Information: {major.Name}</h3>
      <h4>Subjects</h4>
      <ul>
        // major.Subject array의 모든 요소를 list로 반환
        {
          // code here
        }
      </ul>
    </div>
  );
}

export const Curriculums = () => (
  <div className="curriculums">
    <h3>Curriculums</h3>
  </div>
);

export const Graduation = () => (
  <div className="graduation">
    <h3>Graduation requirements</h3>
  </div>
);


/**
 * Activities
 * - Clubs, Capstone-design, Competitions, Coding-lounge
 */
export const Activities = () => (
  <PageTemplate>
    <section className="activities">
      <ActivitiesMenu />
      <Outlet />
    </section>
  </PageTemplate>
);

export const Clubs = () => (
  <div className="clubs">
    <h3>Clubs</h3>
  </div>
);

export const Capstone = () => (
  <div className="capstone">
    <h3>Capstone-design</h3>
  </div>
);

export const Competitions = () => (
  <div className="competitions">
    <h3>Competitions</h3>
  </div>
);

export const Lounge = () => (
  <div className="lounge">
    <h3>Coding-lounge</h3>
  </div>
);


/**
 * Boards
 */
export const Boards = () => (
  <PageTemplate>
    <section className="boards">
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