import React, { Fragment, useEffect, useState,useRef } from 'react';
import axios from 'axios';

import Header from './Header';
import './Profile.css';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);
  const [type, setType] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');
  const [address4, setAddress4] = useState('');
  const [address5, setAddress5] = useState('');
  const [address6, setAddress6] = useState('');
  const [isAddAddressMode, setIsAddAddressMode] = useState(false); 
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState('');
  const [addUpdateFlag, setAddUpdateFlag] = useState(true);
  const [addressId, setAddressId] = useState('');

  

  useEffect(() => {
    getData();

  }, []);
  
  useEffect(() => {
    
    setUserId(localStorage.getItem("userId"));

    getAddress();
  }, []);

  const ref =useRef(null)
  const refClose =useRef(null)

  const getData = () => {
    const url = 'https://localhost:7198/api/Users/viewUser';
    const data = {
      Email: localStorage.getItem('username'),
      Password: '',
      Firstname: '',
      LastName: '',
      Type: '',
    };

    axios
      .post(url, data)
      .then((result) => {
        const data = result.data;
        if (data.statusCode === 200) {
          setFirstName(data.user.firstName);
          setLastName(data.user.lastName);
          setEmail(data.user.email);
          setPassword(data.user.password);
          setType(data.user.type);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAddress = () => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      const url = `https://localhost:7198/api/Users/cartAddress/${userId}`;

      axios
        .get(url)
        .then((response) => {
          const responseData = response.data;
          if (responseData.statusCode === 200) {
            setData(responseData.listAddress);
          }
        })
        .catch((error) => {
          console.error('Error retrieving cart data:', error);
        });
    } else {
      console.error('User ID is missing or undefined');
    }
  };


  const updateProfile = (e) => {
    e.preventDefault();
    const data = {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Password: password,
      Type: '',
      actionType: 'Update',
    };

    axios
      .post('https://localhost:7198/api/Users/updateProfile', data)
      .then((res) => {
        if (res.data.statusCode === 200) {
          alert('Profile updated successfully');
          handleCancel();
          getData();
          clearForm();
         
          refClose.current.click();
        } else {
          alert(res.data.statusMessage);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');


  
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    clearForm();
    getData();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // const handleAddAddress = (e) => {
  //   e.preventDefault();
  //   const userId = localStorage.getItem('userId');

  //   if (userId && address1 && address2 && address3 && address4 && address5 && address6) {
  //     const data = {
  //       UserId: userId,
  //       Address1: address1,
  //       Address2: address2,
  //       Address3: address3,
  //       Address4: address4,
  //       Address5: address5,
  //       Address6: address6,
  //     };

  //     axios
  //       .post('https://localhost:7198/api/Users/addAddress', data)
  //       .then((res) => {
  //         if (res.data.statusCode === 100) {
  //           alert('Address added successfully');
  //           setAddress1(''); 
  //           setAddress2('');
  //           setAddress3('');// Clear the address field
  //           setAddress4('');
  //           setAddress5('');
  //           setAddress6('');
  //           getAddress();
  //           setIsAddAddressMode();
  //           //refClose.current.click();
  //         } else {
  //           alert(res.data.statusMessage);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   } else {
  //     console.error('User ID is missing or address is empty');
  //   }
  // };
  const handleSubmit = async (e) => {
 
    e.preventDefault();

    const addressData = {
      UserId: userId,
            Address1: address1,
            Address2: address2,
            Address3: address3,
            Address4: address4,
            Address5: address5,
            Address6: address6,
    };

    try {
      if (addUpdateFlag) {
      
        await axios.post('https://localhost:7198/api/Users/addAddress', addressData);
        alert('Address added successfully');
      } else{
        await axios.put(`https://localhost:7198/api/Users/UpdateAddress/${addressId}`, addressData);
        alert('Address updated successfully');

      }
      getAddress();
      ClearForm();
      refClose.current.click();
    } catch (error) {
      console.error('Error adding/updating address:', error);
    }
  };


  const handleRemoveItem = (id) => {
    const url = `https://localhost:7198/api/Users/removeCartAddress/${id}`;

    axios
      .delete(url)
      .then((response) => {
        alert('Item removed successfully');
        getData(); // Refresh the medicine list
        getAddress();
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };

  const editAddress = (item) => {
    setAddUpdateFlag(false);
    setAddressId(item.id);
    //setUserId(item.userId);
    setAddress1(item.address1);
    setAddress2(item.address2);
     setAddress3(item.address3);
     setAddress4(item.address4);
     setAddress5(item.address5);
     setAddress6(item.address6);

  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   const addressData = {
  //     userId: userId,
  //     address1: address1,
  //     address2: address2,
  //     address3: address3,
  //     address4: address4,
  //     address5: address5,
  //     address6: address6
  //   };
  
  //   axios
  //     .put(`https://localhost:7198/api/Users/UpdateAddress`, addressData)
  //     .then((res) => {
  //       if (res.data.statusCode === 100) {
  //         alert('Address updated successfully');
  //         getAddress();
  //         setAddUpdateFlag(true);
  //         setAddressId('');
  //         setAddress1('');
  //         setAddress2('');
  //         setAddress3('');
  //         setAddress4('');
  //         setAddress5('');
  //         setAddress6('');
  //       } else {
  //         alert(res.data.statusMessage);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const ClearForm = () => {
    setAddressId('');
    setAddress1('');
    setAddress2('');
    setAddress3('');
    setAddress4('');
    setAddress5('');
    setAddress6('');
    setAddUpdateFlag(true);
  };

  const profileContainerStyle = {
    backgroundColor: 'white',
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  };

  const profileHeadingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const profileItemStyle = {
    marginBottom: '10px',
  };

  const editButtonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const saveButtonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };
  const cardStyle = {
    backgroundColor: 'white',
    width: '80%',
    margin: '0 auto',
    borderRadius: '11px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  };

  const cardTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const cardSubtitleStyle = {
    fontSize: '14px',
    marginBottom: '10px',
  };

  const removeButtonStyle = {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  
  

  return (
    <Fragment>
      <Header />
      <br />
      {/* <h3>My Profile</h3>
      {!isEditMode ? (
        <div>
          <div>
            <strong>First Name: </strong>
            {firstName}
          </div>
          <div>
            <strong>Last Name: </strong>
            {lastName}
          </div>
          <div>
            <strong>Email: </strong>
            {email}
          </div>
          <div>
            <strong>Password: </strong>
            {password}
          </div>
          <br />
          <button className="btn btn-primary" onClick={handleEdit}>
            Edit Profile
          </button>
          <br />
          <br />
        
        </div>
      ) : (
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button className="btn btn-primary" onClick={updateProfile}>
            Update
          </button>
          <button className="btn btn-danger" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      )} */}
      <div>
      <h3 style={profileHeadingStyle}>My Profile</h3>
      {!isEditMode ? (
        // <div>
        //   <div style={profileItemStyle}>
        //     <strong>First Name: </strong>
        //     {firstName}
        //   </div>
        //   <div style={profileItemStyle}>
        //     <strong>Last Name: </strong>
        //     {lastName}
        //   </div>
        //   <div style={profileItemStyle}>
        //     <strong>Email: </strong>
        //     {email}
        //   </div>
        //   <div style={profileItemStyle}>
        //     <strong>Password: </strong>
        //     {password}
        //   </div>
        //   <br />
        //   <button style={editButtonStyle} onClick={handleEdit}>
        //     Edit Profile
        //   </button>
        //   <br />
        //   <br />
        // </div>


        <div>
  <section style={{ backgroundColor: '#eee' }}>
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-body text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px' }} />
              <h5 className="my-3">{firstName} {lastName}</h5>
              <p className="text-muted mb-1">User</p>
              {/* <div className="d-flex justify-content-center mb-2">
                <button type="button" className="btn btn-primary">Follow</button>
                <button type="button" className="btn btn-outline-primary ms-1">Message</button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-8">
                  <p className="mb-0">Full Name</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{firstName} {lastName}</p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-8">
                  <p className="mb-0">Email</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{email}</p>
                </div>
              </div>
              <hr />
           
             
              <div className="row">
                <div className="col-sm-8">
                  <p className="mb-0">Password</p>
                </div>
                <div className="col-sm-9">
                  <p className="text-muted mb-0">{password}</p>
                </div>
              </div>
              <hr />
              <button style={editButtonStyle} onClick={handleEdit}>
            Edit Profile
          </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row">
        <div className="col">
          <div style={profileItemStyle}>
            <strong>First Name: </strong>
            {firstName}
          </div>
          <div style={profileItemStyle}>
            <strong>Last Name: </strong>
            {lastName}
          </div>
          <div style={profileItemStyle}>
            <strong>Email: </strong>
            {email}
          </div>
          <div style={profileItemStyle}>
            <strong>Password: </strong>
            {password}
          </div>
          <br />
          <button style={editButtonStyle} onClick={handleEdit}>
            Edit Profile
          </button>
          <br />
          <br />
        </div>
      </div> */}
    </div>
  </section>
</div>

      ) : (
        <div>
          <div style={profileItemStyle}>
            <strong>First Name: </strong>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div style={profileItemStyle}>
            <strong>Last Name: </strong>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div style={profileItemStyle}>
            <strong>Email: </strong>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div style={profileItemStyle}>
            <strong>Password: </strong>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <br />
          <button className="btn btn-primary" onClick={updateProfile}>
            Update
          </button>
          <button className="btn btn-danger" onClick={handleCancel}>
            Cancel
          </button>
          <br />
          <br />
        </div>
      )}
    </div>

      {/* <div
        style={{
          backgroundColor: 'white',
          width: '80%',
          margin: '0 auto',
          borderRadius: '11px',
        }}
      >
        <div className="card-deck">
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <div
                key={index}
                className="col-md-3"
                style={{ marginBottom: '21px' }}
              >
                <div className="card">
        
                  <div className="card-body">
                    <h4 className="card-title">Full Name: <h5>{item.address1}</h5></h4>
                    <h4 className="card-title">Phone No: <h5>{item.address2}</h5></h4>

                    <h4 className="card-title">Pin Code: <h5>{item.address3}</h5></h4>
                    <h4 className="card-title">State: <h5>{item.address4}</h5></h4>
                    <h4 className="card-title">City: <h5>{item.address5}</h5></h4>
                    <h4 className="card-title">House No. Building Name:<h5>{item.address6}</h5></h4>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                    <div>
              <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => editAddress(item)}>
                Edit
              </button>
              </div>


                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No Address in the Profile</p>
          )}
        </div>
      </div> */}
<br/>

<div style={cardStyle}>
<button type="button" class="btn btn-primary btn-fancy" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={ClearForm}>
  Add New Address
</button>

<h1>Saved Addresses</h1>
<div className="card-deck">
  {data && data.length > 0 ? (
    data.map((item, index) => (
      <div key={index} className="col-md-3" style={{ marginBottom: '21px' }}>
        <div className="card">
          <div className="card-header">
            Address
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              <p>{item.address1}</p>
              <footer className="blockquote-footer">Phone No: <cite title="Phone No">{item.address2}</cite></footer>
              <footer className="blockquote-footer">Pin Code: <cite title="Pin Code">{item.address3}</cite></footer>
              <footer className="blockquote-footer">State: <cite title="State">{item.address4}</cite></footer>
              <footer className="blockquote-footer">City: <cite title="City">{item.address5}</cite></footer>
              <footer className="blockquote-footer">House No/Building Name: <cite title="House No. Building Name">{item.address6}</cite></footer>
            </blockquote>
            <button
              // style={removeButtonStyle}
              className="btn btn-primary bt-sm"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remove Address
            </button>
            <button
              // style={editButtonStyle}
              type="button"
              className="btn btn-warning bt-sm"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => editAddress(item)}
            >
              Edit Address
            </button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>No Address in the Profile</p>
  )}
</div>
      {/* <div className="card-deck">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="col-md-3" style={{ marginBottom: '21px' }}>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title" style={cardTitleStyle}>
                    Full Name:
                    <br />
                    <span style={cardSubtitleStyle}>{item.address1}</span>
                  </h4>
                  <h4 className="card-title" style={cardTitleStyle}>
                    Phone No:
                    <br />
                    <span style={cardSubtitleStyle}>{item.address2}</span>
                  </h4>
                  <h4 className="card-title" style={cardTitleStyle}>
                    Pin Code:
                    <br />
                    <span style={cardSubtitleStyle}>{item.address3}</span>
                  </h4>
                  <h4 className="card-title" style={cardTitleStyle}>
                    State:
                    <br />
                    <span style={cardSubtitleStyle}>{item.address4}</span>
                  </h4>
                  <h4 className="card-title" style={cardTitleStyle}>
                    City:
                    <br />
                    <span style={cardSubtitleStyle}>{item.address5}</span>
                  </h4>
                  <h4 className="card-title" style={cardTitleStyle}>
                    House No. Building Name:
                    <br />
                    <span style={cardSubtitleStyle}>{item.address6}</span>
                  </h4>
                  <button
                    style={removeButtonStyle}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove Address
                  </button>
                  <button
                    style={editButtonStyle}
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => editAddress(item)}
                  >
                    Edit Address
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No Address in the Profile</p>
        )}
      </div> */}
    </div>
  

      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={ClearForm}>
  Add New Address
</button> */}
{/* <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
              Add/Edit Address
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">

            <form onSubmit={handleSubmit}>
            <div>
          <label>Full Name:</label>
          <input type="text" value={address1} onChange={(e) => setAddress1(e.target.value)} required />
        </div>
        <div>
          <label>Phone No:</label>
          <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} required />
        </div>
        <div>
          <label>Pin code :</label>
          <input type="text" value={address3} onChange={(e) => setAddress3(e.target.value)} required />
        </div>
        <div>
          <label>State:</label>
          <input type="text" value={address4} onChange={(e) => setAddress4(e.target.value)} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" value={address5} onChange={(e) => setAddress5(e.target.value)} required />
        </div>
        <div>
          <label>House No.Building Name:</label>
          <input type="text" value={address6} onChange={(e) => setAddress6(e.target.value)} required />
        </div>
  
        <div>
          <button type="submit">{addUpdateFlag ? 'Add Address' : 'Update Medicine'}</button>
          <button type="button" onClick={ClearForm}>
            Clear
          </button>
        </div>
      </form>
    

            </div>
            <div className="modal-footer">
              <button
              ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button 
               onClick={handleSubmit} type="button" className="btn btn-primary">
                Add/Update Details
              </button>
              <button type="submit">{addUpdateFlag ? 'Add Medicine' : 'Update Medicine'}</button>
          <button type="button" onClick={ClearForm}>
            Clear
          </button>
          
              
            </div>
          </div>
        </div>
      </div> */}

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Add/Edit Address
        </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="address1" className="form-label">Full Name:</label>
            <input type="text" className="form-control" id="address1" value={address1} onChange={(e) => setAddress1(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="address2" className="form-label">Phone No:</label>
            <input type="text" className="form-control" id="address2" value={address2} onChange={(e) => setAddress2(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="address3" className="form-label">Pin code:</label>
            <input type="text" className="form-control" id="address3" value={address3} onChange={(e) => setAddress3(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="address4" className="form-label">State:</label>
            <input type="text" className="form-control" id="address4" value={address4} onChange={(e) => setAddress4(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="address5" className="form-label">City:</label>
            <input type="text" className="form-control" id="address5" value={address5} onChange={(e) => setAddress5(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="address6" className="form-label">House No.Building Name:</label>
            <input type="text" className="form-control" id="address6" value={address6} onChange={(e) => setAddress6(e.target.value)} required />
          </div>

          {/* Buttons */}
          <div className="mb-3">
            <button type="submit" className="btn btn-primary me-2">Add/Update Details</button>
            <button type="button" className="btn btn-secondary" onClick={ClearForm}>Clear</button>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</div>

      
    </Fragment>
  );
};

export default Profile;



// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';

// import Header from './Header';

// const Profile = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [type, setType] = useState('');
//   const [address1, setAddress1] = useState('');
//   const [address2, setAddress2] = useState('');
//   const [address3, setAddress3] = useState('');
//   const [address4, setAddress4] = useState('');
//   const [address5, setAddress5] = useState('');
//   const [address6, setAddress6] = useState('');
//   const [isAddAddressMode, setIsAddAddressMode] = useState(false); 
//   const [data, setData] = useState([]);
//   const [userId, setUserId] = useState('');
//   const [addUpdateFlag, setAddUpdateFlag] = useState(true);
//   const [addressId, setAddressId] = useState('');

//   useEffect(() => {
//     getData();

//   }, []);
  
//   useEffect(() => {
//     setUserId(localStorage.getItem("userId"));

//     getAddress();
//   }, []);



//   const getData = () => {
//     const url = 'https://localhost:7198/api/Users/viewUser';
//     const data = {
//       Email: localStorage.getItem('username'),
//       Password: '',
//       Firstname: '',
//       LastName: '',
//       Type: '',
//     };

//     axios
//       .post(url, data)
//       .then((result) => {
//         const data = result.data;
//         if (data.statusCode === 200) {
//           setFirstName(data.user.firstName);
//           setLastName(data.user.lastName);
//           setEmail(data.user.email);
//           setPassword(data.user.password);
//           setType(data.user.type);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const getAddress = () => {
//     const userId = localStorage.getItem('userId');

//     if (userId) {
//       const url = `https://localhost:7198/api/Users/cartAddress/${userId}`;

//       axios
//         .get(url)
//         .then((response) => {
//           const responseData = response.data;
//           if (responseData.statusCode === 200) {
//             setData(responseData.listAddress);
//           }
//         })
//         .catch((error) => {
//           console.error('Error retrieving cart data:', error);
//         });
//     } else {
//       console.error('User ID is missing or undefined');
//     }
//   };


//   const updateProfile = (e) => {
//     e.preventDefault();
//     const data = {
//       FirstName: firstName,
//       LastName: lastName,
//       Email: email,
//       Password: password,
//       Type: '',
//       actionType: 'Update',
//     };

//     axios
//       .post('https://localhost:7198/api/Users/updateProfile', data)
//       .then((res) => {
//         if (res.data.statusCode === 200) {
//           getData();
//           clearForm();
//           alert('Profile updated successfully');
//         } else {
//           alert(res.data.statusMessage);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const clearForm = () => {
//     setFirstName('');
//     setLastName('');
//     setEmail('');
//     setPassword('');
//   };

//   const handleEdit = () => {
//     setIsEditMode(true);
//   };

//   const handleCancel = () => {
//     setIsEditMode(false);
//     clearForm();
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'firstName') {
//       setFirstName(value);
//     } else if (name === 'lastName') {
//       setLastName(value);
//     } else if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//   };

//   const handleAddAddress = (e) => {
//     e.preventDefault();
//     const userId = localStorage.getItem('userId');

//     if (userId && address1 && address2 && address3 && address4 && address5 && address6) {
//       const data = {
//         UserId: userId,
//         Address1: address1,
//         Address2: address2,
//         Address3: address3,
//         Address4: address4,
//         Address5: address5,
//         Address6: address6,
//       };

//       axios
//         .post('https://localhost:7198/api/Users/addAddress', data)
//         .then((res) => {
//           if (res.data.statusCode === 100) {
//             alert('Address added successfully');
//             setAddress1(''); 
//             setAddress2('');
//             setAddress3('');// Clear the address field
//             setAddress4('');
//             setAddress5('');
//             setAddress6('');
//             getAddress();
//             setIsAddAddressMode();
//             //refClose.current.click();
//           } else {
//             alert(res.data.statusMessage);
//           }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     } else {
//       console.error('User ID is missing or address is empty');
//     }
//   };

//   const handleRemoveItem = (id) => {
//     const url = `https://localhost:7198/api/Users/removeCartAddress/${id}`;

//     axios
//       .delete(url)
//       .then((response) => {
//         alert('Item removed successfully');
//         getData(); // Refresh the medicine list
//         getAddress();
//       })
//       .catch((error) => {
//         console.error('Error deleting item:', error);
//       });
//   };

//   const editAddress = (item) => {
//     setAddUpdateFlag(false);
//     setAddressId(item.id);
//     setAddress1(item.address1);
//     setAddress2(item.address2);
//      setAddress3(item.address3);
//      setAddress4(item.address4);
//      setAddress5(item.address5);
//      setAddress6(item.address6);

//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     const addressData = {
//       userId: userId,
//       address1: address1,
//       address2: address2,
//       address3: address3,
//       address4: address4,
//       address5: address5,
//       address6: address6
//     };
  
//     axios
//       .put(`https://localhost:7198/api/Users/UpdateAddress`, addressData)
//       .then((res) => {
//         if (res.data.statusCode === 100) {
//           alert('Address updated successfully');
//           getAddress();
//           setAddUpdateFlag(true);
//           setAddressId('');
//           setAddress1('');
//           setAddress2('');
//           setAddress3('');
//           setAddress4('');
//           setAddress5('');
//           setAddress6('');
//         } else {
//           alert(res.data.statusMessage);
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
//       <h3>My Profile</h3>
//       {!isEditMode ? (
//         <div>
//           <div>
//             <strong>First Name: </strong>
//             {firstName}
//           </div>
//           <div>
//             <strong>Last Name: </strong>
//             {lastName}
//           </div>
//           <div>
//             <strong>Email: </strong>
//             {email}
//           </div>
//           <div>
//             <strong>Password: </strong>
//             {password}
//           </div>
//           <br />
//           <button className="btn btn-primary" onClick={handleEdit}>
//             Edit
//           </button>
//           <br />
//           <br />
//           <button className="btn btn-primary" onClick={() => setIsAddAddressMode(true)}>
//             Add Address
//           </button>
//         </div>
//       ) : (
//         <form>
//           <div className="form-group">
//             <label htmlFor="firstName">First Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="firstName"
//               name="firstName"
//               value={firstName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName">Last Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="lastName"
//               name="lastName"
//               value={lastName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={email}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               name="password"
//               value={password}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <button className="btn btn-primary" onClick={updateProfile}>
//             Update
//           </button>
//           <button className="btn btn-danger" onClick={handleCancel}>
//             Cancel
//           </button>
//         </form>
//       )}



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
        
//                   <div className="card-body">
//                     <h4 className="card-title">address1: {item.address1}</h4>
//                     <h4 className="card-title">address2: {item.address2}</h4>

//                     <h4 className="card-title">address3: {item.address3}</h4>
//                     <h4 className="card-title">address4: {item.address4}</h4>
//                     <h4 className="card-title">address5: {item.address5}</h4>
//                     <h4 className="card-title">address6: {item.address6}</h4>
//                     <button
//                       className="btn btn-primary"
//                       onClick={() => handleRemoveItem(item.id)}
//                     >
//                       Remove
//                     </button>
//                     <div>
//               <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => editAddress(item)}>
//                 Edit
//               </button>
//               </div>


//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No Address in the Profile</p>
//           )}
//         </div>
//       </div>






//       {isAddAddressMode && (
//         <div>
//           <form onSubmit={handleAddAddress}>
//             <div className="form-group">
//               <label htmlFor="address1">Address1:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address1"
//                 name="address1"
//                 value={address1}
//                 onChange={(e) => setAddress1(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="address2">Address2:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address2"
//                 name="address2"
//                 value={address2}
//                 onChange={(e) => setAddress2(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="address3">Address3:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address3"
//                 name="address3"
//                 value={address3}
//                 onChange={(e) => setAddress3(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="address4">Address4:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address4"
//                 name="address4"
//                 value={address4}
//                 onChange={(e) => setAddress4(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="address5">Address5:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address5"
//                 name="address5"
//                 value={address5}
//                 onChange={(e) => setAddress5(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="address6">Address6:</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address6"
//                 name="address6"
//                 value={address6}
//                 onChange={(e) => setAddress6(e.target.value)}
//                 required
//               />
//             </div>
//             <button className="btn btn-primary" type="submit">
//               Save Address
//             </button>
//             <button className="btn btn-danger" onClick={() => setIsAddAddressMode(false)}>
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}




// {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={clearForm}>
//   Add Medicine
// </button> */}
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
//               Edit address
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
//             <div>
//           <label>Address1:</label>
//           <input type="text" value={address1} onChange={(e) => setAddress1(e.target.value)} required />
//         </div>
//         <div>
//           <label>Address2:</label>
//           <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} required />
//         </div>
//         <div>
//           <label>Address3 :</label>
//           <input type="text" value={address3} onChange={(e) => setAddress3(e.target.value)} required />
//         </div>
//         <div>
//           <label>Address4:</label>
//           <input type="text" value={address4} onChange={(e) => setAddress4(e.target.value)} required />
//         </div>
//         <div>
//           <label>Address5:</label>
//           <input type="text" value={address5} onChange={(e) => setAddress5(e.target.value)} required />
//         </div>
//         <div>
//           <label>Address6:</label>
//           <input type="text" value={address6} onChange={(e) => setAddress6(e.target.value)} required />
//         </div>
//       </form>
//             </div>
//             <div className="modal-footer">
//               <button
//               // ref={refClose}
//                 type="button"
//                 className="btn btn-secondary"
//                 data-bs-dismiss="modal"
//               >
//                 Close
//               </button>
//               <button 
//                onClick={handleSubmit} type="button" className="btn btn-primary">
//                 Update Details
//               </button>
//               {/* <button type="submit">{addUpdateFlag ? 'Add Medicine' : 'Update Medicine'}</button> */}
//           {/* <button type="button" onClick={clearForm}>
//             Clear
//           </button> */}
          
              
//             </div>
//           </div>
//         </div>
//       </div>

      
//     </Fragment>
//   );
// };

// export default Profile;



// import React, { Fragment, useEffect, useState } from 'react';
// import axios from 'axios';

// import Header from './Header';

// const Profile = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [type, setType] = useState("")

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     const url = 'https://localhost:7198/api/Users/viewUser';
//     const data = {
//       Email: localStorage.getItem('username'),
//       Password:"",
//       Firstname:"",
//       LastName:"",
//       Type:""

//     };

//     axios
//       .post(url, data)
//       .then((result) => {
//         const data = result.data;
//         if (data.statusCode === 200) {
//           setFirstName(data.user.firstName);
//           setLastName(data.user.lastName);
//           setEmail(data.user.email);
//           setPassword(data.user.password);
//           setType(data.user.type);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const updateProfile = (e) => {
//     e.preventDefault();
//     const data = {
//       FirstName: firstName,
//       LastName: lastName,
//       Email: email,
//       Password: password,
//       Type:"",
//       actionType: 'Update',
//     };

//     axios
//       .post('https://localhost:7198/api/Users/updateProfile', data)
//       .then((res) => {
//         if (res.data.statusCode === 200) {
//           getData();
//           clearForm();
//           alert('Profile updated successfully');
//         } else {
//           alert(res.data.statusMessage);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const clearForm = () => {
//     setFirstName('');
//     setLastName('');
//     setEmail('');
//     setPassword('');
//   };

//   const handleEdit = () => {
//     setIsEditMode(true);
//   };

//   const handleCancel = () => {
//     setIsEditMode(false);
//     clearForm();
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'firstName') {
//       setFirstName(value);
//     } else if (name === 'lastName') {
//       setLastName(value);
//     } else if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//   };

//   return (
//     <Fragment>
//       <Header />
//       <br />
//       <h3>My Profile</h3>
//       {!isEditMode ? (
//         <div>
//           <div>
//             <strong>First Name: </strong>
//             {firstName}
//           </div>
//           <div>
//             <strong>Last Name: </strong>
//             {lastName}
//           </div>
//           <div>
//             <strong>Email: </strong>
//             {email}
//           </div>
//           <div>
//             <strong>Password: </strong>
//             {password}
//           </div>
//           <br />
//           <button className="btn btn-primary" onClick={handleEdit}>
//             Edit
//           </button>
//         </div>
//       ) : (
//         <form>
//           <div className="form-group">
//             <label htmlFor="firstName">First Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="firstName"
//               name="firstName"
//               value={firstName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName">Last Name:</label>
//             <input
//               type="text"
//               className="form-control"
//               id="lastName"
//               name="lastName"
//               value={lastName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={email}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               name="password"
//               value={password}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <button className="btn btn-primary" onClick={updateProfile}>
//             Update
//           </button>
//           <button className="btn btn-danger" onClick={handleCancel}>
//             Cancel
//           </button>
//         </form>
//       )}
//     </Fragment>
//   );
// };

// export default Profile;





// import React from 'react'

// import { Fragment, useEffect, useState } from 'react'
// import axios from "axios";

// import Header from './Header';

// const Profile = () => {


//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState('');
//   const [data, setData] = useState([]);
//   const [type, setType] = useState('')
//  const [username, setUserName] = useState('');



    
    
//     useEffect(() => {
//      // setUserName(localStorage.getItem("username"));
//       getData();
     
//       }, []);

//       const getData=()=>{
        
//         const data={

//           Email: localStorage.getItem("username"),
//           Password:"",
//           Firstname:"",
//           LastName:"",
//           Type:""
//         };
//         const url=`https://localhost:7198/api/Users/viewUser`;
       
        

//         axios.post(url,data)
//         .then((result)=>{
//           const data=result.data;
//           if(data.statusCode===200){
//                 setFirstName(data.user.firstName);
//                 setLastName(data.user.lastName);
//                 setEmail(data.user.email);
//                 setPassword(data.user.password);
//                 setType(data.user.type)
//             }
//         })
//         .catch((error) => {
//             console.log(error);
//           });

//       };

//       const uploadFile=async(e)=>{
//         debugger;
//         e.preventDefault();
//         const data={
//            FirstName:firstName,
//            LastName:lastName,
//            Email:email,
//            Password:password,
//            actionType:'Update'
//         };
      

      
//                 const res=await axios.post(
//                     "https://localhost:7198/api/Users/updateProfile",
//                     data
//                 );
//                 if(res.data.statusCode===200  ){
//                     getData();
//                     Clear(e);
//                     alert("profile upadated successfully")
                
//                 }
//                 else{
//                     alert(res.data.statusMessage);
//                 }
//             };

        

      
        
//        const Clear=(e)=>{
//             e.preventDefault();
//             setFirstName("");
//             setLastName("");
//             setEmail("");
//             setPassword("");

//         };

      


//         return (
//           <Fragment>
//             <Header />
//             <br />
//             <form>
//               <div className="form-row">
//                 <div className="form-group col-md-12">
//                   <h3>My Profile</h3>
//                 </div>
        
//                 <div className="form-group col-md-12">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter title"
//                     onChange={(e) => setFirstName(e.target.value)}
//                     required
//                     value={firstName}
//                   />
//                 </div>
//                 <br />
//                 <div className="form-group col-md-12">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter title"
//                     onChange={(e) => setLastName(e.target.value)}
//                     required
//                     value={lastName}
//                   />
//                 </div>
//                 <div className="form-group col-md-12">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter title"
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     value={email}
//                   />
//                 </div>
//                 <div className="form-group col-md-12">
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputEmail1"
//                     placeholder="Enter title"
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     value={password}
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
//                         <td>{val.firstName}</td>
//                         <td>{val.lastName}</td>
//                         <td>{val.email}</td>
//                         <td>{val.password}</td>
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

// export default Profile





// import React from 'react'
// import { Fragment, useEffect, useState } from 'react'
// import axios from "axios";
// import Header from './Header';

// const Profile = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState('');
//   const [data, setData] = useState([]);
//   const [type, setType] = useState('')
//  const [username, setUserName] = useState('');



//   useEffect(() => {
//     setUserName(localStorage.getItem("username"));
//     getData();

 
//   }, []);

//   const getData=()=>{
//     const loggedEmail=localStorage.getItem("username") 
//     const url=`https://localhost:7198/api/Users/viewUser`;
//     const data={
//         Email: loggedEmail,
//     }
  
//     axios.post(url,data)
//     .then((result)=>{
//         const data=result.data;
//         if(data.statusCode===200){
//           setFirstName(data.user.firstName);
//                           setLastName(data.user.lastName);
//                           setEmail(data.user.email);
//                           setPassword(data.user.password);
//                           setType(data.user.type)
//         }
//     })
//           .catch((error) => {
//         console.log(error);
//       });
//   };






    
    
//   return (
//     <Fragment>
//       <Header />
//       <br></br>
//       {data ? (
//         <table
//           className="table stripped table-hover mt-4"
//           style={{ backgroundColor: "dark", color:"black", width: "80%", margin: "0 auto" }}
//         >
//           <thead className="thread-dark">
//             <tr>
//             <th scope="col">#</th>
//                     <th scope="col">FirstName</th>
//                     <th scope="col">LastName</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">Password</th>
              
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((val, index) => {
//               return (
//                 <tr>
//                   <th scope="row">{index + 1}</th>
//                   <td>{val.firstName}</td>
//                         <td>{val.lastName}</td>
//                         <td>{val.email}</td>
//                         <td>{val.password}</td>

                 
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       ) : (
//         "No data Found"
//       )}
//     </Fragment>
    
//   )
// }

// export default Profile



// import React, { useEffect, useState,Fragment} from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Profile = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [data, setData] = useState([]);
//   const [type, setType] = useState('')
//   const [username, setUserName] = useState('');

//   useEffect(() => {
//     setUserName(localStorage.getItem("username")); 
//     const username = localStorage.getItem('username');
//     getData(username);
//   }, []);

//   const getData = (username) => {
//     const url = 'https://localhost:7198/api/Users/viewUser';
//     const data = {
//       Email: username,
//     };

//     axios
//       .post(url, data)
//       .then((result) => {
//         const responseData = result.data;
//         if (responseData.statusCode === 200) {
//           const user = responseData.user;
//           setFirstName(user.firstName);
//           setLastName(user.lastName);
//           setEmail(user.email);
//           setPassword(user.password);
//           setType(user.type);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <>
//         <Fragment>
//       <Header />
//       <br></br>
//       {data ? (
//         <table
//           className="table stripped table-hover mt-4"
//           style={{ backgroundColor: "dark", color:"black", width: "80%", margin: "0 auto" }}
//         >
//           <thead className="thread-dark">
//             <tr>
//             <th scope="col">#</th>
//                     <th scope="col">FirstName</th>
//                     <th scope="col">LastName</th>
//                     <th scope="col">Email</th>
//                     <th scope="col">Password</th>
              
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((val, index) => {
//               return (
//                 <tr>
//                   <th scope="row">{index + 1}</th>
//                   <td>{val.firstName}</td>
//                         <td>{val.lastName}</td>
//                         <td>{val.email}</td>
//                         <td>{val.password}</td>

                 
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       ) : (
//         "No data Found"
//       )}
//     </Fragment>
//     </>
//   );
// };

// export default Profile;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Profile = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [iD, setiD] = useState('');
//   const [type, setType] = useState('');
//   const [status, setStatus] = useState('');
//   const [createdOn, setCreatedOn] = useState('');
//   const [fund, setFund] = useState('');

//   useEffect(() => {
//     const loggedEmail = localStorage.getItem('username');
//     getData(loggedEmail);
//   }, []);

//   const getData = (loggedEmail) => {
//     const url = 'https://localhost:7198/api/Users/viewUser';
//     const data = {
//       Email: loggedEmail,
//     };

//     axios
//       .post(url, data)
//       .then((result) => {
//         const responseData = result.data;
//         if (responseData.statusCode === 200) {
//           const user = responseData.user;
//           setFirstName(user.firstName);
//           setLastName(user.lastName);
//           setEmail(user.email);
//           setPassword(user.password);
//           setStatus(user.status);
//           setCreatedOn(user.createdOn);
//           setFund(user.fund);
//           setiD(user.iD);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <>
//       <Header />
//       <br />
//       <h3>My Profile</h3>
//       <form>
//         <div className="form-group">
//           <label htmlFor="firstName">First Name:</label>
//           <input type="text" className="form-control" id="firstName" value={firstName} disabled />
//         </div>
//         <div className="form-group">
//           <label htmlFor="lastName">Last Name:</label>
//           <input type="text" className="form-control" id="lastName" value={lastName} disabled />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" className="form-control" id="email" value={email} disabled />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input type="password" className="form-control" id="password" value={password} disabled />
//         </div>
//       </form>
//     </>
//   );
// };

// export default Profile;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Header from './Header';

// const Profile = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
    
//     getData();
//   }, []);

//   const getData = () => {
//     const loggedEmail = localStorage.getItem('username');
//     const url = 'https://localhost:7198/api/Users/viewUser';
//     const data = {
//       Email: loggedEmail,
//     };

//     axios
//       .post(url, data)
//       .then((result) => {
//         const responseData = result.data;
//         if (responseData.statusCode === 200) {
//           const user = responseData.user;
//           setFirstName(user.firstName);
//           setLastName(user.lastName);
//           setEmail(user.email);
//           setPassword(user.password);
//         } else {
//           setError('Failed to fetch profile data');
//         }
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError('An error occurred while fetching profile data');
//         setIsLoading(false);
//       });
//   };

//   if (isLoading) {
//     return (
//       <>
//         <Header />
//         <div>Loading...</div>
//       </>
//     );
//   }

//   if (error) {
//     return (
//       <>
//         <Header />
//         <div>Error: {error}</div>
//       </>
//     );
//   }

//   return (
//     <>
//       <Header />
//       <br />
//       <h3>My Profile</h3>
//       <form>
//         <div className="form-group">
//           <label htmlFor="firstName">First Name:</label>
//           <input type="text" className="form-control" id="firstName" value={firstName} disabled />
//         </div>
//         <div className="form-group">
//           <label htmlFor="lastName">Last Name:</label>
//           <input type="text" className="form-control" id="lastName" value={lastName} disabled />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" className="form-control" id="email" value={email} disabled />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input type="password" className="form-control" id="password" value={password} disabled />
//         </div>
//       </form>
//     </>
//   );
// };

// export default Profile;
