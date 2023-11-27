/**
 * ch11/ex/ex44-4
 * ./src/components/Menu.js
 */
import { NavLink } from 'react-router-dom'; 

export const MainMenu = () => (
  <nav className="main-menu">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/intro">Introduction</NavLink>
    <NavLink to="/members">Members</NavLink>
    <NavLink to="/courses">Courses</NavLink>
    <NavLink to="/activities">Activities</NavLink>
    <NavLink to="/boards">Boards</NavLink>
  </nav>
);

export const IntroMenu = () => (
  <div className="intro-menu">
    <li><NavLink to="/intro">Greetings</NavLink></li>
    <li><NavLink to="/intro/objectives">Objectives</NavLink></li>
    <li><NavLink to="/intro/history">History</NavLink></li>
    <li><NavLink to="/intro/contacts">Contacts</NavLink></li>
  </div>
);

export const MembersMenu = () => (
  <div className="members-menu">
    <li><NavLink to="/members">Faculty</NavLink></li>
    <li><NavLink to="/members/labs">Labs</NavLink></li>
    <li><NavLink to="/members/committees">Committees</NavLink></li>
  </div>
);

export const CoursesMenu = () => (
  <div className="courses-menu">
    <li><NavLink to="/courses">Majors</NavLink></li>
    <li><NavLink to="/courses/curriculums">Curriculums</NavLink></li>
    <li><NavLink to="/courses/graduation">Graduation</NavLink></li>
  </div>
);

export const ActivitiesMenu = () => (
  <div className="activities-menu">
    <li><NavLink to="/activities">Clubs</NavLink></li>
    <li><NavLink to="/activities/capstone">Capstone design</NavLink></li>
    <li><NavLink to="/activities/competitions">Competitions</NavLink></li>
    <li><NavLink to="/activities/lounge">Coding-lounge</NavLink></li>
  </div>
);