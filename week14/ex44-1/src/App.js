/**
 * ch11/ex/ex44-1
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

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/intro/*" element={<Introduction />}>
      <Route path="greetings" element={<Greetings />} />
      <Route path="objectives" element={<Objectives />} />
      <Route path="history" element={<History />} />
      <Route path="contacts" element={<Contacts />} />
    </Route>
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
    <Route path="/history" element={<Navigate replace="true" to="/intro/history"/>} />
    <Route path="*" element={<Notfound />} />
  </Routes>
);

export default App;