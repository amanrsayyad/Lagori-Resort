import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_container">
          <div className="footerLinks">
            <img src="" alt="FOOTER" />
          </div>
          <div className="footerLinks">
            <p>
              <span className="address">Address</span><br/> 
              Lagori Resort Kas Road; Satara, (MAH), India.
            </p>
          </div>
          <div className="footerLinks">
            <h2>Connect With Us</h2>
            <li>
              <Link to="/Aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/Feedback">Valuable Feedback</Link>
            </li>
            <li>
              <Link to="/Policies">Policies</Link>
            </li>
          </div>
          <div className="footerLinks">
            <h2>Social Media</h2>
            <li>
              <Link to="/">
                <i class="fab fa-instagram"></i> Instagram
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fab fa-facebook-square"></i> Facebook
              </Link>
            </li>
            <li>
              <Link to="/">
                <i class="fab fa-youtube"></i> YouTube
              </Link>
            </li>
          </div>
        </div>
      </div>
      <div className="two_links">
        <div>
          <h3 className="copy_h3">La Serene Resort & Spa &copy;2022</h3>
        </div>
        <div>
          <a href='https://stylotech.in/' target="_blank" className="company_name" rel="norefrer">Designed By: <span>StyloTech</span></a>
        </div>
      </div>
    </div>
  )
}

export default Footer