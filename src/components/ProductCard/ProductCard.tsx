import React from 'react';
import { Info, MessageSquare } from 'lucide-react';
import { Product } from '../../types';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onOpenOverlay: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenOverlay }) => {
  return (
    <div className="product-card">
      {/* Product Image Container */}
      <div className="product-image-area" onClick={() => onOpenOverlay(product)}>
        <img
          src={product.images.front}
          alt={product.name}
          className="product-main-img"
          loading="lazy"
        />
        <div className="product-image-badge">
          <span>8 Gallery Views</span>
        </div>
      </div>

      {/* Product Content Body */}
      <div className="product-card-body">
        {/* Category Pill */}
        <span className="product-category-tag">{product.categoryName}</span>

        {/* Product Name (Bold) */}
        <h3 className="product-title" onClick={() => onOpenOverlay(product)}>
          {product.name}
        </h3>

        {/* Size Badge (Separately visible) */}
        <div className="product-size-row">
          <span className="size-label">SIZE:</span>
          <span className="size-badge">{product.size}</span>
        </div>

        <p className="product-short-desc">{product.shortDescription}</p>

        {/* Action Buttons: [ MORE INFO ] [ GET INFO ] */}
        <div className="product-card-actions">
          <button
            className="btn-product-more"
            onClick={() => onOpenOverlay(product)}
            aria-label={`More Info about ${product.name}`}
          >
            <Info size={16} />
            <span>MORE INFO</span>
          </button>

          <a
            href={getWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-product-whatsapp"
            aria-label={`Get Info about ${product.name} on WhatsApp`}
          >
            <MessageSquare size={16} />
            <span>GET INFO</span>
          </a>
        </div>
      </div>
    </div>
  );
};
