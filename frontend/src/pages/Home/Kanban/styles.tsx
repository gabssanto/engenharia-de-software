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
  overflow: auto;
  padding: 8px 16px;
`;

export const KanbanSectionTitle = styled.div`
  color: #333;
  display: flex;
  justify-content: center;
  padding: 16px 16px;
  font-weight: bold;
  font-size: 18px;
`;

export const KanbanItem = styled.div`
  background-color: white;
  padding: 8px 16px;
  margin: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

`;

export const ModalMain = styled.div`
  position: fixed;
  background: white;
  width: 80%;
  height: 50%;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding: 32px 32px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTitleInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #333;
  height: 30px;
  padding: 0 8px;
  width: 100%;
  margin-right: 16px;

  &:focus {
    border-color: #54A0F8;
  }
`;

export const ModalDescription = styled.textarea.attrs({
  rows: 10,
})`
  width: 100%;
  border-radius: 8px;
  padding: 8px 16px;
  &:focus {
    border-color: #54A0F8;
  }
  outline: none;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalPosition = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #272742;
  color: white;
`;

interface ModalItemPositionProps {
  active?: boolean;
}

export const ModalItemPosition = styled.div<ModalItemPositionProps>`
  padding: 8px 16px;
  cursor: pointer;
  background-color: ${props => props.active ? '#54A0F8' : '#272742'};
`;

export const ModalItemSave = styled.div`
  cursor: pointer;
  padding: 8px 16px;
  background-color: #54A0F8;
  color: white;
  border-radius: 8px;
`;