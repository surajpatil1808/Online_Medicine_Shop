// import React from 'react'
// import Footer from './Footer'
// import Navbar from './Navbar'


// const Home = () => {
//   return (
//     <div>    <Navbar />
//     <Footer/></div>
//   )
// }

// export default Home
// import React from 'react';
// import './Home.css';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import BannerImg from "../assets/images.jpg";

// const Home = () => {
//   return (
//     <div className="home">
//       <Navbar className="header">
//         <h1>Welcome to Medicines Online Shop</h1>
//         <p>Get your medicines delivered to your doorstep!</p>
//       </Navbar>

//       <div className="hero-banner">
//         <div className="content">
//           <div className="text-content">
//             <div className="ctas">
//               <div className="banner-cta">Read More</div>
//               <div className="banner-cta v2">Shop Now</div>
//             </div>
//           </div>
//           <img className="banner-img" src={BannerImg} alt="Banner" />
//         </div>
//       </div>

//       <Footer className="footer">
//         {/* Add the footer component here */}
//       </Footer>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import BannerImg from '../assets/images.jpg';
import HeaderHome from './HeaderHome';
import MedPlusTemplate from './MedPlusTemplate';



const Home = () => {
  return (
    <div className="home">
      <div>
      <Navbar className="header">
        <h1>Welcome to Medicines Online Shop</h1>
        <p>Get your medicines delivered to your doorstep!</p>
      </Navbar>
      </div>
<br/>
<MedPlusTemplate />
      {/* <div>
      <HeaderHome className="header">
        <h1>Welcome to Medicines Online Shop</h1>
        <p>Get your medicines delivered to your doorstep!</p>
      </HeaderHome>
      </div> */}
    
      <section className="featured-products">
        <h2>Featured Products</h2>
        {/* Add your featured products here */}
      </section>

      <section className="popular-products">
        <h2>Popular Products</h2>
        {/* Add your popular products here */}
      </section>

      <section className="latest-news">
        <h2>Latest News</h2>
        {/* Add your latest news content here */}
      </section>

      <div className="hero-banner">
        <div className="content">
          <div className="text-content">
            <div className="ctas">
              <div className="banner-cta">Read More</div>
              <div className="banner-cta v2">Shop Now</div>
            </div>
          </div>
          <img className="banner-img" src={BannerImg} alt="Banner" />
        </div>
      </div>

      <Footer className="footer">
        {/* Add the footer component here */}
      </Footer>
    </div>
  );
};

export default Home;
