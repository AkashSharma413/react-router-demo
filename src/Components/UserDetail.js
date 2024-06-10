import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { userId } = useParams();
  return <div>User details of user{userId}</div>;
};

export default UserDetail;
