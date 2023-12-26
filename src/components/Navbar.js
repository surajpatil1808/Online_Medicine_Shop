import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import './Navbar.css';
import { FaUser } from 'react-icons/fa'
import { FaPills } from 'react-icons/fa';


const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">  <h3 className='heading'>Medicines Online Shop</h3></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
    </ul>
  </div>
  <li class="nav-item">
        <a class="nav-link" href="/login">
          {/* <i class="fas fa-user"></i> Hello Login */}
          <FaUser className="nav-icon" /> Hello,User
        </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/adminlogin">
          {/* <i class="fas fa-user"></i> Hello Login */}
          <FaUser className="nav-icon" /> Hello,Admin
        </a>
      </li>
</nav>


  )
}

export default Navbar

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css';
// import { FaUser } from 'react-icons/fa';
// import { FaPills } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-success bg-success">
//       <a className="navbar-brand" href="#">
//         <h3>Medicines Online Shop</h3>
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNavDropdown"
//         aria-controls="navbarNavDropdown"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNavDropdown">
//         <ul className="navbar-nav"></ul>
//       </div>
//       <li className="nav-item">
//         <a className="nav-link" href="/login" style={{ color: 'black' }}>
//           <FaUser className="nav-icon" style={{ color: 'black' }} />{' '}
//           <span className="login-text" style={{ color: 'black' }} >Hello, Login</span>
//         </a>
//       </li>
//     </nav>
//   );
// };

// export default Navbar;
