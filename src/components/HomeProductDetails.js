import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './Login';
import LoginDirect from './LoginDirect';

const HomeProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [medicine, setMedicine] = useState(null);
  const [quantity, setOrderQuantity] = useState('');
  const [buyNowClicked, setBuyNowClicked] = useState(false); // Flag to track if Buy Now button is clicked
  const [showLoginForm, setShowLoginForm] = useState(false); // Flag to control rendering position of LoginDirect component

  useEffect(() => {
    getMedicineDetails(id);
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



  const handleLoginSuccess = () => {
    navigate(`/medicine/${medicine.id}`);
  };

  const buyNow=()=>{
    alert("Plese Log In");
    //localStorage.setItem('medicineid', id);
    //navigate('/logindirect')
    //handleLoginSuccess();
    setBuyNowClicked(true); 
    setShowLoginForm(true); // Show the LoginDirect component
   
  }
  


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
      {medicine ? (
        <div>
          {/* Render LoginDirect component at the top if Buy Now button is clicked */}
          {showLoginForm && <LoginDirect handleLoginSuccess={handleLoginSuccess} />}
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
                    <strong>MRP:</strong> ₹ { medicine.unitPrice}
                  </div>
                  <div>
                    <strong>Discount:</strong> {medicine.discount}%
                  </div>
                  <div>
                  <strong>Description :</strong> {medicine.description}
                  </div>

                  <div>
                   
                    <span>  <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => buyNow()}
                    >
                      Buy Now
                    </button></span>
                    {buyNowClicked && <LoginDirect handleLoginSuccess={handleLoginSuccess} />}
                  </div>

                
                </div>
        
        </div>
      ) : (
        <p>Loading medicine details...</p>
      )}
 {/* <LoginDirect handleLoginSuccess={handleLoginSuccess} /> */}
    </div>



  );
};

export default HomeProductDetails;
