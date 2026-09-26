import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../../data/storeInfo';
import './Testimonials.css';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="tagline">CUSTOMER TRUST</span>
          <h2>Customer Testimonials</h2>
          <p>
            Read what home cooks and culinary enthusiasts say about Shri Vijaya Kitchenware appliances and cookware.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="testimonial-card">
              <Quote size={32} className="quote-icon" />
              
              <div className="star-rating">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" stroke="#f59e0b" />
                ))}
              </div>

              <p className="testimonial-comment">"{item.comment}"</p>

              <div className="testimonial-author-row">
                <div className="author-avatar">
                  {item.author.charAt(0)}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{item.author}</h4>
                  <span className="author-location">
                    <MapPin size={12} />
                    {item.location} • {item.date}
                  </span>
                </div>
              </div>

              {item.isPlaceholder && (
                <div className="placeholder-tag">Placeholder Feedback</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
