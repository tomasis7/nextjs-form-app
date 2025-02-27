'use client';

import { useEffect, useState } from 'react';
import { useUserStore } from '../../lib/store';
import styled from 'styled-components';

const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

const UserItem = styled.li`
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (prefers-color-scheme: dark) {
    background-color: #1a1a1a;
  }
`;

const UserForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.25rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
`;

const EditButton = styled(Button)`
  background-color: #4caf50;
  color: white;
`;

const DeleteButton = styled(Button)`
  background-color: #f44336;
  color: white;
`;

const SaveButton = styled(Button)`
  background-color: #2196f3;
  color: white;
`;

const CancelButton = styled(Button)`
  background-color: #9e9e9e;
  color: white;
`;

const EmptyState = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-top: 2rem;
`;

interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
}

export default function Profile() {
  const { users, deleteUser, updateUser, fetchUsers } = useUserStore();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedUser, setEditedUser] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchUsers();
  }, []); // Remove fetchUsers from dependency array to avoid infinite loop

  const handleEdit = (user: User) => {
    setEditingId(user.id);
    setEditedUser({ name: user.name, email: user.email });
  };

  const handleUpdate = () => {
    if (editingId !== null) {
      updateUser(editingId, editedUser);
      setEditingId(null);
    }
  };

  return (
    <div>
      {users.length === 0 ? (
        <EmptyState>No users found.</EmptyState>
      ) : (
        <UserList>
          {users.map((user: User) => (
            <UserItem key={user.id}>
              {editingId === user.id ? (
                <UserForm>
                  <InputGroup>
                    <Label>Name</Label>
                    <Input 
                      type="text"
                      value={editedUser.name}
                      onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                    />
                  </InputGroup>
                  <InputGroup>
                    <Label>Email</Label>
                    <Input 
                      type="email"
                      value={editedUser.email}
                      onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                    />
                  </InputGroup>
                  <ButtonGroup>
                    <SaveButton onClick={handleUpdate}>Save</SaveButton>
                    <CancelButton onClick={() => setEditingId(null)}>Cancel</CancelButton>
                  </ButtonGroup>
                </UserForm>
              ) : (
                <>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>
                  <ButtonGroup>
                    <EditButton onClick={() => handleEdit(user)}>Edit</EditButton>
                    <DeleteButton onClick={() => deleteUser(user.id)}>Delete</DeleteButton>
                  </ButtonGroup>
                </>
              )}
            </UserItem>
          ))}
        </UserList>
      )}
    </div>
  );
}