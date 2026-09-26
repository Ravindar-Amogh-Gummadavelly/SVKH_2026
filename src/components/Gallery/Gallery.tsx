import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { ProductImages } from '../../types';
import './Gallery.css';

interface GalleryProps {
  images: ProductImages;
  productName: string;
}

export const Gallery: React.FC<GalleryProps> = ({ images, productName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const touchStartX = useRef<number | null>(null);

  // Standardized 8 image ordering
  const imageList = [
    { key: 'front', label: 'Front View', url: images.front },
    { key: 'alternate', label: 'Alternate Angle', url: images.alternate },
    { key: 'left', label: 'Left View', url: images.left },
    { key: 'right', label: 'Right View', url: images.right },
    { key: 'top', label: 'Top View', url: images.top },
    { key: 'bottom', label: 'Bottom View', url: images.bottom },
    { key: 'detail', label: 'Close-up Detail', url: images.detail },
    { key: 'lifestyle', label: 'Kitchen Usage', url: images.lifestyle }
  ];

  const activeImage = imageList[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  // Amazon-style Desktop Hover Magnification
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="product-gallery">
      {/* Vertical Thumbnails List (Desktop) & Horizontal (Mobile) */}
      <div className="gallery-thumbnails">
        {imageList.map((img, idx) => (
          <button
            key={img.key}
            className={`thumbnail-btn ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(idx)}
            title={img.label}
          >
            <img
              src={img.url}
              alt={`${productName} - ${img.label}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </button>
        ))}
      </div>

      {/* Main Image Viewport */}
      <div
        className="gallery-main-viewport"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={activeImage.url}
          alt={`${productName} - ${activeImage.label}`}
          className={`gallery-main-img ${isZoomed ? 'zoomed-out-base' : ''}`}
          loading="eager"
        />

        {/* Amazon-style Magnifier Zoom Lens Overlay on Desktop Hover */}
        {isZoomed && (
          <div
            className="amazon-magnifier-lens"
            style={{
              backgroundImage: `url("${activeImage.url}")`,
              backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
              backgroundSize: '250%'
            }}
          />
        )}

        {/* View Angle Pill Label */}
        <div className="gallery-angle-badge">
          <span>{activeIndex + 1} / {imageList.length} — {activeImage.label}</span>
        </div>

        <div className="gallery-zoom-hint">
          <ZoomIn size={14} />
          <span>Hover / Touch to Zoom</span>
        </div>

        {/* Navigation Arrow Controls */}
        <button
          className="gallery-arrow arrow-prev"
          onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          aria-label="Previous Image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="gallery-arrow arrow-next"
          onClick={(e) => { e.stopPropagation(); handleNext(); }}
          aria-label="Next Image"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};
