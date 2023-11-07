import Home from "./Home/Home";
import MyPage from "./MyPage/MyPage";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

// exact 하는 이유? - 홈 페이지와 마이페이지 둘 다 렌더링 되기 때문 
function App() {
  console.log("????")
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/mypage/:user" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
