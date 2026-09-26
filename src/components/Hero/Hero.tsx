import React from 'react';
import { ArrowRight, ShieldCheck, Flame, Sparkles, MapPin, Phone, MessageSquare } from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';
import { getWhatsAppUrl, getCallUrl } from '../../utils/whatsapp';
import { getCurrentStoreStatus } from '../../utils/storeHours';
import './Hero.css';

export const Hero: React.FC = () => {
  const storeStatus = getCurrentStoreStatus();

  const handleExploreClick = () => {
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-glow"></div>
      
      <div className="container hero-container">
        {/* Brand Tagline & Status Badge */}
        <div className="hero-badge-row">
          <div className="hero-badge">
            <Sparkles size={14} className="badge-icon" />
            <span>OFFICIAL DIGITAL CATALOG</span>
          </div>
          <div className={`store-status-pill ${storeStatus.isOpen ? 'open' : 'closed'}`}>
            <span className="status-dot"></span>
            <span>{storeStatus.displayText}</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-title">
          Shri Vijaya <span className="text-gradient">Kitchenware</span>
        </h1>

        <p className="hero-subtitle">
          Engineered for Excellence. Crafted for Indian Homes. Explore our continuous digital catalog featuring heavy-duty <strong>Roti Makers</strong>, <strong>Tri-Ply Honeycomb Cookware</strong>, and <strong>Tri-Ply HexaPro Cook &amp; Serve</strong>.
        </p>

        {/* Feature Highlights Pills */}
        <div className="hero-highlights">
          <div className="highlight-item">
            <Flame size={18} className="highlight-icon" />
            <span>Dual Heating Roti Tech</span>
          </div>
          <div className="highlight-item">
            <ShieldCheck size={18} className="highlight-icon" />
            <span>Laser Honeycomb Armor</span>
          </div>
          <div className="highlight-item">
            <Sparkles size={18} className="highlight-icon" />
            <span>100% Metal-Spoon Friendly</span>
          </div>
        </div>

        {/* Main CTA Actions */}
        <div className="hero-cta-group">
          <button className="btn-hero-primary" onClick={handleExploreClick}>
            <span>Explore Catalog</span>
            <ArrowRight size={18} />
          </button>
          
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-whatsapp"
          >
            <MessageSquare size={18} />
            <span>Get Info on WhatsApp</span>
          </a>

          <a href={getCallUrl()} className="btn-hero-call">
            <Phone size={18} />
            <span>Call Store</span>
          </a>
        </div>

        {/* Store & Location Quick Info Banner */}
        <div className="store-intro-banner">
          <div className="banner-left">
            <div className="location-icon-box">
              <MapPin size={22} />
            </div>
            <div className="location-details">
              <span className="location-label">PHYSICAL STORE LOCATION</span>
              <p className="location-address">{STORE_INFO.address.fullText}</p>
            </div>
          </div>
          <div className="banner-right">
            <div className="seller-meta">
              <span className="meta-label">LEGAL BUSINESS ENTITY</span>
              <p className="meta-value">{STORE_INFO.businessEntity}</p>
              <span className="meta-sub">Owner: {STORE_INFO.legalOwner}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
