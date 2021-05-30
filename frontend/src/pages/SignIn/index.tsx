import React, { useState } from 'react';
import { useHistory, Link } from "react-router-dom";

import api from "../../api";

import { Card, Container, RegisterButton, SubmitButton, Title } from './styles';

const Login: React.FC = () => {
  const [form, setForm] = useState({
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

    const response = await api.post('/user', {
      type: 'login',
      email: form.email,
      password: form.password,
    });
    if (response.data.email === form.email) {
      localStorage.setItem('user', JSON.stringify(response.data));
      history.push('/home');
    }
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
          <SubmitButton onClick={handleSubmit}>
            <h2>Enter</h2>
          </SubmitButton>
            <Link to='/signUp'>
              <RegisterButton style={{ width: '100%' }}>
                <h3>Sign Up</h3>
              </RegisterButton>
            </Link>
        </Card>
      </Container>
  );
}

export default Login;