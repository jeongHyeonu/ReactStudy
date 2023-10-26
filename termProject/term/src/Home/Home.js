import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <h1>홈화면</h1>
    <hr/>
      <nav>
        <Link to='/mypage/user1'> 유저1 마에피이지</Link>
        <hr/>
        <Link to='/mypage/user2'> 유저2 마에피이지</Link>
        <hr/>
        <Link to='/mypage/user3'> 유저3 마에피이지</Link>
      </nav>
    </>
  );
}

export default Home;
