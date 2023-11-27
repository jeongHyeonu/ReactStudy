/**
 * ch11/ex/ex43-4
 * ./src/App.js
 */
import { Route, Routes, Navigate } from 'react-router-dom';
import { 
  Home, 
  Introduction, Members, Courses, Activities, Boards, Notfound, 
  Greetings, Objectives, History, Contacts,
  Faculty, Labs, Committees,
  Majors, Curriculums, Graduation,
  Clubs, Capstone, Competitions, Lounge
} from "./components/Pages";

// 라우팅 구조에 따라 상.하위 컴포넌트를 중첩하여 라우팅
const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    // Introduction: /intro/*
    //  + Greetings, Objectives, History, Contacts
    //    path: "greetings", "objectives", "history", "contacts"
    // code here
    <Route path="/members/*" element={<Members />}>
      <Route path="faculty" element={<Faculty />} />
      <Route path="labs" element={<Labs />} />
      <Route path="committees" element={<Committees />} />
    </Route>
    <Route path="/courses/*" element={<Courses />}>
      <Route path="majors" element={<Majors />} />
      <Route path="curriculums" element={<Curriculums />} />
      <Route path="graduation" element={<Graduation />} />
    </Route>
    <Route path="/activities/*" element={<Activities />}>
      <Route path="clubs" element={<Clubs />} />
      <Route path="capstone" element={<Capstone />} />
      <Route path="competitions" element={<Competitions />} />
      <Route path="lounge" element={<Lounge />} />
    </Route>
    <Route path="/boards" element={<Boards />} />
    <Route path="*" element={<Notfound />} />
  </Routes>
);

export default App;