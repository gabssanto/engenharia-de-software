import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  flex: auto;
  padding: 10vh 10vw;
  height: 100vh;
  h1 {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #333;
  height: 30px;
  padding: 0 8px;
  width: 100%;
  margin-bottom: 16px;

  &:focus {
    border-color: #54A0F8;
  }
`;

export const UpdateUser = styled.div`
  border: 2px solid #54A0F8;
  padding: 8px 16px;
  border-radius: 8px;
  color: #54a0f8;
  cursor: pointer;
`;

export const DeleteUser = styled.div`
  cursor: pointer;
  background-color: #f82631;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  margin-left: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;