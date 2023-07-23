import React, { useState, useCallback } from "react";
import UserForm from "./UserForm/UserForm";
import UserList from "./UserList/UserList";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const onUserAdd = useCallback(
    (user) => setUsers((prevState) => [...prevState, user]),
    []
  );

  return (
    <div>
      <UserForm onUserAdd={onUserAdd}></UserForm>
      <UserList users={users}></UserList>
    </div>
  );
};

export default UserDetails;
