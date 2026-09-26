import React, { useEffect, useState } from 'react';
import { Share2, MessageSquare, Check, Layers, Wrench, Package, ListChecks, FileText } from 'lucide-react';
import { Product } from '../../types';
import { Gallery } from '../Gallery/Gallery';
import { getWhatsAppUrl } from '../../utils/whatsapp';
import { shareProduct } from '../../utils/share';
import './ProductOverlay.css';

interface ProductOverlayProps {
  product: Product;
  onClose: () => void;
}

export const ProductOverlay: React.FC<ProductOverlayProps> = ({ product, onClose }) => {
  const [copiedLink, setCopiedLink] = useState(false);

  // Close overlay on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Native share handler with copy link feedback fallback
  const handleShare = async () => {
    const fullUrl = `${window.location.origin}/products/${product.slug}`;
    const result = await shareProduct(product.name, fullUrl);

    if (result.method === 'clipboard') {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Outside backdrop click close handler
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="product-overlay-backdrop" onClick={handleBackdropClick}>
      {/* 85-90% Viewport Flat Square Modal Box */}
      <div className="product-overlay-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Desktop Left / Center-Left: Fixed Product Gallery */}
        <div className="overlay-gallery-column">
          <Gallery images={product.images} productName={product.name} />
        </div>

        {/* Desktop Right / Mobile Body: Scrollable Product Information Column */}
        <div className="overlay-info-column">
          <div className="overlay-info-scrollable-content">
            
            {/* Header Title & Category */}
            <div className="overlay-product-header">
              <span className="overlay-category-pill">{product.categoryName}</span>
              <h2 className="overlay-product-title">{product.name}</h2>
              
              <div className="overlay-spec-badges">
                <span className="overlay-size-pill">SIZE: {product.size}</span>
                <span className="overlay-meta-pill">WT: {product.weight}</span>
                <span className="overlay-meta-pill">DIM: {product.dimensions}</span>
              </div>
            </div>

            {/* EXACT REQUIRED INFORMATION ORDER:
                1. Product Description
                2. Specifications
                3. Features & Benefits
                4. Included Contents
                5. How It Is Made
            */}

            {/* 1. Product Description */}
            <section className="info-section">
              <div className="info-section-title">
                <FileText size={18} className="section-icon" />
                <h3>1. Product Description</h3>
              </div>
              <p className="description-lead">{product.shortDescription}</p>
              <p className="description-body">{product.fullDescription}</p>
            </section>

            {/* 2. Specifications */}
            <section className="info-section">
              <div className="info-section-title">
                <ListChecks size={18} className="section-icon" />
                <h3>2. Specifications</h3>
              </div>
              <div className="specs-table">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className="spec-row">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                ))}
                <div className="spec-row">
                  <span className="spec-label">Dimensions</span>
                  <span className="spec-value">{product.dimensions}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Weight</span>
                  <span className="spec-value">{product.weight}</span>
                </div>
                {product.otherSpecs?.map((spec, idx) => (
                  <div key={`other-${idx}`} className="spec-row">
                    <span className="spec-label">{spec.label}</span>
                    <span className="spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Features & Benefits */}
            <section className="info-section">
              <div className="info-section-title">
                <Layers size={18} className="section-icon" />
                <h3>3. Features &amp; Benefits</h3>
              </div>
              <div className="features-benefits-grid">
                <div className="fb-block">
                  <h4>Key Product Features</h4>
                  <ul className="fb-list">
                    {product.features.map((feat, idx) => (
                      <li key={idx}>
                        <Check size={16} className="fb-check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="fb-block">
                  <h4>Practical Customer Benefits</h4>
                  <ul className="fb-list">
                    {product.benefits.map((ben, idx) => (
                      <li key={idx}>
                        <Check size={16} className="fb-check gold" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Included Contents */}
            <section className="info-section">
              <div className="info-section-title">
                <Package size={18} className="section-icon" />
                <h3>4. Included Contents</h3>
              </div>
              <ul className="included-list">
                {product.includedContents.map((item, idx) => (
                  <li key={idx} className="included-item">
                    <Package size={16} className="item-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* 5. How It Is Made */}
            <section className="info-section">
              <div className="info-section-title">
                <Wrench size={18} className="section-icon" />
                <h3>5. How It Is Made</h3>
              </div>
              <div className="how-made-timeline">
                {product.howItIsMade.map((step, idx) => (
                  <div key={idx} className="timeline-step">
                    <div className="step-number">{idx + 1}</div>
                    <p className="step-text">{step}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Fixed Action Bar within Information Column (Desktop & Mobile) */}
          <div className="overlay-fixed-action-bar">
            {copiedLink && (
              <div className="copied-toast">
                Link copied to clipboard!
              </div>
            )}
            
            <button
              className="btn-overlay-share"
              onClick={handleShare}
              aria-label="Share Product"
            >
              <Share2 size={18} />
              <span>SHARE PRODUCT</span>
            </button>

            <a
              href={getWhatsAppUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-overlay-whatsapp"
              aria-label="Get Info on WhatsApp"
            >
              <MessageSquare size={18} />
              <span>GET INFO</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
