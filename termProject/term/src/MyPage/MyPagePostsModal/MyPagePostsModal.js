import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const ModalContents = styled.div`
  width:550px;
  height:80%;
  display:flex;
  flex-direction:column;
  align-items:center;
  background-color:white;
  border-radius:10%;
  overflow: auto;
  .userImage{
    width:150px;
    height:150px;
    clip-path: circle(40%);
    position: relative;
    justify-content: center;
    align-items: center;
    background-size:100%;
    background-color:#d3d3d3;
  }
  .modalPostTop{
    margin-top:50px;
    width:90%;
    height:250px;
    justify-content: center;
    align-items: center;
    border-bottom: 3px solid #5050ff;
  }
`


const MyPagePostsModal = ({user,props,userImage,hover}) => {

  const [like, setLike] = useState(false);
  const [scrap, setScrap] = useState(false);
  const [userPostInfo, setUserPostInfo] = useState(props);

  const handleModalClick = (e) => { e.stopPropagation(); };

  return (
  <ModalContents onClick={handleModalClick}>
      <div class="modalPostTop">

        <Button variant="danger" size="sm" style={{display:'flex', float:'right'}}>삭제</Button>{' '}
        <Button variant="info" size="sm" style={{display:'flex', float:'right', marginRight:'10px'}}>수정</Button>{' '}
        <div style={{display:'flex', float:'left', margin:'auto'}}>
          <div class="userImage" style={{backgroundImage: `url(${userImage})` }} />
        <div style={{display:'block', float:'left', margin:'auto', width:'300px', height:'200px'}}>
          <h2 style={{fontSize:'20px'}}>{user}</h2> 
          <div style={{fontSize:'12px'}}>{props.date} 작성</div>
          <hr/>
          <div style={{fontSize:'25px'}}>{props.title} </div>
        </div>
      </div>
      </div>
      <div style={{display:'block', width:'300px',height:'300px',margin:'20px'}}>
        <img src={props.image} style={{width:'90%',height:'90%',display:'block'}}/>
      </div>
      <div style={{display:'block', marginBottom:'30px',marginTop:'30px',fontSize:'18px',width:'90%'}}>
        <p>{props.description}</p>
        <Button variant={(like)?"danger":"secondary"} onClick={() => setLike(!like)}>추천 : {(like)?(userPostInfo.likeCount+1):(userPostInfo.likeCount)}</Button>{' '}
        <Button variant={(scrap)?"warning":"secondary"} onClick={() => setScrap(!scrap)}>스크랩 : {(scrap)?(userPostInfo.scrapCount+1):(userPostInfo.scrapCount)}</Button>{' '}
      </div>
      <hr style={{border:'2px solid', width:'90%'}}/>
      {props.comments.map((v,i)=>{
        return <div>
          {v}
          <hr/>
        </div>
      })}
    </ModalContents>
  )
}

export default MyPagePostsModal;
