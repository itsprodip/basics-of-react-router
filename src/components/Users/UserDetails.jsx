import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user =useLoaderData();
    console.log(user);
    const {name,phone,website}=user;
    return (
        <div>
            <h2>User Details here</h2>
            <h3>Name: {name}</h3>
            <h4>Phone: {phone}</h4>
            <h4><small>Website: {website}</small></h4>

        </div>
    );
};

export default UserDetails;