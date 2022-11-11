import axios from 'axios';
import { useEffect, useState } from 'react'
import UsersForm from '../components/UsersForm';
import UsersList from '../components/UsersList'
import './App.css'

function App() {

  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get("https://users-crud1.herokuapp.com/users/").then(res => setUsersList(res.data));
  }

  const selectUser = (user) => {
    setUserSelected(user)
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`).then(() => getUsers());
  }

  const unselect = () => {
    setUserSelected(null);
  }

  return (
    <div className="App">
      <UsersForm getUsers={getUsers} userSelected={userSelected} unselect={unselect} />
      <UsersList usersList={usersList} deleteUser={deleteUser} selectUser={selectUser} />
    </div>
  )
}

export default App
