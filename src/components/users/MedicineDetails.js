// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';

// const MedicineDetails = () => {
//     const navigate = useNavigate();
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
//      //const [quantity, setQuantity] = useState('');
//      const [quantityItems, setQuantityItems] = useState('');
//      const [imageUrl, setImageUrl] = useState('')

//   useEffect(() => {
//     getMedicineData();
//     setUserId(localStorage.getItem("userId"));
//   }, []);

//   const getMedicineData = (ID) => { 
//     const data={
//         ID:2
//     }
 
//     const url = `https://localhost:7198/api/Medicines/viewMedicine/${ID}`;
 

//     axios
//       .post(url, data)
//       .then((result) => {
//         const data = result.data;
//         if (data.statusCode === 200) {
//           setName(data.medicine.name);
//           setManufacturer(data.medicine.manufacturer)
//           setUnitPrice(data.medicine.unitPrice);
//           setDiscount(data.medicine.discount);
//           setQuantityItems(data.medicine.quantity);
//           setExpDate(data.medicine.expDate);
//           setImageUrl(data.medicine.imageUrl);
        
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
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
//           <br />
//           <h2>Medicine Details</h2>
         
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


//                   {/* <div>
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
                   
//                   </div> */}

                
//                 </div>
//               ))}
//             </div>
         
//         </Fragment>
//   )
// }

// export default MedicineDetails

// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import MedicineDisplay from './MedicineDisplay';
// import { useParams } from 'react-router-dom';

// const MedicineDetails = ({ medicineId }) => {
//   const [medicine, setMedicine] = useState(null);
//   const [quantity, setOrderQuantity] = useState('');
//   const { id } = useParams();
//   //const [medicine, setMedicine] = useState(null);

//   useEffect(() => {
//     const getMedicineData = async () => {
//       try {
//         const response = await axios.get(`https://localhost:7198/api/Admin/medicines/${id}`);
//         setMedicine(response.data);
//       } catch (error) {
//         console.error('Error retrieving medicine details:', error);
//       }
//     };

//     getMedicineData();
//   }, [id]);
//   // useEffect(() => {
//   //   getMedicineData();
   
//   // }, []);

//   const getMedicineData = (id) => {
//     const url = `https://localhost:7198/api/Admin/medicines/${id}`;

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setMedicine(responseData.medicine);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine details:', error);
//       });
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

//   if (!medicine) {
//     return null; // Return null if medicine is not available or still loading
//   }

//   return (
//     <Fragment>
    



//     <h2>Medicine Details</h2>
//           {medicine.length > 0 ? (
//             <div>
//               {medicine.map((medicine) => (
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


//                   {/* <div>
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
                   
//                   </div> */}

                
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>No medicines found.</p>
//           )}




    
//   </Fragment>
//   );
// };

// export default MedicineDetails;


// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import MedicineDisplay from './MedicineDisplay';
// import { useParams } from 'react-router-dom';

// const MedicineDetails = ({ medicineId }) => {
//   const [medicine, setMedicine] = useState(null);

//   useEffect(() => {
//     console.log('Medicine ID:', medicineId); // Log the medicineId prop

//     const getMedicineDetails = async () => {
//       try {
//         console.log('Making API request...');
//         const response = await axios.get(`https://localhost:7198/api/Admin/medicines/${medicineId}`);
//         console.log('Response:', response.data);
//         setMedicine(response.data);
//       } catch (error) {
//         console.error('Error retrieving medicine details:', error);
//       }
//     };

//     if (medicineId) {
//       getMedicineDetails();
//     }
//   }, [medicineId]);

//   if (!medicine) {
//     return <div>Loading...</div>;
//   }
  

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
//     const buttonStyle = {
//     marginTop: '10px',
//   };

//   // if (!medicine) {
//   //   return null; // Return null if medicine is not available or still loading
//   // }

//   return (
//     <div>
//     <h2>Medicine Details</h2>
//     <div>
//       <strong>Medicine ID:</strong> {medicine.id}
//     </div>
//     <div>
//       <strong>Name:</strong> {medicine.name}
//     </div>
//     <div>
//       <strong>Manufacturer:</strong> {medicine.manufacturer}
//     </div>
//     <div>
//       <strong>Unit Price:</strong> {medicine.unitPrice}
//     </div>
//     <div>
//       <strong>Discount:</strong> {medicine.discount}%
//     </div>
//     <div>
//       <strong>Quantity:</strong> {medicine.quantity}
//     </div>
//     <div>
//       <strong>Exp Date:</strong> {medicine.expDate}
//     </div>
//     <div>
//       <strong>Image URL:</strong> {medicine.imageUrl}
//     </div>
//   </div>
//   );
// };

// export default MedicineDetails;



// MedicineDetails.js
/// MedicineDetails.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import MedicineDisplay from './MedicineDisplay';

// const MedicineDetails = ({ id }) => {
//   const [medicine, setMedicine] = useState(null);

//   useEffect(() => {
//     // const getMedicineDetails = async () => {
//     //   try {
//     //     console.log('Making API request...');
//     //     const response = await axios.get(`https://localhost:7198/api/Admin/medicines/${id}`);
//     //     console.log('Response:', response.data);
//     //     setMedicine(response.data.medicine); // Update the state with the medicine data
//     //   } catch (error) {
//     //     console.error('Error retrieving medicine details:', error);
//     //   }
//     // };
//     const getMedicineDetails = async () => {
//       try {
//         console.log('Making API request...');
//         const response = await axios.get(`https://localhost:7198/api/Admin/medicines/${id}`);
//         console.log('Response:', response.data);
//         setMedicine(response.data.medicineDetails); // Update the state with medicineDetails
//       } catch (error) {
//         console.error('Error retrieving medicine details:', error);
//       }
//     };
    

//     if (id) {
//       getMedicineDetails();
//     }
//   }, [id]);

//   if (!medicine) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Medicine Details</h2>
//       <div>
//         <strong>Medicine ID:</strong> {medicine.ID} {/* Access the ID property */}
//       </div>
//       <div>
//         <strong>Name:</strong> {medicine.Name} {/* Access the Name property */}
//       </div>
//       <div>
//         <strong>Manufacturer:</strong> {medicine.Manufacturer} {/* Access the Manufacturer property */}
//       </div>
//       <div>
//         <strong>Unit Price:</strong> {medicine.UnitPrice} {/* Access the UnitPrice property */}
//       </div>
//       <div>
//         <strong>Discount:</strong> {medicine.Discount}% {/* Access the Discount property */}
//       </div>
//       <div>
//         <strong>Quantity:</strong> {medicine.Quantity} {/* Access the Quantity property */}
//       </div>
//       <div>
//         <strong>Exp Date:</strong> {medicine.ExpDate} {/* Access the ExpDate property */}
//       </div>
//       <div>
//         <strong>Image URL:</strong> {medicine.ImageUrl} {/* Access the ImageUrl property */}
//       </div>
//     </div>
//   );
// };

// export default MedicineDetails;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// const MedicineDetails = ({ id }) => {
//   const [medicine, setMedicine] = useState(null);
//   const [data, setData] = useState([]);
//   const [itemData, setItemData] = useState([]);
//   const [show, setShow] = useState(false);


//   useEffect(() => {
//     getMedicineDetails();
//   }, [id]);
  

//   const getMedicineDetails = () => {
//     try {
//       console.log('Making API request...');
//       const response = axios.get(`https://localhost:7198/api/Admin/medicines/${id}`);
//       console.log('Response:', response.data);
//       setMedicine(response.data.medicine); // Update the state with medicineDetails
//     } catch (error) {
//       console.error('Error retrieving medicine details:', error);
//     }
//   };
//   if (id) {
//     getMedicineDetails();
//   }
//   if (!medicine) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Medicine Details</h2>
//       <div>
//         <strong>Medicine ID:</strong> {medicine.id} {/* Access the id property */}
//       </div>
//       <div>
//         <strong>Name:</strong> {medicine.name} {/* Access the name property */}
//       </div>
//       <div>
//         <strong>Manufacturer:</strong> {medicine.manufacturer} {/* Access the manufacturer property */}
//       </div>
//       <div>
//         <strong>Unit Price:</strong> {medicine.unitPrice} {/* Access the unitPrice property */}
//       </div>
//       <div>
//         <strong>Discount:</strong> {medicine.discount}% {/* Access the discount property */}
//       </div>
//       <div>
//         <strong>Quantity:</strong> {medicine.quantity} {/* Access the quantity property */}
//       </div>
//       <div>
//         <strong>Exp Date:</strong> {medicine.expDate} {/* Access the expDate property */}
//       </div>
//       <div>
//         <strong>Image URL:</strong> {medicine.imageUrl} {/* Access the imageUrl property */}
//       </div>
//     </div>
//   );
// };

// export default MedicineDetails;


// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// //import MedicineDetails from './MedicineDetails';

// const MedicineDetails = ({ medicineId, setShowDetails }) => {
//   const [medicineDetails, setMedicineDetails] = useState(null);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//       getMedicineDetails();
    
//   }, []);

//   const getMedicineDetails = () => {
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
//         console.log('Error retrieving medicine details:', error);
//       });
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


//   return (
//     <div>
//     <Header />
//     <Fragment>
//       <br />
//       <h2>Medicine List</h2>
//       {data.length > 0 ? (
//         <div>
//           {data.map((medicine) => (
//             <div key={medicine.id} style={cartItemStyle} >
//               <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
//               <div>
//                 <strong>Medicine ID:</strong> 
//                 <Link to={`/medicine/${medicine.id}`}>{medicine.id}</Link>
//               </div>
//               <div>
//                 <strong>Name:</strong> {medicine.name}
//               </div>
//               <div>
//                 <strong>Manufacturer:</strong> {medicine.manufacturer}
//               </div>
//               <div>
//                 <strong>ExpDate:</strong> {medicine.expDate}
//               </div>
//               <div>
//                 <strong>UnitPrice:</strong> {medicine.unitPrice}
//               </div>
//               <div>
//                 <strong>Discount:</strong> {medicine.discount}%
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No medicines found.</p>
//       )}
//     </Fragment>
 

//   </div>
//   );
// };

// export default MedicineDetails;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MedicineDetails = ({ id }) => {
//   const [medicine, setMedicine] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getMedicineDetails = async () => {
//       try {
//         console.log('ID:', id); // Log the received id
//         console.log('Making API request...');
//         const response = await axios.get(`https://localhost:7198/api/Admin/medicines/${id}`);
//         console.log('Response:', response.data);
//         setMedicine(response.data.medicineDetails);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error retrieving medicine details:', error);
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     if (id) {
//       getMedicineDetails();
//     }
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!medicine) {
//     return <div>No medicine found.</div>;
//   }

//   return (
//     <div>
//       <h2>Medicine Details</h2>
//       <div>
//         <strong>Medicine ID:</strong> {medicine.id}
//       </div>
//       <div>
//         <strong>Name:</strong> {medicine.name}
//       </div>
//       <div>
//         <strong>Manufacturer:</strong> {medicine.manufacturer}
//       </div>
//       <div>
//         <strong>Unit Price:</strong> {medicine.unitPrice}
//       </div>
//       <div>
//         <strong>Discount:</strong> {medicine.discount}%
//       </div>
//       <div>
//         <strong>Exp Date:</strong> {medicine.expDate}
//       </div>
//       <div>
//         <strong>Image URL:</strong> {medicine.imageUrl}
//       </div>
//     </div>
//   );
// };

// export default MedicineDetails;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import MedicineDisplay from './MedicineDisplay';

// const MedicineDetails = ({ id }) => {
//   const [medicineData, setMedicineData] = useState(null);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchMedicineData();
//   }, [id]);

//   const fetchMedicineData = async (id) => {
//     try {
//       const response = await axios.get(`https://localhost:7198/api/Admin/medicines/${id}`);
//       setMedicineData(response.data.medicineDetails);
//     } catch (error) {
//       console.error('Error fetching medicine data:', error);
//     }
//   };

//   if (!medicineData) {
//     return <p>Loading...</p>;
//   }
//   const getData = () => {
//     const url = `https://localhost:7198/api/Admin/medicines/${id}`;

//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           setData(responseData.medicineDetails);
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine data:', error);
//       });
//   };

//   return (
//     <div>
//       {/* Render the medicine data */}
//       <p>Id:{medicineData.id}</p>
//       <p>Name: {medicineData.name}</p>
//       <p>Manufacturer: {medicineData.manufacturer}</p>
//       <p>Manufacturer</p>
//       <div>
//           <strong>Medicine ID: </strong> {id} <MedicineDisplay id={id} />
//         </div>
      
//       {/* ... */}
//     </div>
//   );
// };

// export default MedicineDetails;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const MedicineDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);
  const [quantity, setOrderQuantity] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    getMedicineDetails(id);
    setUserId(localStorage.getItem("userId"));
  }, [id]);

  const getMedicineDetails = (id) => {
    const url = `https://localhost:7198/api/Admin/medicines/${id}`;

    axios
      .get(url)
      .then((response) => {
        const responseData = response.data;
        if (responseData.statusCode === 200) {
          setMedicine(responseData.medicineDetails);
        }
      })
      .catch((error) => {
        console.log('Error retrieving medicine details:', error);
      });
  };

  const addToCart = (medicine) => {
    const userId = localStorage.getItem('userId');
  
    if (userId) {
      const cartItem = {
        UserId: userId,
        Name:medicine.name,
        UnitPrice: medicine.unitPrice,
        Discount: medicine.discount,
        Quantity: quantity, // Use the quantity state value instead
        //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
        TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100), 
        MedicineID: medicine.id,
        imageUrl:medicine.imageUrl
      };
  
      const url = 'https://localhost:7198/api/Medicines/addToCart';
  
      axios
        .post(url, cartItem)
        .then((response) => {
          const responseData = response.data;
          if (responseData.statusCode === 100) {
            alert('Item added to cart successfully');
          } else {
            alert('Failed to add item to cart');
          }
        })
        .catch((error) => {
          console.error('Error adding item to cart:', error);
        });
    } else {
      console.error('User ID is missing or undefined');
    }
  };


  const buyNow = (medicine) => {
    const userId = localStorage.getItem('userId');
  
    if (userId) {
      const cartItem = {
        UserId: userId,
        Name:medicine.name,
        UnitPrice: medicine.unitPrice,
        Discount: medicine.discount,
        Quantity: quantity, // Use the quantity state value instead
        //TotalPrice: (medicine.unitPrice - medicine.discount) * quantity, // Calculate the total price based on quantity
        TotalPrice : medicine.unitPrice - (medicine.unitPrice * medicine.discount / 100), 
        MedicineID: medicine.id,
        imageUrl:medicine.imageUrl
      };
  
      const url = 'https://localhost:7198/api/Medicines/addToCart';
  
      axios
        .post(url, cartItem)
        .then((response) => {
          const responseData = response.data;
          if (responseData.statusCode === 100) {
            alert('Item added to cart successfully');
            navigate("/orderplace");
          } else {
            alert('Failed to add item to cart');
          }
        })
        .catch((error) => {
          console.error('Error adding item to cart:', error);
        });
    } else {
      console.error('User ID is missing or undefined');
    }
  };

  // const cartItemStyle = {
  //   display: 'inline-block',
  //   width: '300px',
  //   padding: '10px',
  //   margin: '10px',
  //   border: '1px solid #ccc',
  // };

  // const imageStyle = {
  //   width: '280px',
  //   height: '150px',
  //   marginBottom: '10px',
  //   padding: '5px',
  // };
  const cartItemStyle = {
    display: 'inline-block',
    width: '100%', // Modified width to occupy the full width of the page
    padding: '10px',
    margin: '10px',
    border: '1px solid #ccc',
  };
  
  const imageStyle = {
    width: '280px',
    height: '150px',
    marginBottom: '10px',
    padding: '5px',
  };
  

  const buttonStyle = {
    marginTop: '10px',
  };

  return (
    <div>
      <Header/>
      {medicine ? (
        <div>
          <h2>Medicine Details</h2>

<div key={medicine.id} style={cartItemStyle}>
                  <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
                
                  <div>
                    <strong>Name:</strong> {medicine.name}
                  </div>
                  <div>
                    <strong>Quantity:</strong> {medicine.quantity}
                  </div>
                  <div>
                    <strong>Manufacturer:</strong> {medicine.manufacturer}
                  </div>
                  <div>
                    <strong>ExpDate:</strong> {medicine.expDate}
                  </div>
                  <div>
                    <strong>MRP:</strong>₹ { medicine.unitPrice}
                  </div>
                  <div>
                    <strong>Discount:</strong> {medicine.discount}%
                  </div>
                  <div>
                  <strong>Description :</strong> {medicine.description}
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
                      className="btn btn-primary"
                      onClick={() => addToCart(medicine)}
                    >
                      Add to Cart
                    </button>
                    <span>  <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => buyNow(medicine)}
                    >
                      Buy Now
                    </button></span>
                   
                  </div>

                
                </div>
        
        </div>
      ) : (
        <p>Loading medicine details...</p>
      )}
    </div>
  );
};

export default MedicineDetails;
