import React from "react";
import UserTable from "./userTable";

const UsersPage = async () => {
  return (
    <>
      <h1>Users</h1>
      <UserTable />
    </>
  );
};

export default UsersPage;

// timestamp
// <p>{new Date().toLocaleTimeString()}</p>
