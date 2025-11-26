import React from "react";
import { useLocation, useParams } from "react-router";

const UserData = () => {
  const { id,name } = useParams();
  const loca = useLocation();
  console.log(loca);
  return <div>{id}
  {name}
  </div>;

};

export default UserData;
