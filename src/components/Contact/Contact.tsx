import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, ExternalLink, Star, Facebook, Instagram, Youtube } from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';
import { getWhatsAppUrl, getCallUrl } from '../../utils/whatsapp';
import { getCurrentStoreStatus } from '../../utils/storeHours';
import './Contact.css';

export const Contact: React.FC = () => {
  const storeStatus = getCurrentStoreStatus();

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="tagline">VISIT OR GET IN TOUCH</span>
          <h2>Contact &amp; Store Location</h2>
          <p>
            Connect directly with our team on WhatsApp, call our Hyderabad store, or visit us in person.
          </p>
        </div>

        {/* Desktop 2 Columns / Mobile Stacked Layout */}
        <div className="contact-grid">
          
          {/* LEFT COLUMN: Store Details, Operating Hours, Social & Actions */}
          <div className="contact-left-col">
            
            {/* Mobile Prominent Quick Action Buttons */}
            <div className="mobile-contact-actions-row">
              <a href={getCallUrl()} className="btn btn-call btn-lg w-full">
                <Phone size={18} />
                <span>CALL STORE</span>
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg w-full"
              >
                <MessageSquare size={18} />
                <span>WHATSAPP</span>
              </a>
            </div>

            {/* Direct Contact Info Card */}
            <div className="contact-info-card">
              <h3 className="contact-card-title">Store Contact Info</h3>
              
              <div className="info-list">
                <div className="info-list-item">
                  <div className="info-icon"><Phone size={18} /></div>
                  <div className="info-content">
                    <span className="info-label">Phone Number</span>
                    <a href={getCallUrl()} className="info-value-link">{STORE_INFO.phone}</a>
                  </div>
                </div>

                <div className="info-list-item">
                  <div className="info-icon"><MessageSquare size={18} /></div>
                  <div className="info-content">
                    <span className="info-label">WhatsApp Business</span>
                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-value-link"
                    >
                      {STORE_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="info-list-item">
                  <div className="info-icon"><Mail size={18} /></div>
                  <div className="info-content">
                    <span className="info-label">Email Address</span>
                    <a href={`mailto:${STORE_INFO.email}`} className="info-value-link">{STORE_INFO.email}</a>
                  </div>
                </div>

                <div className="info-list-item">
                  <div className="info-icon"><MapPin size={18} /></div>
                  <div className="info-content">
                    <span className="info-label">Physical Address</span>
                    <p className="info-text">{STORE_INFO.address.fullText}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Operating Hours & Dynamic Status Engine */}
            <div className="contact-info-card">
              <div className="card-header-with-status">
                <div className="card-title-wrap">
                  <Clock size={20} className="header-icon" />
                  <h3>Weekly Store Hours</h3>
                </div>
                <div className={`store-status-pill ${storeStatus.isOpen ? 'open' : 'closed'}`}>
                  <span className="status-dot"></span>
                  <span>{storeStatus.displayText}</span>
                </div>
              </div>

              <div className="schedule-table">
                {STORE_INFO.schedule.map((sch, idx) => (
                  <div key={idx} className="schedule-row">
                    <span className="day-name">{sch.day}</span>
                    <span className="hours-val">
                      {sch.isClosed ? 'Closed' : `${sch.openTime} – ${sch.closeTime}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Reviews & Social Media Links */}
            <div className="contact-social-row">
              <a
                href={STORE_INFO.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-google-review"
              >
                <Star size={18} fill="#f59e0b" stroke="#f59e0b" />
                <span>Review Us on Google</span>
                <ExternalLink size={14} />
              </a>

              <div className="social-icon-links">
                <a
                  href={STORE_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={STORE_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={STORE_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href={STORE_INFO.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title="WhatsApp"
                >
                  <MessageSquare size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Google Maps Embed + External Link */}
          <div className="contact-right-col">
            <div className="map-embed-wrapper">
              <div className="map-top-bar">
                <div className="map-brand-title">
                  <MapPin size={16} className="map-pin-icon" />
                  <span>Google Maps Location</span>
                </div>
                <a
                  href={STORE_INFO.mapsExternalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-external-link"
                >
                  <span>Open in Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              <iframe
                title="Shri Vijaya Kitchenware Google Maps Location"
                src={STORE_INFO.mapsEmbedUrl}
                className="google-map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
