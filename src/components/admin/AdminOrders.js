import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import AdminHeader from "./AdminHeader";
import './Table.css';

const Orders = () => {
  const [data, setData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [orderId, setOrderId] = useState(0);
  const [orderStatus, setOrderStatus] = useState("");

  const handleClose = () => {
    setShow(false);
    setEditMode(false);
  };

  useEffect(() => {
    getOrderList();
  }, []);

  const getOrderList = () => {
    const url = `https://localhost:7198/api/Admin/orderList`;

    axios
      .get(url)
      .then((response) => {
        const responseData = response.data;
        if (responseData.statusCode === 200) {
          setData(responseData.listOrders);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getOrderItems = (orderId) => {
    const url = `https://localhost:7198/api/Medicines/orderItems/${orderId}`;

    axios
      .get(url)
      .then((response) => {
        const responseData = response.data;
        if (responseData.statusCode === 200) {
          setItemData(responseData.listItem);
          setShow(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (orderId, orderStatus) => {
    setOrderId(orderId);
    setOrderStatus(orderStatus);
    setEditMode(true);
    setShow(true);
  };

  const handleUpdateOrderStatus = () => {
    const url = `https://localhost:7198/api/Admin/updateOrderStatus/${orderId}`;
    const payload = { OrderStatus: orderStatus };

    axios
      .post(url, payload)
      .then((response) => {
        const responseData = response.data;
        if (responseData.statusCode === 200) {
          // Order status updated successfully
          getOrderList();
          handleClose();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const modalStyle = {
    maxWidth: "800px", // Adjust the width as needed
  };

  return (
    <Fragment>
      <AdminHeader />
      <br />
      <div className="form-group col-md-12">
        <h3>Customer Orders</h3>
      </div>
      {data ? (
        // <table
        //   className="table stripped table-hover mt-4"
        //   style={{ backgroundColor: "white", width: "80%", margin: "0 auto" }}
        // >
        //   <thead className="thead-dark">
        //     <tr>
        //       <th scope="col">#</th>
        //       <th scope="col">OrderID</th>
        //       <th scope="col">UserId</th>
        //       <th scope="col">Order No</th>
        //       <th scope="col">Total</th>
        //       <th scope="col">Status</th>
        //       <th scope="col">Address</th>
        //       <th scope="col">Actions</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {data.map((order, index) => (
        //       <tr key={order.id}>
        //         <th scope="row">{index + 1}</th>
        //         <td onClick={() => getOrderItems(order.id)}>{order.id}</td>
        //         <td>{order.userId}</td>
        //         <td>{order.orderNo}</td>
        //         <td>{order.orderTotal}</td>
        //         <td>{order.orderStatus}</td>
        //         <td>{order.address}</td>
        //         <td>
        //           <Button
        //             variant="primary"
        //             onClick={() => handleEdit(order.id, order.orderStatus)}
        //           >
        //             Update Status
        //           </Button>
        //         </td>
        //       </tr>
        //     ))}
        //   </tbody>
        // </table>
        <table className="table stripped table-hover mt-4 table-custom">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">OrderID</th>
      <th scope="col">UserId</th>
      <th scope="col">Order No</th>
      <th scope="col">Total</th>
      <th scope="col">Status</th>
      <th scope="col">Address</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {data.map((order, index) => (
      <tr key={order.id}>
        <th scope="row">{index + 1}</th>
        <td onClick={() => getOrderItems(order.id)}>{order.id}</td>
        <td>{order.userId}</td>
        <td>{order.orderNo}</td>
        <td>{order.orderTotal}</td>
        <td>{order.orderStatus}</td>
        <td className="address-column">{order.address}</td>
        <td>
          <Button
            variant="primary"
            onClick={() => handleEdit(order.id, order.orderStatus)}
          >
            Update Status
          </Button>
        </td>
      </tr>
    ))}
  </tbody>
</table>



      ) : (
        <div>No data found</div>
      )}
      <div style={{ width: "100%" }}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>
              Order Details for:{" "}
              {itemData && itemData.length > 0 ? itemData[0].orderNo : ""}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {itemData && itemData.length > 0 ? (
              <table
                className="table table-striped table-hover mt-6"
                style={modalStyle}
              >
                <thead className="thead-dark">
                  <tr>
                  <th scope="col">Order ID</th>
                    {/* <th scope="col">Order No</th> */}
                    <th scope="col">Medicine ID</th>
                    <th scope="col">Name</th>
                    {/* <th scope="col">Unit Price</th> */}
                    <th scope="col">Discount</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Product Price</th>
                  </tr>
                </thead>
                <tbody>
                  {itemData.map((item, index) => (
                    <tr key={item.id}>
                        {/* <th scope="row">{index + 1}</th> */}
                        <td>{item.id}</td>
                      {/* <td>{item.orderNo}</td> */}
                      <td>{item.medicineID}</td>
                      <td>{item.name}</td>
                      {/* <td>{item.unitPrice}</td> */}
                      <td>{item.discount}</td>
                      <td>{item.quantity}</td>
                      <td>{item.totalPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div>No order items found</div>
            )}
            {editMode && (
              <div>
                <h4>Update Order Status:</h4>
                <div>
                  <label htmlFor="orderStatus">Order Status:</label>
                  <input
                    type="text"
                    id="orderStatus"
                    value={orderStatus}
                    onChange={(e) => setOrderStatus(e.target.value)}
                  />
                </div>
                <div>
                  <Button variant="primary" onClick={handleUpdateOrderStatus}>
                    Update
                  </Button>{" "}
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>
      </div>
    </Fragment>
  );
};

export default Orders;



// import React, { Fragment, useEffect, useState } from "react";
// import axios from "axios";
// //import Header from "./Header";
// import { Modal } from "react-bootstrap";
// import AdminHeader from "./AdminHeader";

// const Orders = () => {
//   const [data, setData] = useState([]);
//   const [itemData, setItemData] = useState([]);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);

//   useEffect(() => {
//     getOrderList();
//   }, []);

//   const getOrderList = () => {
    
//     const url = `https://localhost:7198/api/Admin/orderList`;

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listOrders);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const getOrderItems = (orderId) => {
//     const url = `https://localhost:7198/api/Medicines/orderItems/${orderId}`;

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setItemData(responseData.listItem);
//           setShow(true);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const modalStyle = {
//     maxWidth: "800px", // Adjust the width as needed
//   };

//   return (
//     <Fragment>
//       <AdminHeader />
//       <br />
//       <div className="form-group col-md-12">
//         <h3>My Orders</h3>
//       </div>
//       {data ? (
//         <table className="table stripped table-hover mt-4" style={{ backgroundColor: "white", width: "80%", margin: "0 auto" }}>
//           <thead className="thead-dark">
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">OrderID</th>
//               <th scope="col">Order No</th>
//               <th scope="col">Total</th>
//               <th scope="col">Status</th>
//               <th scope="col">Address</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((order, index) => (
//               <tr key={order.id}>
//                 <th scope="row">{index + 1}</th>
//                 <td onClick={() => getOrderItems(order.id)}>{order.id}</td>
//                 <td>{order.orderNo}</td>
//                 <td>{order.orderTotal}</td>
//                 <td>{order.orderStatus}</td>
//                 <td>{order.address}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <div>No data found</div>
//       )}
//       <div style={{ width: "100%" }}>
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header>
//             <Modal.Title>Order Details for: {itemData && itemData.length > 0 ? itemData[0].orderNo : ""}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {itemData && itemData.length > 0 ? (
//               <table className="table table-striped table-hover mt-6" style={modalStyle}>
//                 <thead className="thead-dark">
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">Order ID</th>
//                     <th scope="col">Order No</th>
//                     <th scope="col">Medicine ID</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Unit Price</th>
//                     <th scope="col">Discount</th>
//                     <th scope="col">Quantity</th>
//                     <th scope="col">Total Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {itemData.map((item, index) => (
//                     <tr key={item.id}>
//                       <th scope="row">{index + 1}</th>
//                       <td>{item.id}</td>
//                       <td>{item.orderNo}</td>
//                       <td>{item.medicineID}</td>
//                       <td>{item.name}</td>
//                       <td>{item.unitPrice}</td>
//                       <td>{item.discount}</td>
//                       <td>{item.quantity}</td>
//                       <td>{item.totalPrice}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <div>No order items found</div>
//             )}
//           </Modal.Body>
//         </Modal>
//       </div>
//     </Fragment>
//   );
// };

// export default Orders;


// import React from 'react';
// import { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './AdminHeader';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


// const AdminOrders = () => {
//   const [data, setData] = useState([]);
//   const [itemData, setItemData] = useState([]);
//   const [orderNo, setOrderNo] = useState('');
//   const [orderStatus, setOrderStatus] = useState('');
//   const [show, setShow] = useState(false);
//   const [showOrderStatus, setShowOrderStatus] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleCloseOrderStatus = () => setShowOrderStatus(false);

//   useEffect(() => {
//     getData('Admin', 0);
//   }, []);

//   const getData = (type, id) => {
//     const data = {
//       ID: id,
//       type: type,
//       Email: localStorage.getItem('username'),
//     };
//     const url = `https://localhost:7198/api/Medicines/orderList`;
//     axios
//       .post(url, data)
//       .then((result) => {
//         const data = result.data;
//         if (data.statusCode === 200) {
//           type === 'Admin' ? setData(data.listOrders) : setItemData(data.listOrders);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleItemDetail = (id) => {
//     getData('UserItems', id);
//     setShow(true);
//   };

//   const handleOrderStatusDetail = (orderNumber) => {
//     setOrderNo(orderNumber);
//     setShowOrderStatus(true);
//   };

//   const handleOrderStatus = (e) => {
//     e.preventDefault();
//     const url = `https://localhost:7198/api/Admin/updatOrderStatus`;
//     const data = {
//       OrderNo: orderNo,
//       OrderStatus: orderStatus,
//     };

//     axios
//       .post(url, data)
//       .then((result) => {
//         setShowOrderStatus(false);
//         getData('Admin', 0);
//         setOrderStatus('');
//         const dt = result.data;
//         alert(dt.statusMessage);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <Fragment>
//       <Header />
//       <br></br>
//       <div className='form-group col-md-12'>
//         <h3>All Orders</h3>
//       </div>
//       {data ? (
//         <table
//           className='table stripped table-hover mt-4'
//           style={{ backgroundColor: 'white', width: '80%', margin: '0 auto' }}
//         >
//           <thead className='thead-dark'>
//             <tr>
//               <th scope='col'>#</th>
//               <th scope='col'>Customer Name</th>
//               <th scope='col'>Order No</th>
//               <th scope='col'>Total</th>
//               <th scope='col'>Status</th>
//               <th scope='col'>Order Date</th>
//               <th scope='col'>Update Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((val, index) => {
//               return (
//                 <tr key={index}>
//                   <th scope='row'>{index + 1}</th>
//                   <td>{val.customerName}</td>
//                   <td onClick={() => handleItemDetail(val.id)}>{val.orderNo}</td>
//                   <td>{val.orderTotal}</td>
//                   <td>{val.orderStatus}</td>
//                   <td>{val.createdOn}</td>
//                   <td>
//                     <Button variant='secondary' onClick={() => handleOrderStatusDetail(val.orderNo)}>
//                       Update
//                     </Button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       ) : (
//         'No data Found'
//       )}
//       <div style={{ width: '100%' }}>
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header>
//             <Modal.Title>
//               Order Details for: {itemData && itemData.length > 0 ? itemData[0]['orderNo'] : ''}
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {itemData ? (
//               <table className='table stripped table-hover mt-4'>
//                 <thead className='thead-dark'>
//                   <tr>
//                     <th scope='col'>#</th>
//                     <th scope='col'>Medicine Name</th>
//                     <th scope='col'>Manufacturer</th>
//                     <th scope='col'>Unit Price</th>
//                     <th scope='col'>Quantity</th>
//                     <th scope='col'>Total Price</th>
//                     <th scope='col'>Order Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {itemData.map((val, index) => {
//                     return (
//                       <tr key={index}>
//                         <th scope='row'>{index + 1}</th>
//                         <td>{val.medicineName}</td>
//                         <td>{val.manufacturer}</td>
//                         <td>{val.unitPrice}</td>
//                         <td>{val.quantity}</td>
//                         <td>{val.totalPrice}</td>
//                         <td>{val.createdOn}</td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             ) : null}
//           </Modal.Body>
//         </Modal>
//       </div>
//       <div style={{ width: '100%' }}>
//         <Modal show={showOrderStatus} onHide={handleCloseOrderStatus}>
//           <Modal.Header closeButton>
//             <Modal.Title>Update Order Status</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <form onSubmit={handleOrderStatus}>
//               <div className='form-group'>
//                 <label htmlFor='orderNo'>Order No:</label>
//                 <input
//                   type='text'
//                   className='form-control'
//                   id='orderNo'
//                   value={orderNo}
//                   readOnly
//                 />
//               </div>
//               <div className='form-group'>
//                 <label htmlFor='orderStatus'>Order Status:</label>
//                 <input
//                   type='text'
//                   className='form-control'
//                   id='orderStatus'
//                   value={orderStatus}
//                   onChange={(e) => setOrderStatus(e.target.value)}
//                 />
//               </div>
//               <Button variant='primary' type='submit'>
//                 Update
//               </Button>
//             </form>
//           </Modal.Body>
//         </Modal>
//       </div>
//     </Fragment>
//   );
// };

// export default AdminOrders;





// import React from 'react'
// import { Fragment, useEffect, useState } from 'react'
// import axios from "axios";
// import Header from './AdminHeader';
// import{baseUrl} from '../constants';
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Button";
// import "../users/modal.css";
// import { getDefaultNormalizer } from '@testing-library/react';

// const AdminOrders = () => {
//   const [data, setData] = useState([]);
//   const [itemData, setItemData] = useState([]);
//   const [orderNo, setOrderNo] = useState("");
//   const [orderStatus, setOrderStatus] = useState("");
//   const [show, setShow] = useState(false);
//   const [showOrderStatus, setShowOrderStatus] = useState(false);

//   const handleClose=()=>setShow(false);
//   const handleCloseOrderStatus=()=>setShowOrderStatus(fasle);

//   useEffect(()=>{
//     getDefaultNormalizer("Admin",0);
//   },[]);

//   const getData=(type, id)=>{
//     const data={
//       ID:id,
//       type:type,
//       Email:localStorage.getItem("username"),

//     };
//     const url=`https://localhost:7198/api/Medicines/orderList`;
//     axios
//       .post(url,data)
//       .then((result)=>{
//         const data=result.data;
//         if(data.statusCode ==200)
//         {
//           type=== "Admin"? setData(data.listOrders): setItemData(data.listOrders);
//         }
//       })

//       .catch((error)=>{
//         console.log(error);
//       });

//       const handleItemDetail=(id)=>{
//         getData("UserItems", id);
//         setShow(true);
//       };

//       const handleOrderStatusDeatail=(orderNumber)=>{
//         setOrderNo(orderNumber);
//         setShowOrderStatus(true);

//       };

//       const handleOrderStatus=(e)=>{
//         e.preventDefault();
//         const url=`https://localhost:7198/api/Admin/updatOrderStatus`;
//         const data ={
//           OrderNo:orderNo,
//           OrderStatus:orderStatus
//         };

//         axios
//         .post(url,data)
//         .then((result)=>{
//           setShowOrderStatus(false);
//           getData("Admin", 0);
//           setOrderStatus("");
//           const dt=result.data;
//           alert(dt.statusMessage);
//         })
//         .catch((error)=>{
//           console.log(error);
//         });
//       }
//   }

//   return (
//   <>
//   <Fragment>
//     <Header/>
//     <br></br>
//     <div className='form-group col-md-12'>
//       <h3>All Orders</h3>
//     </div>
//     {data ? (

   
//   <table className="table stripped table-hover mt-4"
//   style={{backgroundColor:"white", width:"80%",margin:"0 auto"}}
//   >
//   <thead className="thead-dark">
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">Custoemr Name</th>
//       <th scope="col">Order No</th>
//       <th scope="col">Total</th>
//       <th scope="col">Status</th>
//       <th scope="col">Ordet Date</th>
//       <th scope="col">Update Status</th>
    
//     </tr>
//   </thead>
//   <tbody>
//     {data.map((val,index)=>{
//       return(
//         <tr key={index}>
//           <th scope="row">{index+1}</th>
//           <td>{val.customerName}</td>
//           <td onClick={()=>handleItemDetail(val.id)}>
//             {val.orderNo}
//           </td>
//           <td>{val.orderTotal}</td>
//           <td>{val.orderStatus}</td>
//           <td>{val.createdOn}</td>
//           <td>
//             <Button
//             variant="secondary"
//             onClick={()=>handleOrderStatusDeatail(val.orderNo)}>Update</Button>
//           </td>
//         </tr>
//       );
//     })}
//     </tbody>
//     </table>
//     ):(
//       "No data Found"
//     )}
//     <div style={{width:"100%"}}>
//       <Modal show ={show} onHide={handleClose}>
//       <Modal.Header>

// <Modal.Title>Order Details for: ({itemData && itemData.length > 0 itemData[0]["orderNo"]:""}

// </Modal.Header>

// <Modal.Body>

// {itemData? (

// <table className="table stripped table-hover mt-4">

// <thead className="thead-dark">
//   <tr>
//     <th scope="col">#</th>
//     <th scope="col">Medicine name</th>
//     <th scope="col">Manufacturer</th>
//     <th scope="col">Unit Price</th>
//     <th scope="col">Quantity</th>
//     <th scope="col">Total Price</th>
//     <th scope="col">Order Date</th>
//     </tr>
//     </thead>
//     <tbody>
//       {itemData.map((val, index)=>{
        

      











        

// export default AdminOrders

{/* 
// import React, { useState, useEffect } from 'react';

// const AdminOrders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Fetch orders data from the server or API
//     const fetchOrders = async () => {
//       try {
//         // Make an API request to retrieve orders
//         const response = await fetch('/api/admin/orders');
//         const data = await response.json();
//         setOrders(data);
//       } catch (error) {
//         console.error('Error fetching orders:', error);
//       }
//     };

//     // Call the fetchOrders function
//     fetchOrders();
//   }, []);

//   return (
//     <div>
//       <h2>Admin Orders</h2>
//       {orders.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Order ID</th>
//               <th>Customer Name</th>
//               <th>Order Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.id}>
//                 <td>{order.id}</td>
//                 <td>{order.customerName}</td>
//                 <td>{order.orderDate}</td>
//                 <td>{order.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No orders found.</p>
//       )}
//     </div>
//   );
// };

// export default AdminOrders; */}


