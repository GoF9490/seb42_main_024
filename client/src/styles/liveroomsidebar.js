import styled from 'styled-components';

export const LiveroomSideBarContainer = styled.div`
  width: 600px;
  height: 100vh;
  background-color: var(--color1);
  border: 1px solid var(--color3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 40px;
`;

export const LSBHeaderContainer = styled.div`
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color9);
  font-size: 55px;
  > svg {
    margin-left: 10px;
    &.hide {
      visibility: hidden;
    }
  }
`;
export const LSBPlayListContainer = styled.div`
  height: 15%;
`;
export const LSBChatContianer = styled.div`
  height: 75%;
`;
export const LSBOutBtn = styled.button`
  font-size: 25px;
  font-weight: 600;
  width: 110px;
  height: 60px;
  border-radius: 10px;
`;

export const LSBMemberContainer = styled.div`
  height: 20%;
  color: var(--color9);
  display: flex;
  align-items: center;
  margin-left: 15px;
  font-size: 25px;
  font-weight: 600;
  > svg {
    margin-right: 5px;
  }
`;

export const LSBPlayListWrap = styled.div`
  border-radius: 20px;
  height: 80%;
  background-color: var(--color2);
  padding: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
