import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Categories } from './components/Categories/Categories';
import { Catalog } from './components/Catalog/Catalog';
import { Videos } from './components/Videos/Videos';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ProductOverlay } from './components/ProductOverlay/ProductOverlay';
import { PRODUCTS } from './data/products';
import { Product, CategoryId } from './types';
import './styles/global.css';

export const App: React.FC = () => {
  const [activeOverlayProduct, setActiveOverlayProduct] = useState<Product | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // URL & Browser History Routing Handler
  useEffect(() => {
    const parseUrlAndSetOverlay = () => {
      const path = window.location.pathname;
      const match = path.match(/\/products\/([a-z0-9-]+)/i);
      const slug = match && match[1] ? match[1] : null;
      const foundProduct = slug ? PRODUCTS.find((p) => p.slug === slug) : undefined;
      
      if (foundProduct) {
        setActiveOverlayProduct(foundProduct);
        // Auto-scroll to products section behind overlay
        const productsEl = document.getElementById('products');
        if (productsEl) {
          productsEl.scrollIntoView({ behavior: 'auto' });
        }
      } else {
        setActiveOverlayProduct(null);
      }
    };

    // Initial load check
    parseUrlAndSetOverlay();

    // Listen to browser Back / Forward buttons & mobile hardware back
    const handlePopState = () => {
      parseUrlAndSetOverlay();
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    if (activeOverlayProduct) {
      document.body.classList.add('overlay-open');
    } else {
      document.body.classList.remove('overlay-open');
    }
  }, [activeOverlayProduct]);

  // Scroll Spy for Header Active Section Highlighting
  useEffect(() => {
    const sections = ['hero', 'about', 'categories', 'products', 'testimonials', 'videos', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Open Product Overlay & Push History State
  const handleOpenOverlay = (product: Product) => {
    const newPath = `/products/${product.slug}`;
    setActiveOverlayProduct(product);
    if (window.location.pathname !== newPath) {
      window.history.pushState({ overlay: true, slug: product.slug }, '', newPath);
    }
  };

  // Close Product Overlay & Push/Pop History State
  const handleCloseOverlay = () => {
    if (window.history.state?.overlay) {
      window.history.back();
    } else {
      setActiveOverlayProduct(null);
      if (window.location.pathname !== '/') {
        window.history.replaceState({}, '', '/');
      }
    }
  };

  // Select Category from Category Cards -> Jump to category section in continuous catalog
  const handleSelectCategory = (categoryId: CategoryId) => {
    const targetEl = document.getElementById(`cat-${categoryId}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      const productsEl = document.getElementById('products');
      if (productsEl) {
        productsEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="app-container">
      {/* Sticky Translucent Header */}
      <Header activeSection={activeSection} />

      {/* Main Continuous Digital Brochure Flow */}
      <main>
        {/* 1. Opening / Brand & Store Intro */}
        <Hero />

        {/* 2. About Us */}
        <About />

        {/* 3. Product Categories */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* 4. Complete Continuous Product Catalog */}
        <Catalog onOpenOverlay={handleOpenOverlay} />

        {/* 5. Customer Testimonials */}
        <Testimonials />

        {/* 6. Product Videos & Walkthroughs */}
        <Videos />

        {/* 7. Contact & Google Maps */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />

      {/* Product Detail Overlay Modal (when active) */}
      {activeOverlayProduct && (
        <ProductOverlay
          product={activeOverlayProduct}
          onClose={handleCloseOverlay}
        />
      )}
    </div>
  );
};

