
// import Header from './Header'
// import React, { Fragment, useEffect, useState,useRef} from 'react';
// import axios from 'axios';


// const Dashboard = () => {
//   const [data, setData] = useState([]);


//   useEffect(() => {
//     getData();
//   }, []);

 

//   const getData = () => {
//     const data = {
//       type: 'Get',
//       Email: localStorage.getItem('loggedEmail'),

//     };
//     const url = `https://localhost:7198/api/Admin/medicines`;
  

//     axios
//       .get(url, data)
//       .then((result) => {
//         const data = result.data;
//         if (data.statusCode === 200) {
//           setData(data.listMedicines);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };




  

//   const cartItemStyle = {
//     display: 'inline-block',
//     width: '300px',
//     //height: '300px',
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
//     <div>
//       <Header/>
//       <>
  
//     <Fragment>

//       <br />
//       <h2>Medicine List</h2>
//        {data.length > 0 ? (
//         <div>
//           {data.map((medicine) => (
//             <div key={medicine.id} style={cartItemStyle}>
//               <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
//               <div>
//                 <strong>Medicine ID:</strong> {medicine.id}
//               </div>
//               <div>
//                 <strong>Name</strong> {medicine.name}
//               </div>
//               <div>
//                 <strong>Manufacturer</strong> {medicine.manufacturer}
//               </div>
//               <div>
//                 <strong>ExpDate</strong> {medicine.expDate}
//               </div>
            
//               <div>
//               <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={buttonStyle} onClick={() => addToCart(medicine)}>
//                 Add to cart
//               </button>
//               </div>
            
           
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No medicines found.</p>
//       )}

//     </Fragment>
//     </>



 
//     </div>
//   )
// }

// export default Dashboard;


import React from 'react'
import Header from './Header'
import { useEffect } from 'react';
import { useState } from 'react';

const Dashboard = () => {
 
  return (
    <div><Header/>
    </div>
  )
}

export default Dashboard