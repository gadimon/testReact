import React, { useState } from "react";



export default function NewUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [org, setOrg] = useState("");
  const [area, setArea] = useState("");

  const register = async (username: string, password: string, org: string, area: string): Promise<boolean> => {
   try {
    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( {username, password, org, area} ),
    });
    

    if (!response.ok) {
      return false;
    }


    const data = await response.json();
    console.log(data);
    return true
   } catch (error) {
    
    console.error("Login failed");
    return false;
   }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register(
      username,
      password,
      org,
      area,
    );
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
            <label htmlFor="password">Password</label>
            <input
              id="Password"
              type="text"
              value={password}
              placeholder="Enter your Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="org">Org</label>
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
              type="text"
              min={0}
              value={area}
              placeholder="Area"
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
