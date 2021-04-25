import React, { useState } from 'react';
import Kanban from './Kanban';

import {
  BottomNavBar,
  BottomNavBarItem,
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
        {activeTab === 'kanban' && <Kanban />}
        <BottomNavBar>
          <BottomNavBarItem active={activeTab === 'chat'} onClick={() => setActiveTab('chat')}>Chat</BottomNavBarItem>
          <BottomNavBarItem active={activeTab === 'kanban'} onClick={() => setActiveTab('kanban')}>Kanban</BottomNavBarItem>
        </BottomNavBar>
      </OpenedMessage>
    </Container>
  );
}

export default Home;