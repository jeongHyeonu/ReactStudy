/**
 * ch11/ex/ex43-2
 * ./src/components/Pages.js
 */

// react-router-dom의 useLocation hooks를 사용하도록 import
// code here

export const Home = () => (
  <div>
    <h1>#Home#</h1>
  </div>
);

export const Introduction = () => (
  <div>
    <h1>#Introduction#</h1>
  </div>
);

export const Members = () => (
  <div>
    <h1>#Members#</h1>
  </div>
);

export const Courses = () => (
  <div>
    <h1>#Course#</h1>
  </div>
);

export const Activities = () => (
  <div>
    <h1>#Student Activities#</h1>
  </div>
);

export const Boards = () => (
  <div>
    <h1>#Boards#</h1>
  </div>
);

// Notfound 컴포넌트 구현하고 export
// useLocation hooks를 사용하여 현재 요청된 URL 주소를 받아와 화면에 렌더링
export const Notfound = () => {
  // code here
};