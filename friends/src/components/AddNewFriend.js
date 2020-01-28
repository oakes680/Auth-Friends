import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddNewFriend = (props) => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then(res => {
        console.log("addingafriend", res.data);
        props.history.push("/friends")
      })
      .catch(err => console.log(err.res));
      setNewFriend({
        name: "",
        age: "",
        email: ""
      })
  };

  const handleChanges = e => {
      setNewFriend({
          ...newFriend,
          [e.target.name]: e.target.value
      })
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newFriend.name}
          placeholder="enter name"
          onChange={handleChanges}
        />
        <input
          type="number"
          name="age"
          value={newFriend.age}
          placeholder="enter age"
          onChange={handleChanges}
        />
        <input
          type="email"
          name="email"
          value={newFriend.email}
          placeholder="enter email"
          onChange={handleChanges}
        />
       <button type='submit'>Gang Gang</button>
      </form>
    </div>
  );
};

export default AddNewFriend;
