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

export const PrimaryButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 16px 16px;
  max-width: 8vw;
  border-radius: 8px;
  color: white;
  background-color: #54a0f8;
  cursor: pointer;
  margin-bottom: 10px;
`;