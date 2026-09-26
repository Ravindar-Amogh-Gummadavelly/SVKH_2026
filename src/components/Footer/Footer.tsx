import React from 'react';
import { STORE_INFO } from '../../data/storeInfo';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Concise Corporate Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-brand-name">Shri Vijaya Kitchenware</div>
          <p className="footer-tagline">
            Official Digital Product Catalog &bull; Premium Roti Makers &amp; Tri-Ply Cookware
          </p>
          <div className="footer-legal-details">
            <span><strong>Business Entity:</strong> {STORE_INFO.businessEntity}</span>
            <span><strong>Owner:</strong> {STORE_INFO.legalOwner}</span>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="footer-links-col">
          <span className="footer-col-title">Quick Links</span>
          <div className="footer-nav">
            <a href="#hero">Home</a>
            <a href="#about">About Us</a>
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
            <a href="#videos">Videos</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Store & Contact Information */}
        <div className="footer-contact-col">
          <span className="footer-col-title">Store Address</span>
          <p className="footer-address">{STORE_INFO.address.fullText}</p>
          <p className="footer-phone">Phone: {STORE_INFO.phone}</p>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-copyright-bar">
        <div className="container copyright-container">
          <p>&copy; {new Date().getFullYear()} Shri Vijaya Kitchenware ({STORE_INFO.businessEntity}). All rights reserved.</p>
          <p className="footer-note">Digital Product Brochure V1.0</p>
        </div>
      </div>
    </footer>
  );
};
