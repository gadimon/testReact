import React from 'react'
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
    org: Org;
    area: string;
  }
  interface Props {
    users: User;
  }

const DisplayOrg = ({ users }: Props) => {
  return (
    <>
          <PageHeader
        title="Users Page"
        subtitle={`Orgenization: ${users.org.orgname}`}
      />
            <NavLink to={"/users/adduser"} className="add-user-link">
        Store
      </NavLink>

      <div className="card-list">
        <h2>{users.org.budget}</h2>
        <div>
            <h3>available Ammo</h3>
            <p>{users.org.resources}</p>
        </div>
      </div>
    </>
  )
}

export default DisplayOrg