/**
 * ch11/ex/ex43-3a
 * ./src/App.js
 */

import { Route, Routes } from 'react-router-dom';
import { Home, Introduction, Members, Courses, Activities, Boards, Notfound } from "./components/Pages";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/intro" element={<Introduction />} />
    <Route path="/members" element={<Members />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/activities" element={<Activities />} />
    <Route path="/boards" element={<Boards />} />
    <Route path="*" element={<Notfound />} />
  </Routes>
);

export default App;