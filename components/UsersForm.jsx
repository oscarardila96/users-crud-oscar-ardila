import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form"

const UsersForm = ({ getUsers, userSelected, unselect }) => {

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
        })
        .catch(error => console.log(error.response.data));
    } else {
      axios.post("https://users-crud1.herokuapp.com/users/", data)
        .then(() => {
          getUsers()
          unselect() //?????????????????????????
          reset(initialValues) //?????????????????????????
        })
        .catch(error => console.log(error.response.data));
    }
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="inputContainer">
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...register("first_name")} id="firstName" />
      </div>
      <div className="inputContainer">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...register("last_name")} id="lastName" />
      </div>
      <div className="inputContainer">
        <label htmlFor="email">Email</label>
        <input type="email" {...register("email")} id="email" />
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input type="text" {...register("password")} id="password" />
      </div>
      <div className="inputContainer">
        <label htmlFor="birthdate">Birthdate</label>
        <input type="date" {...register("birthday")} id="birthdate" />
      </div>
      <button>Submit</button>
      {userSelected && <button type="button" onClick={() => unselect()}>Cancel</button>}
    </form>
  );
};

export default UsersForm;