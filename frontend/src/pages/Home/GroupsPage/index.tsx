import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import api from '../../../api';

import { Container, Input, PrimaryButton } from './styles';

interface Props {
    apiHelper: Function;
    closeTab: () => void;
}

const GroupsPage: React.FC<Props> = ({ apiHelper, closeTab }) => {
    const [form, setForm] = useState({
        create: '',
        enter: '',
    });
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    const handleCreateProject = async (e: any) => {
        e.preventDefault();
        if (form.create === '') return;

        await api.post('/project', {
            type: "create",
            name: form.create,
            email: user.email
        });
        apiHelper();
    }

    const handleEnterInProject = async (e: any) => {
        e.preventDefault();
        if (form.enter === '') return;

        await api.post('/project', {
            type: 'enter',
            name: form.enter,
            email: user.email
        })
        apiHelper()
    }

    return (
        <Container>
            <div style={{ display: 'inline-flex', justifyContent: 'space-between' }}>
                <h1>Criar novo Projeto</h1>
                <MdClose size={36} style={{cursor: 'pointer', color: '#54A0F8'}} onClick={closeTab}/>
            </div>
            <Input onChange={(e) => setForm({
                ...form,
                create: e.target.value,
            })} />
            <PrimaryButton onClick={(e) => handleCreateProject(e)}>Criar Projeto</PrimaryButton>
            <h1>Entrar em um Projeto</h1>
            <Input onChange={(e) => setForm({
                ...form,
                enter: e.target.value,
            })} />
            <PrimaryButton onClick={(e) => handleEnterInProject(e)}>Entrar em Projeto</PrimaryButton>
        </Container>
    );
}

export default GroupsPage;