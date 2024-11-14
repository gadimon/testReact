import React from 'react';
import PageHeader from '../components/PageHeader';
import { NavLink } from 'react-router-dom';

interface Org {
  id?: string;
  orgname: string;
  resources: string[];
  budget: number;
}

interface User {
  id?: string;
  username: string;
  password: string;
  org: Org | string; 
  area: string;
}

interface Props {
  users: User;
}

const DisplayOrg = ({ users }: Props) => {
  const orgData: Org = typeof users.org === "string" 
    ? { orgname: users.org, resources: [], budget: 0 } 
    : users.org;

  return (
    <>
      <PageHeader
        title="Users Page"
        subtitle={`Organization: ${orgData.orgname}`}
      />
      <NavLink to="/users/adduser" className="add-user-link">
        Store
      </NavLink>

      <div className="card-list">
        <h2>Budget: ${orgData.budget}</h2>
        <div>
          <h3>Available Ammo</h3>
          <ul>
            {orgData.resources.map((resource, index) => (
              <li key={index}>{resource}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DisplayOrg;
