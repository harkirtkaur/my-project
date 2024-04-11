import React from 'react';
import '../CSS files/footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="container text-center">
        <h6>Contact Us</h6>
        <i class="fa-solid fa-phone"  style={{color: 'white'}}></i>
        <Link to="mailto:hrkirt18@gmail.com" target='_blank'><i class="fa-solid fa-envelope" style={{color: "#ffffff"}}></i></Link>
        <Link to="https://github.com/harkirtkaur" target='_blank'><i class="fa-brands fa-github" style={{color: "#ffffff"}}></i></Link>
        <i class="fa-brands fa-twitter" style={{color: "#ffffff"}}></i>
        <i class="fa-brands fa-instagram" style={{color: "#ffffff"}}></i>
        <hr></hr>
        <span className="text">© 2024 Company, Inc. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
