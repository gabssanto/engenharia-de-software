import React, { useState } from 'react';
import Kanban from './Kanban';

import {
  NavBar,
  NavBarItem,
  Container,
  MessagesContainer,
  MessagesContainerHeader,
  OpenedMessage,
  Logout,
  OpenedMessageHeader,
} from './styles';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('chat');
  return (
    <Container>
      <MessagesContainer>
        <MessagesContainerHeader>
          userName
          <Logout>logout</Logout>
       </MessagesContainerHeader>
      </MessagesContainer>
      <OpenedMessage>
        <OpenedMessageHeader>
          <div>groupName</div>
          <div>role</div>
        </OpenedMessageHeader>
        <NavBar>
          <NavBarItem active={activeTab === 'chat'} onClick={() => setActiveTab('chat')}>Chat</NavBarItem>
          <NavBarItem active={activeTab === 'kanban'} onClick={() => setActiveTab('kanban')}>Kanban</NavBarItem>
          <NavBarItem active={activeTab === 'info'} onClick={() => setActiveTab('info')}>Info</NavBarItem>
        </NavBar>
        {activeTab === 'kanban' && <Kanban />}
      </OpenedMessage>
    </Container>
  );
}

export default Home;