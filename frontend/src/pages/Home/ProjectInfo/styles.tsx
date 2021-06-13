import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  height: 90vh;
  background-color: white;
  align-items: center;
  padding-top: 20px;
  overflow: hidden;

  div:nth-child(2n) {
      margin-top: 10px;
      margin-bottom: 10px;
  }
`;

export const UserInfo = styled.div`
    background-color: #eee;
    display: flex;
    flex-direction: row;
    height: 5vh;
    width: 50vw;
    justify-content: space-evenly;
    align-items: center;
`;