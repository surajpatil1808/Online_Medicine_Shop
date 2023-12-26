// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { register } from '../services/authService.js';

// const Registration = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     try {
//       const response = await register(name, email, password);
//       if (response.success) {
//         // Registration successful, redirect to login page
//         navigate('/login');
//       } else {
//         setError(response.message);
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Registration</h2>
//       <form onSubmit={handleRegister}>
//         {error && <div className="error-message">{error}</div>}
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Registration;


// import React, { useState } from 'react';
// import axios from 'axios';

// const Registration = () => {
//   const [user, setUser] = useState({
//     firstName: '',
//     lastName: '',
//     password: '',
//     email: '',
//     type:'Users'
 
   
//     // Add other properties of the Users class here
//   });

//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     axios.post('https://localhost:7198/api/Users/registration', user)
//       .then((response) => {
//         // Handle successful registration, e.g., show success message or redirect to login page
//         console.log(response.data);
//       })
//       .catch((error) => {
//         // Handle registration error, e.g., show error message
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <h2>Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">First Name:</label>
//           <input type="text" id="firstName" name="firstName" value={user.firstName} onChange={handleChange} required />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name:</label>
//           <input type="text" id="lastName" name="lastName" value={user.lastName} onChange={handleChange} required />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" name="password" value={user.password} onChange={handleChange} required />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" value={user.email} onChange={handleChange} required />
//         </div>
      
//         {/* Add other input fields for the properties of the Users class */}
//         <div>
//           <button type="submit">Register</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Registration;



// import React, { useState } from 'react';
// import axios from 'axios';
// import {useNavigate} from "react-router-dom"

// const Registration = () => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     firstName: '',
//     lastName: '',
//     password: '',
//     email: '',
//     type: 'Users'
//     // Add other properties of the Users class here
//   });

//   const [notification, setNotification] = useState('');

//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();

//   //   axios
//   //     .post('https://localhost:7198/api/Users/registration', user)
//   //     .then((response) => {
//   //       // Handle successful registration
//   //       setNotification('Registration successful. Please login to continue.');
//   //       setTimeout(() => {
//   //         navigate('/login'); // Navigate to the login page
//   //       }, 2000);
//   //     })
//   //     .catch((error) => {
//   //       // Handle registration error
//   //       setNotification('Registration failed. Please try again.');
//   //       console.error(error);
//   //     });
//   // };
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
  
//   //   axios
//   //     .post('https://localhost:7198/api/Users/registration', user)
//   //     .then((response) => {
//   //       // Check the response status code
//   //       if (response.data.statusCode === 200) {
//   //         // Registration successful
//   //         setNotification('Registration successful. Please login to continue.');
//   //         setTimeout(() => {
//   //           navigate('/login'); // Navigate to the login page
//   //         }, 2000);
//   //       } else if (response.data.statusCode === 100) {
//   //         // Email already exists
//   //         setNotification('Email already exists. Please use a different email.');
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       // Handle registration error
//   //       setNotification('Registration failed. Please try again.');
//   //       console.error(error);
//   //     });
//   // };
//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     // Perform validations
//     if (!user.firstName || !user.lastName || !user.email || !user.password) {
//       setNotification('All fields are required.');
//       return;
//     }
  
//     if (user.password.length < 8) {
//       setNotification('Password must be at least 8 characters long.');
//       return;
//     }
  
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
//     if (!passwordRegex.test(user.password)) {
//       setNotification('Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.');
//       return;
//     }
  
//     axios
//       .post('https://localhost:7198/api/Users/registration', user)
//       .then((response) => {
//         // Check the response status code
//         if (response.data.statusCode === 200) {
//           // Registration successful
//           setNotification('Registration successful. Please login to continue.');
//           setTimeout(() => {
//             navigate('/login'); // Navigate to the login page
//           }, 2000);
//         } else if (response.data.statusCode === 100) {
//           // Email already exists
//           setNotification('Email already exists. Please use a different email.');
//         }
//       })
//       .catch((error) => {
//         // Handle registration error
//         setNotification('Registration failed. Please try again.');
//         console.error(error);
//       });
//   };
  
  

//   return (
//     <section className="vh-100" style={{ backgroundColor: '#eee' }}>
//       <div className="container h-100">
//         <div className="row d-flex justify-content-center align-items-center h-100">
//           <div className="col-lg-12 col-xl-11">
//             <div className="card text-black" style={{ borderRadius: '25px' }}>
//               <div className="card-body p-md-5">
//                 <div className="row justify-content-center">
//                   <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                     <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
//                     <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
//                       <div className="d-flex flex-row align-items-center mb-4">
//                         <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                         <div className="form-outline flex-fill mb-0">
//                           <input
//                             type="text"
//                             id="firstName"
//                             className="form-control"
//                             name="firstName"
//                             value={user.firstName}
//                             onChange={handleChange}
//                             placeholder="Your Name"
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div className="d-flex flex-row align-items-center mb-4">
//                         <i className="fas fa-user fa-lg me-3 fa-fw"></i>
//                         <div className="form-outline flex-fill mb-0">
//                           <input
//                             type="text"
//                             id="lastName"
//                             className="form-control"
//                             name="lastName"
//                             value={user.lastName}
//                             onChange={handleChange}
//                             placeholder="Last Name"
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div className="d-flex flex-row align-items-center mb-4">
//                         <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                         <div className="form-outline flex-fill mb-0">
//                           <input
//                             type="email"
//                             id="email"
//                             className="form-control"
//                             name="email"
//                             value={user.email}
//                             onChange={handleChange}
//                             placeholder="Your Email"
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div className="d-flex flex-row align-items-center mb-4">
//                         <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
//                         <div className="form-outline flex-fill mb-0">
//                           <input
//                             type="password"
//                             id="password"
//                             className="form-control"
//                             name="password"
//                             value={user.password}
//                             onChange={handleChange}
//                             placeholder="Password"
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div className="form-check d-flex justify-content-center mb-5">
//                         <input
//                           className="form-check-input me-2"
//                           type="checkbox"
//                           value=""
//                           id="form2Example3c"
//                           required
//                         />
//                         <label className="form-check-label" htmlFor="form2Example3">
//                           I agree to all statements in <a href="#!">Terms of service</a>
//                         </label>
//                       </div>

//                       <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                         <button type="submit" className="btn btn-primary btn-lg">
//                           Register
//                         </button>
//                       </div>
//                     </form>
//                     {notification && <p className="text-center">{notification}</p>}
//                   </div>
//                   <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
//                     <img
//                       src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
//                       className="img-fluid"
//                       alt="Sample image"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Registration;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: '',
    type: 'Users'
  });

  const [notification, setNotification] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform password validation
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(user.password)) {
      setValidationErrors({ password: 'Password must be at least 8 characters and include at least one letter, one number, and one special character' });
      return;
    }

    axios
      .post('https://localhost:7198/api/Users/registration', user)
      .then((response) => {
        if (response.data.statusCode === 200) {
          setNotification('Registration successful. Please login to continue.');
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else if (response.data.statusCode === 100) {
          setNotification('Email already exists. Please use a different email.');
        }
      })
      .catch((error) => {
        setNotification('Registration failed. Please try again.');
        console.error(error);
      });
  };

  return (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="firstName"
                            className={`form-control ${
                              validationErrors.firstName ? 'is-invalid' : ''
                            }`}
                            name="firstName"
                            value={user.firstName}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                          />
                          {validationErrors.firstName && (
                            <div className="invalid-feedback">{validationErrors.firstName}</div>
                          )}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="lastName"
                            className={`form-control ${
                              validationErrors.lastName ? 'is-invalid' : ''
                            }`}
                            name="lastName"
                            value={user.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            required
                          />
                          {validationErrors.lastName && (
                            <div className="invalid-feedback">{validationErrors.lastName}</div>
                          )}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="email"
                            className={`form-control ${
                              validationErrors.email ? 'is-invalid' : ''
                            }`}
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                          />
                          {validationErrors.email && (
                            <div className="invalid-feedback">{validationErrors.email}</div>
                          )}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="password"
                            className={`form-control ${
                              validationErrors.password ? 'is-invalid' : ''
                            }`}
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                          />
                          {validationErrors.password && (
                            <div className="invalid-feedback">{validationErrors.password}</div>
                          )}
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                          required
                        />
                        <label className="form-check-label" htmlFor="form2Example3">
                          I agree to all statements in <a href="#!">Terms of service</a>
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Register
                        </button>
                      </div>
                    </form>
                    {notification && <p className="text-center">{notification}</p>}
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;

