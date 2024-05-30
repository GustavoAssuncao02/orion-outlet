import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

function User() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Gerenciamento de Usuários</h1>
      <UserForm addUser={addUser} />
      <UserList users={users} deleteUser={deleteUser} />
    </div>
  );
}

export default User;
