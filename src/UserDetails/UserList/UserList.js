import React, { useMemo } from "react";

const UserList = (props) => {
  const { users } = props;

  const allUsers = useMemo(
    () =>
      users.map((user) => (
        <tr key={user.name}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
      )),
    [users]
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody data-testid="userListTesting">{allUsers}</tbody>
      </table>
    </div>
  );
};

export default UserList;
