import { useEffect, useState, Fragment } from "react"
import React  from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import './Navbar.css';


const AdminHeader = () => {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");

  useEffect(()=>{
    setUserName(localStorage.getItem("username"));
  },[]);

  const logout=(e)=>{
    e.preventDefault();
    localStorage.removeItem("username");
    navigate("/");
};

  return (
   <>
   {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">EMedicine(Admin Panel)</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Welcome <span class="sr-only">(current)</span>{username}</a>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/medicine">Medicine Management</Link>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link" to="/adminorders">Order Management</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/customerlist">Customer Management</Link>
      </li>
      
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <button className=" btn btn-outline-success my-2 my-sm-0" type="submit" onClick={(e)=>logout(e)}>
        Logout

      </button>

    </form>
  </div>
</nav> */}

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="#">EMedicine(Admin Panel)</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Welcome <span className="sr-only">(current)</span>{username}</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn-fancy" to="/medicine">Medicine Management</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn-fancy" to="/adminorders">Order Management</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn-fancy" to="/customerlist">Customer Management</Link>
          </li>
        </ul>
        
      </div>
      <form className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={logout}>
            Logout
          </button>
        </form>
    </nav>
   </>
  );
}

export default AdminHeader

// import React from 'react';

// const AdminHeader = () => {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>Dashboard</li>
//           <li>Orders</li>
//           <li>Customers</li>
//           <li>Medicine</li>
//           <li>Reports</li>
//           <li>Logout</li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default AdminHeader;
