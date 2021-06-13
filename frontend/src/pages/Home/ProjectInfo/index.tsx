import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { Container, UserInfo } from './styles';

interface Props {
    users: {
        email: string,
        username: string,
    }[]
}

const ProjectInfo: React.FC<Props> = ({ users }) => {
    const [userList, setUserList] = useState<null | any[]>(null);

    useEffect(() => {
        const tempUsers: any = []
        users.map((project: any) => {
            if (!tempUsers.find((p: any) => p.email === project.email)) {
              tempUsers.push(project)
            }
        })
        setUserList(tempUsers);
    }, []);
    return (
        <Container>
            {userList && userList.map(user => (
                <UserInfo>
                    <div>Email: {user.email}</div>
                    <div>User Name: {user.username}</div>
                </UserInfo>
            ))}
        </Container>
    );
}

export default ProjectInfo;