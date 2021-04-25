import React from 'react';
import { MdAddCircle } from "react-icons/md";
import { Container, Header, KanbanSection, KanbanSectionTitle, KanbanWrapper } from './styles';

const Kanban: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Kanban</h1>
        <MdAddCircle size={36} color="rgb(241,101,34)" />
      </Header>
      <KanbanWrapper>  
        <KanbanSection>
          <KanbanSectionTitle>TO DO</KanbanSectionTitle>
        </KanbanSection>
        <KanbanSection>
          <KanbanSectionTitle>DOING</KanbanSectionTitle>
        </KanbanSection>
        <KanbanSection>
          <KanbanSectionTitle>DONE</KanbanSectionTitle>
        </KanbanSection>
      </KanbanWrapper>
    </Container>
  );
}

export default Kanban;