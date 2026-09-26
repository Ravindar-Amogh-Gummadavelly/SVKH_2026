import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../../data/products';
import { CategoryId } from '../../types';
import './Categories.css';

interface CategoriesProps {
  onSelectCategory: (categoryId: CategoryId) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="categories-section">
      <div className="container">
        <div className="section-header">
          <span className="tagline">PRODUCT RANGE</span>
          <h2>Explore Categories</h2>
          <p>
            Select a product category below to jump directly into our continuous digital product catalog.
          </p>
        </div>

        {/* Exactly 3 Category Cards */}
        <div className="categories-grid">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="category-card"
              onClick={() => onSelectCategory(cat.id)}
            >
              {/* Image Background */}
              <div className="category-image-wrapper">
                <img src={cat.image} alt={cat.name} className="category-bg-image" loading="lazy" />
                <div className="category-overlay-gradient"></div>
              </div>

              {/* Translucent Text Area */}
              <div className="category-content-glass">
                <div className="category-header-row">
                  <span className="category-pill">{cat.tagline}</span>
                  <div className="category-arrow-icon">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <h3 className="category-title">{cat.name}</h3>
                <p className="category-desc">{cat.description}</p>
                
                <span className="category-action-link">
                  View 4 Products →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
