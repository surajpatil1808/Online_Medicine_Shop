
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa'
import { FaPills } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [userId, setUserId] = useState('');
 


    useEffect(() => {
      setUserName(localStorage.getItem("username"));
      setUserId(localStorage.getItem("userId"));

    }, []);

    const logout=(e)=>{
      e.preventDefault();
      localStorage.removeItem("username");
      localStorage.removeItem("userId");

      navigate("/login");
  };
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to="/dashboard">EMedicine</Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" to="/">Welcome{userId}</a>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/medicinedisplay">Medicines</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/cart">Cart</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/orders">Orders</Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/profile">Profile</Link>
    //         </li>
    //         <li className="nav-item">
    //         <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={(e)=>logout(e)}>LogOut</button>
    //         </li>
    //       </ul>
    //       {/* <form className="d-flex" role="search">
    //         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
    //         <button className="btn btn-outline-success" type="submit">Search</button>
    //       </form> */}
    //     </div>
    //   </div>
    // </nav>

//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <div className="container-fluid">
//     <Link className="navbar-brand text-white" to="/dashboard">EMedicine</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active text-white" aria-current="page" to="/">Welcome{userId}</a>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-white" to="/medicinedisplay">Medicines</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-white" to="/orders">Orders</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link text-white" to="/profile">Profile</Link>
//         </li>
//       </ul>
//       <button type="submit" className="btn btn-primary btn-lg btn-block ms-auto order-last" style={{ backgroundColor: 'purple', color: 'white', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }} onClick={(e)=>logout(e)}>LogOut</button>

//     </div>
//     <Link className="nav-link text-white" to="/cart">
//       <span className="position-relative">
//         <FaShoppingCart size={18} />
//         <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
//           5 {/* Replace with the actual count of items in the cart */}
//         </span>
//       </span>
//       Cart
//     </Link>
//   </div>
// </nav>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to="/dashboard">EMedicine</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" to="/"></a>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/medicinedisplay">
            <FaPills className="nav-icon" /> Medicines
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/orders">Orders</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/profile">
            <FaUser className="nav-icon" /> Profile{userId}
          </Link>
        </li>
      </ul>
      
      <button type="submit" className="btn btn-primary " style={{ backgroundColor: 'purple', color: 'white', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }} onClick={(e)=>logout(e)}>LogOut</button>
    </div>
  </div>
</nav>


  );
};

export default Header;
