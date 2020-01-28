import React, {useState, useEffect, useReducer} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'




const FriendsCard = (props) => {
    const [edit, setEdit] = useState({
        name: "",
        age: "",
        email: ""
      });

    const [id, setId] = useState('')
 
    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .put(`/api/friends/${id}`, edit)
        setEdit({
        name: "",
        age: "",
        email: ""
        })
    }

    
    const handleChanges = (e) => {
        setEdit({
            ...edit,
            [e.target.name]: e.target.value
        })
    }
   
    const handleThis = (e) => {
        setId(props.data.id)
    }
    
    
    return (
        <div className='border2'>
           <p> {props.data.name} </p>
           <p> {props.data.age} </p>
           <p> {props.data.email}</p>
           <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={edit.name}
          placeholder="enter name"
          onChange={handleChanges}
        />
        <input
          type="number"
          name="age"
          value={edit.age}
          placeholder="enter age"
          onChange={handleChanges}
        />
        <input
          type="email"
          name="email"
          value={edit.email}
          placeholder="enter email"
          onChange={handleChanges}
        />
       <button type='submit' onClick={handleThis} > edit me </button>
      </form>
        
        </div>
    )
}

export default FriendsCard


// onClick={() => setId(props.data.id)}