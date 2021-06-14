import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MdPlayCircleFilled } from 'react-icons/md';
import { v4 } from 'uuid';
import api from '../../../api';
import {
    Container,
    MessageContainer,
    Input,
    Messages,
    MyMessage,
    ReceivedMessage,
    MessageWrapper,
    ReceivedMessageWrapper,
    Button
} from './styles';

interface Props {
    chatHistory: string;
    apiHelper: Function;
    user: any;
    projectId: string;
}

interface Message {
    email: string;
    message: string;
    createdAt: string;
}

const Chat: React.FC<Props> = ({ chatHistory, apiHelper, user, projectId }) => {
    const [chat, setChat] = useState<Message[]>(JSON.parse(chatHistory !== '' ? chatHistory : '[]'));
    const [message, setMessage] = useState('');
    const messagesRef = useRef<any>();

    const getProject = async () => {
        const history = await api.post('/messagesByProject', {
            id: projectId,
        })

        setChat(JSON.parse(history.data.history || '[]'));
        messagesRef.current.scrollIntoView({behavior: "smooth"})
    }

    useEffect(() => {
        getProject();
    }, [projectId]);

    const handleClick = async (e: any) => {
        e.preventDefault();
        if (message.length <= 0) return;
            
        await api.post('/newMessage', {
            "id": projectId,
            "email": user.email,
            "message": message
        })

        apiHelper();
        
        setMessage('')
        
        const history = await api.post('/messagesByProject', {
            id: projectId,
        })

        setChat(JSON.parse(history.data.history));
        messagesRef.current.scrollIntoView({behavior: "smooth"})
    }
    
    return (
        <Container>
            <Messages>
                {chat.map(message => {
                    if (message.email) {
                        if (message.email === user.email) {
                            return (
                                <MessageWrapper key={v4()}>
                                    <MyMessage>
                                        {message.message}
                                    </MyMessage>
                                </MessageWrapper>
                            );
                        }
                        else return (
                            <ReceivedMessageWrapper key={v4()}>
                                <ReceivedMessage>
                                    {message.message}
                                </ReceivedMessage>
                            </ReceivedMessageWrapper>
                        );
                    }
                })}
                <div
                    ref={messagesRef}
                    style={{
                        width: '100%',
                        height: '1px',
                    }}
                />
            </Messages>
            <MessageContainer onSubmit={(e) => handleClick(e)}>
                <Input value={message} onChange={(e) => setMessage(e.target.value)} />
                <Button type='submit'>
                    <MdPlayCircleFilled
                        size={40}
                        style={{ color: '#E63946', cursor: 'pointer' }}
                    />
                </Button>
            </MessageContainer>
        </Container>
    );
}

export default Chat;