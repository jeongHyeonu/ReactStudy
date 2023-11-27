/**
 * ch11/ex/ex43-2
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
    // Routes 하위에 정의되지 않은 path는 <Notfound />로 이동
    // code here
  </Routes>
);

export default App;