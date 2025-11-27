import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
      const users = useLoaderData();
      console.log(users);
    return (
        <div>
            <h3>This is users page</h3>
            {
                users.map(user=><User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;