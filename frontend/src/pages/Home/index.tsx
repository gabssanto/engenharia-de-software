import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
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
import Profile from './Profile';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const history = useHistory();

  if (!user) history.push('/');

  const handleLogout = () => {
    localStorage.setItem('user', '');
    history.push('/')
  }

  return (
    <Container>
      <MessagesContainer>
        <MessagesContainerHeader onClick={() => setActiveTab('profile')}>
          {user.name}
          <Logout onClick={handleLogout}>logout</Logout>
       </MessagesContainerHeader>
      </MessagesContainer>
      <OpenedMessage>
        {activeTab === 'profile' ? <Profile user={user} /> : (
          <>
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
          </>
        )}
      </OpenedMessage>
    </Container>
  );
}

export default Home;