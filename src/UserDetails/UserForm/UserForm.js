import React, { useState, useCallback } from "react";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { onUserAdd } = props;

  const formSumbitHandler = useCallback(
    (e) => {
      e.preventDefault();
      onUserAdd({ name, email });
    },
    [name, email]
  );

  return (
    <div>
      <form onSubmit={formSumbitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Sumbit</button>
      </form>
    </div>
  );
};

export default UserForm;
