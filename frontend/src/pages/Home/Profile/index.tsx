import React, { useState } from 'react';
import { Container, Input, UpdateUser, ButtonContainer, DeleteUser, Header } from './styles';
import { MdClose } from 'react-icons/md';
import api from '../../../api';
import { useHistory } from 'react-router-dom';

const Profile: React.FC<any> = ({ user, setActiveTab }) => {
  const history = useHistory();
  const [form, setForm] = useState({
    name: user.name,
    email: user.email,
    password: '',
  });

  const handleForm = ({ value, type }: {value: string, type: string}) => {
    setForm({
      ...form,
      [type]: value,
    });
  };

  const handleUpdateUser = async (e: any) => {
    e.preventDefault();

    if (form.email === '' || form.password === '' || form.name === '') return;

    const response = await api.put('/user', {
      username: form.name,
      email: form.email,
      password: form.password,
    });

    if (response.status === 200) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }
  }

  const handleDeleteUser = async (e: any) => {
    e.preventDefault();

    if (form.email === '' || form.password === '' || form.name === '') return;

    const response = await api.delete('/user', {
      data: {
        email: form.email,
        password: form.password,
      }
    });
    console.log(response);

    if (response.status === 200) {
      history.push('/');
      localStorage.removeItem('user');
    }
  }

  return (
    <Container>
      <Header>
        <h1>Update User</h1>
        <MdClose size={36} style={{cursor: 'pointer', color: '#54A0F8'}} onClick={setActiveTab}/>
      </Header>
      <p>Update Username</p>
      <Input
        placeholder="New username"
        value={form.name}
        onChange={(e) =>
          handleForm({value: e.target.value, type: 'name'})}
      />
      <p>Take a look at your email</p>
      <Input
        style={{ backgroundColor: '#eee' }}
        value={user.email}
        readOnly
      />
      <p>Password</p>
      <Input
        placeholder='password'
        type='password'
        value={form.password}
        onChange={(e) =>
          handleForm({value: e.target.value, type: 'password'})}
      />
      <ButtonContainer>
        <UpdateUser onClick={(e) => handleUpdateUser(e)}>Update User</UpdateUser>
        <DeleteUser onClick={(e) => handleDeleteUser(e)}>Delete User</DeleteUser>
      </ButtonContainer>
    </Container>
  );
}

export default Profile;