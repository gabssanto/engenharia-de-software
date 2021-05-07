import React, { useState } from 'react';

import { Container } from './styles';

const Login: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
      <Container>
          <h1>Hello World</h1>
          {count}
          <button style={{ padding: '20px'}} onClick={() => setCount(count+1)}>Add</button>
      </Container>
  );
}

export default Login;