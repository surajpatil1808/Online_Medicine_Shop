import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import HomeProductDetails from './HomeProductDetails';

const LoginDirect = ({handleLoginSuccess}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        onLoginSuccess(); 
      } else if (dt.statusCode === 100) {
        alert(dt.statusMessage);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

const onLoginSuccess=()=>{
  handleLoginSuccess();


}


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

export default LoginDirect;
