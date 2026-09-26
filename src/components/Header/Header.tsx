import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';
import { getWhatsAppUrl, getCallUrl } from '../../utils/whatsapp';
import './Header.css';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'categories', label: 'Categories' },
    { id: 'products', label: 'Products' },
    { id: 'videos', label: 'Videos' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
        <div className="header-container container">
          {/* Logo & Brand Name */}
          <a href="#hero" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}>
            <div className="logo-icon-box">
              <svg viewBox="0 0 100 100" className="brand-svg-logo">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#f59e0b" strokeWidth="4" />
                <path d="M 30 65 L 50 30 L 70 65 Z" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinejoin="round" />
                <line x1="30" y1="55" x2="70" y2="55" stroke="#f59e0b" strokeWidth="3" />
                <circle cx="50" cy="45" r="6" fill="#f59e0b" />
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-name">Shri Vijaya</span>
              <span className="brand-tagline">KITCHENWARE</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Header Actions */}
          <div className="desktop-header-actions">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <MessageSquare size={16} />
              <span>Get Info</span>
            </a>
            <a
              href={getCallUrl()}
              className="btn btn-call"
            >
              <Phone size={16} />
              <span>Call</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Backdrop & Drawer Navigation */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="brand-text">
            <span className="brand-name">Shri Vijaya</span>
            <span className="brand-tagline">KITCHENWARE</span>
          </div>
          <button
            className="drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Priority Mobile Quick Actions */}
        <div className="mobile-drawer-quick-actions">
          <button
            className="mobile-action-card highlight-products"
            onClick={() => handleNavClick('products')}
          >
            <span>Browse Products</span>
            <ChevronRight size={18} />
          </button>
          <div className="mobile-drawer-btn-grid">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp w-full"
            >
              <MessageSquare size={16} />
              <span>Get Info</span>
            </a>
            <a
              href={getCallUrl()}
              className="btn btn-call w-full"
            >
              <Phone size={16} />
              <span>Call</span>
            </a>
          </div>
        </div>

        {/* Full Mobile Navigation List */}
        <nav className="mobile-drawer-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`drawer-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span>{item.label}</span>
              <ChevronRight size={16} className="drawer-chevron" />
            </button>
          ))}
        </nav>

        <div className="drawer-footer">
          <p className="drawer-owner">Owner: {STORE_INFO.legalOwner}</p>
          <p className="drawer-entity">{STORE_INFO.businessEntity}</p>
        </div>
      </div>
    </>
  );
};
