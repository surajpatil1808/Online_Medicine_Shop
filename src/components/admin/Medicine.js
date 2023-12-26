// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Medicine = () => {
//   const [data, setData] = useState([]);
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [expdate, setExpdate] = useState('');
//   const [file, setFile] = useState('');
//   const [filename, setFilename] = useState('');
//   const [addUpdateFlag, setAddUpdateFlag] = useState(true);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     const data = {
//       type: 'Get',
//       Email: localStorage.getItem('loggedEmail'),
//     };
//     const url = `https://localhost:7198/api/Admin/addUpdateMedicine`;

//     axios
//       .post(url, data)
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

//   const deleteMedicine = async (e, id) => {
//     e.preventDefault();
//     const data = {
//       Id: id,
//       Type: 'Delete',
//     };
//     const url = `https://localhost:7198/api/Admin/addUpdateMedicine`;

//     axios
//       .post(url, data)
//       .then((result) => {
//         const data = result.data;
//         if (data.statusCode === 200) {
//           getData();
//           alert(data.statusMessage);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const editMedicine = async (e, id) => {
//     e.preventDefault();
//     setAddUpdateFlag(false);
//     const data = {
//       ID: id,
//       Type: 'GetByID',
//     };
//     const url = `https://localhost:7198/api/Admin/addUpdateMedicine`;

//     axios
//       .post(url, data)
//       .then((result) => {
//         const data = result.data;
//         if (data.statusCode === 200) {
//           setMedicineId(id);
//           setName(data.listMedicines[0]['name']);
//           setManufacturer(data.listMedicines[0]['manufacturer']);
//           setUnitPrice(data.listMedicines[0]['unitPrice']);
//           setDiscount(data.listMedicines[0]['discount']);
//           setQuantity(data.listMedicines[0]['quantity']);
//           setExpdate(data.listMedicines[0]['expDate']);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const SaveFile = (e) => {
//     setFile(e.target.files[0]);
//     setFilename(e.target.files[0].name);
//   };

//   const uploadFile = async (e) => {
//     e.preventDefault();
//     const formdata = new FormData();
//     formdata.append('FormFile', file);
//     formdata.append('FileName', filename);

//     try {
//       const res = await axios.post(
//         'https://localhost:7078/api/Admin/UploadFile',
//         formdata
//       );
//       console.log(res);
//       if (res.data.statusCode === 200 && res.data.statusMessage === 'File uploaded') {
//         const data = {
//           Name: name,
//           manufacturer: manufacturer,
//           UnitPrice: unitPrice,
//           Discount: discount,
//           Quantity: quantity,
//           ExpDate: expdate,
//           Status: 1,
//           ImageUrl: filename,
//           Type: 'Add',
//         };
//         const url = `https://localhost:7198/api/Admin/addUpdateMedicine`;

//         axios
//           .post(url, data)
//           .then((result) => {
//             const data = result.data;
//             if (data.statusCode === 200) {
//               getData();
//               Clear();
//             }
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       }
//     } catch (ex) {
//       console.log(ex);
//     }
//   };

//   const Clear = (e) => {
//     e.preventDefault();
//     setName('');
//     setManufacturer('');
//     setUnitPrice('');
//     setDiscount('');
//     setExpdate('');
//     setFile('');
//     setFilename('');
//     setQuantity('');
//   };

//   const updateMedicine = (e) => {
//     e.preventDefault();
//     const data = {
//       ID: medicineId,
//       Name: name,
//       UnitPrice: unitPrice,
//       Discount: discount,
//       Quantity: quantity,
//       ExpDate: expdate,
//       Status: 1,
//       ImageUrl: filename,
//       Type: 'Update',
//     };

//     axios
//       .post('https://localhost:7198/api/Admin/addUpdateMedicine', data)
//       .then((res) => {
//         if (res.data.statusCode === 200) {
//           getData();
//           Clear();
//           alert('Profile updated successfully');
//         } else {
//           alert(res.data.statusMessage);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       <h2>Medicines</h2>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Manufacturer</th>
//             <th>Unit Price</th>
//             <th>Discount</th>
//             <th>Quantity</th>
//             <th>Exp Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((medicine) => (
//             <tr key={medicine.Id}>
//               <td>{medicine.name}</td>
//               <td>{medicine.manufacturer}</td>
//               <td>{medicine.unitPrice}</td>
//               <td>{medicine.discount}</td>
//               <td>{medicine.quantity}</td>
//               <td>{medicine.expDate}</td>
//               <td>
//                 <button onClick={(e) => editMedicine(e, medicine.Id)}>Edit</button>
//                 <button onClick={(e) => deleteMedicine(e, medicine.Id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h2>Add Medicine</h2>

//       <form onSubmit={addUpdateFlag ? uploadFile : updateMedicine}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Manufacturer:
//           <input
//             type="text"
//             value={manufacturer}
//             onChange={(e) => setManufacturer(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Unit Price:
//           <input type="text" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Discount:
//           <input type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Quantity:
//           <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Exp Date:
//           <input type="text" value={expdate} onChange={(e) => setExpdate(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Image:
//           <input type="file" onChange={SaveFile} />
//         </label>
//         <br />
//         {addUpdateFlag ? (
//           <button type="submit">Add Medicine</button>
//         ) : (
//           <button type="submit">Update Medicine</button>
//         )}
//         <button onClick={Clear}>Clear</button>
//       </form>
//     </div>
//   );
// };

// export default Medicine;




// import React from 'react'

// import { Fragment, useEffect, useState } from 'react'
// import axios from "axios";

// import AdminHeader from './AdminHeader';

// const Medicine = () => {


 
//   const [data, setData] = useState([]);
//   const [medicineId, setMedicineId] = useState("");
//   const [name, setName] = useState("");
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [expdate, setExpdate] = useState('');
//   const [file, setFile] = useState('');
//   const [filename, setFilename] = useState('');
//   const [addUpdateFlag, setAddUpdateFlag] = useState(true);

   
    
//     useEffect(() => {
     
//       getData();
     
//       }, []);

//       const getData=()=>{
        
//         const data={
//           type:"Get",
//           Email:localStorage.getItem("loggedEmail"),
//         };
//         const url=`https://localhost:7198/api/Admin/medicines`;
       
//         axios.post(url,data)
//         .then((result)=>{
//           const data=result.data;
//           if(data.statusCode===200){
//                 setData(data.listMedicines);
//             }
//         })
//         .catch((error) => {
//             console.log(error);
//           });

//       };

//       const deleteMedicine=async(e, id)=>{
//         debugger;
//         e.preventDefault();
//         const data={
//           Id:id,
//           Type:"Delete",
//         };
//         const url=`https://localhost:7198/api/Admin/addUpdateMedicine`;
       
//         axios.post(url,data)
//         .then((result)=>{
//           const data=result.data;
//           if(data.statusCode===200){
//                 getData();
//                 alert(data.statusMessage);
//             }
//           })
//             .catch((error) => {
//               console.log(error);
//             });
//         }

//         const editMedicine=async(e, id)=>{
//           debugger;
//           e.preventDefault();
//           setAddUpdateFlag(false);
//           const data={
//             ID:id,
//             Type:"GetByID",
//           };
//           const url=`https://localhost:7198/api/Admin/addUpdateMedicine`;
         
//           axios.post(url,data)
//           .then((result)=>{
//             const data=result.data;
//             if(data.statusCode===200){
//                   setMedicineId(id);
//                   setName(data.listMedicines[0]["name"]);
//                   setManufacturer(data.listMedicines[0]["manufacturer"]);
//                   setUnitPrice(data.listMedicines[0]["unitPrice"]);
//                   setDiscount(data.listMedicines[0]["discount"]);
//                   setQuantity(data.listMedicines[0]["quantity"]);
//                   setExpdate(data.listMedicines[0]["expDate"]);

//               }
//             })
//               .catch((error) => {
//                 console.log(error);
//               });
    
//           }

//           const SaveFile=(e)=>{
//             setFile(e.target.files[0]);
//             setFilename(e.target.files[0].name);
//           };

          
//           const uploadFile=async(e)=>{
        
//             e.preventDefault();
           
    
//             const formdata=new FormData();
//             formdata.append("FormFile",file);
//             formdata.append("FileName",filename);
//             try{
//                 const res=await axios.post(
//                     "https://localhost:7078/api/Admin/UploadFile",
//                     formdata
//                 );
//                 console.log(res);
//                 if(res.data.statusCode===200&& res.data.statusMessage==="File uploaded")
//                 {
//                   const data={
//                     Name:name,
//                     manufacturer:manufacturer,
//                     UnitPrice:unitPrice,
//                     Discount:discount,
//                     Quantity:quantity,
//                     ExpDate:expdate,
//                     Status:1,
//                     ImageUrl:filename,
//                     Type: "Add",

//                   };
//                   const url=`https://localhost:7198/api/Admin/addUpdateMedicine`;
                  
//                     axios.post(url,data)
//                     .then((result)=>{
//                       const data=result.data;
//                       if(data.statusCode===200){
//                         getData();
//                         Clear();
//                       }
//                     })
//                     .catch((error) => {
//                       console.log(error);
//                     });



//                 }}
//                 catch(ex){
//                   console.log(ex);
//               }     
//             };
            
        
//        const Clear=(e)=>{
//             e.preventDefault();
//             setName("");
//             setManufacturer("");
//             setUnitPrice("");
//             setDiscount("");
//             setExpdate("");
//             setFile("");
//             setFilename("");
//             setQuantity("");

//         };

      

//         const updateMedicine = (e) => {
//           e.preventDefault();
//           const data = {
//             ID:medicineId,
//             Name:name,
//             UnitPrice:unitPrice,
//             Discount:discount,
//             Quantity:quantity,
//             ExpDate:expdate,
//             Status:1,
//             ImageUrl:filename,
//             Type: "Update",
//           };
      
//           axios
//             .post('https://localhost:7198/api/Admin/addUpdateMedicine', data)
//             .then((res) => {
//               if (res.data.statusCode === 200) {
//                 getData();
//                 Clear();
//                 alert('Profile updated successfully');
//               } else {
//                 alert(res.data.statusMessage);
//               }
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         };

//         return (
//           <Fragment>
//             <AdminHeader />
//             <br />
//             <form>
//               <div className="form-row">
//                 <div className="form-group col-md-12">
//                   <h3>Medicines</h3>
//                 </div>
        
//                 <div className="form-group col-md-12">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter Name"
//                     onChange={(e) => setName(e.target.value)}
//                     required
//                     value={name}
//                   />
//                 </div>
//                 <br />
//                 <div className="form-group col-md-12">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter manufacturer"
//                     onChange={(e) => setManufacturer(e.target.value)}
//                     required
//                     value={manufacturer}
//                   />
//                 </div>
//                 <div className="form-group col-md-12">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter unitPrice"
//                     onChange={(e) => setUnitPrice(e.target.value)}
//                     required
//                     value={unitPrice}
//                   />
//                 </div>
//                 <div className="form-group col-md-12">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter discount"
//                     onChange={(e) => setDiscount(e.target.value)}
//                     required
//                     value={discount}
//                   />
//                 </div>
//                 <div className="form-group col-md-12">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter expdate"
//                     onChange={(e) => setExpdate(e.target.value)}
//                     required
//                     value={expdate}
//                   />
//                 </div>
//                 <div className="form-group col-md-12">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter quantity"
//                     onChange={(e) => setQuantity(e.target.value)}
//                     required
//                     value={quantity}
//                   />
//                 </div>

//                 <div className="form-group col-md-12">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter file"
//                     onChange={(e) => setFile(e.target.value)}
//                     required
//                     value={file}
//                   />
//                 </div>
//                 <div className="form-group col-md-12">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter filename"
//                     onChange={(e) => setFilename(e.target.value)}
//                     required
//                     value={filename}
//                   />
//                 </div>
        
//                 <div className="form-group col-md-6">
//                   <button
//                     type="submit"
//                     className="btn btn-primary"
//                     onClick={(e) => uploadFile(e)}
//                   >
//                     Update
//                   </button>{" "}
//                   <button
//                     type="submit"
//                     className="btn btn-danger"
//                     onClick={(e) => Clear(e)}
//                   >
//                     Reset
//                   </button>
//                 </div>
//               </div>
//             </form>
        
//             <br />
//             {data ? (
//               <table
//                 className="table stripped table-hover mt-4"
//                 style={{
//                   backgroundColor: "white",
//                   color: "black",
//                   width: "80%",
//                   margin: "0 auto"
//                 }}
//               >
//                 <thead className="thread-dark">
//                   <tr>
//                     <th scope="col">#</th>
//                     <th scope="col">FirstName</th>
//                     <th scope="col">LastName</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">Password</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {data.map((val, index) => {
//                     return (
//                       <tr key={index}>
//                         <th scope="row">{index + 1}</th>
//                         <td>{val.name}</td>
//                         <td>{val.manufacturer}</td>
//                         <td>{val.quantity}</td>
//                         <td>{val.discount}</td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             ) : (
//               "No data Found"
//             )}
//           </Fragment>
//         );
        
// }

// export default Medicine






// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Medicine = () => {
//   const [medicines, setMedicines] = useState([]);
//   const [selectedMedicine, setSelectedMedicine] = useState(null);
//   const [addUpdateFlag, setAddUpdateFlag] = useState(true);

//   const [name, setName] = useState("");
//   const [manufacturer, setManufacturer] = useState("");
//   const [unitPrice, setUnitPrice] = useState(0);
//   const [discount, setDiscount] = useState(0);
//   const [quantity, setQuantity] = useState(0);
//   const [expDate, setExpDate] = useState("");
//   const [imageUrl, setImageUrl] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://localhost:7198/api/Admin/medicines")
//       .then((response) => {
//         const { statusCode, statusMessage, listMedicines } = response.data;
//         if (statusCode === 200) {
//           setMedicines(listMedicines);
//         } else {
//           console.error(statusMessage);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching medicines:", error);
//       });
//   }, []);

//   const deleteMedicine = (id) => {
//     if (window.confirm("Are you sure you want to delete this medicine?")) {
//       axios
//         .delete(`https://localhost:7198/api/Admin/deleteMedicine/${id}`)
//         .then((response) => {
//           const { statusCode, statusMessage } = response.data;
//           if (statusCode === 200) {
//             setMedicines((prevMedicines) =>
//               prevMedicines.filter((medicine) => medicine.id !== id)
//             );
//             console.log(statusMessage);
//           } else {
//             console.error(statusMessage);
//           }
//         })
//         .catch((error) => {
//           console.error("Error deleting medicine:", error);
//         });
//     }
//   };

//   const editMedicine = (medicine) => {
//     setSelectedMedicine(medicine);
//     setAddUpdateFlag(false);
//     setName(medicine.name);
//     setManufacturer(medicine.manufacturer);
//     setUnitPrice(medicine.unitPrice);
//     setDiscount(medicine.discount);
//     setQuantity(medicine.quantity);
//     setExpDate(medicine.expDate);
//     setImageUrl(medicine.imageUrl);
//   };

//   const clearForm = () => {
//     setSelectedMedicine(null);
//     setName("");
//     setManufacturer("");
//     setUnitPrice(0);
//     setDiscount(0);
//     setQuantity(0);
//     setExpDate("");
//     setImageUrl("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newMedicine = {
//       id: selectedMedicine ? selectedMedicine.id : 0,
//       name,
//       manufacturer,
//       unitPrice,
//       discount,
//       quantity,
//       expDate,
//       imageUrl,
//     };

//     if (addUpdateFlag) {
//       axios
//         .post("https://localhost:7198/api/Admin/addMedicine", newMedicine)
//         .then((response) => {
//           const { statusCode, statusMessage, addedMedicine } = response.data;
//           if (statusCode === 200) {
//             setMedicines((prevMedicines) => [...prevMedicines, addedMedicine]);
//             clearForm();
//             console.log(statusMessage);
//           } else {
//             console.error(statusMessage);
//           }
//         })
//         .catch((error) => {
//           console.error("Error adding medicine:", error);
//         });
//     } else {
//       axios
//         .put(
//           "https://localhost:7198/api/Admin/updateMedicine",
//           newMedicine
//         )
//         .then((response) => {
//           const { statusCode, statusMessage, updatedMedicine } = response.data;
//           if (statusCode === 200) {
//             setMedicines((prevMedicines) =>
//               prevMedicines.map((medicine) =>
//                 medicine.id === updatedMedicine.id ? updatedMedicine : medicine
//               )
//             );
//             clearForm();
//             setAddUpdateFlag(true); // Switch back to add mode
//             console.log(statusMessage);
//           } else {
//             console.error(statusMessage);
//           }
//         })
//         .catch((error) => {
//           console.error("Error updating medicine:", error);
//         });
//     }
//   };

//   return (
//     <div>
//       <h2>Medicine List</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Manufacturer</th>
//             <th>Unit Price</th>
//             <th>Discount</th>
//             <th>Quantity</th>
//             <th>Exp Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {medicines.map((medicine) => (
//             <tr key={medicine.id}>
//               <td>{medicine.name}</td>
//               <td>{medicine.manufacturer}</td>
//               <td>{medicine.unitPrice}</td>
//               <td>{medicine.discount}</td>
//               <td>{medicine.quantity}</td>
//               <td>{medicine.expDate}</td>
//               <td>
//                 <button onClick={() => deleteMedicine(medicine.id)}>
//                   Delete
//                 </button>
//                 <button onClick={() => editMedicine(medicine)}>Edit</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h2>{addUpdateFlag ? "Add Medicine" : "Update Medicine"}</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </label>
//         {/* Other form fields */}
//         <button type="submit">{addUpdateFlag ? "Add" : "Update"}</button>
//       </form>
//     </div>
//   );
// };

// export default Medicine;














// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminHeader from './AdminHeader';

// const Medicine = () => {
//   const [data, setData] = useState([]);
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [expDate, setExpDate] = useState('');
//   const [file, setFile] = useState('');
//   const [filename, setFilename] = useState('');
//   const [addUpdateFlag, setAddUpdateFlag] = useState(true);

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

//   const deleteMedicine = (id) => {
//     const url = `https://localhost:7198/api/Admin/deleteMedicine/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Medicine deleted successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting medicine:', error);
//       });
//   };

//   const editMedicine = (medicine) => {
//     setAddUpdateFlag(false);
//     setMedicineId(medicine.id);
//     setName(medicine.name);
//     setManufacturer(medicine.manufacturer);
//     setUnitPrice(medicine.unitPrice);
//     setDiscount(medicine.discount);
//     setQuantity(medicine.quantity);
//     setExpDate(medicine.expDate);
//   };

//   const saveFile = (e) => {
//     setFile(e.target.files[0]);
//     setFilename(e.target.files[0].name);
//   };

//   const uploadFile = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('file', file);
//       const response = await axios.post('https://localhost:7198/api/Admin/UploadFile', formData);
//       console.log('File uploaded:', response.data);
  
//       const { filename } = response.data; // Assuming the server returns the filename of the uploaded file
  
//       // Update the medicine details with the filename
//       const updatedMedicineData = {
//         ...medicineData,
//         imageUrl: filename, // Use 'filename' instead if the server returns the filename
//       };
  
//       if (addUpdateFlag) {
//         // Add medicine
//         await axios.post('https://localhost:7198/api/Admin/addUpdateMedicine', updatedMedicineData);
//         alert('Medicine added successfully');
//       } else {
//         // Update medicine
//         await axios.put(`https://localhost:7198/api/Admin/medicines/${medicineId}`, updatedMedicineData);
//         alert('Medicine updated successfully');
//       }
  
//       getData(); // Refresh the medicine list
//       clearForm(); // Clear the form inputs
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };
  
  

//   const clearForm = () => {
//     setMedicineId('');
//     setName('');
//     setManufacturer('');
//     setUnitPrice('');
//     setDiscount('');
//     setQuantity('');
//     setExpDate('');
//     setFile('');
//     setFilename('');
//     setAddUpdateFlag(true);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const medicineData = {
//       name,
//       manufacturer,
//       unitPrice,
//       discount,
//       quantity,
//       expDate,
//       imageUrl: '' // Modify this if you want to save the URL of the uploaded file
//       // Add other fields as needed
//     };

//     try {
//       if (addUpdateFlag) {
//         await axios.post('https://localhost:7198/api/Admin/addUpdateMedicine', medicineData);
//         alert('Medicine added successfully');
//       } else {
//         await axios.put(`https://localhost:7198/api/Admin/medicines/${medicineId}`, medicineData);
//         alert('Medicine updated successfully');
//       }
//       getData();
//       clearForm();
//     } catch (error) {
//       console.error('Error adding/updating medicine:', error);
//     }
//   };

//   return (
//     <Fragment>
//       <AdminHeader />
//       <h2>Medicine List</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Medicine Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </div>
//         <div>
//           <label>Manufacturer:</label>
//           <input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} required />
//         </div>
//         <div>
//           <label>Unit Price:</label>
//           <input type="text" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} required />
//         </div>
//         <div>
//           <label>Discount:</label>
//           <input type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} required />
//         </div>
//         <div>
//           <label>Quantity:</label>
//           <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
//         </div>
//         <div>
//           <label>Expiration Date:</label>
//           <input type="text" value={expDate} onChange={(e) => setExpDate(e.target.value)} required />
//         </div>
//         <div>
//           <label>Upload File:</label>
//           <input type="file" onChange={saveFile} required />
//         </div>
//         <div>
//           <button type="button" onClick={uploadFile}>
//             Upload File
//           </button>
//           {filename && <p>Selected file: {filename}</p>}
//         </div>
//         <div>
//           <button type="submit">{addUpdateFlag ? 'Add Medicine' : 'Update Medicine'}</button>
//           <button type="button" onClick={clearForm}>
//             Clear
//           </button>
//         </div>
//       </form>
//       <br />
//       {data.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Medicine ID</th>
//               <th>Name</th>
//               <th>Unit price</th>
//               <th>Manufacturer</th>
//               <th>Quantity</th>
//               <th>ExpDate</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((medicine) => (
//               <tr key={medicine.id}>
//                 <td>{medicine.id}</td>
//                 <td>{medicine.name}</td>
//                 <td>{medicine.unitPrice}</td>
//                 <td>{medicine.manufacturer}</td>
//                 <td>{medicine.quantity}</td>
//                 <td>{medicine.expDate}</td>
//                 <td>
//                   <button onClick={() => editMedicine(medicine)}>Edit</button>
//                 </td>
//                 <td>
//                   <button onClick={() => deleteMedicine(medicine.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data found.</p>
//       )}
//     </Fragment>
//   );
// };

// export default Medicine;


// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminHeader from './AdminHeader';

// const Medicine = () => {
//   const [data, setData] = useState([]);
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [expDate, setExpDate] = useState('');
//   const [file, setFile] = useState('');
//   const [filename, setFilename] = useState('');
//   const [addUpdateFlag, setAddUpdateFlag] = useState(true);
//   const [imageUrl, setImageUrl] = useState('')

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

//   const deleteMedicine = (id) => {
//     const url = `https://localhost:7198/api/Admin/deleteMedicine/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Medicine deleted successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting medicine:', error);
//       });
//   };

//   const editMedicine = (medicine) => {
//     setAddUpdateFlag(false);
//     setMedicineId(medicine.id);
//     setName(medicine.name);
//     setManufacturer(medicine.manufacturer);
//     setUnitPrice(medicine.unitPrice);
//     setDiscount(medicine.discount);
//     setQuantity(medicine.quantity);
//     setExpDate(medicine.expDate);
//   };

  

//          const saveFile = (e) => {
//     setFile(e.target.files[0]);
//     setFilename(e.target.files[0].name);
//   };

          
//           const uploadFile=async(e)=>{
        
//             e.preventDefault();
           
    
//             const formdata=new FormData();
//             formdata.append("FormFile",file);
//             formdata.append("FileName",filename);
//             try{
//                 const res=await axios.post(
//                     "https://localhost:7078/api/Admin/UploadFile",
//                     formdata
//                 );
//                 console.log(res);
//                 if(res.data.statusCode===200&& res.data.statusMessage==="File uploaded")
//                 {
//                   const data={
//                     Name:name,
//                     manufacturer:manufacturer,
//                     UnitPrice:unitPrice,
//                     Discount:discount,
//                     Quantity:quantity,
//                     ExpDate:expDate,
//                     Status:1,
//                     ImageUrl:filename,
//                     Type: "Add",

//                   };
//                   const url=`https://localhost:7198/api/Admin/addUpdateMedicine`;
                  
//                     axios.post(url,data)
//                     .then((result)=>{
//                       const data=result.data;
//                       if(data.statusCode===200){
//                         getData();
//                         clearForm();
//                       }
//                     })
//                     .catch((error) => {
//                       console.log(error);
//                     });



//                 }}
//                 catch(ex){
//                   console.log(ex);
//               }     
//             };
            

//   const clearForm = () => {
//     setMedicineId('');
//     setName('');
//     setManufacturer('');
//     setUnitPrice('');
//     setDiscount('');
//     setQuantity('');
//     setExpDate('');
//     setFile('');
//     setFilename('');
//     setAddUpdateFlag(true);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const medicineData = {
//       name,
//       manufacturer,
//       unitPrice,
//       discount,
//       quantity,
//       expDate,
//       imageUrl: filename, // Use the filename as the image URL
//       // Add other fields as needed
//     };
  
//     try {
//       if (addUpdateFlag) {
//         // Perform the file upload separately before adding/updating the medicine
//         const formData = new FormData();
//         formData.append("FormFile", file);
//         formData.append("FileName", filename);
//         const fileResponse = await axios.post("https://localhost:7198/api/Admin/UploadFile", formData);
  
//         if (fileResponse.data.statusCode === 200 && fileResponse.data.statusMessage === "File uploaded") {
//           const addMedicineResponse = await axios.post(
//             "https://localhost:7198/api/Admin/addUpdateMedicine",
//             medicineData
//           );
  
//           if (addMedicineResponse.data.statusCode === 200) {
//             alert('Medicine added successfully');
//             getData();
//             clearForm();
//           }
//         }
//       } else {
//         // Perform the file upload separately before adding/updating the medicine
//         const formData = new FormData();
//         formData.append("FormFile", file);
//         formData.append("FileName", filename);
//         const fileResponse = await axios.post("https://localhost:7198/api/Admin/UploadFile", formData);
  
//         if (fileResponse.data.statusCode === 200 && fileResponse.data.statusMessage === "File uploaded") {
//           const updateMedicineResponse = await axios.put(
//             `https://localhost:7198/api/Admin/Medicines/${medicineId}`,
//             medicineData
//           );
  
//           if (updateMedicineResponse.data.statusCode === 200) {
//             alert('Medicine updated successfully');
//             getData();
//             clearForm();
//           }
//         }
//       }
//     } catch (error) {
//       console.error('Error adding/updating medicine:', error);
//     }
//   };
  

//   return (
//     <Fragment>
//       <AdminHeader />
//       <h2>Medicine List</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Medicine Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </div>
//         <div>
//           <label>Manufacturer:</label>
//           <input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} required />
//         </div>
//         <div>
//           <label>Unit Price:</label>
//           <input type="text" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} required />
//         </div>
//         <div>
//           <label>Discount:</label>
//           <input type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} required />
//         </div>
//         <div>
//           <label>Quantity:</label>
//           <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
//         </div>
//         <div>
//           <label>Expiration Date:</label>
//           <input type="text" value={expDate} onChange={(e) => setExpDate(e.target.value)} required />
//         </div>
//         {/* <div>
//           <label>Image:</label>
//           <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
//         </div> */}
//         <div>
//           <label>Upload File:</label>
//           <input type="file" onChange={saveFile} required />
//         </div>
//         <div>
//           <button type="button" onClick={uploadFile}>
//             Upload File
//           </button>
//           {filename && <p>Selected file: {filename}</p>}
//         </div>
//         <div>
//           <button type="submit">{addUpdateFlag ? 'Add Medicine' : 'Update Medicine'}</button>
//           <button type="button" onClick={clearForm}>
//             Clear
//           </button>
//         </div>
//       </form>
//       <br />
//       {data.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Medicine ID</th>
//               <th>Name</th>
//               <th>Unit price</th>
//               <th>Manufacturer</th>
//               <th>Quantity</th>
//               <th>ExpDate</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((medicine) => (
//               <tr key={medicine.id}>
//                 <td>{medicine.id}</td>
//                 <td>{medicine.name}</td>
//                 <td>{medicine.unitPrice}</td>
//                 <td>{medicine.manufacturer}</td>
//                 <td>{medicine.quantity}</td>
//                 <td>{medicine.expDate}</td>
//                 <td>
//                   <button onClick={() => editMedicine(medicine)}>Edit</button>
//                 </td>
//                 <td>
//                   <button onClick={() => deleteMedicine(medicine.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data found.</p>
//       )}
//     </Fragment>
//   );
// };

// export default Medicine;






//code with table format
// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminHeader from './AdminHeader';

// const Medicine = () => {
//   const [data, setData] = useState([]);
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [expDate, setExpDate] = useState('');
//   const [file, setFile] = useState('');
//   const [filename, setFilename] = useState('');
//   const [addUpdateFlag, setAddUpdateFlag] = useState(true);
//   const [imageUrl, setImageUrl] = useState('')

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

//   const deleteMedicine = (id) => {
//     const url = `https://localhost:7198/api/Admin/deleteMedicine/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Medicine deleted successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting medicine:', error);
//       });
//   };

//   const editMedicine = (medicine) => {
//     setAddUpdateFlag(false);
//     setMedicineId(medicine.id);
//     setName(medicine.name);
//     setManufacturer(medicine.manufacturer);
//     setUnitPrice(medicine.unitPrice);
//     setDiscount(medicine.discount);
//     setQuantity(medicine.quantity);
//     setExpDate(medicine.expDate);
//   };

//   // const saveFile = (e) => {
//   //   setFile(e.target.files[0]);
//   //   setFilename(e.target.files[0].name);
//   // };

//   // const uploadFile = async () => {
//   //   try {
//   //     const formData = new FormData();
//   //     formData.append('file', file);
//   //     const response = await axios.post('https://localhost:7198/api/Admin/UploadFile', formData);
//   //     console.log('File uploaded:', response.data);
//   //     // Add code to save the filename or URL to the medicine details
//   //   } catch (error) {
//   //     console.error('Error uploading file:', error);
//   //   }
//   // };

//   const clearForm = () => {
//     setMedicineId('');
//     setName('');
//     setManufacturer('');
//     setUnitPrice('');
//     setDiscount('');
//     setQuantity('');
//     setExpDate('');
//     setFile('');
//     setFilename('');
//     setAddUpdateFlag(true);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const medicineData = {
//       name,
//       manufacturer,
//       unitPrice,
//       discount,
//       quantity,
//       expDate,
//       imageUrl // Modify this if you want to save the URL of the uploaded file
//       // Add other fields as needed
//     };

//     try {
//       if (addUpdateFlag) {
//         await axios.post('https://localhost:7198/api/Admin/addUpdateMedicine', medicineData);
//         alert('Medicine added successfully');
//       } else {
//         await axios.put(`https://localhost:7198/api/Admin/medicines/${medicineId}`, medicineData);
//         alert('Medicine updated successfully');
//       }
//       getData();
//       clearForm();
//     } catch (error) {
//       console.error('Error adding/updating medicine:', error);
//     }
//   };

//   return (
//     <Fragment>
//       <AdminHeader />
//       <h2>Medicine List</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Medicine Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </div>
//         <div>
//           <label>Manufacturer:</label>
//           <input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} required />
//         </div>
//         <div>
//           <label>Unit Price:</label>
//           <input type="text" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} required />
//         </div>
//         <div>
//           <label>Discount:</label>
//           <input type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} required />
//         </div>
//         <div>
//           <label>Quantity:</label>
//           <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
//         </div>
//         <div>
//           <label>Expiration Date:</label>
//           <input type="text" value={expDate} onChange={(e) => setExpDate(e.target.value)} required />
//         </div>
//         <div>
//           <label>Image:</label>
//           <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
//         </div>
//         {/* <div>
//           <label>Upload File:</label>
//           <input type="file" onChange={saveFile} required />
//         </div>
//         <div>
//           <button type="button" onClick={uploadFile}>
//             Upload File
//           </button>
//           {filename && <p>Selected file: {filename}</p>}
//         </div> */}
//         <div>
//           <button type="submit">{addUpdateFlag ? 'Add Medicine' : 'Update Medicine'}</button>
//           <button type="button" onClick={clearForm}>
//             Clear
//           </button>
//         </div>
//       </form>
//       <br />
//       {data.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Medicine ID</th>
//               <th>Name</th>
//               <th>Unit price</th>
//               <th>Manufacturer</th>
//               <th>Quantity</th>
//               <th>ExpDate</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((medicine) => (
//               <tr key={medicine.id}>
//                 <td>{medicine.id}</td>
//                 <td>{medicine.name}</td>
//                 <td>{medicine.unitPrice}</td>
//                 <td>{medicine.manufacturer}</td>
//                 <td>{medicine.quantity}</td>
//                 <td>{medicine.expDate}</td>
//                 <td>
//                   <button onClick={() => editMedicine(medicine)}>Edit</button>
//                 </td>
//                 <td>
//                   <button onClick={() => deleteMedicine(medicine.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data found.</p>
//       )}
//     </Fragment>
//   );
// };

// export default Medicine;




//full working code 
// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';
// import AdminHeader from './AdminHeader';
// import './Medicine.css';


// const Medicine = () => {
//   const [data, setData] = useState([]);
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [expDate, setExpDate] = useState('');
//   const [file, setFile] = useState('');
//   const [filename, setFilename] = useState('');
//   const [addUpdateFlag, setAddUpdateFlag] = useState(true);
//   const [imageUrl, setImageUrl] = useState('')

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

//   const deleteMedicine = (id) => {
//     const url = `https://localhost:7198/api/Admin/deleteMedicine/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Medicine deleted successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting medicine:', error);
//       });
//   };

//   const editMedicine = (medicine) => {
//     setAddUpdateFlag(false);
//     setMedicineId(medicine.id);
//     setName(medicine.name);
//     setManufacturer(medicine.manufacturer);
//     setUnitPrice(medicine.unitPrice);
//     setDiscount(medicine.discount);
//     setQuantity(medicine.quantity);
//     setExpDate(medicine.expDate);
//   };

 

//   const clearForm = () => {
//     setMedicineId('');
//     setName('');
//     setManufacturer('');
//     setUnitPrice('');
//     setDiscount('');
//     setQuantity('');
//     setExpDate('');
//     setFile('');
//     setFilename('');
//     setAddUpdateFlag(true);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const medicineData = {
//       name,
//       manufacturer,
//       unitPrice,
//       discount,
//       quantity,
//       expDate,
//       imageUrl // Modify this if you want to save the URL of the uploaded file
//       // Add other fields as needed
//     };

//     try {
//       if (addUpdateFlag) {
//         await axios.post('https://localhost:7198/api/Admin/addUpdateMedicine', medicineData);
//         alert('Medicine added successfully');
//       } else {
//         await axios.put(`https://localhost:7198/api/Admin/medicines/${medicineId}`, medicineData);
//         alert('Medicine updated successfully');
//       }
//       getData();
//       clearForm();
//     } catch (error) {
//       console.error('Error adding/updating medicine:', error);
//     }
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
//     <Fragment>
//       <AdminHeader />
      
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Medicine Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </div>
//         <div>
//           <label>Manufacturer:</label>
//           <input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} required />
//         </div>
//         <div>
//           <label>Unit Price:</label>
//           <input type="text" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} required />
//         </div>
//         <div>
//           <label>Discount:</label>
//           <input type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} required />
//         </div>
//         <div>
//           <label>Quantity:</label>
//           <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
//         </div>
//         <div>
//           <label>Expiration Date:</label>
//           <input type="text" value={expDate} onChange={(e) => setExpDate(e.target.value)} required />
//         </div>
//         <div>
//           <label>Image:</label>
//           <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
//         </div>
  
//         <div>
//           <button type="submit">{addUpdateFlag ? 'Add Medicine' : 'Update Medicine'}</button>
//           <button type="button" onClick={clearForm}>
//             Clear
//           </button>
//         </div>
//       </form>
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
//               {/* ... */}
//               <button style={buttonStyle} onClick={() => editMedicine(medicine)}>
//                 Edit
//               </button>
//               <button style={buttonStyle} onClick={() => deleteMedicine(medicine.id)}>
//                 Delete
//               </button>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No medicines found.</p>
//       )}

//     </Fragment>
//   );
// };

// export default Medicine;




// import React, { Fragment, useEffect, useState,useRef} from 'react';
// import axios from 'axios';
// import AdminHeader from './AdminHeader';
// import './Medicine.css';


// const Medicine = () => {
//   const [data, setData] = useState([]);
//   const [medicineId, setMedicineId] = useState('');
//   const [name, setName] = useState('');
//   const [manufacturer, setManufacturer] = useState('');
//   const [unitPrice, setUnitPrice] = useState('');
//   const [discount, setDiscount] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [expDate, setExpDate] = useState('');
//   const [file, setFile] = useState('');
//   const [filename, setFilename] = useState('');
//   const [addUpdateFlag, setAddUpdateFlag] = useState(true);
//   const [imageUrl, setImageUrl] = useState('')
  

//   useEffect(() => {
//     getData();
//   }, []);

//   const ref =useRef(null)
//   const refClose =useRef(null)

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

//   const deleteMedicine = (id) => {
//     const url = `https://localhost:7198/api/Admin/deleteMedicine/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Medicine deleted successfully');
//         getData(); // Refresh the medicine list
//       })
//       .catch((error) => {
//         console.error('Error deleting medicine:', error);
//       });
//   };

//   const editMedicine = (medicine) => {
//     setAddUpdateFlag(false);
//     setMedicineId(medicine.id);
//     setName(medicine.name);
//     setManufacturer(medicine.manufacturer);
//     setUnitPrice(medicine.unitPrice);
//     setDiscount(medicine.discount);
//     setQuantity(medicine.quantity);
//     setExpDate(medicine.expDate);
//     setImageUrl(medicine.imageUrl);
//   };

 

//   const clearForm = () => {
//     setMedicineId('');
//     setName('');
//     setManufacturer('');
//     setUnitPrice('');
//     setDiscount('');
//     setQuantity('');
//     setExpDate('');
//     setFile('');
//     setFilename('');
//     setImageUrl('');
//     setAddUpdateFlag(true);
//   };

//   const handleSubmit = async (e) => {
 
//     e.preventDefault();

//     const medicineData = {
//       name,
//       manufacturer,
//       unitPrice,
//       discount,
//       quantity,
//       expDate,
//       imageUrl // Modify this if you want to save the URL of the uploaded file
//       // Add other fields as needed
//     };

//     try {
//       if (addUpdateFlag) {
      
//         await axios.post('https://localhost:7198/api/Admin/addUpdateMedicine', medicineData);
//         alert('Medicine added successfully');
//       } else{
//         await axios.put(`https://localhost:7198/api/Admin/medicines/${medicineId}`, medicineData);
//         alert('Medicine updated successfully');

//       }
//       getData();
//       clearForm();
//       refClose.current.click();
//     } catch (error) {
//       console.error('Error adding/updating medicine:', error);
//     }
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
  

//   //for search operation
//   const getMedicineById = (id) => {
//     const url = `https://localhost:7198/api/Admin/medicineSearch/${id}`;
  
//     axios
//       .get(url)
//       .then((response) => {
//         const responseData = response.data;
//         if (responseData.statusCode === 200) {
//           // Handle the retrieved medicine data
//           const medicine = responseData.medicine;
//           console.log(medicine);
//           // Update the necessary state variables or perform any other actions
//         } else {
//           // Handle the case when the medicine is not found
//           console.log('Medicine not found');
//         }
//       })
//       .catch((error) => {
//         console.log('Error retrieving medicine:', error);
//       });
//   };
//   const handleSearchById = () => {
//     if (medicineId) {
//       getMedicineById(medicineId);
//     } else {
//       console.log('Please enter a valid medicine ID');
//     }
//   };
  
  
  

//   return (<>
  
//     <Fragment>
//       <AdminHeader />
//       <br/>
//       <br/>
//       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={clearForm}>
//   Add Medicine
// </button>
// <div
//         className="modal fade"
//         id="exampleModal"
//         tabIndex="-1"
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//               Add/Edit Medicine
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body">

//             <form onSubmit={handleSubmit}>
//         <div>
//           <label>Medicine Name:</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </div>
//         <div>
//           <label>Manufacturer:</label>
//           <input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} required />
//         </div>
//         <div>
//           <label>Unit Price:</label>
//           <input type="text" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} required />
//         </div>
//         <div>
//           <label>Discount:</label>
//           <input type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} required />
//         </div>
//         <div>
//           <label>Quantity:</label>
//           <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
//         </div>
//         <div>
//           <label>Expiration Date:</label>
//           <input type="text" value={expDate} onChange={(e) => setExpDate(e.target.value)} required />
//         </div>
//         <div>
//           <label>Image:</label>
//           <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
//         </div>
  
//         <div>
//           {/* <button type="submit">{addUpdateFlag ? 'Add Medicine' : 'Update Medicine'}</button>
//           <button type="button" onClick={clearForm}>
//             Clear
//           </button> */}
//         </div>
//       </form>
    

//             </div>
//             <div className="modal-footer">
//               <button
//               ref={refClose}
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button 
//                onClick={handleSubmit} type="button" className="btn btn-primary">
//                 Add/Update Details
//               </button>
//               {/* <button type="submit">{addUpdateFlag ? 'Add Medicine' : 'Update Medicine'}</button> */}
//           <button type="button" onClick={clearForm}>
//             Clear
//           </button>
          
              
//             </div>
//           </div>
//         </div>
//       </div>

   

//       <br />
//       <h2>Medicine List</h2>
//       <div>
//   <input
//     type="text"
//     placeholder="Search by ID"
//     value={medicineId}
//     onChange={(e) => setMedicineId(e.target.value)}
//   />
//   <button onClick={handleSearchById}>Search</button>
// </div>
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
//               {/* ... */}
//               <div>
//               <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={buttonStyle} onClick={() => editMedicine(medicine)}>
//                 Edit
//               </button>
//               </div>
            
//             <div>
//               <button style={buttonStyle} onClick={() => deleteMedicine(medicine.id)}>
//                 Delete
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
//   );
// };

// export default Medicine;

//working code with search by name
import React, { Fragment, useEffect, useState,useRef} from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';
import './Medicine.css';


const Medicine = () => {
  const [data, setData] = useState([]);
  const [medicineId, setMedicineId] = useState('');
  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [unitPrice, setUnitPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expDate, setExpDate] = useState('');
  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('');
  const [addUpdateFlag, setAddUpdateFlag] = useState(true);
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryId, setCategoryId] = useState('');
  

  useEffect(() => {
    getData();
  }, []);

  const ref =useRef(null)
  const refClose =useRef(null)

  const getData = () => {
    const data = {
      type: 'Get',
      Email: localStorage.getItem('loggedEmail'),

    };
    const url = `https://localhost:7198/api/Admin/medicines`;
  

    axios
      .get(url, data)
      .then((result) => {
        const data = result.data;
        if (data.statusCode === 200) {
          setData(data.listMedicines);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteMedicine = (id) => {
    const url = `https://localhost:7198/api/Admin/deleteMedicine/${id}`;

    axios
      .delete(url)
      .then((response) => {
        alert('Medicine deleted successfully');
        getData(); // Refresh the medicine list
      })
      .catch((error) => {
        console.error('Error deleting medicine:', error);
      });
  };

  const editMedicine = (medicine) => {
    setAddUpdateFlag(false);
    setMedicineId(medicine.id);
    setName(medicine.name);
    setManufacturer(medicine.manufacturer);
    setUnitPrice(medicine.unitPrice);
    setDiscount(medicine.discount);
    setQuantity(medicine.quantity);
    setExpDate(medicine.expDate);
    setImageUrl(medicine.imageUrl);
    setDescription(medicine.description);
    setCategoryId(medicine.categoryId);
  };

 

  const clearForm = () => {
    setMedicineId('');
    setName('');
    setManufacturer('');
    setUnitPrice('');
    setDiscount('');
    setQuantity('');
    setExpDate('');
    setFile('');
    setFilename('');
    setImageUrl('');
    setDescription('');
    setCategoryId('');
    setAddUpdateFlag(true);
  };

  const handleSubmit = async (e) => {
 
    e.preventDefault();

    const medicineData = {
      name,
      manufacturer,
      unitPrice,
      discount,
      quantity,
      expDate,
      imageUrl,
      description,
      categoryId // Modify this if you want to save the URL of the uploaded file
      // Add other fields as needed
    };

    try {
      if (addUpdateFlag) {
      
        await axios.post('https://localhost:7198/api/Admin/addUpdateMedicine', medicineData);
        alert('Medicine added successfully');
      } else{
        await axios.put(`https://localhost:7198/api/Admin/medicines/${medicineId}`, medicineData);
        alert('Medicine updated successfully');

      }
      getData();
      clearForm();
      refClose.current.click();
    } catch (error) {
      console.error('Error adding/updating medicine:', error);
    }
  };



  const cartItemStyle = {
    display: 'inline-block',
    width: '300px',
    //height: '300px',
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
  

  //for search operation
  // const handleSearchById = () => {
  //   if (medicineId) {
  //     getMedicineById(parseInt(medicineId)); // Convert the medicineId to an integer if it's stored as a string
  //   } else {
  //     console.log('Please enter a valid medicine ID');
  //   }
  // };
  
  
  // const getMedicineById = (id) => {
  //   //const url = `https://localhost:7198/api/Admin/medicineSearch/${id}`;
  //   const url = `https://localhost:7198/api/Admin/medicineSearch/${searchTerm}`;
  
  //   axios
  //     .get(url)
  //     .then((response) => {
  //       const responseData = response.data;
  //       if (responseData.statusCode === 200) {
  //         // Handle the retrieved medicine data
          
  //         const medicine = responseData.medicine;
  //         setData(medicine); // Update the state variable with the retrieved medicine
  //         console.log(medicine);
  //       } else {
  //         // Handle the case when the medicine is not found
  //         console.log('Medicine not found');
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('Error retrieving medicine:', error);
  //     });
  // };


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
        console.log('Error retrieving medicine list:', error);
      });
  };
  
  const handleSearch = () => {
    handleSearchMethod();
  };
  
  
  
  

  return (
  <>
    <Fragment>
      <AdminHeader />
      <br/>
      <br/>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={clearForm}>
        Add Medicine
      </button>
      {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add/Edit Medicine
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Medicine Name:</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                  <label>Manufacturer:</label>
                  <input type="text" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} required />
                </div>
                <div>
                  <label>Unit Price:</label>
                  <input type="text" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} required />
                </div>
                <div>
                  <label>Discount:</label>
                  <input type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} required />
                </div>
                <div>
                  <label>Quantity:</label>
                  <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                </div>
                <div>
                  <label>Expiration Date:</label>
                  <input type="text" value={expDate} onChange={(e) => setExpDate(e.target.value)} required />
                </div>
                <div>
                  <label>Image:</label>
                  <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
                </div>
                <div>
                
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button onClick={handleSubmit} type="button" className="btn btn-primary">
                Add/Update Details
              </button>
              
              <button type="button" onClick={clearForm}>
                Clear
              </button>
            </div>
          </div>
        </div>
      </div> */}

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Add/Edit Medicine
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit} className="fancy-form">
        <div className="form-group">
            <label htmlFor="categoryId">Category Id</label>
            <input type="text" id="categoryId" className="form-control" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="medicineName">Medicine Name:</label>
            <input type="text" id="medicineName" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="manufacturer">Manufacturer:</label>
            <input type="text" id="manufacturer" className="form-control" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="unitPrice">Unit Price:</label>
            <input type="text" id="unitPrice" className="form-control" value={unitPrice} onChange={(e) => setUnitPrice(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="discount">Discount:</label>
            <input type="text" id="discount" className="form-control" value={discount} onChange={(e) => setDiscount(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input type="text" id="quantity" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="expDate">Expiration Date:</label>
            <input type="text" id="expDate" className="form-control" value={expDate} onChange={(e) => setExpDate(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image:</label>
            <input type="text" id="imageUrl" className="form-control" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
          </div>
          <div className="form-buttons">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button onClick={handleSubmit} type="button" className="btn btn-primary">
              Add/Update Details
            </button>
            <button type="button" onClick={clearForm} className="btn btn-danger">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>




      <br />
      <h2>Medicine List</h2>
      <div>
      <input
        type="text"
        placeholder="Search by Name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
      {data.length > 0 ? (
        <div>
          {data.map((medicine) => (
            <div key={medicine.id} style={cartItemStyle}>
              <img src={medicine.imageUrl} alt={medicine.name} style={imageStyle} />
              <div>
                <strong>Medicine ID:</strong> {medicine.id}
              </div>
              <div>
                <strong>Category ID:</strong> {medicine.categoryId}
              </div>
              <div>
                <strong>Name</strong> {medicine.name}
              </div>
              <div>
                <strong>Manufacturer</strong> {medicine.manufacturer}
              </div>
              <div>
                <strong>Unit Price</strong> {medicine.unitPrice}
              </div>
              <div>
                <strong>ExpDate</strong> {medicine.expDate}
              </div>
              <div>
                <strong>Discount</strong> {medicine.discount}
              </div>
              <div>
                <strong>Quantity</strong> {medicine.quantity}
              </div>
              {/* <div>
                <strong>Description</strong> {medicine.description}
              </div> */}
              {/* ... */}
              <div>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={buttonStyle}
                  onClick={() => editMedicine(medicine)}
                >
                  Edit
                </button>
              </div>
              <div>
                <button style={buttonStyle} onClick={() => deleteMedicine(medicine.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No medicines found.</p>
      )}
    </Fragment>
  </>
);

};

export default Medicine;

