import React, { use } from 'react';

const Users2 = ({ userPromise }) => {
    const userData=use(userPromise);
    console.log(userData);
  return (
    <div>
      <h3>This is users two!</h3>
    </div>
  );
};

export default Users2;