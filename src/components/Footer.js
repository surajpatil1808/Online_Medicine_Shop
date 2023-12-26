import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean egestas risus non nunc feugiat, vitae finibus massa
              tincidunt.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="footer-contact">
              <li>
                <i className="fa fa-map-marker"></i> 123 Street, City, Country
              </li>
              <li>
                <i className="fa fa-phone"></i> +1 234 567 890
              </li>
              <li>
                <i className="fa fa-envelope"></i> info@example.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-center">© 2023 Company Name. All rights reserved.</p>
            </div>
            <div className="col-md-6">
              <ul className="footer-social-icons">
                <li>
                  <a href="#" className="fa fa-facebook"></a>
                </li>
                <li>
                  <a href="#" className="fa fa-twitter"></a>
                </li>
                <li>
                  <a href="#" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="#" className="fa fa-linkedin"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
