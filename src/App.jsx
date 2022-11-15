import axios from 'axios';
import { useEffect, useState } from 'react'
import Modal from '../components/Modal';
import UsersForm from '../components/UsersForm';
import UsersList from '../components/UsersList'
import './App.css'

function App() {

  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [password, setPassword] = useState(false)

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get("https://users-crud1.herokuapp.com/users/")
      .then(res => setUsersList(res.data));
  }

  const selectUser = (user) => {
    setUserSelected(user)
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  }

  const unselect = () => {
    setUserSelected(null);
  }

  const showPass = () => {
    setPassword(!password)
  }

  return (
    <div className="App">
      <header>
        <h1>User Database - Oscar Ardila</h1>
      </header>
      <div className="allModals">
        <Modal state={modalDelete} setState={setModalDelete}>
          <h2>User Deleted</h2>
        </Modal>
        <Modal state={modalUpdate} setState={setModalUpdate}>
          <h2>User Updated</h2>
        </Modal>
        <Modal state={modalAdd} setState={setModalAdd}>
          <h2>User Added</h2>
        </Modal>
      </div>
      <div className="all">
        <div className="form-container">
          <UsersForm getUsers={getUsers} userSelected={userSelected} unselect={unselect} modalUpdate={modalUpdate} setModalUpdate={setModalUpdate} modalAdd={modalAdd} setModalAdd={setModalAdd} password={password} setPassword={setPassword} showPass={showPass} />
        </div>
        <div className="user-container">
          <UsersList usersList={usersList} deleteUser={deleteUser} selectUser={selectUser} modalDelete={modalDelete} setModalDelete={setModalDelete} />
        </div>
      </div>

      <footer>
        <h2>Made with Passion <i className="fa-solid fa-shield-heart"></i>, by Oscar Ardila <i className="fa-solid fa-registered"></i></h2>
      </footer>
    </div>
  )
}

export default App
