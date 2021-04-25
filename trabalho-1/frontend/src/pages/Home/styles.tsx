import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: auto;
  flex-direction: row;
  height: 100vh;
`;

export const MessagesContainer = styled.div`
  background-color: red;
  width: 20vw;
`;

export const Logout = styled.div`
  color: white;
  border-radius: 4px;
  background-color: rgb(241,101,34);
  padding: 8px 16px;
  cursor: pointer;
`;

export const MessagesContainerHeader = styled.div`
  font-size: 16px;
  padding: 0 20px;
  height: 10vh;
  width: inherit;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20);
`;

export const OpenedMessage = styled.div`
  position: relative;
  background-color: blue;
  width: 80vw;
`;

export const OpenedMessageHeader = styled.div`
  font-size: 16px;
  padding: 0 20px;
  height: 5vh;
  width: inherit;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BottomNavBar = styled.div`
  background-color: white;
  width: inherit;
  position: absolute;
  min-height: 5vh;
  bottom: 0;
  display: flex;
  flex: auto;
  justify-content: space-around;
  background-color: transparent;
`;

interface BottomNavBarItemProps {
  active?: boolean;
}

export const BottomNavBarItem = styled.a<BottomNavBarItemProps>`
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: ${props => props.active && 'white'};
  background-color: ${props => props.active ? 'rgb(241,101,34)' : '#eee'};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;