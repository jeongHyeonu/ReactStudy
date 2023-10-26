import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MyPage() {
  // useParams 훅을 사용하여 URL에서 유저 이름을 추출
  const { user } = useParams();

  // 유저 정보
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // 로컬 JSON 파일 경로를 적절하게 수정
    axios.get(`/users/${user}.json`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      });
  }, [user]);

  if (!userData) {
    return <div>데이터를 로딩 중입니다...</div>;
  }

  console.log(user);
  return <>
    <h2>마이페이지 - 유저: {user}</h2>
    <hr/>
    이름 : {userData.name} <br/>
    학과 학년 : {userData.grade} <br/>
    소개글 : {userData.introduce}
  </>
}

export default MyPage;