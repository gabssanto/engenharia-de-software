import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: white;
  width: inherit;
  height: 90vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
`;

export const KanbanWrapper = styled.div`
  padding: 16px 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const KanbanSection = styled.div`
  height: 80vh;
  width: 20vw;
  background-color: #eee;
  border-radius: 10px;
`;

export const KanbanSectionTitle = styled.div`
  color: #333;
  display: flex;
  justify-content: center;
  padding: 16px 16px;
  font-weight: bold;
  font-size: 18px;
`;