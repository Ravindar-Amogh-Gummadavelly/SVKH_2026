import React from 'react';
import { Award, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';
import './About.css';

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="tagline">ABOUT OUR BRAND</span>
          <h2>Craftsmanship &amp; Quality First</h2>
          <p>
            Shri Vijaya Kitchenware is committed to supplying high-durability, food-grade cookware and appliances for Indian kitchens.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Narrative Column */}
          <div className="about-text-card">
            <h3 className="about-heading">Serving Quality Kitchenware Solutions</h3>
            <p className="about-paragraph">
              Operating under <strong>{STORE_INFO.businessEntity}</strong> led by <strong>{STORE_INFO.legalOwner}</strong>, Shri Vijaya Kitchenware delivers precision flatbread appliances and tri-ply stainless steel cookware engineered for heavy daily cooking.
            </p>
            <p className="about-paragraph">
              Our products are designed to withstand metal spoons, eliminate cooking hotspots, and drastically reduce oil consumption, making every meal healthier and faster to prepare.
            </p>

            <div className="about-features-list">
              <div className="about-feature-item">
                <CheckCircle2 className="feature-icon" size={20} />
                <span>100% Heavy-Gauge SS304 Food Grade Material</span>
              </div>
              <div className="about-feature-item">
                <CheckCircle2 className="feature-icon" size={20} />
                <span>Thermostat-Controlled Dual Element Roti Pressing</span>
              </div>
              <div className="about-feature-item">
                <CheckCircle2 className="feature-icon" size={20} />
                <span>Laser-Etched Tri-Ply Honeycomb Non-Stick Armor</span>
              </div>
              <div className="about-feature-item">
                <CheckCircle2 className="feature-icon" size={20} />
                <span>Dedicated In-Store Customer Service &amp; Support</span>
              </div>
            </div>
          </div>

          {/* Right Cards Showcase */}
          <div className="about-stats-grid">
            <div className="stat-card">
              <div className="stat-icon-wrap">
                <Award size={28} />
              </div>
              <h4>Premium Quality</h4>
              <p>Heavy-duty structural metal construction designed to outlast standard non-stick cookware.</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrap">
                <Shield size={28} />
              </div>
              <h4>Metal-Spoon Safe</h4>
              <p>Raised honeycomb laser walls shield inner non-stick coatings against metallic spatulas.</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrap">
                <HeartHandshake size={28} />
              </div>
              <h4>Direct Store Trust</h4>
              <p>Visit our physical store in Hyderabad or connect directly on WhatsApp for instant assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
