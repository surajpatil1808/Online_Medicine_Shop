// import React from 'react'

// const Login = () => {

//   return (
//     <div>
//       <section class="vh-100">
//   <div class="container py-5 h-100">
//     <div class="row d-flex align-items-center justify-content-center h-100">
//       <div class="col-md-8 col-lg-7 col-xl-6">
//         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"></img>
          
//       </div>
//       <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
//         <form>
         
//           <div class="form-outline mb-4">
//             <input type="email" id="form1Example13" class="form-control form-control-lg" />
//             <label class="form-label" for="form1Example13">Email address</label>
//           </div>

          
//           <div class="form-outline mb-4">
//             <input type="password" id="form1Example23" class="form-control form-control-lg" />
//             <label class="form-label" for="form1Example23">Password</label>
//           </div>

//           <div class="d-flex justify-content-around align-items-center mb-4">
           
//             <div class="form-check">
//               <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
//               <label class="form-check-label" for="form1Example3"> Remember me </label>
//             </div>
//             <a href="#!">Forgot password?</a>
//           </div>

        
//           <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

//           <div class="divider d-flex align-items-center my-4">
//             <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
//           </div>

//           <a class="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!"
//             role="button">
//             <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
//           </a>
//           <a class="btn btn-primary btn-lg btn-block" style="background-color: #55acee" href="#!"
//             role="button">
//             <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>

//         </form>
//       </div>
//     </div>
//   </div>
// </section>
//     </div>
//   )
// }

// export default Login


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../services/authService.js';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await login(email, password);
//       if (response.success) {
//         // Login successful, redirect to dashboard or appropriate page
//         navigate('/dashboard');
//       } else {
//         setError(response.message);
//       }
//     } catch (error) {
//       setError('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         {error && <div className="error-message">{error}</div>}
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
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   let navigate =useNavigate();
 
//   const [credentials, setCredentials] = useState({
//     firstName: '',
//     lastName: '',
//     password: '',
//     email: '',
//     type:''
//   });

//   const handleChange = (e) => {
//     setCredentials({
//       ...credentials,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
    
//     e.preventDefault();

//     axios.post('https://localhost:7198/api/Users/login', credentials)
      
//       .then((response) => {
//         // Handle successful login, e.g., store user token in local storage or redirect to dashboard
//         console.log(response.data);
//         navigate('/dashboard');
//       })
//       .catch((error) => {
//         // Handle login error, e.g., show error message
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" value={credentials.email} onChange={handleChange} required />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} required />
//         </div>
//         <div>
//           <button type="submit">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React from 'react'
// import { useState } from 'react';
// import axios from 'axios';
// import {useNavigate} from "react-router-dom"

// const Login = () => {

//   const navigate = useNavigate();
   

//      const [firstName, setFirstName] = useState("");
//      const [lastName, setLastName] = useState("");
//      const [email, setEmail] = useState("");
//      const [password, setPassword] = useState('');
//      const [type, setType] = useState('');
    


   


//     const handleLogin=(e)=>{
//       e.preventDefault();
//         const url=`https://localhost:7198/api/Users/login`;
//         const data={
  
//             Password:password,
//             Email:email,
//             Firstname:firstName,
//             LastName:lastName,
//             Type:type


          
//         }

//         axios.post(url, data)
//         .then((result)=>{
//          const dt=result.data;
//           if(dt.statusCode===200){
//             if(email==="admin" && password==="admin"){
//               localStorage.setItem("username",email);
//               navigate("/admindashboard");
//             }
//             else
//             {
//              localStorage.setItem("username", email);
//             // localStorage.setItem("password", password);
//             //  localStorage.setItem("loggedEmail", dt.registration.email);
//              navigate('/dashboard');
//             }
//           }
          
//           else 
//           {
//             alert(dt.statusMessage);
//           }
//         })


        

//         .catch ((error)=>{
//             console.log(error);
//           });
//     }
    
    
//   return (
   
//     <section className="vh-100">
//   <div className="container py-5 h-100">
//     <div className="row d-flex align-items-center justify-content-center h-100">
//       <div className="col-md-8 col-lg-7 col-xl-6">
//         <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//           className="img-fluid" alt="Phone image"/>
//       </div>
//       <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
//         <form>
         
//           <div className="form-outline mb-4">
//             <input type="text" id="email" className="form-control form-control-lg" value={email}  onChange={(e)=>setEmail(e.target.value)} />
//             <label className="form-label" htmlFor="form1Example13">Email address</label>
//           </div>

        
//           <div className="form-outline mb-4">
//             <input type="text" id="password" className="form-control form-control-lg" value={password}  onChange={(e)=>setPassword(e.target.value)}  />
//             <label className="form-label" htmlFor="form1Example23">Password</label>
//           </div>
           
        

    
        

//           <div className="d-flex justify-content-around align-items-center mb-4">
      
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
//               <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
//             </div>
//             <a href="#!">Forgot password?</a>
//           </div>

         
//           <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={(e)=>handleLogin(e)}>Sign in</button>
//           <span></span>
//           <span>New User? Register Here</span>
       

//           <div className="divider d-flex align-items-center my-4">
//             <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
//           </div>
          

//           <a className="btn btn-primary btn-lg btn-block"style={{ backgroundColor: "#3b5998" }} href="#!"
//             role="button">
//             <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
//           </a>
//           <a className="btn btn-primary btn-lg btn-block" style={{backgroundColor:"#55acee"}} href="#!"
//             role="button">
//             <i className="fab fa-twitter me-2"></i>Continue with Twitter</a>

//         </form>
//       </div>
//     </div>
//   </div>
// </section>
 
   

//   )
// }

// export default Login



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const url = `https://localhost:7198/api/Users/login`;
//     const data = {
//       Password: password,
//       Email: email,
//       Firstname: '',
//       LastName: '',
//       Type: '',
//     };

//     axios
//       .post(url, data)
//       .then((result) => {
//         const dt = result.data;
//         if (dt.statusCode === 200) {
//           if (email === 'admin' && password === 'admin') {
//             localStorage.setItem('username', email);
//             navigate('/admindashboard');
//           } else {
//             localStorage.setItem('username', email);
//             navigate('/dashboard');
//           }
//         } else {
//           alert(dt.statusMessage);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <section className="vh-100">
//       <div className="container py-5 h-100">
//         <div className="row d-flex align-items-center justify-content-center h-100">
//           <div className="col-md-8 col-lg-7 col-xl-6">
//             <img
//               src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//               className="img-fluid"
//               alt="Phone image"
//             />
//           </div>
//           <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
//             <form>
//               <div className="form-outline mb-4">
//                 <input
//                   type="email"
//                   id="email"
//                   className="form-control form-control-lg"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label className="form-label" htmlFor="form1Example13">
//                   Email address
//                 </label>
//               </div>

//               <div className="form-outline mb-4">
//                 <input
//                   type="password"
//                   id="password"
//                   className="form-control form-control-lg"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <label className="form-label" htmlFor="form1Example23">
//                   Password
//                 </label>
//               </div>

//               <div className="d-flex justify-content-around align-items-center mb-4">
//                 <div className="form-check">
//                   <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
//                   <label className="form-check-label" htmlFor="form1Example3">
//                     Remember me
//                   </label>
//                 </div>
//                 <a href="#!">Forgot password?</a>
//               </div>

//               <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleLogin}>
//                 Sign in
//               </button>

//               <div className="divider d-flex align-items-center my-4">
//                 <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
//               </div>

//               <a
//                 className="btn btn-primary btn-lg btn-block"
//                 style={{ backgroundColor: '#3b5998' }}
//                 href="#!"
//                 role="button"
//               >
//                 <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
//               </a>
//               <a
//                 className="btn btn-primary btn-lg btn-block"
//                 style={{ backgroundColor: '#55acee' }}
//                 href="#!"
//                 role="button"
//               >
//                 <i className="fab fa-twitter me-2"></i>Continue with Twitter
//               </a>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();

    const url = 'https://localhost:7198/api/Users/login';
    const data = {

      Password: password,
      Email: email,
      Firstname: '',
      LastName: '',
      Type: '',
    };

    axios
      .post(url, data)
      .then((result) => {
        const dt = result.data;
        if (dt.statusCode === 200) {
          localStorage.setItem('userId', dt.userId);
            localStorage.setItem('username', email);
            //alert(dt.statusMessage);
            navigate('/medicinedisplay');
          
        } 
        else if (dt.statusCode === 100) {
          alert(dt.statusMessage);
        
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="vh-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }}></i>
              <span className="h1 fw-bold mb-0">Logo</span>
            </div>
            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
              <form style={{ width: '23rem' }}>
                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                  Log in
                </h3>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form2Example18">
                    Email address
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form2Example28"
                    className="form-control form-control-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form2Example28">
                    Password
                  </label>
                </div>
                <div className="pt-1 mb-4">
                  <button className="btn btn-info btn-lg btn-block" type="button" onClick={handleLogin}>
                    Login
                  </button>
                </div>
                <p className="small mb-5 pb-lg-2">
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </p>
                <p>
                  Don't have an account? <Link to="/register" className="link-info">Register here</Link>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="https://media.istockphoto.com/id/1215516053/photo/mobile-service-or-app-for-purchasing-medicines-in-online-pharmacy-drugstore-smartphone-and.jpg?s=612x612&w=0&k=20&c=7kff3mr9_MM7GKJXLFmVr9V4HlmP6eAxngX9VKh6L58="
              alt="Login image"
               className="w-80 h-500"
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
