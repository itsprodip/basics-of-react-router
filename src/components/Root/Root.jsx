import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link, Outlet, useLocation } from 'react-router';

const Root = () => {
    const loca = useLocation();
    // console.log(loca);
    return (
      <div>
        <Navbar></Navbar>
        <Outlet />
      </div>
    );
};

export default Root;