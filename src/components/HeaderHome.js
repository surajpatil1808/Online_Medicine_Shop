// import React from 'react'
// import { FaShoppingCart } from 'react-icons/fa';
// import { FaUser } from 'react-icons/fa'
// import { FaPills } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const HeaderHome = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
// <div className="container-fluid">
//   <Link className="navbar-brand text-dark" to="/medicinedisplay">
//     Our Products
//   </Link>
//   <button
//     className="navbar-toggler"
//     type="button"
//     data-bs-toggle="collapse"
//     data-bs-target="#navbarSupportedContent"
//     aria-controls="navbarSupportedContent"
//     aria-expanded="false"
//     aria-label="Toggle navigation"
//   >
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//       <li className="nav-item">
//         <Link className="nav-link text-dark" to="/medicinehome">
//           medicines
//         </Link>
//       </li>
//     </ul>
//   </div>
//   <Link className="nav-link text-dark" to="/cart">
//     <span className="position-relative">
//       <FaShoppingCart size={18} />
//       <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
//         5 {/* Replace with the actual count of items in the cart */}
//       </span>
//     </span>
//     Cart
//   </Link>
// </div>
// </nav>
//   )
// }

// export default HeaderHome
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './HeaderHome.css';


const HeaderHome = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <div className="container-fluid">
        <Link className="navbar-brand text-dark" to="/medicinedisplay">
          Our Products
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/medicinehome">
                Medicines
              </Link>
            </li>
          </ul>
        </div>
        <Link className="nav-link text-dark" to="/cart">
          <span className="position-relative">
            <FaShoppingCart size={18} />
            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
              5 {/* Replace with the actual count of items in the cart */}
            </span>
          </span>
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default HeaderHome;
