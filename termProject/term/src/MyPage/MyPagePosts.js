import styled from 'styled-components';
import MyPagePostsModal from './MyPagePostsModal/MyPagePostsModal';
import React, { useEffect, useMemo, useState } from 'react';

let userPostsInfo = [
  {
    likeCount:30,
    scrapCount:2,
    comments:["댓글1","댓글2","댓글3"],
    title:"종강마렵다 교수님 종강주세오",
    description:"대충 게시글 내용",
    image:"/images/image1.png",
    date:"2023-11-05 오후 3:00"
  },
  {
    likeCount:9,
    scrapCount:2,
    comments:["댓글1","댓글2","댓글3"],
    title:"종강마렵다 교수님 종강주세오",
    description:"대충 게시글 내용",
    image:"/images/image1.png",
    date:"2023-11-05 오후 3:00"
  },
  {
    likeCount:9,
    scrapCount:2,
    comments:["댓글1","댓글2","댓글3"],
    title:"종강마렵다",
    description:"대충 게시글 내용",
    image:"/images/image1.png",
    date:"2023-11-05 오후 3:00"
    
  },
  {
    likeCount:9,
    scrapCount:2,
    comments:["댓글1","댓글2","댓글3"],
    title:"종강마렵다",
    description:"대충 게시글 내용",
    image:"/images/image1.png",
    date:"2023-11-05 오후 3:00"
  },
  {
    likeCount:9,
    scrapCount:2,
    comments:["댓글1","댓글2","댓글3"],
    title:"종강마렵다",
    description:"대충 게시글 내용",
    image:"/images/image1.png",
    date:"2023-11-05 오후 3:00"
  },
  {
    likeCount:9,
    scrapCount:2,
    comments:["댓글1","댓글2","댓글3"],
    title:"종강마렵다",
    description:"대충 게시글 내용",
    image:"/images/image1.png",
    date:"2023-11-05 오후 3:00"
  },
  {
    likeCount:9,
    scrapCount:2,
    comments:["댓글1","댓글2","댓글3"],
    title:"종강마렵다",
    description:"대충 게시글 내용",
    image:"/images/image1.png",
    date:"2023-11-05 오후 3:00"
  },
  {
    likeCount:9,
    scrapCount:2,
    comments:["댓글1","댓글2","댓글3"],
    title:"종강마렵다",
    description:"대충 게시글 내용",
    image:"/images/image1.png",
    date:"2023-11-05 오후 3:00"
  },
  {
    likeCount:9,
    scrapCount:2,
    comments:["댓글1","댓글2","댓글3"],
    title:"종강마렵다",
    description:"대충 게시글 내용",
    image:"/images/image1.png",
    date:"2023-11-05 오후 3:00"
  },
  {
    likeCount:9,
    scrapCount:2,
    comments:["댓글1","댓글2","댓글3"],
    title:"종강마렵다",
    description:"대충 게시글 내용",
    image:"/images/image1.png",
    date:"2023-11-05 오후 3:00"
  },
]

let width = 150;
let margin = 20;

const PostDiv = styled.div`
  .contents{
    position:relative;
    width:${width}px;
    height:${width}px;
    float:left;
    margin:${margin/2}px;
    display:flex;
    justify-content:center;
    align-content:center;
    align-items:center;
  }
  .hover{
    width: ${width+20}px;
    height: ${width+20}px;
    position:absolute;
    text-align:center;
    align-content:center;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:rgb(0,0,0,0.3);
    color:white;
    cursor:pointer;
    animation-duration: 1s;
    animation: sizeup 1s forwards;
  }
  .modal-container {

  }
  @keyframes sizeup {
    0% {
      width: ${width}px;
      height: ${width}px;
    }

    100% {
      width: ${width+20}px;
      height: ${width+20}px;
    }
  }
`
const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`

const MyPagePosts = ({user,userImage}) => {

  const [hover, setHover] = useState(-1);
  const [modal,setModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("?");
  }

  const renderModal = () => {
    if(modal==true)
    return <ModalContainer onClick={()=>setModal(false)}>
      <MyPagePostsModal user={user} props={userPostsInfo.at(hover)} userImage={userImage} hover={hover}/>
    </ModalContainer>
  }

  const renderSection = (index) => {
    return (
      <div style={{width:(width+margin)*3+20}} >
          <h4>{userPostsInfo.length}개의 게시물이 있습니다.</h4>
          <br/>
          <PostDiv>
              {userPostsInfo.map((v,i)=>(
                <div
                key={i} 
                className="contents"
                onMouseEnter={() => setHover(i)}
                onClick={()=>setModal(true)}
                >
                  <img src="/images/image1.png" style={{ position:'absolute',width:width, height:width,boxShadow:'0px 0px 2px #000'}} className={`${hover == i ? 'hover' : 'none'}`}/>
                  {(hover==i)?<div className={`${hover == i ? 'hover' : 'none'}`}>추천 수 : {v.likeCount}<br/>댓글 : {v.comments.length}</div> : <></>}
                </div>
              ))}
          </PostDiv>
      </div>
    )
  }
  return (
    <>
      <div style={{margin:'50px'}}>
        <h1><b>게시글 목록</b></h1>
      </div>
      {renderSection()}
      {renderModal()}
    </>
  );
}

export default MyPagePosts;
