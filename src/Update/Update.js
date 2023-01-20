import React, { useState } from 'react';
import { Form, useLoaderData } from 'react-router-dom';

const Update = () => {
    const stordUser = useLoaderData();
    console.log(stordUser._id);

    const [user, setUser] = useState({});

    const handleUpdateUser = (event) => {
        event.preventDefault();
        // console.log(user);
        

        fetch(`http://localhost:5000/users/${stordUser._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
        })
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
  })
    }

    const handleInputChange = (event) =>{
        const value = event.target.value;
        const fuild = event.target.name;
        const newUser = {...user};
        newUser[fuild] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h1>Plese Update:</h1>
            <h2>{stordUser?.name}</h2>
            <Form onSubmit={handleUpdateUser}>
           <input onChange={handleInputChange} type='text' name='name' placeholder='name'></input>
           <br />
           <input onChange={handleInputChange} type='email' name='email' placeholder='email'></input>
           <br />
           <button>update</button>
           </Form>
        </div>
    );
};

export default Update;