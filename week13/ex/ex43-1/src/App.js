import {Route, Routes} from 'react-router-dom';
import {Home,Introduction,Members,Courses,Activities,Boards,NotFound} from "./components/Pages";

const App = () => (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/intro" element={<Introduction/>}/>
    <Route path="/Members" element={<Members/>}/>
    <Route path="/Courses" element={<Courses/>}/>
    <Route path="/Activities" element={<Activities/>}/>
    <Route path="/Boards" element={<Boards/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
);

export default App;