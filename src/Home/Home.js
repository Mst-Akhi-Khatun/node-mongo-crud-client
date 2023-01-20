import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = ({props}) => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);
    // console.log(displayUsers);

    const handleUserDelete = (id) =>{
        // console.log(id);
        const agree = window.confirm(`Are you sure you want to delete`)

        if(agree){
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
                })
                .then((res) => res.json())
                .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('user deleted succesfully');
                    const remainingUsers = displayUsers.filter(urs =>urs._id !==id);
                    
                    setDisplayUsers(remainingUsers)
                }
          })
        }

    }

   
    return (
        <div>
            <h1>This is home</h1>
            <h2>{displayUsers.length}</h2>
            {
               displayUsers.map(user => <p key={user._id}>
                    {user?.name} <button onClick={() =>handleUserDelete(user?._id)}>Delete</button>
            <Link to={`/update/${user?._id}`}><button>Update</button></Link>
                </p>)
            }
            
        </div>
    );
};

export default Home;