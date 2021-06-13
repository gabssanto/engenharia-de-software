import React from 'react';
import { MdPlayCircleFilled } from 'react-icons/md';
import {
    Container,
    MessageContainer,
    Input,
    Messages,
    MyMessage,
    ReceivedMessage,
    MessageWrapper
} from './styles';

interface Props {
    chatHistory: string;
}

const Chat: React.FC<Props> = () => {
    //TODO Finish chat and connect to backend, also connect kanban to backend
    return (
        <Container>
            <Messages>
                <MessageWrapper>
                    <MyMessage>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
                    </MyMessage>
                </MessageWrapper>
                <MessageWrapper>
                    <ReceivedMessage>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem 
                    </ReceivedMessage>
                </MessageWrapper>
            </Messages>
            <MessageContainer>
                <Input />
                <MdPlayCircleFilled
                    size={40}
                    style={{ color: '#E63946', cursor: 'pointer' }}
                />
            </MessageContainer>
        </Container>
    );
}

export default Chat;