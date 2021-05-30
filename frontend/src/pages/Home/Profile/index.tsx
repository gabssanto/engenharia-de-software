import React from 'react';
import { Container, Input } from './styles';

// TODO adding update user/delete user
const Profile: React.FC<any> = ({ user }) => {
  return (
    <Container>
      <h1>Update User</h1>
      <p>Update Username</p>
      <Input
        placeholder="New username"
        value={user.name}
      />
      <p>Take a look at your email</p>
      <Input
        style={{ backgroundColor: '#eee' }}
        value={user.email}
        readOnly
      />
      <p>Update Password</p>
      <Input
        value={user.email}
      />
      <p>Update User</p>
      <p>Delete User</p>
    </Container>
  );
}

export default Profile;