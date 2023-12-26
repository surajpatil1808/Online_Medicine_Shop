// import React from 'react'
// import Login from './Login';
// import Registration from './Registration';
// import Dashboard from './users/Dashboard';
// import Orders from './users/Orders';
// import Profile from './users/Profile';
// import Cart from './users/Cart';
// import MedicineDisplay from './users/MedicineDisplay';

// import AdminDashboard from './admin/AdminDashboard';
// import AdminOrders from './admin/AdminOrders';
// import CustomerList from './admin/CustomerList';
// import Medicine from './admin/Medicine';





// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";
// import Registration from './Registration';

// const RouterPage = () => {
//   return (
//     <>

//  <Router>


//  <div className='container'>
//    <Routes>
 
//          <Route exact path="/" element={<Login/>}/>
//          <Route exact path="/registration" element={<Registration/>}/>
//          <Route exact path="/dashboard" element={<Dashboard/>}/>
//          <Route exact path="/orders" element={<Orders/>}/>
//          <Route exact path="/profile" element={<Profile/>}/>
//          <Route exact path="/cart" element={<Cart/>}/>
//          <Route exact path="/products" element={<MedicineDisplay/>}/>


//          <Route exact path="/admindashboard" element={<AdminDashboard/>}/>
//          <Route exact path="/adminorders" element={<AdminOrders/>}/>
//          <Route exact path="/customers" element={<CustomerList/>}/>
//          <Route exact path="/medicine" element={<Medicine/>}/>
       

                
          
//    </Routes>
//  </div>
//  </Router>

//     </>
//   )
// }

// export default RouterPage

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './admin/AdminDashboard';
import Dashboard from './users/Dashboard';
import Login from './Login';
import Registration from './Registration';
import Orders from './users/Orders';
import Cart from './users/Cart';
//import MedicineDisplay from './users/Orders';
import MedicineDisplay from './users/MedicineDisplay';
import Profile from './users/Profile';
import MedicineHome from './MedicineHome';
import AdminLogin from './AdminLogin';
import Medicine from './admin/Medicine';
import AdminOrders from './admin/AdminOrders';
import PlaceOrder from './users/PlaceOrder';
import OrderDetails from './users/OrderDetails';
import MedicineDetails from './users/MedicineDetails';
import CustomerList from './admin/CustomerList';
//import MedicineDetails from '../components/users/MedicineDetails'; 
import HomeProductDetails from './HomeProductDetails';
import LoginDirect from './LoginDirect';
import MedDetails from './admin/MedDetails';
import OrderPlace from './users/OrderPlace';
import Home from './Home';



const RouterPage = () => {
  return (
    <Router>
      <Routes>
      
      <Route exact path="/medicinehome" element={<MedicineHome/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/admindashboard" element={<AdminDashboard/>}/>
      <Route exact path="/adminlogin" element={<AdminLogin/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Registration/>}/>
      <Route exact path="/dashboard" element={<Dashboard/>}/>
      <Route exact path="/medicine" element={<Medicine/>}/>
      <Route exact path="/adminorders" element={<AdminOrders/>}/>


      <Route exact path="/medicinedisplay" element={<MedicineDisplay/>}/>
      <Route exact path="/orders" element={<Orders/>}/>
      <Route exact path="/cart" element={<Cart/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
      <Route exact path="/placeorder" element={<PlaceOrder/>}/>
      <Route exact path="/orderdetails" element={<OrderDetails/>}/>
      <Route exact path="/medicinedetails" element={<MedicineDetails/>}/>
      <Route exact path="/customerlist" element={<CustomerList/>}/>
      <Route exact path="/orderplace" element={<OrderPlace/>}/>
      {/* <Route exact path="/" component={MedicineDisplay} /> */}
      {/* <Route path="/medicine/:id" render={({ match }) => <MedicineDetails medicineId={match.params.id} />} /> */}
      {/* <Route path="/medicine/:id" component={MedicineDetails} /> */}
      {/* <Route exact path="/" component={MedicineDisplay} />
        <Route exact path="/medicine/:id" component={MedicineDetails} /> */}
        <Route exact path="/medicine/:id" element={<MedicineDetails/>}/>
        <Route exact path="/medicine-details" element={<MedicineDetails/>} />
        <Route exact path="/productDetails/:id" element={<HomeProductDetails/>}/>
        <Route exact path="/logindirect" element={<LoginDirect/>}/>
       <Route exact path="/logindirect/:id" element={<LoginDirect/>}/>
       <Route exact path="/meddetails" element={<MedDetails/>}/>  
      </Routes>
    </Router>
  );
};

export default RouterPage;
