// import React from 'react';

// const OrderDetails = ({ order }) => {
//   return (
//     <div className="order-details">
//       <h2>Order Details</h2>
//       <p>Order ID: {order.id}</p>
//       <p>Customer: {order.customerName}</p>
//       <p>Shipping Address: {order.shippingAddress}</p>
//       <p>Total Amount: ${order.totalAmount}</p>
//       <h3>Order Items:</h3>
//       <ul>
//         {order.items.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default OrderDetails;


//this component is not used 

// import React, { useState } from 'react'; 
// import Button from 'react-bootstrap/Button'; 
// import Modal from 'react-bootstrap/Modal';

// export default function OrderDetails(props) { 
//   const [show, setShow] =useState(false); 
//   const handleClose = () => setShow(false); 
//   const handleShow = () => setShow(true); 
//   console.log(props)

// return (

// <> 
// <Button variant="primary" onclick={handleShow}> Launch demo modal</Button>

// <Modal show ={show} onHide={handleClose}>
//   <Modal.Header closeButton>

// <Modal.Title>Modal heading</Modal.Title> </Modal.Header>

// <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>

// <Modal.Footer>

// <Button variant="secondary" onclick={handleClose}> Close

// </Button>

// <Button variant="primary" onclick={handleClose}>

// Save Changes

// </Button>

// </Modal.Footer>

// </Modal>

// </>

// ); 
// }




import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
//import Modal from "react-bootstrap/Modal";
import { Modal } from "react-bootstrap";



   
   const OrderDetails = () => {
    const [data, setData] = useState([]);
  const [itemData, setItemData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    getOrderList();
    
  }, []);

  const getOrderList = () => {
    const userId = localStorage.getItem("userId");
    const url = `https://localhost:7198/api/Medicines/orderList/${userId}`;

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
        console.log(responseData.listItem); // Check the response data structure
          
        if (responseData.statusCode === 200) {
          setItemData(responseData.listItem);
          setShow(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  


     return (
      <Fragment>
      <Header />
      <br />
      <div className="form-group col-md-12">
        <h3>My Orders</h3>
      </div>
      {data ? (
        <table className="table stripped table-hover mt-4" style={{ backgroundColor: "white", width: "80%", margin: "0 auto" }}>
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">OrderID</th>
              <th scope="col">Order No</th>
              <th scope="col">Total</th>
              <th scope="col">Status</th>
              {/* <th scope="col">Order Date</th> */}
            </tr>
          </thead>
          <tbody>
          {data.map((order, index) => (
  <tr key={order.id}>
    <th scope="row">{index + 1}</th>
  
    <td onClick={() => getOrderItems(order.id)}>{order.id}</td>

    <td>{order.orderNo}</td>
    <td>{order.orderTotal}</td>
    <td>{order.orderStatus}</td>
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
    <Modal.Title>Order Details for: {itemData && itemData.length > 0 ? itemData[0].OrderNo : ""}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {itemData && itemData.length > 0 ? (
      <table className="table stripped table-hover mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Medicine Name</th>
            <th scope="col">Manufacturer</th>
            <th scope="col">Unit price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total price</th>
          </tr>
        </thead>
        <tbody>
          {itemData.map((item, index) => (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.Name}</td>
              <td>{item.UnitPrice}</td>
              <td>{item.Quantity}</td>
              <td>{item.TotalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <div>No order items found</div>
    )}
  </Modal.Body>
</Modal>

      </div>
    </Fragment>
      
     )
   }
   
   export default OrderDetails;


