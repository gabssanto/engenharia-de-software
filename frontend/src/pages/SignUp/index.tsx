import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import api from "../../api";

import { Card, Container, RegisterButton, SubmitButton, Title } from '../SignIn/styles';

const Login: React.FC = () => {
  return (<Container>
      <Card>
        <Title>Sign Up</Title>
        <form>
          <input
            placeholder='name'
            type='text'
          />
          <input
            placeholder='email'
            type='text'
          />
          <input
            placeholder='password'
            type='password'
          />
        </form>
        <SubmitButton onClick={() => {}}>
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