import React, { ChangeEvent, useState } from 'react';
import { useHistory } from "react-router-dom";

import api from "../../api";

import { Card, Container, RegisterButton, SubmitButton, Title } from '../SignIn/styles';

const Login: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const history = useHistory();

  const handleForm = ({ value, type }: {value: string, type: string}) => {
    setForm({
      ...form,
      [type]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (form.email === '' || form.password === '' || form.name === '') return;

    const response = await api.post('/user', {
      type: 'signUp',
      username: form.name,
      email: form.email,
      password: form.password,
    });
    if (response.status === 200 && response.data.email === form.email) {
      localStorage.setItem('user', JSON.stringify(response.data));
      history.push('/home');
    }
  }

  return (
    <Container>
      <Card>
        <Title>Sign Up</Title>
        <form>
          <input
            placeholder='name'
            type='text'
            value={form.name}
            onChange={(e) =>
              handleForm({value: e.target.value, type: 'name'})}
          />
          <input
            placeholder='email'
            type='text'
            value={form.email}
            onChange={(e) =>
              handleForm({value: e.target.value, type: 'email'})}
          />
          <input
            placeholder='password'
            type='password'
            value={form.password}
            onChange={(e) =>
              handleForm({value: e.target.value, type: 'password'})}
          />
        </form>
        <SubmitButton onClick={(e) => handleSubmit(e)}>
          <h2>Create User</h2>
        </SubmitButton>
        <RegisterButton>
          <h3>Sign In</h3>
        </RegisterButton>
      </Card>
    </Container>

  );
}

export default Login;