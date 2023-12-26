
// import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const PlaceOrder = () => {
//     const [data, setData] = useState([]);
//     const [totalCartPrice, setTotalCartPrice] = useState(0);
//     const [address, setAddress] = useState('');

//     useEffect(() => {
//         calculateTotalCartPrice();
//       }, [data]);

//       const generateOrderNumber = () => {
//         // Generate a random number between 100000 and 999999
//         const min = 100000;
//         const max = 999999;
//         const orderNo = Math.floor(Math.random() * (max - min + 1)) + min;
//         return orderNo.toString();
//       };
    
//       const handlePlaceOrder = (e) => {
//         e.preventDefault();
//         const userId = localStorage.getItem('userId');
    
//         if (userId) {
//           const orderNo = generateOrderNumber(); // Generate an order number
//           const orderTotal = totalCartPrice; // Use the total cart price as the order total
//           const orderStatus = 'Pending'; // Set the order status to "Pending"
    
//           const data = {
//             UserID: userId,
//             OrderNo: orderNo,
//             OrderTotal: orderTotal,
//             OrderStatus: orderStatus,
//             Address: address, // Include the address in the order data
//           };
    
//           const url = 'https://localhost:7198/api/Medicines/placeOrder';
    
//           axios
//             .post(url, data)
//             .then((response) => {
//               const responseData = response.data;
//               if (responseData.statusCode === 200) {
//                 // Remove cart data from the database
//                // clearCartData(userId);
    
//                 setData([]); // Empty the cart
//                 setAddress(''); // Clear the address field
//                 alert(responseData.statusMessage);
//               }
//             })
//             .catch((error) => {
//               console.error('Error placing order:', error);
//             });
//         } else {
//           console.error('User ID is missing or undefined');
//         }
//       };

//       const calculateTotalCartPrice = () => {
//         const totalPriceArray = data.map((item) => item.totalPrice * item.quantity);
//         const total = totalPriceArray.reduce(
//           (accumulator, currentValue) => accumulator + currentValue,
//           0
//         );
//         setTotalCartPrice(total);
//       };

    
//   return (
//     <Fragment>
//       <Header />
//       <br />
//       <br />
//       <div className="form-group col-md-12">
//         <h3>Cart items</h3>
//         {data && data.length > 0 && (
//           <form onSubmit={handlePlaceOrder}>
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               placeholder="Enter address"
//               required
//             />
//             <button type="submit" className="btn btn-primary">
//               Place Order
//             </button>
//           </form>
//         )}
//       </div>
//       <div
//         style={{
//           backgroundColor: 'white',
//           width: '80%',
//           margin: '0 auto',
//           borderRadius: '11px',
//         }}
//       >
//         <div className="card-deck">
//           {data && data.length > 0 ? (
//             data.map((item, index) => (
//               <div
//                 key={index}
//                 className="col-md-3"
//                 style={{ marginBottom: '21px' }}
//               >
//                 <div className="card">
//                   <img
//                     className="card-img-top"
//                     src={item.imageUrl}
//                     alt="Card image"
//                   />
//                   <div className="card-body">
//                     <h4 className="card-title">Name: {item.name}</h4>
//                     <h4 className="card-title">Quantity: {item.quantity}</h4>

//                     <h4 className="card-title">Discount: {item.discount}</h4>
//                     <h4 className="card-title">
//                       Total Price: {item.totalPrice}
//                     </h4>
                 
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No items to Order</p>
//           )}
//         </div>
//       </div>
//       <div>
//         <h1>Total Order Price: {totalCartPrice}</h1>
//       </div>
//     </Fragment>
//   )
// }

// export default PlaceOrder