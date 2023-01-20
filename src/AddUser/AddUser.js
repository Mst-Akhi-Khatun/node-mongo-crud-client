import React, { useState } from 'react';
import { Form } from 'react-router-dom';

const AddUser = () => {
    const [user, setUser] = useState({});

    const handleAddUser = (event) => {
        event.preventDefault();
        console.log(user);
        

        fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
        })
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
  })
    }

    const handleInputBlur = (event) =>{
        const value = event.target.value;
        const fuild = event.target.name;
        const newUser = {...user};
        newUser[fuild] = value;
        setUser(newUser);
    }
    return (
        <div>
           <h1>Add a User</h1>
           <Form onSubmit={handleAddUser}>
           <input onBlur={handleInputBlur} type='text' name='name' placeholder='name'></input>
           <br />
           <input onBlur={handleInputBlur} type='email' name='email' placeholder='email'></input>
           <br />
           <button>Add User</button>
           </Form>
        </div>
    );
};

export default AddUser;