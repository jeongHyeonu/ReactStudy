/**
 * ch11/ex/ex45
 * ./src/App.js
 */
import { Route, Routes, Navigate } from 'react-router-dom';
import { 
  Home, 
  Introduction, Members, Courses, Activities, Boards, Notfound, 
  Greetings, Objectives, History, Contacts,
  Faculty, Labs, Committees,
  MajorList, MajorInfo, Curriculums, Graduation,
  Clubs, Capstone, Competitions, Lounge
} from "./components/Pages";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/intro/*" element={<Introduction />}>
      <Route path="" element={<Greetings />} />
      <Route path="greetings" element={<Greetings />} />
      <Route path="objectives" element={<Objectives />} />
      <Route path="history" element={<History />} />
      <Route path="contacts" element={<Contacts />} />
    </Route>
    <Route path="/members/*" element={<Members />}>
      <Route path="" element={<Faculty />} />
      <Route path="faculty" element={<Faculty />} />
      <Route path="labs" element={<Labs />} />
      <Route path="committees" element={<Committees />} />
    </Route>
    <Route path="/courses/*" element={<Courses />}>
      <Route path="" element={<MajorList />} />
      // Routing parameter :id for <MajorInfo />
      <Route path="curriculums" element={<Curriculums />} />
      <Route path="graduation" element={<Graduation />} />
    </Route>
    <Route path="/activities/*" element={<Activities />}>
      <Route path="" element={<Clubs />} />
      <Route path="clubs" element={<Clubs />} />
      <Route path="capstone" element={<Capstone />} />
      <Route path="competitions" element={<Competitions />} />
      <Route path="lounge" element={<Lounge />} />
    </Route>
    <Route path="/boards" element={<Boards />} />
    <Route path="/greetings" element={<Navigate replace="true" to="/intro/greetings" />} />
    <Route path="/objectives" element={<Navigate replace="true" to="/intro/objectives" />} />
    <Route path="/history" element={<Navigate replace="true" to="/intro/history" />} />
    <Route path="/contacts" element={<Navigate replace="true" to="/intro/contacts" />} />
    <Route path="/faculty" element={<Navigate replace="true" to="/members/faculty" />} />
    <Route path="/labs" element={<Navigate replace="true" to="/members/labs" />} />
    <Route path="/committees" element={<Navigate replace="true" to="/members/committees" />} />
    <Route path="/majors" element={<Navigate replace="true" to="/courses/majors" />} />
    <Route path="/curriculums" element={<Navigate replace="true" to="/courses/curriculums" />} />
    <Route path="/graduation" element={<Navigate replace="true" to="/courses/graduation" />} />
    <Route path="/clubs" element={<Navigate replace="true" to="/activities/clubs" />} />
    <Route path="/capstone" element={<Navigate replace="true" to="/activities/capstone" />} />
    <Route path="/competitions" element={<Navigate replace="true" to="/activities/competitions" />} />
    <Route path="/lounge" element={<Navigate replace="true" to="/activities/lounge" />} />
    <Route path="*" element={<Notfound />} />    
  </Routes>
);

export default App;