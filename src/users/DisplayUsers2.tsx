import { NavLink } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function DisplayUsers2() {


  return (
    <>
      <PageHeader
        title="From Context"
        subtitle="This is the main page of users"
      />
      <NavLink to={"/users/adduser"} className="add-user-link">
        Add user
      </NavLink>

     
      <PageHeader title="Stars" subtitle="This is my STAR'S!!" />
     
    </>
  );
}
