import React, { useState } from 'react';
import api from "../../api";

import { Card, Container, RegisterButton, SubmitButton, Title } from './styles';

const Login: React.FC = () => {
  api.get('/users').then(e => console.log(e));

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleForm = ({ value, type }: {value: string, type: string}) => {
    setForm({
      ...form,
      [type]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(await api.get('/users'))
    // const { email, password } = this.state;
    //
    // const response = await api.post('/sessions', {
    //   email, password
    // });
    // localStorage.setItem('session', JSON.stringify(response.data));
  }

  return (
      <Container>
        <Card>
          <Title>Sign In</Title>
          <form>
            <input
              placeholder='email'
              type='text'
              value={form.email}
              onChange={(e) => handleForm({value: e.target.value, type: 'email'})}
            />
            <input
              placeholder='password'
              type='password'
              value={form.password}
              onChange={(e) => handleForm({value: e.target.value, type: 'password'})}
            />
          </form>
          <SubmitButton onClick={() => handleSubmit}>
            <h2>Enter</h2>
          </SubmitButton>
          <RegisterButton>
            <h3>Sign Up</h3>
          </RegisterButton>
        </Card>
      </Container>
  );
}

export default Login;