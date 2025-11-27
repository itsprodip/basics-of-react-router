import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id,name,username,email}= user;
    return (
        <div>
            <h2>{id}.{name}</h2>
            <h3>User Name:{username}</h3>
            <h4>{email}</h4>
            <Link to={`/users/${id}`}>Show Details</Link>
            
        </div>
    );
};

export default User;