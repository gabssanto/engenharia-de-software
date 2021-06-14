import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  position: relative;
  background-color: #eee;
  height: 90vh;
`;

export const MessageContainer = styled.form`
    height: 5vh;
    width: 100%;
    background-color: white;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
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
  margin-right: 15px;

  &:focus {
    border-color: #54A0F8;
  }
`;

export const Messages = styled.div`
    background-color: #eee;
    height: 90vh;
    width: 100%;
    overflow: auto;
`;

export const MessageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const ReceivedMessageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
`;

export const ReceivedMessage = styled.div`
    display: flex;
    min-width: 100px;
    max-width: 100%;
    min-height: 5vh;
    max-height: 90vh;
    background-color: #272742;
    word-wrap: break-word;
    margin-bottom: 16px;
    margin-top: 16px;
    margin-right: 16px;
    color: white;
    padding: 8px 16px;
`;

export const MyMessage = styled.div`
    display: flex;
    min-width: 100px;
    max-width: 100%;
    min-height: 5vh;
    max-height: 90vh;
    background-color: #54A0F8;
    word-wrap: break-word;
    margin-bottom: 16px;
    margin-top: 16px;
    margin-left: 16px;
    color: white;
    padding: 8px 16px;
`;

export const Button = styled.button.attrs({
  type: 'submit',
})
`
  border: none;
  background-color: white;
`;