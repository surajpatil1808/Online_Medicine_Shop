// import React, { useState, useEffect } from 'react';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     // Fetch cart items from the server or API
//     const fetchCartItems = async () => {
//       try {
//         // Make an API request to retrieve cart items
//         const response = await fetch('/api/users/cart');
//         const data = await response.json();
//         setCartItems(data);
//       } catch (error) {
//         console.error('Error fetching cart items:', error);
//       }
//     };

//     // Call the fetchCartItems function
//     fetchCartItems();
//   }, []);

//   const removeCartItem = async (itemId) => {
//     try {
//       // Make an API request to remove the item from the cart
//       await fetch(`/api/users/cart/${itemId}`, {
//         method: 'DELETE',
//       });

//       // Remove the item from the cartItems state
//       setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//     } catch (error) {
//       console.error('Error removing item from cart:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cartItems.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Item ID</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               <tr key={item.id}>
//                 <td>{item.id}</td>
//                 <td>{item.name}</td>
//                 <td>{item.price}</td>
//                 <td>
//                   <button onClick={() => removeCartItem(item.id)}>Remove</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;

// import React from 'react'

// const Cart = () => {


//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getData();

//   }, []);

//   const getData = () => {

//     const data = {

//       Email: localStorage.getItem("username"),
//     };

//     const url = `${baseUrl}/api/Admin/cartList`;

//     axios.post(url, data)
//       .then((result) => {

//         const data = result.data;

//         if (data.statusCode === 200) {

//           setData(data.listCart);
//         }
//       })
//       .catch((error) => {
//         console.error('Error deleting medicine:', error);
//       });
//   }
//   return (
//     <Fragment>

//       <Header />

//       <br></br>

//       <div class="form-group col-md-12">

//         <h3>Cart items</h3>

//         {data && data.length ?

//           <button className="btn btn-primary" onclick={(e) => handlePlaceOrder(e)}>

//             Place Order

//           </button>

//           : ''}

//       </div>

//       <div

//         style={{

//           backgroundColor: "white",

//           width: "80%",

//           margin: "0 auto",

//           borderRadius: "11px",
// >
// }}

//       <div className="card-deck">

//         {data && data.length > 0

//           ? data.map((val, index) => {

//             return (

//               <div key={index} class="col-md-3" style={{ marginBottom: "21px" }}>

//                 <div class="card">

//                   <img

//                     class="card-img-top"

//                     src='assets/images/${val.imageUrl}`}

// alt="Card image"
// />

// <div class="card-body">

// <h4 class="card-title">Name : {val.medicineName}</h4>

// <h4 class="card-title">Quantity: {val.quantity}</h4>

// <a href="#" class="btn btn-primary">

// Remove

// </a>

// </div>

// </div>

// </div>

// )

// })

// })

// : "No item to display. Kindly add..."}

// </div>

// </div>

// </Fragment>

// );
// }
   
//   )
// }

// export default Cart


// import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Cart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     const data = {
//       Email: localStorage.getItem('username'),

//     };

//     const url = `https://localhost:7198/api/Medicines/cartList`;

//     axios
//       .post(url, data)
//       .then((result) => {
//         const responseData = result.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listCart);
//         }
//       })
//       .catch((error) => {
//         console.error('Error retrieving cart data:', error);
//       });
//   };

//   const handlePlaceOrder = (e) => {
//    e.preventDefault();
//    const data={
//     Email:localStorage.getItem("username")
//    };
//    const url= "`https://localhost:7198/api/Medicines/placeOrder`;";
//    axios
//       .post(url, data)
//       .then((result) => {
//         const dt = result.data;
//         if (dt.statusCode === 200) {
//           setData([]);
//           alert(dt.statusMessage);
//         }
//       })
//       .catch((error) => {
//         console.error('Error retrieving cart data:', error);
//       });

//   };

//   return (
//     <Fragment>
   
//       <Header />
//       <br /><br/>
//       <div className="form-group col-md-12">
//         <h3>Cart items</h3>
//         {data && data.length ?
//           <button className="btn btn-primary" onClick={(e) => handlePlaceOrder(e)}>
//             Place Order
//           </button>
//         :''}
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
//           {data && data.length > 0 ? 
//             data.map((val, index) => {
//               return(

            
//               <div key={index} className="col-md-3" style={{ marginBottom: '21px' }}>
//                 <div className="card">
//                   <img className="card-img-top" src={`assets/images/${val.imageUrl}`} alt="Card image" />
//                   <div className="card-body">
//                     <h4 className="card-title">Name: {val.medicineName}</h4>
//                     <h4 className="card-title">Quantity: {val.quantity}</h4>
//                     <a href="#" className="btn btn-primary">
//                       Remove
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )
//               }) : 
//             "No item to display. Kindly add"
//           }
//         </div>
//       </div>
//       </Fragment>
   
//   );
// };

// export default Cart;






// import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Cart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);



//   const getData = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Medicines/cartList/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setData(responseData.listCart);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving cart data:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const handlePlaceOrder = (e) => {
//     e.preventDefault();
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const data = {
//         UserId: userId,

//       };

//       const url = 'https://localhost:7198/api/Medicines/placeOrder';

//       axios
//         .post(url, data)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setData([]);
//             alert(responseData.statusMessage);
//           }
//         })
//         .catch((error) => {
//           console.error('Error placing order:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };
  


//   const RemoveItem = (id) => {
//     const url = `https://localhost:7198/api/Medicines/removeCartItem/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Item removed successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting item:', error);
//       });
//   };
  

//   return (
//     <Fragment>
//       <Header />
//       <br /><br />
//       <div className="form-group col-md-12">
//         <h3>Cart items</h3>
//         {data && data.length > 0 &&
//           <button className="btn btn-primary" onClick={handlePlaceOrder}>
//             Place Order
//           </button>
//         }
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
      

// {data && data.length > 0 ?
//   data.map((item, index) => (
//     <div key={index} className="col-md-3" style={{ marginBottom: '21px' }}>
//       <div className="card">
// <img className="card-img-top" src={item.imageUrl} alt="Card image" />
//         <div className="card-body">
//           <h4 className="card-title">Name: {item.name}</h4>
//           <h4 className="card-title">Quantity: {item.quantity}</h4>
      
//                     <h4 className="card-title">Discount: {item.discount}</h4>
//                     <h4 className="card-title">Total Price: {item.totalPrice}</h4>
//           <button className="btn btn-primary" onClick={() => RemoveItem(item.id)}>
//             Remove
//           </button>
         
//         </div>
//       </div>
//     </div> 
//   )) :
//   "No items in the cart. Kindly add items."
// }
//       </div>
//       </div>

// <div>
//   <h1>Total Cart Price: </h1>
// </div>

//     </Fragment>
//   );
// };

// export default Cart;

// import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Cart = () => {
//   const [data, setData] = useState([]);
//   const [totalCartPrice, setTotalCartPrice] = useState(0);

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     calculateTotalCartPrice();
//   }, [data]);

//   const getData = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Medicines/cartList/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setData(responseData.listCart);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving cart data:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const handlePlaceOrder = (e) => {
//     e.preventDefault();
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const data = {
//         UserId: userId,
//       };

//       const url = 'https://localhost:7198/api/Medicines/placeOrder';

//       axios
//         .post(url, data)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setData([]);
//             alert(responseData.statusMessage);
//           }
//         })
//         .catch((error) => {
//           console.error('Error placing order:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const handleRemoveItem = (id) => {
//     const url = `https://localhost:7198/api/Medicines/removeCartItem/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Item removed successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting item:', error);
//       });
//   };

//   const calculateTotalCartPrice = () => {
//     const totalPriceArray = data.map(
//       (item) => item.totalPrice * item.quantity
//     );
//     const total = totalPriceArray.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0
//     );
//     setTotalCartPrice(total);
//   };

//   return (
//     <Fragment>
//       <Header />
//       <br />
//       <br />
//       <div className="form-group col-md-12">
//         <h3>Cart items</h3>
//         {data && data.length > 0 && (
//           <button className="btn btn-primary" onClick={handlePlaceOrder}>
//             Place Order
//           </button>
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
//               <div key={index} className="col-md-3" style={{ marginBottom: '21px' }}>
//                 <div className="card">
//                   <img className="card-img-top" src={item.imageUrl} alt="Card image" />
//                   <div className="card-body">
//                     <h4 className="card-title">Name: {item.name}</h4>
//                     <h4 className="card-title">Quantity: {item.quantity}</h4>
                   
//                     <h4 className="card-title">Discount: {item.discount}</h4>
//                     <h4 className="card-title">Total Price: {item.totalPrice}</h4>
//                     <button className="btn btn-primary" onClick={() => handleRemoveItem(item.id)}>
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No items in the cart. Kindly add items.</p>
//           )}
//         </div>
//       </div>
//       <div>
//         <h1>Total Cart Price: {totalCartPrice}</h1>
//       </div>
//     </Fragment>
//   );
// };

// export default Cart;



// import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Cart = () => {
//   const [data, setData] = useState([]);
//   const [totalCartPrice, setTotalCartPrice] = useState(0);

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     calculateTotalCartPrice();
//   }, [data]);

//   const getData = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Medicines/cartList/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setData(responseData.listCart);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving cart data:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };


//   const generateOrderNumber = () => {
//     // Generate a random number between 100000 and 999999
//     const min = 100000;
//     const max = 999999;
//     const orderNo = Math.floor(Math.random() * (max - min + 1)) + min;
//     return orderNo.toString();
//   };
  
//   const handlePlaceOrder = (e) => {
//     e.preventDefault();
//     const userId = localStorage.getItem('userId');
  
//     if (userId) {
//       const orderNo = generateOrderNumber(); // Generate an order number
//       const orderTotal = totalCartPrice; // Use the total cart price as the order total
//       const orderStatus = 'Pending'; // Set the order status to "Pending"
  
//       const data = {
//         UserID: userId,
//         OrderNo: orderNo,
//         OrderTotal: orderTotal,
//         OrderStatus: orderStatus,
//       };
  
//       const url = 'https://localhost:7198/api/Medicines/placeOrder';
  
//       axios
//         .post(url, data)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             // Remove cart data from the database
//             clearCartData(userId);
            
//             setData([]); // Empty the cart
//             alert(responseData.statusMessage);
//           }
//         })
//         .catch((error) => {
//           console.error('Error placing order:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };
  
//   const clearCartData = (userId) => {
//     const url = `https://localhost:7198/api/Medicines/clearCartData/${userId}`;
  
//     axios
//       .delete(url)
//       .then((response) => {
//         console.log('Cart data removed successfully');
//       })
//       .catch((error) => {
//         console.error('Error removing cart data:', error);
//       });
//   };
  
  

//   const handleRemoveItem = (id) => {
//     const url = `https://localhost:7198/api/Medicines/removeCartItem/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Item removed successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting item:', error);
//       });
//   };

//   const calculateTotalCartPrice = () => {
//     const totalPriceArray = data.map(
//       (item) => item.totalPrice * item.quantity
//     );
//     const total = totalPriceArray.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0
//     );
//     setTotalCartPrice(total);
//   };

//   return (
//     <Fragment>
//       <Header />
//       <br />
//       <br />
//       <div className="form-group col-md-12">
//         <h3>Cart items</h3>
//         {data && data.length > 0 && (
//           <button className="btn btn-primary" onClick={handlePlaceOrder}>
//             Place Order
//           </button>
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
//               <div key={index} className="col-md-3" style={{ marginBottom: '21px' }}>
//                 <div className="card">
//                   <img className="card-img-top" src={item.imageUrl} alt="Card image" />
//                   <div className="card-body">
//                     <h4 className="card-title">Name: {item.name}</h4>
//                     <h4 className="card-title">Quantity: {item.quantity}</h4>
                   
//                     <h4 className="card-title">Discount: {item.discount}</h4>
//                     <h4 className="card-title">Total Price: {item.totalPrice}</h4>
//                     <button className="btn btn-primary" onClick={() => handleRemoveItem(item.id)}>
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No items in the cart. Kindly add items.</p>
//           )}
//         </div>
//       </div>
//       <div>
//         <h1>Total Cart Price: {totalCartPrice}</h1>
//       </div>
//     </Fragment>
//   );
// };

// export default Cart;


// import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Cart = () => {
//   const [data, setData] = useState([]);
//   const [totalCartPrice, setTotalCartPrice] = useState(0);
//   const [address, setAddress] = useState('');

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     calculateTotalCartPrice();
//   }, [data]);

//   const getData = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Medicines/cartList/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setData(responseData.listCart);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving cart data:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const generateOrderNumber = () => {
//     // Generate a random number between 100000 and 999999
//     const min = 100000;
//     const max = 999999;
//     const orderNo = Math.floor(Math.random() * (max - min + 1)) + min;
//     return orderNo.toString();
//   };

//   const handlePlaceOrder = (e) => {
//     e.preventDefault();
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const orderNo = generateOrderNumber(); // Generate an order number
//       const orderTotal = totalCartPrice; // Use the total cart price as the order total
//       const orderStatus = 'Pending'; // Set the order status to "Pending"

//       const data = {
//         UserID: userId,
//         OrderNo: orderNo,
//         OrderTotal: orderTotal,
//         OrderStatus: orderStatus,
//         Address: address, // Include the address in the order data
//       };

//       const url = 'https://localhost:7198/api/Medicines/placeOrder';

//       axios
//         .post(url, data)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             // Remove cart data from the database
//             clearCartData(userId);

//             setData([]); // Empty the cart
//             setAddress(''); // Clear the address field
//             alert(responseData.statusMessage);
//           }
//         })
//         .catch((error) => {
//           console.error('Error placing order:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const clearCartData = (userId) => {
//     const url = `https://localhost:7198/api/Medicines/clearCartData/${userId}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         console.log('Cart data removed successfully');
//       })
//       .catch((error) => {
//         console.error('Error removing cart data:', error);
//       });
//   };

//   const handleRemoveItem = (id) => {
//     const url = `https://localhost:7198/api/Medicines/removeCartItem/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Item removed successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting item:', error);
//       });
//   };

//   const calculateTotalCartPrice = () => {
//     const totalPriceArray = data.map((item) => item.totalPrice * item.quantity);
//     const total = totalPriceArray.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0
//     );
//     setTotalCartPrice(total);
//   };

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
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => handleRemoveItem(item.id)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No items in the cart. Kindly add items.</p>
//           )}
//         </div>
//       </div>
//       <div>
//         <h1>Total Cart Price: {totalCartPrice}</h1>
//       </div>
//     </Fragment>
//   );
// };

// export default Cart;

// import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Cart = () => {
//   const [selectedAddress, setSelectedAddress] = useState('');

//   //const [selectedAddress, setSelectedAddress] = useState('');
//   const [data, setData] = useState([]);
//   const [totalCartPrice, setTotalCartPrice] = useState(0);
//   const [address, setAddress] = useState('');
//   const [addresses, setAddresses] = useState([]);
 

//   useEffect(() => {
//     getData();
//     getAddresses();
//   }, []);

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     calculateTotalCartPrice();
//   }, [data]);

//   const getData = () => {
//     const userId = localStorage.getItem('userId');
  
//     if (userId) {
//       const url = `https://localhost:7198/api/Medicines/cartList/${userId}`;
  
//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setData(responseData.listCart);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving cart data:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };
  
 
//   const getAddresses = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Users/cartAddress/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setAddresses(responseData.listAddress);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving addresses:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const generateOrderNumber = () => {
//     // Generate a random number between 100000 and 999999
//     const min = 100000;
//     const max = 999999;
//     const orderNo = Math.floor(Math.random() * (max - min + 1)) + min;
//     return orderNo.toString();
//   };

//   const handlePlaceOrder = (e) => {
//     e.preventDefault();
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const orderNo = generateOrderNumber(); // Generate an order number
//       const orderTotal = totalCartPrice; // Use the total cart price as the order total
//       const orderStatus = 'Pending'; // Set the order status to "Pending"
//       const name="name";
//       const imageUrl="hshs";
     
      
//       // const selectedAddressObj = {
//       //   userId: userId,
//       //   address1: selectedAddress.address1,
//       //   address2: selectedAddress.address2,
//       //   address3: selectedAddress.address3,
//       //   address4: selectedAddress.address4,
//       //   address5: selectedAddress.address5,
//       //   address6: selectedAddress.address6
//       // };
  
//       const data = {
//         UserID: userId,
//         OrderNo: orderNo,
//         OrderTotal: orderTotal,
//         OrderStatus: orderStatus,
//         Name:name,
//         ImageUrl:imageUrl,
//         Address:address,
//       };

//       const url = 'https://localhost:7198/api/Medicines/placeOrder';

//       axios
//         .post(url, data)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             // Remove cart data from the database
//             clearCartData(userId);

//             setData([]); // Empty the cart
//             setSelectedAddress(''); // Clear the selected address
//             alert(responseData.statusMessage);
//           }
//         })
//         .catch((error) => {
//           console.error('Error placing order:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };
  
  

//   // const handlePlaceOrder = (e) => {
//   //   e.preventDefault();
//   //   const userId = localStorage.getItem('userId');
  
//   //   if (userId) {
//   //     const orderNo = generateOrderNumber();
//   //     const orderTotal = totalCartPrice;
//   //     const orderStatus = 'Pending';
//   //     // const medicineID ='';
//   //     // const name="";
//   //     // const unitPrice="";
//   //     // const discount="";
//   //     // const quantity="";
//   //     // const totalPrice="";
//   //     // const imageUrl="";


      
  
  
//   //     const data = {
      
//   //       UserID: userId,
//   //       OrderNo: orderNo,
//   //       OrderTotal: orderTotal,
//   //       OrderStatus: orderStatus,
//   //       Address: selectedAddress,
//   //       // MedicineID:medicineID,
//   //       // Name:name,
//   //       // UnitPrice:unitPrice,
//   //       // Discount:discount,
//   //       // Quantity:quantity,
//   //       // TotalPrice:totalPrice,
//   //       // ImageUrl:imageUrl,
       
        
//   //     };
  
//   //     const url = 'https://localhost:7198/api/Medicines/placeOrder';
  
//   //     axios
//   //       .post(url, data)
//   //       .then((response) => {
//   //         const responseData = response.data;
//   //         if (responseData.statusCode === 200) {
//   //           clearCartData(userId);
//   //           setData([]);
//   //           setSelectedAddress('');
//   //           alert(responseData.statusMessage);
//   //         }
//   //       })
//   //       .catch((error) => {
//   //         console.error('Error placing order:', error);
//   //       });
//   //   } else {
//   //     console.error('User ID is missing or undefined');
//   //   }
//   // };
  
//   // const handlePlaceOrder = (e) => {
//   //   e.preventDefault();
//   //   const userId = localStorage.getItem('userId');
  
//   //   if (userId) {
//   //     const orderNo = generateOrderNumber(); // Generate an order number
//   //     const orderTotal = totalCartPrice; // Use the total cart price as the order total
//   //     const orderStatus = 'Pending'; // Set the order status to "Pending"
  
//   //     const orderData = { // Renamed the variable to avoid conflict
//   //       UserID: userId,
//   //       OrderNo: orderNo,
//   //       OrderTotal: orderTotal,
//   //       OrderStatus: orderStatus,
//   //       MedicineID: data.map((item) => item.id), // Array of Medicine IDs
//   //       Name: data.map((item) => item.name), // Array of Medicine names
//   //       UnitPrice: data.map((item) => item.unitPrice), // Array of Medicine unit prices
//   //       Discount: data.map((item) => item.discount), // Array of Medicine discounts
//   //       Quantity: data.map((item) => item.quantity), // Array of Medicine quantities
//   //       TotalPrice: data.map((item) => item.totalPrice), // Array of Medicine total prices
//   //       ImageUrl: data.map((item) => item.imageUrl), // Array of Medicine image URLs
//   //       Address: selectedAddress, // Include the selected address in the order data
//   //     };
  
//   //     const url = 'https://localhost:7198/api/Medicines/placeOrder';
  
//   //     axios
//   //       .post(url, orderData) // Updated the variable name here as well
//   //       .then((response) => {
//   //         const responseData = response.data;
//   //         if (responseData.statusCode === 200) {
//   //           // Remove cart data from the database
//   //           clearCartData(userId);
  
//   //           setData([]); // Empty the cart
//   //           setSelectedAddress(''); // Clear the selected address
//   //           alert(responseData.statusMessage);
//   //         }
//   //       })
//   //       .catch((error) => {
//   //         console.error('Error placing order:', error);
//   //       });
//   //   } else {
//   //     console.error('User ID is missing or undefined');
//   //   }
//   // };
  
//   const clearCartData = (userId) => {
//     const url = `https://localhost:7198/api/Medicines/clearCartData/${userId}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         console.log('Cart data removed successfully');
//       })
//       .catch((error) => {
//         console.error('Error removing cart data:', error);
//       });
//   };

//   const handleRemoveItem = (id) => {
//     const url = `https://localhost:7198/api/Medicines/removeCartItem/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Item removed successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting item:', error);
//       });
//   };

//   const calculateTotalCartPrice = () => {
//     const totalPriceArray = data.map((item) => item.totalPrice * item.quantity);
//     const total = totalPriceArray.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0
//     );
//     setTotalCartPrice(total);
//   };

//   return (
//     <Fragment>
//       <Header />
//       <br />
//       <br />
//       <div className="form-group col-md-12">
//         <h3>Cart items</h3>
//         {data && data.length > 0 && (
//           <form onSubmit={handlePlaceOrder}>
//            <select
//   value={selectedAddress}
//   onChange={(e) => setSelectedAddress(e.target.value)}
//   required
// >
//   <option value="">Select Address</option>
//   {addresses.map((address) => (
//   <option key={address.id} value={JSON.stringify({
//     userId: address.userId,
//     fullname: address.address1,
//     phonenumber: address.address2,
//     pincode: address.address3,
//     state: address.address4,
//     city: address.address5,
//     HouseNo: address.address6
//   })}>
//     {`${address.address1}, ${address.address2}, ${address.address3}, ${address.address4}, ${address.address5}, ${address.address6}`}
//   </option>
// ))}


// </select>

// <button
//   className="btn btn-primary"
//   onClick={(e) => handlePlaceOrder(e)}
// >
//   Place Order
// </button>

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
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => handleRemoveItem(item.id)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No items in the cart. Kindly add items.</p>
//           )}
//         </div>
//       </div>
//       <div>
//         <h1>Total Cart Price: {totalCartPrice}</h1>
//       </div>
//     </Fragment>
//   );
// };

// export default Cart;

// import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Cart = () => {
//   const [data, setData] = useState([]);
//   const [totalCartPrice, setTotalCartPrice] = useState(0);
//   const [address, setAddress] = useState('');
//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState('');

//   useEffect(() => {
//     getData();
//     getAddresses();
//   }, []);

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     calculateTotalCartPrice();
//   }, [data]);

//   const getData = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Medicines/cartList/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setData(responseData.listCart);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving cart data:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };
//   // ...

// const getAddresses = () => {
//   const userId = localStorage.getItem('userId');

//   if (userId) {
//     const url = `https://localhost:7198/api/Users/cartAddress/${userId}`;

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setAddresses(responseData.listAddress);
//         }
//       })
//       .catch((error) => {
//         console.error('Error retrieving addresses:', error);
//       });
//   } else {
//     console.error('User ID is missing or undefined');
//   }
// };

// const handlePlaceOrder = (e) => {
//   e.preventDefault();
//   const userId = localStorage.getItem('userId');

//   if (userId) {
//     const orderNo = generateOrderNumber(); // Generate an order number
//     const orderTotal = totalCartPrice; // Use the total cart price as the order total
//     const orderStatus = 'Pending'; // Set the order status to "Pending"
//     const selectedAddressData = JSON.parse(selectedAddress);
//     const name="asas";
//     const imageUrl="asas";
//     const addressData = {
//       userId: selectedAddressData.userId,
//       Address1: selectedAddressData.address1,
//       Address2: selectedAddressData.address2,
//       Address3: selectedAddressData.address3,
//       Address4: selectedAddressData.address4,
//       Address5: selectedAddressData.address5,
//       Address6: selectedAddressData.address6,
//     };

//     const data = {
//       UserID: userId,
//       OrderNo: orderNo,
//       OrderTotal: orderTotal,
//       OrderStatus: orderStatus,
//       Address: addressData, // Include the selected address in the order data
//       Name: name,
//       ImageUrl: imageUrl,
//     };

//     const url = 'https://localhost:7198/api/Medicines/placeOrder';

//     axios
//       .post(url, data)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           // Remove cart data from the database
//           clearCartData(userId);

//           setData([]); // Empty the cart
//           setSelectedAddress(''); // Clear the selected address
//           alert(responseData.statusMessage);
//         }
//       })
//       .catch((error) => {
//         console.error('Error placing order:', error);
//       });
//   } else {
//     console.error('User ID is missing or undefined');
//   }
// };

// // ...

 
//   // const getAddresses = () => {
//   //   const userId = localStorage.getItem('userId');

//   //   if (userId) {
//   //     const url = `https://localhost:7198/api/Users/cartAddress/${userId}`;

//   //     axios
//   //       .get(url)
//   //       .then((response) => {
//   //         const responseData = response.data;
//   //         if (responseData.statusCode === 200) {
//   //           setAddresses(responseData.listAddress);
//   //         }
//   //       })
//   //       .catch((error) => {
//   //         console.error('Error retrieving addresses:', error);
//   //       });
//   //   } else {
//   //     console.error('User ID is missing or undefined');
//   //   }
//   // };

//   const generateOrderNumber = () => {
//     // Generate a random number between 100000 and 999999
//     const min = 100000;
//     const max = 999999;
//     const orderNo = Math.floor(Math.random() * (max - min + 1)) + min;
//     return orderNo.toString();
//   };

//   // const handlePlaceOrder = (e) => {
//   //   e.preventDefault();
//   //   const userId = localStorage.getItem('userId');

//   //   if (userId) {
//   //     const orderNo = generateOrderNumber(); // Generate an order number
//   //     const orderTotal = totalCartPrice; // Use the total cart price as the order total
//   //     const orderStatus = 'Pending'; // Set the order status to "Pending"
//   //     const name="";
//   //     const imageUrl="";
          
//   //     const data = {
//   //       UserID: userId,
//   //       OrderNo: orderNo,
//   //       OrderTotal: orderTotal,
//   //       OrderStatus: orderStatus,
//   //       Address: selectedAddress, // Include the selected address in the order data
//   //       Name:name,
//   //       ImageUrl:imageUrl,
//   //     };

//   //     const url = 'https://localhost:7198/api/Medicines/placeOrder';

//   //     axios
//   //       .post(url, data)
//   //       .then((response) => {
//   //         const responseData = response.data;
//   //         if (responseData.statusCode === 200) {
//   //           // Remove cart data from the database
//   //           clearCartData(userId);

//   //           setData([]); // Empty the cart
//   //           setSelectedAddress(''); // Clear the selected address
//   //           alert(responseData.statusMessage);
//   //         }
//   //       })
//   //       .catch((error) => {
//   //         console.error('Error placing order:', error);
//   //       });
//   //   } else {
//   //     console.error('User ID is missing or undefined');
//   //   }
//   // };

//   const clearCartData = (userId) => {
//     const url = `https://localhost:7198/api/Medicines/clearCartData/${userId}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         console.log('Cart data removed successfully');
//       })
//       .catch((error) => {
//         console.error('Error removing cart data:', error);
//       });
//   };

//   const handleRemoveItem = (id) => {
//     const url = `https://localhost:7198/api/Medicines/removeCartItem/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Item removed successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting item:', error);
//       });
//   };

//   const calculateTotalCartPrice = () => {
//     const totalPriceArray = data.map((item) => item.totalPrice * item.quantity);
//     const total = totalPriceArray.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0
//     );
//     setTotalCartPrice(total);
//   };

//   return (
//     <Fragment>
//       <Header />
//       <br />
//       <br />
//       <div className="form-group col-md-12">
//         <h3>Cart items</h3>
//         {data && data.length > 0 && (
//           <form onSubmit={handlePlaceOrder}>
//            <select
//   value={selectedAddress}
//   onChange={(e) => setSelectedAddress(e.target.value)}
//   required
// >
//   <option value="">Select Address</option>
// {addresses.map((address) => (
//   <option key={address.id} value={JSON.stringify({
//     userId: address.userId,
//     FullName: address.address1,
//     PhoneNo: address.address2,
//     PinCode: address.address3,
//     State: address.address4,
//     City: address.address5,
//     HouseNoOrBuildingName: address.address6
//   })}>
//     {`${address.address1}, ${address.address2}, ${address.address3}, ${address.address4}, ${address.address5}, ${address.address6}`}
//   </option>
// ))}


// </select>

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
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => handleRemoveItem(item.id)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No items in the cart. Kindly add items.</p>
//           )}
//         </div>
//       </div>
//       <div>
//         <h1>Total Cart Price: {totalCartPrice}</h1>
//       </div>
//     </Fragment>
//   );
// };

// export default Cart;



//this is fully working code with address
// import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Cart = () => {
//   const [data, setData] = useState([]);
//   const [totalCartPrice, setTotalCartPrice] = useState(0);
//   const [address, setAddress] = useState('');
//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState('');

//   useEffect(() => {
//     getData();
//     getAddresses();
//   }, []);

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     calculateTotalCartPrice();
//   }, [data]);

//   const getData = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Medicines/cartList/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setData(responseData.listCart);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving cart data:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };
 
//   const getAddresses = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Users/cartAddress/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setAddresses(responseData.listAddress);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving addresses:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const generateOrderNumber = () => {
//     // Generate a random number between 100000 and 999999
//     const min = 100000;
//     const max = 999999;
//     const orderNo = Math.floor(Math.random() * (max - min + 1)) + min;
//     return orderNo.toString();
//   };

//   const handlePlaceOrder = (e) => {
//     e.preventDefault();
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const orderNo = generateOrderNumber(); // Generate an order number
//       const orderTotal = totalCartPrice; // Use the total cart price as the order total
//       const orderStatus = 'Pending'; // Set the order status to "Pending"
//       const name="hi";
//       const imageUrl="hhsh";
          
//       const data = {
//         UserID: userId,
//         OrderNo: orderNo,
//         OrderTotal: orderTotal,
//         OrderStatus: orderStatus,
//         Address: selectedAddress, // Include the selected address in the order data
//         Name:name,
//         ImageUrl:imageUrl,
//       };

//       const url = 'https://localhost:7198/api/Medicines/placeOrder';

//       axios
//         .post(url, data)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             // Remove cart data from the database
//             clearCartData(userId);

//             setData([]); // Empty the cart
//             setSelectedAddress(''); // Clear the selected address
//             alert(responseData.statusMessage);
//           }
//         })
//         .catch((error) => {
//           console.error('Error placing order:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const clearCartData = (userId) => {
//     const url = `https://localhost:7198/api/Medicines/clearCartData/${userId}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         console.log('Cart data removed successfully');
//       })
//       .catch((error) => {
//         console.error('Error removing cart data:', error);
//       });
//   };

//   const handleRemoveItem = (id) => {
//     const url = `https://localhost:7198/api/Medicines/removeCartItem/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Item removed successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting item:', error);
//       });
//   };

//   const calculateTotalCartPrice = () => {
//     const totalPriceArray = data.map((item) => item.totalPrice * item.quantity);
//     const total = totalPriceArray.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0
//     );
//     setTotalCartPrice(total);
//   };

//   return (
//     <Fragment>
//       <Header />
//       <br />
//       <br />
//       <div className="form-group col-md-12">
//         <h3>Cart items</h3>
//         {data && data.length > 0 && (
//           <form onSubmit={handlePlaceOrder}>
//            <select
//   value={selectedAddress}
//   onChange={(e) => setSelectedAddress(e.target.value)}
//   required
// >
//   <option value="">Select Address</option>
// {addresses.map((address) => (
//   <option key={address.id} value={JSON.stringify({
//     userId: address.userId,
//     FullName: address.address1,
//     PhoneNo: address.address2,
//     PinCode: address.address3,
//     State: address.address4,
//     City: address.address5,
//     HouseNo: address.address6
//   })}>
//     {`${address.address1}, ${address.address2}, ${address.address3}, ${address.address4}, ${address.address5}, ${address.address6}`}
//   </option>
// ))}


// </select>

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
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => handleRemoveItem(item.id)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No items in the cart. Kindly add items.</p>
//           )}
//         </div>
//       </div>
//       <div>
//         <h1>Total Cart Price: {totalCartPrice}</h1>
//       </div>
//     </Fragment>
//   );
// };

// export default Cart;




// import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Cart = () => {
//   const [data, setData] = useState([]);
//   const [totalCartPrice, setTotalCartPrice] = useState(0);
//   const [address, setAddress] = useState('');
//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState('');

//   useEffect(() => {
//     getData();
//     getAddresses();
//   }, []);

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     calculateTotalCartPrice();
//   }, [data]);

//   const getData = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Medicines/cartList/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setData(responseData.listCart);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving cart data:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };
 
//   const getAddresses = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Users/cartAddress/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setAddresses(responseData.listAddress);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving addresses:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const generateOrderNumber = () => {
//     // Generate a random number between 100000 and 999999
//     const min = 100000;
//     const max = 999999;
//     const orderNo = Math.floor(Math.random() * (max - min + 1)) + min;
//     return orderNo.toString();
//   };




//   const handlePlaceOrder = (item) => {
//     const userId = localStorage.getItem('userId');
  
//     if (userId) {
//       const orderNo = generateOrderNumber(); // Generate an order number
//       const orderTotal = totalCartPrice; // Use the total cart price as the order total
//       const orderStatus = 'Pending'; // Set the order status to "Pending"
//       const data = {
//         UserId: userId,
//         OrderNo: orderNo,
//         OrderTotal: orderTotal,
//         OrderStatus: orderStatus,
//         Address: selectedAddress,
//         UserId: userId,
//         Name:item.name,
//         UnitPrice: item.unitPrice,
//         Discount: item.discount,
//         Quantity: item.quantity, // Use the quantity state value instead
//         //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
//         TotalPrice : item.totalPrice, 
//         MedicineID: item.medicineID,
//         imageUrl:item.imageUrl
//       };
  
//       const url = 'https://localhost:7198/api/Medicines/placeOrder';

//       axios
//         .post(url, data)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             // Remove cart data from the database
//             clearCartData(userId);

//             setData([]); // Empty the cart
//             setSelectedAddress(''); // Clear the selected address
//             alert(responseData.statusMessage);
//           }
//         })
//         .catch((error) => {
//           console.error('Error placing order:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };
  

//   const cartItemStyle = {
//     display: 'inline-block',
//     width: '300px',
//     padding: '10px',
//     margin: '10px',
//     border: '1px solid #ccc',
//   };

//   const imageStyle = {
//     width: '280px',
//     height: '150px',
//     marginBottom: '10px',
//     padding: '5px',
//   };

//   const buttonStyle = {
//     marginTop: '10px',
//   };

//   const clearCartData = (userId) => {
//     const url = `https://localhost:7198/api/Medicines/clearCartData/${userId}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         console.log('Cart data removed successfully');
//       })
//       .catch((error) => {
//         console.error('Error removing cart data:', error);
//       });
//   };

//   const handleRemoveItem = (id) => {
//     const url = `https://localhost:7198/api/Medicines/removeCartItem/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Item removed successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting item:', error);
//       });
//   };

//   const calculateTotalCartPrice = () => {
//     const totalPriceArray = data.map((item) => item.totalPrice * item.quantity);
//     const total = totalPriceArray.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0
//     );
//     setTotalCartPrice(total);
//   };

//   return (

//     <Fragment>
//       <Header/>
//     <br />
//     <h2>Cart items</h2>
//     {data.length > 0 ? (
//       <div>
//         {data.map((item) => (
//           <div key={item.id} style={cartItemStyle}>
//             <img src={item.imageUrl} alt={item.name} style={imageStyle} />
//             <div>
//               <strong>Medicine ID:</strong> {item.medicineID}
//             </div>
//             <div>
//               <strong>Name:</strong> {item.name}
//             </div>
//             <div>
//               <strong>UnitPrice:</strong> { item.unitPrice}
//             </div>
//             <div>
//               <strong>Discount:</strong> {item.discount}%
//             </div>
//             <select
//   value={selectedAddress}
//   onChange={(e) => setSelectedAddress(e.target.value)}
//   required
// >
//   <option value="">Select Address</option>
// {addresses.map((address) => (
//   <option key={address.id} value={JSON.stringify({
//     userId: address.userId,
//     FullName: address.address1,
//     PhoneNo: address.address2,
//     PinCode: address.address3,
//     State: address.address4,
//     City: address.address5,
//     HouseNo: address.address6
//   })}>
//     {`${address.address1}, ${address.address2}, ${address.address3}, ${address.address4}, ${address.address5}, ${address.address6}`}
//   </option>
// ))}


// </select>


//             <div>
//             <button
//                       className="btn btn-primary"
//                       onClick={() => handleRemoveItem(item.id)}
//                     >
//                       Remove
//                     </button>

//               <button
//                 type="button"
//                 className="btn btn-primary"
//                 onClick={() => handlePlaceOrder(item)}
//               >
//                 Place Order
//               </button>
             
//             </div>

          
//           </div>
          
//         ))}
//       </div>
     
//     ) : (
//       <p>No Cart data found.</p>
//     )}
//       <div>
//         <h1>Total Cart Price: {totalCartPrice}</h1>
//       </div>
//   </Fragment>


//   );
// };

// export default Cart;


// import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Cart = () => {
//   const [data, setData] = useState([]);
//   const [totalCartPrice, setTotalCartPrice] = useState(0);
//   const [address, setAddress] = useState('');
//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState('');

//   useEffect(() => {
//     getData();
//     getAddresses();
//   }, []);

//   useEffect(() => {
//     calculateTotalCartPrice();
//   }, [data]);

//   const getData = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Medicines/cartList/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setData(responseData.listCart);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving cart data:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const getAddresses = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Users/cartAddress/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setAddresses(responseData.listAddress);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving addresses:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const generateOrderNumber = () => {
//     // Generate a random number between 100000 and 999999
//     const min = 100000;
//     const max = 999999;
//     const orderNo = Math.floor(Math.random() * (max - min + 1)) + min;
//     return orderNo.toString();
//   };

//   const handlePlaceOrder = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const orderNo = generateOrderNumber(); // Generate an order number
//       const orderTotal = totalCartPrice; // Use the total cart price as the order total
//       const orderStatus = 'Pending'; // Set the order status to "Pending"

//       const orderItems = data.map((item) => ({
//         UserId: userId,
//         OrderNo: orderNo,
//         OrderTotal: orderTotal,
//         OrderStatus: orderStatus,
//         Address: selectedAddress,
//         Name: item.name,
//         UnitPrice: item.unitPrice,
//         Discount: item.discount,
//         Quantity: item.quantity,
//         TotalPrice: item.totalPrice,
//         MedicineID: item.medicineID,
//         imageUrl: item.imageUrl,
//       }));

//       const url = 'https://localhost:7198/api/Medicines/placeOrder';

//       axios
//         .post(url, orderItems)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             clearCartData(userId);
//             setData([]);
//             setSelectedAddress('');
//             alert(responseData.statusMessage);
//           }
//         })
//         .catch((error) => {
//           console.error('Error placing order:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const clearCartData = (userId) => {
//     const url = `https://localhost:7198/api/Medicines/clearCartData/${userId}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         console.log('Cart data removed successfully');
//       })
//       .catch((error) => {
//         console.error('Error removing cart data:', error);
//       });
//   };

//   const handleRemoveItem = (id) => {
//     const url = `https://localhost:7198/api/Medicines/removeCartItem/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Item removed successfully');
//         getData();
//       })
//       .catch((error) => {
//         console.error('Error deleting item:', error);
//       });
//   };

//   const calculateTotalCartPrice = () => {
//     const totalPriceArray = data.map((item) => item.totalPrice * item.quantity);
//     const total = totalPriceArray.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0
//     );
//     setTotalCartPrice(total);
//   };

//   const cartItemStyle = {
//     display: 'inline-block',
//     width: '300px',
//     padding: '10px',
//     margin: '10px',
//     border: '1px solid #ccc',
//   };

//   const imageStyle = {
//     width: '280px',
//     height: '150px',
//     marginBottom: '10px',
//     padding: '5px',
//   };

//   const buttonStyle = {
//     marginTop: '10px',
//   };

//   return (
//     <Fragment>
//       <Header />
//       <br />
//       <h2>Cart items</h2>
//       {data.length > 0 ? (
//         <div>
//           {data.map((item) => (
//             <div key={item.id} style={cartItemStyle}>
//               <img src={item.imageUrl} alt={item.name} style={imageStyle} />
//               <div>
//                 <strong>Medicine ID:</strong> {item.medicineID}
//               </div>
//               <div>
//                 <strong>Name:</strong> {item.name}
//               </div>
//               <div>
//                 <strong>UnitPrice:</strong> {item.unitPrice}
//               </div>
//               <div>
//                 <strong>Discount:</strong> {item.discount}%
//               </div>
//               <div>
//                 <strong>Quantity:</strong> {item.quantity}
//               </div>
//               <div>
//                 <strong>Total Price:</strong> {item.totalPrice}
//               </div>
//               <button
//                 className="btn btn-primary"
//                 onClick={() => handleRemoveItem(item.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div>
//             <select
//               value={selectedAddress}
//               onChange={(e) => setSelectedAddress(e.target.value)}
//               required
//             >
//               <option value="">Select Address</option>
//               {addresses.map((address) => (
//                 <option
//                   key={address.id}
//                   value={JSON.stringify({
//                     userId: address.userId,
//                     FullName: address.address1,
//                     PhoneNo: address.address2,
//                     PinCode: address.address3,
//                     State: address.address4,
//                     City: address.address5,
//                     HouseNo: address.address6,
//                   })}
//                 >
//                   {`${address.address1}, ${address.address2}, ${address.address3}, ${address.address4}, ${address.address5}, ${address.address6}`}
//                 </option>
//               ))}
//             </select>
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={handlePlaceOrder}
//               disabled={!selectedAddress}
//               style={buttonStyle}
//             >
//               Place Order
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div>No items in the cart</div>
//       )}
//     </Fragment>
//   );
// };

// export default Cart;


// import React, { useState, useEffect, Fragment } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Cart = () => {
//   const [data, setData] = useState([]);
//   const [totalCartPrice, setTotalCartPrice] = useState(0);
//   const [address, setAddress] = useState('');
//   const [addresses, setAddresses] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState('');

//   useEffect(() => {
//     getData();
//     getAddresses();
//   }, []);

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     calculateTotalCartPrice();
//   }, [data]);

//   const getData = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Medicines/cartList/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setData(responseData.listCart);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving cart data:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };
 
//   const getAddresses = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Users/cartAddress/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setAddresses(responseData.listAddress);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving addresses:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const generateOrderNumber = () => {
//     // Generate a random number between 100000 and 999999
//     const min = 100000;
//     const max = 999999;
//     const orderNo = Math.floor(Math.random() * (max - min + 1)) + min;
//     return orderNo.toString();
//   };

//   const handlePlaceOrder = (e) => {
//     e.preventDefault();
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const orderNo = generateOrderNumber(); // Generate an order number
//       const orderTotal = totalCartPrice; // Use the total cart price as the order total
//       const orderStatus = 'Pending'; // Set the order status to "Pending"
  
          
//       const data = {
//         UserID: userId,
//         OrderNo: orderNo,
//         OrderTotal: orderTotal,
//         OrderStatus: orderStatus,
//         Address: selectedAddress, // Include the selected address in the order data
      
//       };

//       const url = 'https://localhost:7198/api/Medicines/placeOrder';

//       axios
//         .post(url, data)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             // Remove cart data from the database
//             clearCartData(userId);

//             setData([]); // Empty the cart
//             setSelectedAddress(''); // Clear the selected address
//             alert(responseData.statusMessage);
//           }
//         })
//         .catch((error) => {
//           console.error('Error placing order:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const clearCartData = (userId) => {
//     const url = `https://localhost:7198/api/Medicines/clearCartData/${userId}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         console.log('Cart data removed successfully');
//       })
//       .catch((error) => {
//         console.error('Error removing cart data:', error);
//       });
//   };

//   const handleRemoveItem = (id) => {
//     const url = `https://localhost:7198/api/Medicines/removeCartItem/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Item removed successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting item:', error);
//       });
//   };

//   const calculateTotalCartPrice = () => {
//     const totalPriceArray = data.map((item) => item.totalPrice * item.quantity);
//     const total = totalPriceArray.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0
//     );
//     setTotalCartPrice(total);
//   };

//   return (
//     <Fragment>
//       <Header />
//       <br />
//       <br />
//       <div className="form-group col-md-12">
//         <h3>Cart items</h3>
//         {data && data.length > 0 && (
//           <form onSubmit={handlePlaceOrder}>
//            <select
//   value={selectedAddress}
//   onChange={(e) => setSelectedAddress(e.target.value)}
//   required
// >
//   <option value="">Select Address</option>
// {addresses.map((address) => (
//   <option key={address.id} value={JSON.stringify({
//     userId: address.userId,
//     FullName: address.address1,
//     PhoneNo: address.address2,
//     PinCode: address.address3,
//     State: address.address4,
//     City: address.address5,
//     HouseNo: address.address6
//   })}>
//     {`${address.address1}, ${address.address2}, ${address.address3}, ${address.address4}, ${address.address5}, ${address.address6}`}
//   </option>
// ))}


// </select>

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
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => handleRemoveItem(item.id)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No items in the cart. Kindly add items.</p>
//           )}
//         </div>
//       </div>
//       <div>
//         <h1>Total Cart Price: {totalCartPrice}</h1>
//       </div>
//     </Fragment>
//   );
// };

// export default Cart;

import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';

import { FaUser } from 'react-icons/fa'
import { FaPills } from 'react-icons/fa';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [address, setAddress] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');

  useEffect(() => {
    getData();
    //getAddresses();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    calculateTotalCartPrice();
  }, [data]);

  const getData = () => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      const url = `https://localhost:7198/api/Medicines/cartList/${userId}`;

      axios
        .get(url)
        .then((response) => {
          const responseData = response.data;
          if (responseData.statusCode === 200) {
            setData(responseData.listCart);
          }
        })
        .catch((error) => {
          console.error('Error retrieving cart data:', error);
        });
    } else {
      console.error('User ID is missing or undefined');
    }
  };

  // const getAddresses = () => {
  //   const userId = localStorage.getItem('userId');

  //   if (userId) {
  //     const url = `https://localhost:7198/api/Users/cartAddress/${userId}`;

  //     axios
  //       .get(url)
  //       .then((response) => {
  //         const responseData = response.data;
  //         if (responseData.statusCode === 200) {
  //           setAddresses(responseData.listAddress);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error retrieving addresses:', error);
  //       });
  //   } else {
  //     console.error('User ID is missing or undefined');
  //   }
  // };

  const generateOrderNumber = () => {
    // Generate a random number between 100000 and 999999
    const min = 100000;
    const max = 999999;
    const orderNo = Math.floor(Math.random() * (max - min + 1)) + min;
    return orderNo.toString();
  };

  // const handlePlaceOrder = (e) => {
  //   e.preventDefault();
  //   const userId = localStorage.getItem('userId');
  
  //   if (userId) {
  //     const orderNo = generateOrderNumber(); // Generate an order number
  //     const orderTotal = totalCartPrice; // Use the total cart price as the order total
  //     const orderStatus = 'Pending'; // Set the order status to "Pending"
    
  //     const orderItems = data.map((item) => ({
  //       OrderNo: orderNo,
  //       MedicineID: item.medicineID,
  //       Name: item.name,
  //       UnitPrice: item.unitPrice,
  //       Discount: item.discount,
  //       Quantity: item.quantity,
  //       TotalPrice: item.totalPrice,
  //       ImageUrl: item.imageUrl
  //     }));
  
  //     const orderData = {
  //       UserID: userId,
  //       OrderNo: orderNo,
  //       OrderTotal: orderTotal,
  //       OrderStatus: orderStatus,
  //       Address: selectedAddress, // Include the selected address in the order data
  //       OrderItems: orderItems // Include the order items in the order data
  //     };
  
  //     const url = 'https://localhost:7198/api/Medicines/placeOrder';
  
  //     axios
  //       .post(url, orderData)
  //       .then((response) => {
  //         const responseData = response.data;
  //         if (responseData.statusCode === 200) {
  //           // Remove cart data from the database
  //           clearCartData(userId);
  
  //           setData([]); // Empty the cart
  //           setSelectedAddress(''); // Clear the selected address
  //           alert(responseData.statusMessage);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error placing order:', error);
  //       });
  //   } else {
  //     console.error('User ID is missing or undefined');
  //   }
  // };
  

  const clearCartData = (userId) => {
    const url = `https://localhost:7198/api/Medicines/clearCartData/${userId}`;

    axios
      .delete(url)
      .then((response) => {
        console.log('Cart data removed successfully');
      })
      .catch((error) => {
        console.error('Error removing cart data:', error);
      });
  };

  const handleRemoveItem = (id) => {
    const url = `https://localhost:7198/api/Medicines/removeCartItem/${id}`;

    axios
      .delete(url)
      .then((response) => {
        alert('Item removed successfully');
        getData(); // Refresh the medicine list
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };

  const calculateTotalCartPrice = () => {
    const totalPriceArray = data.map((item) => item.totalPrice * item.quantity);
    const total = totalPriceArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalCartPrice(total);
  };

  const proceesdToBuy=()=>{
    const userId = localStorage.getItem('userId');

    
  
    if (userId) {
        if (data.length === 0) {
            alert('Please add items to the cart before placing the order.');
            return;
          }
          else{
             navigate("/orderplace");
          }
      
        
   
  }}

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">Cart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/medicinedisplay">
                  <FaPills className="nav-icon" /> Medicines
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/orders">Orders</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <br />
      <br />

<h2>Cart items</h2>
<div className="card-deck">
  {data.map((item, index) => (
    <div
      key={index}
      className="col-md-4"
      style={{ marginBottom: '21px' }}
    >
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              className="card-img custom-img-width" // Add custom class for image
              src={item.imageUrl}
              alt="Card image"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
                Quantity: {item.quantity}
              </p>
              <p className="card-text">
                Discount: {item.discount}
              </p>
              <p className="card-text">
                Item Total Price: {item.totalPrice}
              </p>
              <button
                className="btn btn-primary"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

{/* <div className="container">
      <div className="row">
          <div className="col-md-12">
            {data && data.length > 0 && (
              <form onSubmit={handlePlaceOrder}>
                <select
                  value={selectedAddress}
                  onChange={(e) => setSelectedAddress(e.target.value)}
                  required
                >
                  <option value="">Select Address</option>
                  {addresses.map((address) => (
                    <option
                      key={address.id}
                      value={JSON.stringify({
                        userId: address.userId,
                        FullName: address.address1,
                        PhoneNo: address.address2,
                        PinCode: address.address3,
                        State: address.address4,
                        City: address.address5,
                        HouseNo: address.address6,
                      })}
                    >
                      {`userId: ${address.userId}, FullName: ${address.address1}, PhoneNo: ${address.address2}, PinCode: ${address.address3}, State: ${address.address4}, City: ${address.address5}, HouseNo: ${address.address6}`}
                    </option>
                  ))}
                </select>

                <button type="submit" className="btn btn-primary">
                  Place Order
                </button>
              </form>
            )}
          </div>
      </div>
</div> */}


<div className="row">
          <div className="col-md-12">
            <h1>Total Cart Price: {totalCartPrice}</h1>
          </div>
</div>


<div className="container">
      <div className="row">
          <div className="col-md-12">
            

                <button type="submit" className="btn btn-primary" onClick={proceesdToBuy}>
                  Proceed To Buy
                </button>
       
          </div>
      </div>
</div>
    </Fragment>
  );
};

export default Cart;
