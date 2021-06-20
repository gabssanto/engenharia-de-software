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
  ProjectsListContainer,
  ProjectListItem,
  EmptyProjectsList,
  NoActiveProject
} from './styles';
import Chat from './Chat';
import Profile from './Profile';
import ProjectInfo from './ProjectInfo';
import { MdAddCircle } from 'react-icons/md';
import GroupsPage from './GroupsPage';
import api from '../../api';
import { v4 } from 'uuid';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [user, setUser] = useState<any>(null);
  const [projects, setProjects] = useState<any>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const history = useHistory();

  const apiHelper = () => {
    const localUser = JSON.parse(localStorage.getItem('user') || 'null')
    setUser(localUser);
    if (!localUser) history.push('/');
    api.post('/projectsByUser', {
      email: localUser.email,
    }).then(e => {
      let tempProjects: any = []
      e.data.projects.map((project: any) => {
        if (!tempProjects.find((p: any) => p.name === project.name)) {
          tempProjects.push(project)
        }
      })
      setProjects(tempProjects)
    })
  }

  useEffect(() => {
    apiHelper();
  }, []);

  const handleLogout = () => {
    localStorage.setItem('user', '');
    history.push('/')
  }

  // console.log(projects)

  const renderProjectPage = () => {
    if (!selectedProject) return (
      <NoActiveProject>
        <h1>No active Project, select a project or create a new one</h1>
      </NoActiveProject>
    );
    return (
      <>
        <OpenedMessageHeader>
          <div>{selectedProject.name}</div>
        </OpenedMessageHeader>
        <NavBar>
          <NavBarItem active={activeTab === 'chat'} onClick={() => setActiveTab('chat')}>Chat</NavBarItem>
          <NavBarItem active={activeTab === 'kanban'} onClick={() => setActiveTab('kanban')}>Kanban</NavBarItem>
          <NavBarItem active={activeTab === 'info'} onClick={() => setActiveTab('info')}>Info</NavBarItem>
        </NavBar>
        {activeTab === 'kanban' && <Kanban
          projectId={selectedProject.id}
        />}
        {activeTab === 'info' && <ProjectInfo users={selectedProject.users} />}
        {activeTab === 'chat' && <Chat
          chatHistory={selectedProject.history}
          apiHelper={() => apiHelper()}
          user={user}
          projectId={selectedProject.id}
        />}
      </>
    );
  }

  const renderPage = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile user={user} setActiveTab={() => setActiveTab('chat')} />;
      case 'groupsPage':
        return <GroupsPage closeTab={() => setActiveTab('chat')} />;
      default:
        return renderProjectPage();
    }
  }

  const renderProjectList = () => {
    if (projects.length === 0) return (
      <EmptyProjectsList>
        No Projects yet
      </EmptyProjectsList>
    )
    return <ProjectsListContainer>
      {projects.map((project: any) => (
      <ProjectListItem key={v4()} onClick={() => setSelectedProject(project)}>
        {project.name}
      </ProjectListItem>
    ))}
    </ProjectsListContainer>
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
        {renderProjectList()}
      </MessagesContainer>
      <OpenedMessage>{renderPage()}</OpenedMessage>
    </Container>
  );
}

export default Home;