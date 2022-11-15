import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form"

const UsersForm = ({ getUsers, userSelected, unselect, modalUpdate, setModalUpdate, modalAdd, setModalAdd, password, setPassword }) => {

  const initialValues = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    birthday: ""
  }

  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (userSelected) {
      reset(userSelected)
    } else {
      reset(initialValues)
    }
  }, [userSelected])

  const submit = (data) => {
    if (userSelected) {
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
        .then(() => {
          getUsers()
          unselect()
          setModalUpdate(!modalUpdate);
        })
        .catch(error => console.log(error.response.data));
    } else {
      axios.post("https://users-crud1.herokuapp.com/users/", data)
        .then(() => {
          getUsers()
          unselect() //?????????????????????????
          reset(initialValues) //?????????????????????????
          setModalAdd(!modalAdd);

        })
        .catch(error => console.log(error.response.data));
    }
  }

  return (
    < form onSubmit={handleSubmit(submit)} >
      <div className="complete-form">
        <div className="inputContainer">
          <input placeholder="First Name" type="text" {...register("first_name")} />
        </div>
        <div className="inputContainer">
          <input placeholder='Last Name' type="text" {...register("last_name")} />
        </div>
        <div className="inputContainer">
          <input placeholder="Email Address" type="email" {...register("email")} />
        </div>
        <div className="inputContainer">
          <div className="input-pass">
            <input placeholder='Password' type={password ? "password" : "text"} {...register("password")} id="password" />
          </div>
          <div className="icon-pass">
            {password ? <i onClick={() => setPassword(!password)} className="fa-solid fa-eye input-icon"></i> : <i onClick={() => setPassword(!password)} className="fa-solid fa-eye-slash input-icon"></i>}
          </div>
        </div>
        <div className="bdContainer">
          <label htmlFor="birthdate">Birthdate</label>
          <input type="date" {...register("birthday")} id="birthdate" />
        </div>
        <div className="form-buttons">
          <button>Submit</button>
          {userSelected && <button type="button" onClick={() => unselect()}>Cancel</button>}
        </div>
      </div>
    </form >
  );
};

export default UsersForm;