// import React from 'react';

// const MedicineDisplay = ({ medicine }) => {
//   return (
//     <div className="medicine-card">
//       <h2>{medicine.name}</h2>
//       <p>Price: ${medicine.price}</p>
//       <p>Description: {medicine.description}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// };

// export default MedicineDisplay;

// import React, { Fragment, useEffect, useState } from "react";

// import axios from 'axios';
//   import Header from "./Header";

//   export default function MedicineDisplay() {

//   const [data, setData] = useState([]);

//   const [ quantity, setOrderQuantity] = useState(1);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData=() => {
//     const data={

//   Email: "Admin",
// };

//   const url = `https://localhost:7198/api/Admin/cartList`;
//   axios.post(url, data)
//   .then((result) => {
//     const data = result.data;

// if (data.statusCode === 200) { setData(data.listCart);

// }
// })
// .catch((error) => {
//   console.error( error);

// });

// };

// const handleAddToCart = (e, id) => { e.preventDefault();

// const data = {

// ID: id,

// Quantity: quantity,

// Email: localStorage.getItem("username"),

// };

// const url = `https://localhost:7198/api/Medicines/addToCart`;

// axios

// .post(url, data)

// .then((result) => {

// const dt = result.data;

// if (dt.statusCode === 200) {

// getData();

// alert(dt.statusMessage);

// }
// })
// .catch((error) => {
//   console.error( error);

// });
// };

// return(
//   <Fragment>
//     <Header/>
//     <br/><br/>
//     <div

// style={{

// backgroundColor: "white", width: "80%", margin: "e auto", borderRadius: "11px", }}>

// <div className="card-deck"> {data && data.length > 0 ? data.map((val, index) =>
// {
// return (
// <div

// key={index} class="col-md-3"
// style={{ marginBottom: "21px"}}>

// <div class="card">

// <img

// class="card-img-top"

// src={`assets/images/${val.imageUrl}`}

// alt="Card image"/>

// <div class="card-body">
// <h4 class="card-title"> {val.medicineName}</h4>

// <h4 class="card-title">

// <select

// id="medicinequantity"

// className="form-control"

// onChange={(e) => setOrderQuantity(e.target.value)}>
// <option value="-1">Select Quantity</option>

// <option value="1">1</option>

// <option value="2">2</option>
//  <option value="3">3</option>
//  <option value="4">4</option>

//  </select>

// </h4>

// <button class="btn btn-primary" onClick={(e) => handleAddToCart (e,val.id)}>Add to cart</button>

// </div>

// </div>

// </div>);

// }) : "Loading products..."}

// </div>

// </div>
// </Fragment>
//  );
// };

// import React, { Fragment, useEffect, useState } from "react";
// import axios from 'axios';
// import Header from "./Header";

// export default function MedicineDisplay() {
//   const [data, setData] = useState([]);
//   const [quantity, setOrderQuantity] = useState(1);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     const data = {
//       Email: "Admin",
//     };

//     const url = `https://localhost:7198/api/Admin/cartList`;
//     axios.post(url, data)
//       .then((result) => {
//         const data = result.data;

//         if (data.statusCode === 200) {
//           setData(data.listCart);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleAddToCart = (e, id) => {
//     e.preventDefault();

//     const data = {
//       ID: id,
//       Quantity: quantity,
//       Email: localStorage.getItem("username"),
//     };

//     const url = `https://localhost:7198/api/Medicines/addToCart`;

//     axios.post(url, data)
//       .then((result) => {
//         const dt = result.data;

//         if (dt.statusCode === 200) {
//           getData();
//           alert(dt.statusMessage);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <Fragment>
//       <Header />
//       <br /><br />
//       <div
//         style={{
//           backgroundColor: "white",
//           width: "80%",
//           margin: "e auto",
//           borderRadius: "11px",
//         }}
//       >
//         <div className="card-deck">
//           {data && data.length > 0 ? data.map((val, index) => {
//             return (
//               <div
//                 key={index}
//                 className="col-md-3"
//                 style={{ marginBottom: "21px" }}
//               >
//                 <div className="card">
//                   <img
//                     className="card-img-top"
//                     src={`assets/images/${val.imageUrl}`}
//                     alt="Card image"
//                   />
//                   <div className="card-body">
//                     <h4 className="card-title">{val.medicineName}</h4>
//                     <h4 className="card-title">
//                       <select
//                         id="medicinequantity"
//                         className="form-control"
//                         onChange={(e) => setOrderQuantity(e.target.value)}
//                       >
//                         <option value="-1">Select Quantity</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                       </select>
//                     </h4>
//                     <button
//                       className="btn btn-primary"
//                       onClick={(e) => handleAddToCart(e, val.id)}
//                     >
//                       Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           }) : "Loading products..."}
//         </div>
//       </div>
//     </Fragment>
//   );
// }

// import React, { Fragment, useEffect, useState } from "react";
// import axios from 'axios';
// import Header from "./Header";

// export default function MedicineDisplay() {
//   const [data, setData] = useState([]);
//   const [quantity, setOrderQuantity] = useState(1);
//     const [userId, setUserId] = useState('');
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');

//   const [expDate, setExpDate] = useState('');

//   useEffect(() => {
//     getData();
//     setUserId(localStorage.getItem("userId"));
//   }, []);

//   const handleAddToCart = (medicine) => {
//     const userId = localStorage.getItem('userId');
//     //e.preventDefault();

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: medicine.quantity,
//         TotalPrice: medicine.unitPrice,
//         MedicineID: medicine.id,
//       };

//     const url = `https://localhost:7198/api/Medicines/addToCart`;

//     axios
//     .post(url, cartItem)
//     .then((response) => {
//       const responseData = response.data;
//       if (responseData.statusCode === 100) {
//         alert('Item added to cart successfully');
//       } else {
//         alert('Failed to add item to cart');
//       }
//     })
//     .catch((error) => {
//       console.error('Error adding item to cart:', error);
//     });
// } else {
//   console.error('User ID is missing or undefined');
// }
// };
// const getData = () => {
//   const url = 'https://localhost:7198/api/Admin/medicines';

//   axios
//     .get(url)
//     .then((response) => {
//       const responseData = response.data;
//       if (responseData.statusCode === 200) {
//         setData(responseData.listMedicines);
//       }
//     })
//     .catch((error) => {
//       console.log('Error retrieving medicine list:', error);
//     });
// };

//   return (
//     <Fragment>
//       <Header />
//       <br /><br />
//       <div
//         style={{
//           backgroundColor: "white",
//           width: "80%",
//           margin: "e auto",
//           borderRadius: "11px",
//         }}
//       >
//         <div className="card-deck">
//           {data && data.length > 0 ? data.map((medicine) => {
//             return (
//               <div
//                 key={medicine.id}
//                 className="col-md-3"
//                 style={{ marginBottom: "21px" }}
//               >
//                 <div className="card">
//                   <img
//                     className="card-img-top"
//                     src={medicine.imageUrl}
//                     alt="Card image"
//                   />
//                   <div className="card-body">
//                     <h4 className="card-title">{medicine.name}</h4>
//                     <h4 className="card-title">
//                       <select
//                         id="medicinequantity"
//                         className="form-control"
//                         onChange={(e) => setOrderQuantity(e.target.value)}
//                       >
//                         <option value="-1">Select Quantity</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                       </select>
//                     </h4>
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => handleAddToCart(medicine)}
//                     >
//                       Add to cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           }) : "Loading products..."}
//         </div>
//       </div>
//     </Fragment>
//   );
// }

//full working code
// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';

// const MedicineDisplay = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [userId, setUserId] = useState('');
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   //const [quantity, setQuantity] = useState('');
//   const [expDate, setExpDate] = useState('');
//      const [quantity, setOrderQuantity] = useState('');

//   useEffect(() => {
//     getData();
//     setUserId(localStorage.getItem("userId"));
//   }, []);

//   const addToCart = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name:medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity, // Use the quantity state value instead
//         //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
//         TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100),
//         MedicineID: medicine.id,
//         imageUrl:medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const buyNow = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name:medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity, // Use the quantity state value instead
//         //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
//         TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100),
//         MedicineID: medicine.id,
//         imageUrl:medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//             navigate("/cart");
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
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

//   const getData = () => {
//     const url = 'https://localhost:7198/api/Admin/medicines';

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine list:', error);
//       });
//   };

//   return (
//     <div>
//       <Header />
//       <>
//         <Fragment>
//           <br />
//           <h2>Medicine List</h2>
//           {data.length > 0 ? (
//             <div>
//               {data.map((medicine) => (
//                 <div key={medicine.id} style={cartItemStyle}>
//                   <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
//                   <div>
//                     <strong>Medicine ID:</strong> {medicine.id}
//                   </div>
//                   <div>
//                     <strong>Name:</strong> {medicine.name}
//                   </div>
//                   <div>
//                     <strong>Manufacturer:</strong> {medicine.manufacturer}
//                   </div>
//                   <div>
//                     <strong>ExpDate:</strong> {medicine.expDate}
//                   </div>
//                   <div>
//                     <strong>UnitPrice:</strong> { medicine.unitPrice}
//                   </div>
//                   <div>
//                     <strong>Discount:</strong> {medicine.discount}%
//                   </div>
// <h4 className="card-title">
// <select
//   id="medicinequantity"
//   className="form-control"
//   onChange={(e) => setOrderQuantity(e.target.value)}
// >
//   <option value="-1">Select Quantity</option>
//   <option value="1">1</option>
//   <option value="2">2</option>
//   <option value="3">3</option>
//   <option value="4">4</option>
// </select>
// </h4>

//                   <div>
//                     <button
//                       type="button"
//                       className="btn btn-primary"
//                       onClick={() => addToCart(medicine)}
//                     >
//                       Add to Cart
//                     </button>
//                     <span>  <button
//                       type="button"
//                       className="btn btn-success"
//                       onClick={() => buyNow(medicine)}
//                     >
//                       Buy Now
//                     </button></span>

//                   </div>

//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No medicines found.</p>
//           )}
//         </Fragment>
//       </>
//     </div>
//   );
// };

// export default MedicineDisplay;

// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';
// import MedicineDetails from './MedicineDetails';

// const MedicineDisplay = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [userId, setUserId] = useState('');
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   //const [quantity, setQuantity] = useState('');
//   const [expDate, setExpDate] = useState('');
//      const [quantity, setOrderQuantity] = useState('');
//      const [selectedMedicine, setSelectedMedicine] = useState(null); // State to hold the selected medicine
//      const [selectedMedicineId, setSelectedMedicineId] = useState(null); // State to hold the selected medicine ID

//   useEffect(() => {
//     getData();
//     setUserId(localStorage.getItem("userId"));
//   }, []);

//   const addToCart = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name:medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity, // Use the quantity state value instead
//         //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
//         TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100),
//         MedicineID: medicine.id,
//         imageUrl:medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const buyNow = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name:medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity, // Use the quantity state value instead
//         //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
//         TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100),
//         MedicineID: medicine.id,
//         imageUrl:medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//             navigate("/cart");
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
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

//   const getData = () => {
//     const url = 'https://localhost:7198/api/Admin/medicines';

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine list:', error);
//       });
//   };

//   const handleClick = (medicineId) => {
//     setSelectedMedicineId(medicineId);
//   };

//   return (
//     <div>
//       <Header />
//       <Fragment>
//         <br />
//         <h2>Medicine List</h2>
//         {data.length > 0 ? (
//           <div>
//             {data.map((medicine) => (
//               <div key={medicine.id} style={cartItemStyle}>
//                 <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
//                 <div>
//                   <strong>Medicine ID:</strong>{" "}
//                   <span onClick={() => handleClick(medicine.id)} style={{ cursor: 'pointer' }}>
//                     {medicine.id}
//                   </span>
//                 </div>
//                 <div>
//                   <strong>Name:</strong> {medicine.name}
//                 </div>
//                 <div>
//                   <strong>Manufacturer:</strong> {medicine.manufacturer}
//                 </div>
//                 <div>
//                   <strong>ExpDate:</strong> {medicine.expDate}
//                 </div>
//                 <div>
//                   <strong>UnitPrice:</strong> {medicine.unitPrice}
//                 </div>
//                 <div>
//                   <strong>Discount:</strong> {medicine.discount}%
//                 </div>
//                 {/* Add your quantity and button elements */}
//                 <div>
//                   <button
//                     type="button"
//                     className="btn btn-primary"
//                     onClick={() => addToCart(medicine)}
//                   >
//                     Add to Cart
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-success"
//                     onClick={() => buyNow(medicine)}
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No medicines found.</p>
//         )}
//       </Fragment>
//       {selectedMedicineId && (
//         <MedicineDetails medicineId={selectedMedicineId} /> // Pass the selected medicine ID to the MedicineDetails component

//       )}
//     </div>
//   );
// };

// export default MedicineDisplay;

// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import MedicineDetails from './MedicineDetails';

// const MedicineDisplay = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [userId, setUserId] = useState('');
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   //const [quantity, setQuantity] = useState('');
//   const [expDate, setExpDate] = useState('');
//      const [quantity, setOrderQuantity] = useState('');
//      const [selectedMedicine, setSelectedMedicine] = useState(null); // State to hold the selected medicine
//      const [selectedMedicineId, setSelectedMedicineId] = useState(null); // State to hold the selected medicine ID

//   useEffect(() => {
//     getData();
//     setUserId(localStorage.getItem("userId"));
//   }, []);

//   const addToCart = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name:medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity, // Use the quantity state value instead
//         //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
//         TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100),
//         MedicineID: medicine.id,
//         imageUrl:medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };
//   const selectMedicine = (medicine) => {
//     setSelectedMedicine(medicine);
//     setSelectedMedicineId(medicine.id);
//   };

//   const buyNow = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name:medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity, // Use the quantity state value instead
//         //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
//         TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100),
//         MedicineID: medicine.id,
//         imageUrl:medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//             navigate("/cart");
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
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

//   const getData = () => {
//     const url = 'https://localhost:7198/api/Admin/medicines';

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine list:', error);
//       });
//   };

//   return (
//     <div>
//       <Header />
//       <Fragment>
//         <br />
//         <h2>Medicine List</h2>
//         {data.length > 0 ? (
//           <div>
//            {data.map((medicine) => (
//   <div key={medicine.id} style={cartItemStyle} onClick={() => selectMedicine(medicine)}>
//                 <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
//                 <div>
//               <strong>Medicine ID:</strong>
//               <Link to={`/medicine/${medicine.id}`}>{medicine.id}</Link>

//             </div>
//                 <div>
//                   <strong>Name:</strong> {medicine.name}
//                 </div>
//                 <div>
//                   <strong>Manufacturer:</strong> {medicine.manufacturer}
//                 </div>
//                 <div>
//                   <strong>ExpDate:</strong> {medicine.expDate}
//                 </div>
//                 <div>
//                   <strong>UnitPrice:</strong> {medicine.unitPrice}
//                 </div>
//                 <div>
//                   <strong>Discount:</strong> {medicine.discount}%
//                 </div>
//                 {/* Rest of the code remains the same */}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No medicines found.</p>
//         )}
//       </Fragment>
//       {selectedMedicineId && (
//         <MedicineDetails medicineId={medicine.medicineId} />
//         // Pass the selectedMedicineId prop to MedicineDetails component
//       )}
//     </div>

//   );
// };

// export default MedicineDisplay;

// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';
// import { Modal } from "react-bootstrap";

// const MedicineDisplay = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [userId, setUserId] = useState('');
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   //const [quantity, setQuantity] = useState('');
//   const [expDate, setExpDate] = useState('');
//      const [quantity, setOrderQuantity] = useState('');
//      const [medicine, setMedicine] = useState(null);
//      const [show, setShow] = useState(false);
//      const [itemData, setItemData] = useState([]);
//      const [medicineData, setMedicineData] = useState([]);

//   const handleClose = () => setShow(false);

//   useEffect(() => {
//     getData();
//     setUserId(localStorage.getItem("userId"));
//   }, []);

//   const addToCart = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name:medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity, // Use the quantity state value instead
//         //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
//         TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100),
//         MedicineID: medicine.id,
//         imageUrl:medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const buyNow = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name:medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity, // Use the quantity state value instead
//         //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
//         TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100),
//         MedicineID: medicine.id,
//         imageUrl:medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//             navigate("/cart");
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
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
//   const modalStyle = {
//     maxWidth: "800px", // Adjust the width as needed
//   };

//   const getData = () => {
//     const url = 'https://localhost:7198/api/Admin/medicines';

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine list:', error);
//       });
//   };

//   const getMedicineData = (id) => {
//     const url = `https://localhost:7198/api/Admin/medicines/${id}`;

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setMedicineData(responseData.medicine);
//           setShow(true);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine details:', error);
//       });
//   };

//   return (
//     <div>
//       <Header />
//       <>
//         <Fragment>
//           <br />
//           <h2>Medicine List</h2>
//           {data.length > 0 ? (
//             <div>
//               {data.map((medicine) => (
//                 <div key={medicine.id} style={cartItemStyle}>
//                   <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
//                   <div>
//                     <strong onClick={() => getMedicineData(medicine.id)}>Medicine ID:</strong> {medicine.id}
//                   </div>
//                   <div>
//                     <strong>Name:</strong> {medicine.name}
//                   </div>
//                   <div>
//                     <strong>Manufacturer:</strong> {medicine.manufacturer}
//                   </div>
//                   <div>
//                     <strong>ExpDate:</strong> {medicine.expDate}
//                   </div>
//                   <div>
//                     <strong>UnitPrice:</strong> { medicine.unitPrice}
//                   </div>
//                   <div>
//                     <strong>Discount:</strong> {medicine.discount}%
//                   </div>
//                     <h4 className="card-title">
//                     <select
//                       id="medicinequantity"
//                       className="form-control"
//                       onChange={(e) => setOrderQuantity(e.target.value)}
//                     >
//                       <option value="-1">Select Quantity</option>
//                       <option value="1">1</option>
//                       <option value="2">2</option>
//                       <option value="3">3</option>
//                       <option value="4">4</option>
//                     </select>
//                     </h4>

//                   <div>
//                     <button
//                       type="button"
//                       className="btn btn-primary"
//                       onClick={() => addToCart(medicine)}
//                     >
//                       Add to Cart
//                     </button>
//                     <span>  <button
//                       type="button"
//                       className="btn btn-success"
//                       onClick={() => buyNow(medicine)}
//                     >
//                       Buy Now
//                     </button></span>

//                   </div>

//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No medicines found.</p>
//           )}
//           <div style={{ width: "100%" }}>
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header>
//             <Modal.Title>Medidnes Details for: {medicineData && medicineData.length > 0 ? medicineData[0].name : ""}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             {medicineData && medicineData.length > 0 ? (
//               <table className="table table-striped table-hover mt-6" style={modalStyle}>
//                 <thead className="thead-dark">
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">ID</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Manufacturer</th>

//                     <th scope="col">Unit Price</th>
//                     <th scope="col">Discount</th>
//                     <th scope="col">Quantity</th>
//                     <th scope="col">Exp data</th>
//                     <th scope="col">ImageUrl</th>
//                     <th scope="col">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {medicineData.map((medicine, index) => (
//                     <tr key={medicine.id}>
//                       <th scope="row">{index + 1}</th>
//                       <td>{medicine.id}</td>
//                       <td>{medicine.name}</td>
//                       <td>{medicine.manufacturer}</td>

//                       <td>{medicine.unitPrice}</td>
//                       <td>{medicine.discount}</td>
//                       <td>{medicine.quantity}</td>
//                       <td>{medicine.expDate}</td>
//                       <td>{medicine.imageUrl}</td>
//                       <td>{medicine.status}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <div>No medicine items found</div>
//             )}
//           </Modal.Body>
//         </Modal>
//       </div>
//         </Fragment>
//       </>
//     </div>
//   );
// };

// export default MedicineDisplay;

// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';
// import MedicineDetails from './MedicineDetails';

// const MedicineDisplay = (props) => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [userId, setUserId] = useState('');
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   //const [quantity, setQuantity] = useState('');
//   const [expDate, setExpDate] = useState('');
//      const [quantity, setOrderQuantity] = useState('');

//   useEffect(() => {
//     getData();
//     setUserId(localStorage.getItem("userId"));
//   }, []);

//   const addToCart = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name:medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity, // Use the quantity state value instead
//         //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
//         TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100),
//         MedicineID: medicine.id,
//         imageUrl:medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const buyNow = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name:medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity, // Use the quantity state value instead
//         //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
//         TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100),
//         MedicineID: medicine.id,
//         imageUrl:medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//             navigate("/cart");
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
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

//   const getData = () => {
//     const url = 'https://localhost:7198/api/Admin/medicines';

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine list:', error);
//       });
//   };

//   return (
//     <div>
//       <Header />
//       <>
//         <Fragment>

//           <br />
//           <h2>Medicine List</h2>
//           {data.length > 0 ? (
//             <div>
//               {data.map((medicine) => (
//                 <div key={medicine.id} style={cartItemStyle}>
//                   <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
//                   <div>
//                     <strong>Medicine ID:</strong> {medicine.id}
//                   </div>
//                   <div>
//                     <strong>Name:</strong> {medicine.name}
//                   </div>
//                   <div>
//                     <strong>Manufacturer:</strong> {medicine.manufacturer}
//                   </div>
//                   <div>
//                     <strong>ExpDate:</strong> {medicine.expDate}
//                   </div>
//                   <div>
//                     <strong>UnitPrice:</strong> { medicine.unitPrice}
//                   </div>
//                   <div>
//                     <strong>Discount:</strong> {medicine.discount}%
//                   </div>
// <h4 className="card-title">
// <select
//   id="medicinequantity"
//   className="form-control"
//   onChange={(e) => setOrderQuantity(e.target.value)}
// >
//   <option value="-1">Select Quantity</option>
//   <option value="1">1</option>
//   <option value="2">2</option>
//   <option value="3">3</option>
//   <option value="4">4</option>
// </select>
// </h4>

//                   <div>
//                     <button
//                       type="button"
//                       className="btn btn-primary"
//                       onClick={() => addToCart(medicine)}
//                     >
//                       Add to Cart
//                     </button>
//                     <span>  <button
//                       type="button"
//                       className="btn btn-success"
//                       onClick={() => buyNow(medicine)}
//                     >
//                       Buy Now
//                     </button></span>

//                   </div>

//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No medicines found.</p>
//           )}
//         </Fragment>
//       </>
//     </div>
//   );
// };

// export default MedicineDisplay;

// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';

// const MedicineDisplay = (props) => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [quantity, setQuantity] = useState('');

//   useEffect(() => {
//     getData();
//   }, []);

//   const addToCart = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name: medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity,
//         TotalPrice: (medicine.unitPrice - medicine.unitPrice * medicine.discount / 100) * quantity,
//         MedicineID: medicine.id,
//         imageUrl: medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const buyNow = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name: medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity,
//         TotalPrice: (medicine.unitPrice - medicine.unitPrice * medicine.discount / 100) * quantity,
//         MedicineID: medicine.id,
//         imageUrl: medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//             navigate("/cart");
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
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

//   const getData = () => {
//     const url = 'https://localhost:7198/api/Admin/medicines';

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine list:', error);
//       });
//   };

//   return (
//     <div>
//       <Header />
//       <>
//         <Fragment>
//           <br />
//           <h2>Medicine List</h2>
//           {data.length > 0 ? (
//             <div>
//               {data.map((medicine) => (
//                 <div key={medicine.id} style={cartItemStyle}>
//                   <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
//                   <div>
//                     <strong>Medicine ID:</strong> {medicine.id}
//                   </div>
//                   <div>
//                     <strong>Name:</strong> {medicine.name}
//                   </div>
//                   <div>
//                     <strong>Manufacturer:</strong> {medicine.manufacturer}
//                   </div>
//                   <div>
//                     <strong>ExpDate:</strong> {medicine.expDate}
//                   </div>
//                   <div>
//                     <strong>UnitPrice:</strong> {medicine.unitPrice}
//                   </div>
//                   <div>
//                     <strong>Discount:</strong> {medicine.discount}%
//                   </div>
//                   <div>
//                     <h4 className="card-title">
//                       <select
//                         id="medicinequantity"
//                         className="form-control"
//                         value={quantity}
//                         onChange={(e) => setQuantity(e.target.value)}
//                       >
//                         <option value="-1">Select Quantity</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                       </select>
//                     </h4>
//                   </div>
//                   <div>
//                     <button
//                       type="button"
//                       className="btn btn-primary"
//                       onClick={() => addToCart(medicine)}
//                     >
//                       Add to Cart
//                     </button>
//                     <button
//                       type="button"
//                       className="btn btn-success"
//                       onClick={() => buyNow(medicine)}
//                     >
//                       Buy Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No medicines found.</p>
//           )}
//         </Fragment>
//       </>
//     </div>
//   );
// };

// export default MedicineDisplay;

// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';
// import MedicineDetails from './MedicineDetails';

// const MedicineDisplay = ({ medicineId }) => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [selectedMedicineId, setSelectedMedicineId] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);
//   const [medicineDetails, setMedicineDetails] = useState(null);

//   useEffect(() => {
//     getData();
//   }, []);
//   useEffect(() => {
//     if (medicineId) {
//       getMedicineDetails();
//     }
//   }, [medicineId]);

//   const handleViewDetails = (medicineId) => {
//     setSelectedMedicineId(medicineId);
//     setShowDetails(true);
//   };
//   const getMedicineDetails = () => {
//     const url = `https://localhost:7198/api/Admin/medicines/${medicineId}`;

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setMedicineDetails(responseData.medicineDetails);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine details:', error);
//       });
//   };

//   const getData = () => {
//     const url = 'https://localhost:7198/api/Admin/medicines';

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine list:', error);
//       });
//   };

//   return (
//     <div>
//       <Header />
//       <>
//         <Fragment>
//           <br />
//           <h2>Medicine List</h2>
//           {data.length > 0 ? (
//             <div>
//               {data.map((medicine) => (
//                 <div key={medicine.id}>
//                   <div>
//                     <strong>Medicine ID:</strong> {medicine.id}
//                   </div>
//                   <div>
//                     <strong>Name:</strong> {medicine.name}
//                   </div>
//                   <div>
//                     <strong>Manufacturer:</strong> {medicine.manufacturer}
//                   </div>
//                   <button type="button" onClick={() => handleViewDetails(medicine.id)}>
//                     View Details
//                   </button>
//                   <hr />
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No medicines found.</p>
//           )} <div>
//           <h2>Medicine Details</h2>
//           {medicineDetails ? (
//             <div>
//               <div>
//                 <strong>Medicine ID:</strong> {medicineDetails.id}
//               </div>
//               <div>
//                 <strong>Name:</strong> {medicineDetails.name}
//               </div>
//               <div>
//                 <strong>Manufacturer:</strong> {medicineDetails.manufacturer}
//               </div>
//               <div>
//                 <strong>Description:</strong> {medicineDetails.description}
//               </div>
//               <div>
//                 <strong>Price:</strong> {medicineDetails.price}
//               </div>
//             </div>
//           ) : (
//             <p>Loading medicine details...</p>
//           )}
//           <button type="button" onClick={() => setShowDetails(false)}>
//             Close
//           </button>
//         </div>

//         </Fragment>
//       </>
//       {showDetails && (
//         <MedicineDetails
//           medicineId={selectedMedicineId}
//           setShowDetails={setShowDetails}
//         />
//       )}
//     </div>
//   );
// };

// export default MedicineDisplay;

// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import MedicineDetails from './MedicineDetails';

// const MedicineDisplay = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [medicine, setMedicine] = useState(null);
//   const [selectedMedicine, setSelectedMedicine] = useState(null); // State to hold the selected medicine

//   useEffect(() => {
//     getData();
//   }, []);

//   const addToCart = (medicine) => {
//     // Add to cart logic
//   };

//   const selectMedicine = (medicine) => {
//     setSelectedMedicine(medicine);
//     //navigate(`/medicine/${medicine.id}`);
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

//   const getData = () => {
//     const url = 'https://localhost:7198/api/Admin/medicines';

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine list:', error);
//       });
//   };

//   return (
//     <div>
//       <Header />
//       <Fragment>
//         <br />
//         <h2>Medicine List</h2>
//         {data.length > 0 ? (
//           <div>
//             {data.map((medicine) => (
//               <div key={medicine.id} style={cartItemStyle}  onClick={() => selectMedicine(medicine)}>
//                 <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
//                 <div>
//                   <strong>Medicine ID: </strong> {medicine.id} <MedicineDetails id={medicine.id} />
//                 </div>
//                 <div>
//                   <strong>Name:</strong> {medicine.name}
//                 </div>
//                 <p>Manufacturer: {data.manufacturer}</p>
//                 <div>
//                   <strong>Manufacturer:</strong> {medicine.manufacturer}
//                 </div>
//                 <div>
//                   <strong>ExpDate:</strong> {medicine.expDate}
//                 </div>
//                 <div>
//                   <strong>UnitPrice:</strong> {medicine.unitPrice}
//                 </div>
//                 <div>
//                   <strong>Discount:</strong> {medicine.discount}%
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No medicines found.</p>
//         )}
//       </Fragment>
//       {selectedMedicine && (
//         <MedicineDetails id={selectedMedicine.id} />
//          //<MedicineDetails id={medicine.id} />
//       )}
//     </div>
//   );
// };

//  export default MedicineDisplay;

// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';

// const MedicineDisplay = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [userId, setUserId] = useState('');

//   useEffect(() => {
//     getData();
//     setUserId(localStorage.getItem('userId'));
//   }, []);

//   const addToCart = (medicine) => {
//     // Implementation for adding medicine to cart
//     // ...
//   };

//   const buyNow = (medicine) => {
//     // Implementation for buying medicine
//     // ...
//   };

//   const navigateToDetails = (medicine) => {
//     navigate(`/medicine/${medicine.id}`);
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

//   const getData = () => {
//     const url = 'https://localhost:7198/api/Admin/medicines';

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine list:', error);
//       });
//   };

//   return (
//     <div>
//       <Header />
//       <>
//         <Fragment>
//           <br />
//           <h2>Medicine List</h2>
//           {data.length > 0 ? (
//             <div>
//               {data.map((medicine) => (
//                 <div key={medicine.id} style={cartItemStyle}   onClick={() => navigateToDetails(medicine)}>
//                   <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
//                   <div>
//                     <strong>Medicine ID:</strong> {medicine.id}
//                   </div>
//                   <div>
//                     <strong>Name:</strong> {medicine.name}
//                   </div>
//                   <div>
//                     <strong>Unit Price:</strong> {medicine.unitPrice}
//                   </div>
//                   <div>
//                     <button
//                       type="button"
//                       className="btn btn-primary"
//                       onClick={() => navigateToDetails(medicine)}
//                     >
//                       Show Details
//                     </button>
//                   </div>
//                   <div>
//                     <button
//                       type="button"
//                       className="btn btn-primary"
//                       onClick={() => addToCart(medicine)}
//                     >
//                       Add to Cart
//                     </button>
//                     <button
//                       type="button"
//                       className="btn btn-success"
//                       onClick={() => buyNow(medicine)}
//                     >
//                       Buy Now
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No medicines found.</p>
//           )}
//         </Fragment>
//       </>
//     </div>
//   );
// };

// export default MedicineDisplay;

//full working code with search and sort
// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';

// const MedicineDisplay = () => {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   const [userId, setUserId] = useState('');
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   //const [quantity, setQuantity] = useState('');
//   const [expDate, setExpDate] = useState('');
//      const [quantity, setOrderQuantity] = useState('');
//      const [searchTerm, setSearchTerm] = useState('');
//      const [sortOption, setSortOption] = useState(''); // State variable to track the sorting option

//   useEffect(() => {
//     getData();
//     setUserId(localStorage.getItem("userId"));
//   }, []);

//   const addToCart = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name:medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity, // Use the quantity state value instead
//         //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
//         TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100),
//         MedicineID: medicine.id,
//         imageUrl:medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };

//   const buyNow = (medicine) => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const cartItem = {
//         UserId: userId,
//         Name:medicine.name,
//         UnitPrice: medicine.unitPrice,
//         Discount: medicine.discount,
//         Quantity: quantity, // Use the quantity state value instead
//         //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
//         TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100),
//         MedicineID: medicine.id,
//         imageUrl:medicine.imageUrl
//       };

//       const url = 'https://localhost:7198/api/Medicines/addToCart';

//       axios
//         .post(url, cartItem)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 100) {
//             alert('Item added to cart successfully');
//             navigate("/cart");
//           } else {
//             alert('Failed to add item to cart');
//           }
//         })
//         .catch((error) => {
//           console.error('Error adding item to cart:', error);
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

//   const getData = () => {
//     const url = 'https://localhost:7198/api/Admin/medicines';

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine list:', error);
//       });
//   };
//   const navigateToDetails = (medicine) => {
//     navigate(`/medicine/${medicine.id}`);
//   };

//   //for serch operation

//   const handleSearchMethod = () => {
//     const url = `https://localhost:7198/api/Admin/medicines/search?name=${searchTerm}`;

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine list:', error);
//       });
//   };

//   const handleSearch = () => {
//     handleSearchMethod();
//   };

//   //for sort operation
//   const sortMedicines = (medicines) => {
//     switch (sortOption) {
//       case 'name':
//         return [...medicines].sort((a, b) => a.name.localeCompare(b.name));
//       // case 'manufacturer':
//       //   return [...medicines].sort((a, b) => a.manufacturer.localeCompare(b.manufacturer));
//       // case 'expDate':
//       //   return [...medicines].sort((a, b) => a.expDate.localeCompare(b.expDate));
//       case 'price':
//       return [...medicines].sort((a, b) => a.unitPrice - b.unitPrice);
//       default:
//         return medicines;
//     }
//   };

//   const sortedData = sortMedicines(data);

//   return (
//     <div>
//       <Header />
//       <>
//         <Fragment>
//           <br />
//           <h2>Medicine List</h2>
//           <div>
//       <input
//         type="text"
//         placeholder="Search by name"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <button onClick={handleSearch}>Search</button>
//     </div>

//     <div>
//         <label>Sort by:</label>
//         <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
//           <option value="">None</option>
//           <option value="name">Name</option>
//           <option value="price">Price</option>
//           {/* <option value="expDate">Expiration Date</option> */}
//         </select>
//       </div>

//           {sortedData.length > 0 ? (
//             <div>
//               {sortedData.map((medicine) => (
//                 <div key={medicine.id} style={cartItemStyle}>
//                   <img src={medicine.imageUrl}  alt={medicine.name} style={imageStyle} onClick={() => navigateToDetails(medicine)}/>
//                   <div>
//                     <strong>Name:</strong> {medicine.name}
//                   </div>
//                   <div>
//                     <strong>UnitPrice:</strong> { medicine.unitPrice}
//                   </div>

// <h4 className="card-title">
// <select
//   id="medicinequantity"
//   className="form-control"
//   onChange={(e) => setOrderQuantity(e.target.value)}
// >
//   <option value="-1">Select Quantity</option>
//   <option value="1">1</option>
//   <option value="2">2</option>
//   <option value="3">3</option>
//   <option value="4">4</option>
// </select>
// </h4>

//                   <div>
//                     <button
//                       type="button"
//                       className="btn btn-primary"
//                       onClick={() => addToCart(medicine)}
//                     >
//                       Add to Cart
//                     </button>
//                     <span>  <button
//                       type="button"
//                       className="btn btn-success"
//                       onClick={() => buyNow(medicine)}
//                     >
//                       Buy Now
//                     </button></span>

//                   </div>

//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No medicines found.</p>
//           )}
//         </Fragment>
//       </>
//     </div>
//   );
// };

// export default MedicineDisplay;

import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const MedicineDisplay = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");
  const [medicineId, setMedicineId] = useState("");
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [discount, setDiscount] = useState("");
  //const [quantity, setQuantity] = useState('');
  const [expDate, setExpDate] = useState("");
  const [quantity, setOrderQuantity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState(""); // State variable to track the sorting option

  useEffect(() => {
    getData();
    setUserId(localStorage.getItem("userId"));
  }, []);

  const addToCart = (medicine) => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      const cartItem = {
        UserId: userId,
        Name: medicine.name,
        UnitPrice: medicine.unitPrice,
        Discount: medicine.discount,
        Quantity: quantity, // Use the quantity state value instead
        //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
        TotalPrice:
          medicine.unitPrice - (medicine.unitPrice * medicine.discount) / 100,
        MedicineID: medicine.id,
        imageUrl: medicine.imageUrl,
      };

      const url = "https://localhost:7198/api/Medicines/addToCart";

      axios
        .post(url, cartItem)
        .then((response) => {
          const responseData = response.data;
          if (responseData.statusCode === 100) {
            alert("Item added to cart successfully");
          } else {
            alert("Failed to add item to cart");
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
        });
    } else {
      console.error("User ID is missing or undefined");
    }
  };

  const buyNow = (medicine) => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      const cartItem = {
        UserId: userId,
        Name: medicine.name,
        UnitPrice: medicine.unitPrice,
        Discount: medicine.discount,
        Quantity: quantity, // Use the quantity state value instead
        //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
        TotalPrice:
          medicine.unitPrice - (medicine.unitPrice * medicine.discount) / 100,
        MedicineID: medicine.id,
        imageUrl: medicine.imageUrl,
      };

      const url = "https://localhost:7198/api/Medicines/addToCart";

      axios
        .post(url, cartItem)
        .then((response) => {
          const responseData = response.data;
          if (responseData.statusCode === 100) {
            alert("Item added to cart successfully");
            navigate("/orderplace");
          } else {
            alert("Failed to add item to cart");
          }
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
        });
    } else {
      console.error("User ID is missing or undefined");
    }
  };

  const cartItemStyle = {
    display: "inline-block",
    width: "380px",
    padding: "10px",
    margin: "10px",
    border: "1px solid #ccc",
  };

  const imageStyle = {
    width: "280px",
    height: "150px",
    marginBottom: "10px",
    padding: "5px",
  };

  const buttonStyle = {
    marginTop: "10px",
  };

  const getData = () => {
    const url = "https://localhost:7198/api/Admin/medicines";

    axios
      .get(url)
      .then((response) => {
        const responseData = response.data;
        if (responseData.statusCode === 200) {
          setData(responseData.listMedicines);
        }
      })
      .catch((error) => {
        console.log("Error retrieving medicine list:", error);
      });
  };
  const navigateToDetails = (medicine) => {
    navigate(`/medicine/${medicine.id}`);
  };

  //for serch operation

  const handleSearchMethod = () => {
    const url = `https://localhost:7198/api/Admin/medicines/search?name=${searchTerm}`;

    axios
      .get(url)
      .then((response) => {
        const responseData = response.data;
        if (responseData.statusCode === 200) {
          setData(responseData.listMedicines);
        }
      })
      .catch((error) => {
        console.log("Error retrieving medicine list:", error);
      });
  };

  const handleSearch = () => {
    handleSearchMethod();
  };

  //for sort operation
  const sortMedicines = (medicines) => {
    switch (sortOption) {
      case "name":
        return [...medicines].sort((a, b) => a.name.localeCompare(b.name));
      // case 'manufacturer':
      //   return [...medicines].sort((a, b) => a.manufacturer.localeCompare(b.manufacturer));
      // case 'expDate':
      //   return [...medicines].sort((a, b) => a.expDate.localeCompare(b.expDate));
      case "price":
        return [...medicines].sort((a, b) => a.unitPrice - b.unitPrice);
      default:
        return medicines;
    }
  };

  const sortedData = sortMedicines(data);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/medicinedisplay">
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
                <Link className="nav-link text-white" to="/dashboard">
                  UserDashboard
                </Link>
              </li>
            </ul>
          </div>
          <Link className="nav-link text-white" to="/cart">
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

      <>
        <Fragment>
          <br />
          <h2>Medicine List</h2>
          {/* <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>

    <div>
        <label>Sort by:</label>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
       
        </select>
      </div> */}

          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "600px",
                  padding: "10px",
                  borderRadius: "20px 0 0 20px",
                  border: "1px solid #ccc",
                  marginRight: "10px",
                  fontSize: "14px",
                }}
              />
              <button
                onClick={handleSearch}
                style={{
                  padding: "10px 20px",
                  borderRadius: "0 20px 20px 0",
                  border: "none",
                  // backgroundColor: "#4CAF50",
                  backgroundColor: "green",
                  color: "white",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Search
              </button>
            </div>
            <div>
              <label style={{ marginRight: "10px" }}>
                <strong>Sort by:</strong>
              </label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                style={{
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  backgroundColor: "white",
                  fontSize: "16px",
                }}
              >
                <option value="">None</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                {/* <option value="expDate">Expiration Date</option> */}
              </select>
            </div>
          </div>
          {sortedData.length > 0 ? (
            <div>
              {sortedData.map((medicine) => (
                <div key={medicine.id} style={cartItemStyle}>
                  <img
                    src={medicine.imageUrl}
                    alt={medicine.name}
                    style={imageStyle}
                    onClick={() => navigateToDetails(medicine)}
                  />
                  <div>
                    <h3>
                      <strong>{medicine.name}</strong>
                    </h3>
                  </div>
                  <div>
                    <strong>MRP</strong>₹ {medicine.unitPrice}
                  </div>

                  <h4 className="card-title">
                    <select
                      id="medicinequantity"
                      className="form-control"
                      onChange={(e) => setOrderQuantity(e.target.value)}
                    >
                      <option value="-1">Select Quantity</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </h4>

                  <div>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => addToCart(medicine)}
                    >
                      Add to Cart
                    </button>
                    <span>
                      {" "}
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => buyNow(medicine)}
                      >
                        Buy Now
                      </button>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No medicines found.</p>
          )}
        </Fragment>
      </>
    </div>
  );
};

export default MedicineDisplay;
