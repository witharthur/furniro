import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        {/* Logo and Address Section */}
        <div className="footer-content-left">
          
          <div className="logo">
            Funiro.
            <p>
            400 University Drive Suite 200 Coral<br />
            Gables,<br />
            FL 33134 USA
          </p>
          </div>
          
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer-help">
          <h3>Help</h3>
          <ul>
            <li><a href="/payment">Payment Options</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/privacy">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <div className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter Your Email Address"
            />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        2023 furino. All rights reserved
      </div>
    </div>
  );
};

export default Footer;