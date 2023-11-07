import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser, UPDATE_USER,DELETE_USER, deleteUser } from '../../app/actions';

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


const MyPagePostsModal = ({user,props,userImage,setModal}) => {

  const [like, setLike] = useState(false);
  const [scrap, setScrap] = useState(false);
  const [title, setTitle] = useState(props.title)
  const [description, setDescription] = useState(props.description)
  const [editAble, setEditAble] = useState(false);
  const [userPostInfo, setUserPostInfo] = useState(props);

  const handleModalClick = (e) => { e.stopPropagation(); };

  const userPostsInfo = useSelector((state) => state.user.userPosts);
  const dispatch = useDispatch();
  const handleDeleteUser = (e) => {
    if(window.confirm("삭제하겠습니까?")){
      const newUserInfo = userPostsInfo.filter((post)=>post != props)
      dispatch(deleteUser({action:DELETE_USER, post:newUserInfo})); // 유저 삭제 액션 디스패치
      alert("삭제되었습니다.")
      setModal(false);
    }
  }
  const handleUpdateUser = () => {
    const newUserInfo = userPostsInfo.map((post)=>{
      if(post==props){
        return {
          ...post,
          title:title,
          description:description
        };
      } else return post;
    })
    dispatch(updateUser({action:UPDATE_USER, post:newUserInfo})); // 유저 업데이트 액션 디스패치
  }
  const onChangeTitle = (e)=>{
    setTitle(e.target.value)
  }
  const onChangeDescription = (e)=>{
    setDescription(e.target.value)
  }

  return (
  <ModalContents onClick={handleModalClick}>
      <div class="modalPostTop">

        <Button variant="danger" size="sm" style={{display:'flex', float:'right'}}
          onClick={ (e) => {handleDeleteUser(e);  }}>삭제</Button>{' '}
        <Button variant="info" size="sm" style={{display:'flex', float:'right', marginRight:'10px'}}
          onClick={ ()=>{setEditAble(!editAble); handleUpdateUser()}}>수정</Button>{' '}
        <div style={{display:'flex', float:'left', margin:'auto'}}>
          <div class="userImage" style={{backgroundImage: `url(${userImage})` }} />
        <div style={{display:'block', float:'left', margin:'auto', width:'300px', height:'200px'}}>
          <h2 style={{fontSize:'20px'}}>{user}</h2> 
          <div style={{fontSize:'12px'}}>{props.date} 작성</div>
          <hr/>
          {
            (editAble) ? 
              <input value={title} onChange={onChangeTitle}/> : <div style={{fontSize:'25px'}}>{props.title} </div>
          }
          
        </div>
      </div>
      </div>
      <div style={{display:'block', width:'300px',height:'300px',margin:'20px'}}>
        <img src={props.image} style={{width:'90%',height:'90%',display:'block'}}/>
      </div>
      <div style={{display:'block', marginBottom:'30px',marginTop:'30px',fontSize:'18px',width:'90%'}}>
        {(editAble) ? <><input value={description} onChange={onChangeDescription}/><br/></> : <p>{props.description}</p>}
        <Button variant={(like)?"danger":"secondary"} onClick={() => setLike(!like)}>추천 : {(like)?(props.likeCount+1):(props.likeCount)}</Button>{' '}
        <Button variant={(scrap)?"warning":"secondary"} onClick={() => setScrap(!scrap)}>스크랩 : {(scrap)?(props.scrapCount+1):(props.scrapCount)}</Button>{' '}
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
