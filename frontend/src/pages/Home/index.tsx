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
import { MdAddCircle } from 'react-icons/md';
import GroupsPage from './GroupsPage';
import api from '../../api';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [user, setUser] = useState<any>(null);
  const [projects, setProjects] = useState<any>(null);
  const history = useHistory();

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user') || 'null')
    setUser(localUser);
    if (!localUser) history.push('/');
    // TODO beleza, to recebendo os projetos certinho, agora preciso adicionar o front pra isso 
    api.post('/projectsByUser', {
      email: localUser.email,
    }).then(e => setProjects(e.data.projects))
  }, []);

  const handleLogout = () => {
    localStorage.setItem('user', '');
    history.push('/')
  }

  console.log(projects)

  const renderPage = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile user={user} setActiveTab={() => setActiveTab('chat')} />;
      case 'groupsPage':
        return <GroupsPage closeTab={() => setActiveTab('chat')} />;
      default:
        return (
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
        );
    }
  }

  return (
    <Container>
      <MessagesContainer>
        <MessagesContainerHeader>
          <div onClick={() => setActiveTab('profile')}>
            {user && user.name}
          </div>
          <div style={{ display: 'inline-flex' }}>
            <Logout onClick={handleLogout}>logout</Logout>
            <MdAddCircle size={36} color="#54A0F8" onClick={() => setActiveTab('groupsPage')} style={{cursor: 'pointer', marginLeft: '10px'}} />
          </div>
       </MessagesContainerHeader>
      </MessagesContainer>
      <OpenedMessage>{renderPage()}</OpenedMessage>
    </Container>
  );
}

export default Home;