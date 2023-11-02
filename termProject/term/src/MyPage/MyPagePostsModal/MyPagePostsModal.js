import styled from 'styled-components';
let images = [
  1,2,3,4,5,6,7,8,9
]

const ModalDiv = styled.div`
  width:60%;
  height:40%;
  display:flex;
  align-items:row;
  background-color:white;
`


const MyPagePostsModal = ({props}) => {
  return <ModalDiv>
    {props}
  </ModalDiv>
}

export default MyPagePostsModal;
