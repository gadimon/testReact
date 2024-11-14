import { useEffect, useState } from "react";
import { v4 } from "uuid";
import NewUser from "./NewUser";
import DisplayUsers from "./DisplayUsers";
import { Route, Routes } from "react-router-dom";

import DisplayUsers2 from "./DisplayUsers2";
interface User {
  id?: string;
  username: string;
  password: string;
  org: string;
  area: string;
}

export default function Users() {
  const [users, setusers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setusers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <DisplayUsers
              users={users}
            />
          }
        />
        <Route path="/adduser" element={<NewUser/>} />
        <Route path="/display" element={<DisplayUsers2 />} />
      </Routes>
    </>
  );
}
