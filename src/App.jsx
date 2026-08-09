import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ShowcaseList from './components/ShowcaseList';
import VideoPlayer from './components/VideoPlayer';
import InteractiveChecklist from './components/InteractiveChecklist';
import HugGenerator from './components/HugGenerator';
import LoveNoteModal from './components/LoveNoteModal';
import EasterEgg from './components/EasterEgg';

const TOTAL_PAGES = 5;

// Floating hearts background particles
function HeartsBackground() {
  const particles = [
    { left: '8%',  delay: '0s',   dur: '14s', sym: '♡' },
    { left: '18%', delay: '2s',   dur: '18s', sym: '🍃' },
    { left: '28%', delay: '5s',   dur: '12s', sym: '♡' },
    { left: '38%', delay: '1s',   dur: '16s', sym: '✿' },
    { left: '50%', delay: '7s',   dur: '11s', sym: '♡' },
    { left: '62%', delay: '3.5s', dur: '15s', sym: '🌸' },
    { left: '72%', delay: '9s',   dur: '13s', sym: '♡' },
    { left: '82%', delay: '4s',   dur: '17s', sym: '🍃' },
    { left: '91%', delay: '6s',   dur: '12s', sym: '♡' },
    { left: '15%', delay: '11s',  dur: '19s', sym: '✿' },
    { left: '55%', delay: '8s',   dur: '14s', sym: '♡' },
    { left: '75%', delay: '0.5s', dur: '16s', sym: '🌸' },
  ];

  return (
    <div className="hearts-bg">
      {particles.map((p, i) => (
        <span
          key={i}
          className="heart-particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.dur,
            fontSize: i % 3 === 0 ? '18px' : '12px',
            color: i % 2 === 0 ? 'rgba(240,112,152,0.35)' : 'rgba(157,191,110,0.25)',
          }}
        >
          {p.sym}
        </span>
      ))}
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const isScrolling = useRef(false);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Navigate to page
  const navigateTo = useCallback((page) => {
    if (page < 0 || page >= TOTAL_PAGES) return;
    if (isScrolling.current) return;
    isScrolling.current = true;
    setCurrentPage(page);
    setTimeout(() => { isScrolling.current = false; }, 850);
  }, []);

  // Wheel scroll handler
  useEffect(() => {
    const handleWheel = (e) => {
      // Check if mouse is inside an inner scrollable element that hasn't hit edge
      let el = e.target;
      while (el && el !== document.body && el !== document.documentElement) {
        const overflowY = window.getComputedStyle(el).getPropertyValue('overflow-y');
        if ((overflowY === 'auto' || overflowY === 'scroll') && el.scrollHeight > el.clientHeight + 2) {
          const isAtTop = el.scrollTop <= 5;
          const isAtBottom = Math.abs(el.scrollHeight - el.clientHeight - el.scrollTop) <= 5;

          if (e.deltaY > 0 && !isAtBottom) {
            // Internal downward scroll allowed
            return;
          }
          if (e.deltaY < 0 && !isAtTop) {
            // Internal upward scroll allowed
            return;
          }
        }
        el = el.parentElement;
      }

      e.preventDefault();
      if (isScrolling.current) return;
      if (e.deltaY > 25) navigateTo(currentPage + 1);
      else if (e.deltaY < -25) navigateTo(currentPage - 1);
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, navigateTo]);

  // Touch/swipe handler
  useEffect(() => {
    let touchStartY = 0;
    const handleTouchStart = (e) => { touchStartY = e.touches[0].clientY; };
    const handleTouchEnd = (e) => {
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(diff) < 50) return;
      if (diff > 0) navigateTo(currentPage + 1);
      else navigateTo(currentPage - 1);
    };
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentPage, navigateTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') navigateTo(currentPage + 1);
      if (e.key === 'ArrowUp' || e.key === 'PageUp') navigateTo(currentPage - 1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentPage, navigateTo]);

  const trackStyle = {
    height: `${TOTAL_PAGES * 100}vh`,
    transform: `translateY(-${currentPage * 100}vh)`,
    transition: 'transform 0.78s cubic-bezier(0.77, 0, 0.18, 1)',
    willChange: 'transform',
  };

  return (
    <div id="page-root">
      {/* Global background layers */}
      <div className="bg-glow" />
      <div className="bg-noise" />
      <HeartsBackground />

      {/* Fixed Header + Navigation */}
      <Header
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onNavigate={navigateTo}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        theme={theme}
        setTheme={setTheme}
        onEasterEgg={() => setShowEasterEgg(true)}
      />

      {/* Sliding pages track */}
      <div style={trackStyle}>
        {/* PAGE 0 — Hero / Envelope */}
        <HeroSection onScrollNext={() => navigateTo(1)} />

        {/* PAGE 1 — Showcase List */}
        <ShowcaseList onSelectItem={setSelectedItem} />

        {/* PAGE 2 — Video Player */}
        <VideoPlayer isMuted={isMuted} setIsMuted={setIsMuted} />

        {/* PAGE 3 — Checklist */}
        <InteractiveChecklist />

        {/* PAGE 4 — Hug Generator */}
        <HugGenerator />
      </div>

      {/* Modal: Love Note Detail */}
      {selectedItem && (
        <LoveNoteModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onPlayTimestamp={() => {
            setSelectedItem(null);
            setTimeout(() => navigateTo(2), 150);
          }}
          onSpreadLove={() => setShowEasterEgg(true)}
        />
      )}

      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <EasterEgg onClose={() => setShowEasterEgg(false)} />
      )}
    </div>
  );
}
