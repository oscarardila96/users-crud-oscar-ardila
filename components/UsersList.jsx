import React from 'react';

const UsersList = ({ usersList, deleteUser, selectUser, modalDelete, setModalDelete }) => {
  return (
    <ul>
      {usersList.map((user) => (
        <li key={user.id}>
          <div className="user-info">
            <h3>First name:</h3>
            <p>{user.first_name}</p>
            <h3>Last name:</h3>
            <p>{user.last_name}</p>
            <h3>Email:</h3>
            <p>{user.email}</p>
            <h3>Password:</h3>
            <p>{user.password}</p>
            <h3>Birthdate:</h3>
            <p>{user.birthday}</p>
          </div>
          <div className="user-buttons">
            <button onClick={() => selectUser(user)}><b>Edit</b></button>
            <button onClick={() => { deleteUser(user.id), setModalDelete(!modalDelete) }}><b>Delete</b></button>
          </div>
        </li>

      ))}
    </ul>
  );
};

export default UsersList;