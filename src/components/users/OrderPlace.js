import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';

import { FaUser } from 'react-icons/fa'
import { FaPills } from 'react-icons/fa';
import './Cart.css';

const OrderPlace = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [address, setAddress] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');

  useEffect(() => {
    getData();
    getAddresses();
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

  const getAddresses = () => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      const url = `https://localhost:7198/api/Users/cartAddress/${userId}`;

      axios
        .get(url)
        .then((response) => {
          const responseData = response.data;
          if (responseData.statusCode === 200) {
            setAddresses(responseData.listAddress);
          }
        })
        .catch((error) => {
          console.error('Error retrieving addresses:', error);
        });
    } else {
      console.error('User ID is missing or undefined');
    }
  };

  const generateOrderNumber = () => {
    // Generate a random number between 100000 and 999999
    const min = 100000;
    const max = 999999;
    const orderNo = Math.floor(Math.random() * (max - min + 1)) + min;
    return orderNo.toString();
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId');

    
  
    if (userId) {
        if (data.length === 0) {
            alert('Please add items to the cart before placing the order.');
            return;
          }
      
          if (!selectedAddress) {
            alert('Please select an address before placing the order.');
            return;
          }
      const orderNo = generateOrderNumber(); // Generate an order number
      const orderTotal = totalCartPrice; // Use the total cart price as the order total
      const orderStatus = 'Pending'; // Set the order status to "Pending"
    
      const orderItems = data.map((item) => ({
        OrderNo: orderNo,
        MedicineID: item.medicineID,
        Name: item.name,
        UnitPrice: item.unitPrice,
        Discount: item.discount,
        Quantity: item.quantity,
        TotalPrice: item.totalPrice,
        ImageUrl: item.imageUrl
      }));
  
      const orderData = {
        UserID: userId,
        OrderNo: orderNo,
        OrderTotal: orderTotal,
        OrderStatus: orderStatus,
        Address: selectedAddress, // Include the selected address in the order data
        OrderItems: orderItems // Include the order items in the order data
      };
  
      const url = 'https://localhost:7198/api/Medicines/placeOrder';
  
      axios
        .post(url, orderData)
        .then((response) => {
          const responseData = response.data;
          if (responseData.statusCode === 200) {
            // Remove cart data from the database
            clearCartData(userId);
  
            setData([]); // Empty the cart
            setSelectedAddress(''); // Clear the selected address
            alert(responseData.statusMessage);
            navigate("/medicinedisplay")
          }
        })
        .catch((error) => {
          console.error('Error placing order:', error);
        });
    } else {
      console.error('User ID is missing or undefined');
    }
  };
  

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
    const totalPriceArray = data.map((item) => (item.totalPrice * item.quantity)+50);
    const total = totalPriceArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    setTotalCartPrice(total);
  };

  return (
    <Fragment>
       
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">OrderPlace</Link>
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
              <li className="nav-item">
                <Link className="nav-link text-white" to="/dashboard">BackToDashBoard</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <br />
      <br />

<h2>Order Details</h2>
<div className="card-deck">
  {data.map((item, index) => (
    <div
      key={index}
      className="col-md-4"
      style={{ marginBottom: '21px' }}
    >
      <div className="card">
        <div className="row g-0">
          <div className="col-md-2">
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
                Qty: {item.quantity}
              </p>
              <p className="card-text">
                Discount: {item.discount} %
              </p>
              <p className="card-text">
                 Price After Discount: ₹ {item.totalPrice}
              </p>
              <p className="card-text">
                Delivery Charges: ₹ 50
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

<div className="container">
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
                      {/* {`userId: ${address.userId}, FullName: ${address.address1}, PhoneNo: ${address.address2}, PinCode: ${address.address3}, State: ${address.address4}, City: ${address.address5}, HouseNo: ${address.address6}`} */}
                      {` FullName: ${address.address1}, PhoneNo: ${address.address2}, PinCode: ${address.address3}, State: ${address.address4}, City: ${address.address5}, HouseNo: ${address.address6}`}
                    </option>
                  ))}
                </select>
                {selectedAddress && (
            <div>
              {selectedAddress && (
                <div>
                  {/* <p><strong>User ID:</strong> {JSON.parse(selectedAddress).userId}</p> */}
                  {/* <p><strong>Full Name:</strong> {JSON.parse(selectedAddress).FullName}</p>
                  <p><strong>Phone No:</strong> {JSON.parse(selectedAddress).PhoneNo}</p>
                  <p><strong>Pin Code:</strong> {JSON.parse(selectedAddress).PinCode}</p>
                  <p><strong>State:</strong> {JSON.parse(selectedAddress).State}</p>
                  <p><strong>City:</strong> {JSON.parse(selectedAddress).City}</p>
                  <p><strong>House No:</strong> {JSON.parse(selectedAddress).HouseNo}</p> */}

<p style={{ margin: 0, padding: 0 }}>
  <strong>Full Name:</strong> {JSON.parse(selectedAddress).FullName}
</p>
<p style={{ margin: 0, padding: 0 }}>
  <strong>Phone No:</strong> {JSON.parse(selectedAddress).PhoneNo}
</p>
<p style={{ margin: 0, padding: 0 }}>
  <strong>Pin Code:</strong> {JSON.parse(selectedAddress).PinCode}
</p>
<p style={{ margin: 0, padding: 0 }}>
  <strong>State:</strong> {JSON.parse(selectedAddress).State}
</p>
<p style={{ margin: 0, padding: 0 }}>
  <strong>City:</strong> {JSON.parse(selectedAddress).City}
</p>
<p style={{ margin: 0, padding: 0 }}>
  <strong>House No:</strong> {JSON.parse(selectedAddress).HouseNo}
</p>

                </div>
              )}
            </div>
          )}
              </form>
            )}
          </div>
      </div>
</div>

{/* <div className="container">
      <div className="row">
          <div className="col-md-12">
            {data && data.length > 0 && (
            //   <form>
            //     <select
            //       value={selectedAddress}
            //       onChange={(e) => setSelectedAddress(e.target.value)}
            //       required
            //     >
            //       <option value="">Select Address</option>
            //       {addresses.map((address) => (
            //         <option
            //           key={address.id}
            //           value={JSON.stringify({
            //             userId: address.userId,
            //             FullName: address.address1,
            //             PhoneNo: address.address2,
            //             PinCode: address.address3,
            //             State: address.address4,
            //             City: address.address5,
            //             HouseNo: address.address6,
            //           })}
            //         >
            //           {`userId: ${address.userId}, FullName: ${address.address1}, PhoneNo: ${address.address2}, PinCode: ${address.address3}, State: ${address.address4}, City: ${address.address5}, HouseNo: ${address.address6}`}
            //         </option>
            //       ))}
            //     </select>

        
            //   </form>
            <form style={{ height: '100px' }}>
  <select
    value={selectedAddress}
    onChange={(e) => setSelectedAddress(e.target.value)}
    required
    style={{ width: '100%', height: '40px', marginBottom: '20px' }}
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
</form>

            )}
          </div>
      </div>
</div> */}

{/* <div className="container">
  <div className="row">
    <div className="col-md-12">
      {data && data.length > 0 && (
        <form style={{ height: '100px' }}>
          <select
            value={selectedAddress}
            onChange={(e) => setSelectedAddress(e.target.value)}
            required
            style={{ width: '100%', height: '40px', marginBottom: '20px' }}
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
          {selectedAddress && (
            <div>
              {selectedAddress && (
                <div>
                  <p><strong>User ID:</strong> {JSON.parse(selectedAddress).userId}</p>
                  <p><strong>Full Name:</strong> {JSON.parse(selectedAddress).FullName}</p>
                  <p><strong>Phone No:</strong> {JSON.parse(selectedAddress).PhoneNo}</p>
                  <p><strong>Pin Code:</strong> {JSON.parse(selectedAddress).PinCode}</p>
                  <p><strong>State:</strong> {JSON.parse(selectedAddress).State}</p>
                  <p><strong>City:</strong> {JSON.parse(selectedAddress).City}</p>
                  <p><strong>House No:</strong> {JSON.parse(selectedAddress).HouseNo}</p>
                </div>
              )}
            </div>
          )}
        </form>
      )}
    </div>
  </div>
</div> */}


<div className="row">
          <div className="col-md-12">
            <h1>Total Order Price: {totalCartPrice}</h1>
          </div>
</div>
<div >
<form onSubmit={handlePlaceOrder}>
<button type="submit" className="btn btn-primary">
                  Place Order
                </button>
                </form>
</div>
    </Fragment>
  );
};

export default OrderPlace;
