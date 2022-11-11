import React from 'react';

const UsersList = ({ usersList, deleteUser, selectUser }) => {
  return (
    <ul>
      {usersList.map((user) => (
        <li key={user.id}>
          <p><b>First name: </b>{user.first_name}</p>
          <p><b>Last name: </b>{user.last_name}</p>
          <p><b>Email: </b>{user.email}</p>
          <p><b>Password: </b>{user.password}</p>
          <p><b>Birthdate: </b>{user.birthday}</p>
          <button onClick={() => selectUser(user)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </li>

      ))}
    </ul>
  );
};

export default UsersList;