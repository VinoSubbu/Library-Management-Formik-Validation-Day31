import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/common.css";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Navbar = () => {
  return (
    <>
      <div className="navbar-outer">

        <nav className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/authors">Authors</NavLink>
        </nav>

        <div className="nav-heading">
          <h1>Library Management System</h1>
        </div>

        <div className="admin">
          <NavLink to='/admin-dashboard'><ManageAccountsIcon 
          style={{color:'black' , border:'1px solid black' , padding:'5px' , borderRadius:'50%' }} />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
