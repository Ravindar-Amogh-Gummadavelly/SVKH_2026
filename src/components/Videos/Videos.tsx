import React, { useState, useEffect } from 'react';
import { Play, Clock, Film, X } from 'lucide-react';
import { VIDEOS } from '../../data/storeInfo';
import { VideoShowcase } from '../../types';
import './Videos.css';

export const Videos: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoShowcase | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && activeVideo) {
        setActiveVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideo]);

  return (
    <section id="videos" className="videos-section">
      <div className="container">
        <div className="section-header">
          <span className="tagline">PRODUCT SHOWCASES</span>
          <h2>Videos &amp; Walkthroughs</h2>
          <p>
            Watch real product demonstrations, pressing technique guides, and scratch resistance tests.
          </p>
        </div>

        <div className="videos-grid">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="video-card"
              onClick={() => setActiveVideo(video)}
            >
              <div className="video-thumbnail-wrap">
                <img src={video.thumbnail} alt={video.title} className="video-thumb-img" />
                <div className="video-overlay">
                  <div className="play-button-glow">
                    <Play size={24} fill="#000000" color="#000000" />
                  </div>
                </div>
                <div className="video-duration">
                  <Clock size={12} />
                  <span>{video.duration}</span>
                </div>
              </div>

              <div className="video-card-body">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-desc">{video.description}</p>
                
                <span className="watch-link">
                  Watch Video Showcase →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal Box */}
        {activeVideo && (
          <div className="video-modal-backdrop" onClick={() => setActiveVideo(null)}>
            <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
              <div className="video-modal-header">
                <h3>{activeVideo.title}</h3>
                <button className="video-close-btn" onClick={() => setActiveVideo(null)}>
                  <X size={20} />
                </button>
              </div>

              <div className="video-viewport">
                <div className="video-placeholder-player">
                  <Film size={48} className="player-icon" />
                  <h4>Product Demonstration Showcase</h4>
                  <p>{activeVideo.description}</p>
                  <span className="player-note">Official video stream will be linked here upon final release.</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
