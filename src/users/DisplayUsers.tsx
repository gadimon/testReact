import { NavLink } from "react-router-dom";
import PageHeader from "../components/PageHeader";

interface User {
  id?: string;
  username: string;
  password: string;
  org: string;
  area: string;
}

interface Props {
  users: User[];
}

export default function DisplayUsers({ users }: Props) {
  return (
    <>
      <PageHeader
        title="Users Page"
        subtitle="This is the main page of users"
      />
      <NavLink to={"/users/adduser"} className="add-user-link">
        Add user
      </NavLink>

      <div className="card-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-info">
              <h3>{user.username}</h3>
              <p>Password: {user.password}</p>
              {/* <p>Org: {user.org}</p> */}
              <select name="Org" id="org">
                  <option value="IDF - North">IDF - North</option>
                  <option value="IDF - South">IDF - South</option>
                  <option value="IDF - Center">IDF - Center</option>
                  <option value="Hezbollah">Hezbollah</option>
                  <option value="Hamas">Hamas</option>
                  <option value="IRGC">IRGC</option>
                  <option value="Houthis">Houthis</option>
              </select>
              <p>Area: {user.area}</p>
            </div>
            <div className="user-actions">
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
