import React, { useEffect, useState } from "react";

interface User {
  id?: string;
  username: string;
  password: string;
  org: string;
  area: string;
}
interface Props {
  addUser: (newuser: User) => void;
}

export default function NewUser(props: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [org, setOrg] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addUser({
      username,
      password,
      org,
      area,
    });
    setUsername("");
    setPassword("");
    setOrg("");
    setArea("");
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              type="text"
              value={username}
              placeholder="Enter your User Name"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={password}
              placeholder="Enter your Email"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="org">org</label>
            <input
              id="org"
              type="text"
              value={org}
              placeholder="Enter your Org"
              onChange={(event) => {
                setOrg(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="area">Area</label>
            <input
              id="area"
              type="number"
              min={0}
              value={area}
              placeholder="0"
              onChange={(event) => {
                setArea(event.target.value);
              }}
            />
          </div>

          <button type="submit">Add New User</button>
        </form>
      </div>
    </>
  );
}
