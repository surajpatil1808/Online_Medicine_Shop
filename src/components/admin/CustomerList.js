// import React, { useState, useEffect } from 'react';

// const CustomerList = () => {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     // Fetch customer list from the server or API
//     const fetchCustomers = async () => {
//       try {
//         // Make an API request to retrieve customers
//         const response = await fetch('https://localhost:7198/api/Admin/userList');
//         const data = await response.json();
//         setCustomers(data);
//       } catch (error) {
//         console.error('Error fetching customers:', error);
//       }
//     };

//     // Call the fetchCustomers function
//     fetchCustomers();
//   }, []);

//   return (
//     <div>
//       <h2>Customer List</h2>
//       {customers.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Customer ID</th>
//               <th>FirstName</th>
//               <th>LastName</th>
//               <th>Email</th>
//               <th>Fund</th>
//               <th>Type</th>
//               <th>Status</th>
//               <th>CreatedOn</th>
//             </tr>
//           </thead>
//           <tbody>
//             {customers.map((customer) => (
//               <tr key={customer.id}>
//                 <td>{customer.id}</td>
//                 <td>{customer.firstName}</td>
//                 <td>{customer.lastName}</td>
//                 <td>{customer.email}</td>
//                 <td>{customer.password}</td>
//                 <td>{customer.fund}</td>
//                 <td>{customer.type}</td>
//                 <td>{customer.status}</td>'
//                 <td>{customer.createdOn}</td>'
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No customers found.</p>
//       )}
//     </div>
//   );
// };

// export default CustomerList;



import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./AdminHeader";
import { Modal } from "react-bootstrap";
import './Medicine.css';
import './CustomerList.css';

const CustomerList = () => {
  const [data, setData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
   
    const url = `https://localhost:7198/api/Admin/userList`;

    axios
      .get(url)
      .then((response) => {
        const responseData = response.data;
        if (responseData.statusCode === 200) {
          setData(responseData.listUsers);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = (id) => {
    const url = `https://localhost:7198/api/Admin/deleteUser/${id}`;

    axios
      .delete(url)
      .then((response) => {
        alert('User deleted successfully');
        getUserList(); // Refresh the medicine list
      })
      .catch((error) => {
        console.error('Error deleting User:', error);
      });
  };

  const buttonStyle = {
    marginTop: '10px',
  };
  return (
    <Fragment>
      <AdminHeader />
      <br />
      <div className="form-group col-md-12">
        <h3>Users List</h3>
      </div>
      {data ? (
        // <table className="table stripped table-hover mt-4" style={{ backgroundColor: "white", width: "80%", margin: "0 auto" }}>
        //   <thead className="thead-dark">
        //     <tr>
        //       {/* <th scope="col">#</th>
        //       <th scope="col">OrderID</th>
        //       <th scope="col">Order No</th>
        //       <th scope="col">Total</th>
        //       <th scope="col">Status</th>
        //       <th scope="col">Address</th> */}
        //       <th>#</th>
        //       <th>UserId</th>
        //       <th>FirstName</th>
        //       <th>LastName</th>
        //       <th>Email</th>
        //       <th>Password</th>
        //       <th>Fund</th>
        //       <th>Type</th>
        //       <th>Status</th>
        //       <th>CreatedOn</th>
        //       <th>Action</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {data.map((use, index) => (
        //       <tr key={use.id}>
        //         <th scope="row">{index + 1}</th>
        //         <td>{use.id}</td>
        //         <td>{use.firstName}</td>
        //         <td>{use.lastName}</td>
        //         <td>{use.email}</td>
        //         <td>{use.password}</td>
        //         <td>{use.fund}</td>
        //         <td>{use.type}</td>
        //         <td>{use.status}</td>
        //         <td>{use.createdOn}</td>
        //         <div>
        //       <button type="button" class="btn btn-danger" onClick={() => deleteUser(use.id)}>
        //         Delete
        //       </button>
        //       </div>
        //       </tr>
        //     ))}
        //   </tbody>
        // </table>
        <table className="table stripped table-hover mt-4 custom-table">
  <thead className="thead-dark">
    <tr>
      <th>#</th>
      <th>UserId</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Email</th>
      <th>Password</th>
      {/* <th>Fund</th>
      <th>Type</th>
      <th>Status</th> */}
      <th>CreatedOn</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {data.map((user, index) => (
      <tr key={user.id}>
        <th scope="row">{index + 1}</th>
        <td>{user.id}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        {/* <td>{user.fund}</td>
        <td>{user.type}</td>
        <td>{user.status}</td> */}
        <td>{user.createdOn}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteUser(user.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
      ) : (
        <div>No data found</div>
      )}
      
    </Fragment>
  )
}

export default CustomerList