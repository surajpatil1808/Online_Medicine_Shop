// import React, { useState, useEffect } from 'react';
// import OrderDetails from './OrderDetails';

// const Orders = () => {
//    const [orders, setOrders] = useState([]);
//   // const [data, setData] = useState([]);
//   // const [itemData, setItemData] = useState([]);
//   // const [show, setShow] = useState(false);
  
//   // const handleClose=()=>setShow(false);
  
  
//   // useEffect(() => {
//   //     getData("User", 0);
   
//   //   }, []);


//   useEffect(() => {
//     // Fetch orders data from the API or database
//     // Example: const fetchedOrders = await fetchOrders();
//     // setOrders(fetchedOrders);
//     // Replace the above lines with your actual data fetching logic
//     const dummyOrders = [
//       {
//         id: 1,
//         customerName: 'John Doe',
//         shippingAddress: '123 Main St, City',
//         totalAmount: 50.0,
//         items: [
//           { id: 1, name: 'Medicine A', price: 10.0 },
//           { id: 2, name: 'Medicine B', price: 15.0 },
//           { id: 3, name: 'Medicine C', price: 25.0 },
//         ],
//       },
//       // Add more dummy orders as needed
//     ];
//     setOrders(dummyOrders);
//   }, []);

//   return (
//     <div className="orders">
//       <h2>Orders</h2>
//       {orders.map((order) => (
//         <OrderDetails key={order.id} order={order} />
//       ))}
//     </div>
//   );
// };

// export default Orders;



// import React, {Fragment, useEffect, useState } from "react";

// import axios from "axios"; 
// import Header from "./Header";

// import { baseUrl} from "../constants";

// import Button from "react-bootstrap/Button";

// import Modal from "react-bootstrap/Modal"; 
// import "./modal.css";

// export default function Orders() {

// const [data, setData] = useState([]);

// const [itemData, setItemData] = useState([]);

// const [show, setShow] =useState(false);

// const handleClose = () => setShow (false);

//  useEffect(() => {

// getData("User", 0);

// }, []);

// const getData = (type, id) => {
//   const data = {

//     ID : id, 
//     type: type,
    
//     Email: localStorage.getItem("username"),
    
//     }; 
//     const url=`${baseUrl}/api/Medicines/orderList`;
    
//     axios
    
//     .post(url, data)
//     .then((result) => {

//       const data= result.data; 
//       if (data.statusCode === 200) {
      
//       type === "User" ? setData(data.listOrders): setItemData(data.listOrders);
      
//       }
      
//       })
      
//       .catch((error) => {
      
//       console.log(error); });
      
//       const handleItemDetail = (id) => {
      
//       getData("UserItems", id);
//        setShow(true);
//       };

//       return (

//         <Fragment>
        
//         <Header />
        
//         <br></br>
        
//         <div class="form-group col-md-12">
        
//         <h3>My Orders</h3>
        
//         </div>
        
//         {data? (
        
//         <table
        
//         className="table stripped table-hover mt-4" style={{ backgroundColor: "white", width: "80%", margin: "0 auto" }}>

// <thead className="thead-dark">

// <tr>

// <th scope="col">#</th>

// <th scope="col">Order No</th>
// <th scope="col">Total</th>

// <th scope="col">Status</th> 
// <th scope="col">Order Date</th>

// </tr>

// </thead>

// <tbody>

// (data.map((val, index) => { 
// return (

// <tr key={index}>

// <th scope="row">{index + 1}</th>

// <td onclick={() => handleItemDetail(val.id)}>

// {val.orderNo}

// </td>

// <td>{val.orderTotal}</td>

// <td>{val.orderStatus}</td>

// <td>{val.createdOn}</td>
// </tr>
// );
// })}
// </tbody>
// </table>
//       ):(
//         "No data found"
//       )}



// <div style={{ width: "100%" }}> 
// <Modal show={show} onHide={handleClose}>

// <Modal.Header>

// <Modal.Title>Order Details for: ({itemData && itemData.length>0? itemData[0]["orderNo"]:""}

// </Modal.Header>

// <Modal.Body>

// {itemData? (

// <table className="table stripped table-hover mt-4">

// <thead className="thead-dark">

// <tr>

// <th scope="col">#</th>
// <th scope="col">Medicine Name</th>
// <th scope="col">Manufacturer</th>
// <th scope="col">Unit price</th>
// <th scope="col">Quantity</th>
// <th scope="col">Total price</th>
// <th scope="col">Order Date</th>

// </tr>

// </thead>

// <tbody>

// {itemData.map((val, index) => {

// return (

// <tr key={index}>

// <th scope="row">{index + 1}</th>

// <td>{val.medicineName}</td>

// <td>{val.manufacturer}</td>

// <td>{val.unitPrice}</td>

// <td>{val.quantity}</td>

// <td>{val.totalPrice}</td>

// <td>{val.createdOn}</td>
// </tr>
// );
// })}
// </tbody>
// </table>
// ) : null}
// </Modal.Body>
// </Modal>
// </div>
// </Fragment>
// );
// }




// import React, { Fragment, useEffect, useState } from "react";
// import axios from "axios";
// import Header from "./Header";
// import Modal from "react-bootstrap/Modal";


// export default function Orders() {
//   const [data, setData] = useState([]);
//   const [itemData, setItemData] = useState([]);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);

//   useEffect(() => {
//     getData("User", 0);
//   }, []);

//   const getData = (type, id) => {
//     const requestData = {
//       ID: id,
//       type: type,
//       Email: localStorage.getItem("username"),
//     };

//     const url = `https://localhost:7198/api/Medicines/orderList`;

//     axios
//       .post(url, requestData)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           type === "User" ? setData(responseData.listOrders) : setItemData(responseData.listOrders);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const handleItemDetail = (id) => {
//     getData("UserItems", id);
//     setShow(true);
//   };

//   return (
//     <Fragment>
//       <Header />
//       <br />
//       <div className="form-group col-md-12">
//         <h3>My Orders</h3>
//       </div>
//       {data ? (
//         <table className="table stripped table-hover mt-4" style={{ backgroundColor: "white", width: "80%", margin: "0 auto" }}>
//           <thead className="thead-dark">
//             <tr>
//               <th scope="col">#</th>
//               <th scope="col">Order No</th>
//               <th scope="col">Total</th>
//               <th scope="col">Status</th>
//               <th scope="col">Order Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((val, index) => (
//               <tr key={index}>
//                 <th scope="row">{index + 1}</th>
//                 <td onClick={() => handleItemDetail(val.id)}>{val.orderNo}</td>
//                 <td>{val.orderTotal}</td>
//                 <td>{val.orderStatus}</td>
//                 <td>{val.createdOn}</td>
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
//             <Modal.Title>Order Details for: {itemData && itemData.length > 0 ? itemData[0]["orderNo"] : ""}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {itemData ? (
//               <table className="table stripped table-hover mt-4">
//                 <thead className="thead-dark">
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">Medicine Name</th>
//                     <th scope="col">Manufacturer</th>
//                     <th scope="col">Unit price</th>
//                     <th scope="col">Quantity</th>
//                     <th scope="col">Total price</th>
//                     <th scope="col">Order Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {itemData.map((val, index) => (
//                     <tr key={index}>
//                       <th scope="row">{index + 1}</th>
//                       <td>{val.medicineName}</td>
//                       <td>{val.manufacturer}</td>
//                       <td>{val.unitPrice}</td>
//                       <td>{val.quantity}</td>
//                       <td>{val.totalPrice}</td>
//                       <td>{val.createdOn}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : null}
//           </Modal.Body>
//         </Modal>
//       </div>
//     </Fragment>
//   );
// }


// import React, { Fragment, useEffect, useState } from "react";
// import axios from "axios";
// import Header from "./Header";
// import Modal from "react-bootstrap/Modal";

// export default function Orders() {
//   const [data, setData] = useState([]);
//   const [itemData, setItemData] = useState([]);
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);

//   useEffect(() => {
//     getOrderList();
//   }, []);

//   const getOrderList = () => {
//     const userId = localStorage.getItem("userId");
//     const url = `https://localhost:7198/api/Medicines/orderList/${userId}`;

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
//         console.log(responseData.listItem); // Check the response data structure
  
//         if (responseData.statusCode === 200) {
//           setItemData(responseData.listItem);
//           setShow(true);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
  
  
  

//   return (
//     <Fragment>
//       <Header />
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
//               {/* <th scope="col">Order Date</th> */}
//             </tr>
//           </thead>
//           <tbody>
//           {data.map((order, index) => (
//   <tr key={order.id}>
//     <th scope="row">{index + 1}</th>
  
//     <td onClick={() => getOrderItems(order.id)}>{order.id}</td>

//     <td>{order.orderNo}</td>
//     <td>{order.orderTotal}</td>
//     <td>{order.orderStatus}</td>
//   </tr>
// ))}

//           </tbody>
//         </table>
//       ) : (
//         <div>No data found</div>
//       )}
//       <div style={{ width: "100%" }}>
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header>
//             <Modal.Title>Order Details for: {itemData && itemData.length > 0 ? itemData[0].OrderNo : ""}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//   {itemData && itemData.length > 0 ? (
//     <table className="table stripped table-hover mt-4">
//       <thead className="thead-dark">
//         <tr>
//           <th scope="col">#</th>
//           <th scope="col">Medicine Name</th>
//           <th scope="col">Manufacturer</th>
//           <th scope="col">Unit price</th>
//           <th scope="col">Quantity</th>
//           <th scope="col">Total price</th>
//         </tr>
//       </thead>
//       <tbody>
//         {itemData.map((item, index) => (
//           <tr key={item.ID}>
//             <th scope="row">{index + 1}</th>
//             <td>{item.Name}</td>
           
//             <td>{item.UnitPrice}</td>
//             <td>{item.Quantity}</td>
//             <td>{item.TotalPrice}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   ) : (
//     <div>No order items found</div>
//   )}
// </Modal.Body>

//         </Modal>
//       </div>
//     </Fragment>
//   );
// }




import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { Modal } from "react-bootstrap";
import './Order.css';

const Orders = () => {
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
        if (responseData.statusCode === 200) {
          setItemData(responseData.listItem);
          setShow(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const modalStyle = {
    maxWidth: "800px", // Adjust the width as needed
  };

  const tableStyle = {
    backgroundColor: 'white',
    width: '80%',
    margin: '0 auto',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  };

  const headerCellStyle = {
    backgroundColor: '#343a40',
    color: 'white',
  };

  const rowCellStyle = {
    cursor: 'pointer',
  };

  const rowHoverStyle = {
    backgroundColor: '#f8f9fa',
  };

  const sectionStyle = {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "10px",
  };

  return (
    <Fragment>
      <Header />
      <br />
      {/* <div className="form-group col-md-12">
        <h3>My Orders</h3>
      </div>
      {data ? (
        // <table className="table stripped table-hover mt-4" style={{ backgroundColor: "white", width: "80%", margin: "0 auto" }}>
        //   <thead className="thead-dark">
        //     <tr>
        //       <th scope="col">#</th>
        //       <th scope="col">OrderID</th>
        //       <th scope="col">Order No</th>
        //       <th scope="col">Total</th>
        //       <th scope="col">Status</th>
        //       <th scope="col">Address</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     {data.map((order, index) => (
        //       <tr key={order.id}>
        //         <th scope="row">{index + 1}</th>
        //         <td onClick={() => getOrderItems(order.id)}>{order.id}</td>
        //         <td>{order.orderNo}</td>
        //         <td>{order.orderTotal}</td>
        //         <td>{order.orderStatus}</td>
        //         <td>{order.address}</td>
        //       </tr>
        //     ))}
        //   </tbody>
        // </table>
        <table className="table table-striped table-hover mt-4" style={tableStyle}>
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">OrderID</th>
          <th scope="col">Order No</th>
          <th scope="col">OrderTotal</th>
          <th scope="col">Status</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((order, index) => (
          <tr
            key={order.id}
            style={rowCellStyle}
            onMouseOver={(e) => {
              e.target.parentNode.style.backgroundColor = rowHoverStyle.backgroundColor;
            }}
            onMouseOut={(e) => {
              e.target.parentNode.style.backgroundColor = '';
            }}
          >
            <th scope="row">{index + 1}</th>
            <td onClick={() => getOrderItems(order.id)}>{order.id}</td>
            <td>{order.orderNo}</td>
            <td>{order.orderTotal}</td>
            
            <td><span className="badge badge-success custom-badge">{order.orderStatus}</span></td>
            <td>{order.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
      ) : (
        <div>No data found</div>
      )} */}


<div className="form-group col-md-12">
  <h3>My Orders</h3>
</div>
{data ? (
  <div className="mt-4">
    {data.map((order, index) => (
      <div key={order.id} style={sectionStyle} onClick={() => getOrderItems(order.id)}>
        <div>
          <strong># {index + 1}</strong>
        </div>
        <div>
          <strong >Order ID:</strong> {order.id}
        </div>
        <div>
          <strong>Order No:</strong> {order.orderNo}
        </div>
        <div>
          <strong>Order Total:</strong> {order.orderTotal}
        </div>
        <div>
          <strong>Status:</strong>{" "}
          <span className="badge badge-success custom-badge">
            {order.orderStatus}
          </span>
        </div>
        <div>
          <strong>Address:</strong> {order.address}
        </div>
        <hr />
      </div>
    ))}
  </div>
) : (
  <div>No data found</div>
)}


      <div style={{ width: "100%" }}>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Order Details for: {itemData && itemData.length > 0 ? itemData[0].orderNo : ""}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {itemData && itemData.length > 0 ? (
              <table className="table table-striped table-hover mt-6" style={modalStyle}>
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
          </Modal.Body>
        </Modal>
      </div>
    </Fragment>
  );
};

export default Orders;
