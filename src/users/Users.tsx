import { useEffect, useState } from "react";
import NewUser from "./NewUser";
import DisplayUsers from "./DisplayUsers";
import { Route, Routes } from "react-router-dom";
import DisplayOrg from "./displayOrg";
import DisplayUsers2 from "./DisplayUsers2";
import DisplayMissiles from "./displayMissiles";

interface User {
  id?: string;
  username: string;
  password: string;
  org: string; 
  area: string;
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<DisplayUsers users={users} />}
        />
        <Route path="/adduser" element={<NewUser />} />
        <Route path="/display" element={<DisplayUsers2 />} />
        <Route path="/displayMissiles" element={<DisplayMissiles />} />
        <Route 
          path="/displayOrg" 
          element={<DisplayOrg users={users[0]} />} 
        />
      </Routes>
    </>
  );
}
