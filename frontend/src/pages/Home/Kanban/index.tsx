import React, { useCallback, useEffect, useState } from 'react';
import { MdAddCircle, MdClose } from "react-icons/md";
import { flatten } from 'lodash'
import {
  Container,
  Header,
  KanbanItem,
  KanbanSection,
  KanbanSectionTitle,
  KanbanWrapper,
  Modal,
  ModalDescription,
  ModalMain,
  ModalTitle,
  ModalFooter,
  ModalPosition,
  ModalItemPosition,
  ModalItemSave,
  ModalTitleInput
} from './styles';
import { v4 as uuid } from 'uuid';
import api from '../../../api';

interface KanbanItemType {
  id: string;
  title: string;
  description: string;
  position: string;
}

interface Props {
  projectId: string;
}

const Kanban: React.FC<Props> = ({projectId}) => {
  const [kanbanItems, setKanbanItems] = useState<KanbanItemType[]>([]);
  const [isModalOpen, setModalOpen] = useState<KanbanItemType | null>(null);

  const getKanbanUpdates = async () => {
    const kanbanReq = await api.post('/kanbanByProject', {
      id: projectId,
      type: 'get'
    })
    const items = JSON.parse(kanbanReq.data)
    setKanbanItems(flatten(items));
  }

  useEffect(() => {
    getKanbanUpdates();
  }, [])

  const handleAddItem = useCallback(() => {
    const updatedItems = [...kanbanItems, { id: uuid(), title: 'New Item', description: '', position: 'TODO' }];
    api.post('/kanbanByProject', {
      id: projectId,
      items: JSON.stringify(updatedItems),
      type: 'post'
    })
    setKanbanItems(updatedItems)
  }, [kanbanItems]);

  const handleSaveModal = useCallback(() => {
    const arr = [...kanbanItems];
    if (isModalOpen) {
      const updatedItems = arr.map(item => {
        if (item.id === isModalOpen.id) return isModalOpen;
        return item;
      })
      api.post('/kanbanByProject', {
        id: projectId,
        items: JSON.stringify(updatedItems),
        type: 'post'
      })
      setKanbanItems(updatedItems);
      setModalOpen(null);
    }
  }, [kanbanItems, isModalOpen]);

  const renderItem = (item: KanbanItemType) => (
    <KanbanItem
      key={uuid()}
      onClick={() => setModalOpen(item)}>
      {item.title}
    </KanbanItem>
  );

  return (
    <Container>
      {isModalOpen && (
        <Modal onClick={() => setModalOpen(null)}>
          <ModalMain onClick={(e) => e.stopPropagation()}>
            <ModalTitle>
              <ModalTitleInput
                placeholder="Add your title here"
                value={isModalOpen.title}
                onChange={(e) => setModalOpen({...isModalOpen, title: e.target.value})}
              />
              <MdClose size={36} style={{cursor: 'pointer', color: '#333'}} onClick={() => setModalOpen(null)}/>
            </ModalTitle>
            <ModalDescription placeholder="Add your description here" value={isModalOpen.description} onChange={(e) => setModalOpen({...isModalOpen, description: e.target.value})} />
            <ModalFooter>
              <ModalPosition>
                <ModalItemPosition
                  active={isModalOpen.position === 'TODO'}
                  onClick={() => setModalOpen({ ...isModalOpen, position: 'TODO' })}
                >
                  TODO
                </ModalItemPosition>
                <ModalItemPosition
                  active={isModalOpen.position === 'DOING'}
                  onClick={() => setModalOpen({ ...isModalOpen, position: 'DOING' })}
                >
                  DOING
                </ModalItemPosition>
                <ModalItemPosition
                  active={isModalOpen.position === 'DONE'}
                  onClick={() => setModalOpen({ ...isModalOpen, position: 'DONE' })}
                >
                  DONE
                </ModalItemPosition>
              </ModalPosition>
              <ModalItemSave onClick={handleSaveModal}>Save</ModalItemSave>
            </ModalFooter>
          </ModalMain>
        </Modal>
      )}
      <Header>
        <h1>Kanban</h1>
        <MdAddCircle size={36} color="#54A0F8" onClick={handleAddItem} style={{cursor: 'pointer'}} />
      </Header>
      <KanbanWrapper>  
        <KanbanSection>
          <KanbanSectionTitle>TO DO</KanbanSectionTitle>
          {kanbanItems.filter(item => item.position === 'TODO').map(item => (
            renderItem(item)
          ))}
        </KanbanSection>
        <KanbanSection>
          <KanbanSectionTitle>DOING</KanbanSectionTitle>
          {kanbanItems.filter(item => item.position === 'DOING').map(item => (
            renderItem(item)
          ))}
        </KanbanSection>
        <KanbanSection>
          <KanbanSectionTitle>DONE</KanbanSectionTitle>
          {kanbanItems.filter(item => item.position === 'DONE').map(item => (
            renderItem(item)
          ))}
        </KanbanSection>
      </KanbanWrapper>
    </Container>
  );
}

export default Kanban;