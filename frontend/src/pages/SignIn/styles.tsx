import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Merienda+One&display=swap');
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  color: rgb(241,101,34);
  font-family: 'Merienda One', cursive;
  margin-top: 3%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  justify-content: space-evenly;
  background-color: #fff;
  min-height: 30vh;
  min-width: 30vw;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);
  border-radius: 10px;
  input {
    width: 100%;
    padding: 8px 16px;
    flex: 1;
    border: 1px solid rgb(241,101,34);
    border-radius: 4px;
    font-size: 16px;
  }
  input:last-of-type {
    margin-top: 8px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  background-color: rgb(241,101,34);
  color: #fff;
  border: 0;
  padding: 10px 0;
  border-radius: 4px;
  h2 {
    font-weight: lighter;
  }
`;

export const RegisterButton = styled.button.attrs({
  type: 'submit'
})`
  background-color: #fff;
  color: rgb(241,101,34);
  border: 2px solid rgb(241,101,34);
  padding: 10px 0;
  border-radius: 4px;
  h3 {
    font-weight: lighter;
    font-size: 20px;
  }
`;