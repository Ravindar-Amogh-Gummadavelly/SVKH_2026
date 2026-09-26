import React from 'react';
import { PRODUCTS, CATEGORIES } from '../../data/products';
import { Product, CategoryId } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';
import './Catalog.css';

interface CatalogProps {
  onOpenOverlay: (product: Product) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ onOpenOverlay }) => {
  return (
    <section id="products" className="catalog-section">
      <div className="container">
        {/* Main Section Header */}
        <div className="section-header">
          <span className="tagline">COMPLETE DIGITAL CATALOG</span>
          <h2>Our Products</h2>
          <p>
            Browse all 12 precision products across 3 specialized kitchenware categories in one continuous brochure.
          </p>
        </div>

        {/* Continuous Category-by-Category Sections */}
        {CATEGORIES.map((category) => {
          const categoryProducts = PRODUCTS.filter((p) => p.category === category.id);

          return (
            <div
              key={category.id}
              id={`cat-${category.id}`}
              className="category-catalog-group"
            >
              {/* Category Group Header */}
              <div className="category-group-header">
                <div className="category-title-wrap">
                  <span className="category-badge">CATEGORY</span>
                  <h3 className="category-group-name">{category.name}</h3>
                </div>
                <p className="category-group-desc">{category.description}</p>
              </div>

              {/* 4 Product Cards Grid */}
              <div className="products-grid">
                {categoryProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onOpenOverlay={onOpenOverlay}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
