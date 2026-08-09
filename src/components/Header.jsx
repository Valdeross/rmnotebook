import React, { useState, useEffect, useRef } from 'react';
import { Heart, Volume2, VolumeX, Moon, Sun, Menu, X, ChevronUp, ChevronDown } from 'lucide-react';

const PAGES = [
  { id: 0, label: 'Открытка' },
  { id: 1, label: 'Моменты' },
  { id: 2, label: 'Видео' },
  { id: 3, label: 'Чек-лист' },
  { id: 4, label: 'Тепло' },
];

export default function Header({
  currentPage,
  totalPages,
  onNavigate,
  isMuted,
  setIsMuted,
  theme,
  setTheme,
  onEasterEgg,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef(null);

  // Easter egg: triple-click on logo within 1s
  const handleLogoClick = () => {
    clickCount.current += 1;
    clearTimeout(clickTimer.current);
    if (clickCount.current >= 3) {
      clickCount.current = 0;
      onEasterEgg();
      return;
    }
    clickTimer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 800);
  };

  return (
    <>
      {/* Top bar */}
      <header className="site-header">
        {/* Logo */}
        <button className="logo-btn" onClick={handleLogoClick} title="Секрет внутри 🐾">
          <div className="logo-heart">
            <Heart
              className="animate-heartbeat"
              style={{ width: '16px', height: '16px', fill: 'var(--pink)', color: 'var(--pink)' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <span className="font-display" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', letterSpacing: '0.04em' }}>
              ДЛЯ САМОЙ ЛУЧШЕЙ
            </span>
            <span style={{ fontSize: '10px', color: 'var(--matcha)', letterSpacing: '0.12em', fontWeight: 600 }}>
              ♡ SPECIAL EDITION 2026
            </span>
          </div>
        </button>

        {/* Right controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Confetti heart button */}
          <button
            className="pill pink"
            onClick={onEasterEgg}
            style={{ outline: '1px dashed var(--border-pink)' }}
          >
            <Heart style={{ width: '12px', height: '12px', fill: 'var(--pink)', color: 'var(--pink)' }} />
            <span className="hidden sm:inline">Сюрприз</span>
          </button>

          {/* Mute */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            style={{
              width: '34px', height: '34px',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.03)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: isMuted ? 'rgba(255,255,255,0.4)' : 'var(--matcha)',
              transition: 'all 0.2s ease',
            }}
          >
            {isMuted ? <VolumeX style={{ width: '14px', height: '14px' }} /> : <Volume2 style={{ width: '14px', height: '14px' }} />}
          </button>

          {/* Theme */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            style={{
              width: '34px', height: '34px',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.03)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text)',
              transition: 'all 0.2s ease',
            }}
          >
            {theme === 'dark'
              ? <Sun style={{ width: '14px', height: '14px', color: '#fbbf24' }} />
              : <Moon style={{ width: '14px', height: '14px', color: '#818cf8' }} />
            }
          </button>

          {/* Mobile menu */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(true)}
            style={{
              width: '34px', height: '34px',
              borderRadius: '50%',
              border: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.03)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text)',
            }}
          >
            <Menu style={{ width: '14px', height: '14px' }} />
          </button>
        </div>
      </header>

      {/* Side Dot Navigation */}
      <nav className="side-nav hidden lg:flex">
        {PAGES.map((p) => (
          <div
            key={p.id}
            className={`side-dot ${currentPage === p.id ? 'active' : ''}`}
            data-label={p.label}
            onClick={() => onNavigate(p.id)}
            title={p.label}
          />
        ))}
      </nav>

      {/* Page arrows */}
      {currentPage > 0 && (
        <button className="page-arrow up" onClick={() => onNavigate(currentPage - 1)}>
          <ChevronUp style={{ width: '22px', height: '22px' }} />
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button className="page-arrow down" onClick={() => onNavigate(currentPage + 1)}>
          <ChevronDown style={{ width: '22px', height: '22px' }} />
        </button>
      )}

      {/* Mobile overlay nav */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 70,
          background: 'rgba(0,0,0,0.93)', backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '24px',
        }}>
          <button
            onClick={() => setMobileOpen(false)}
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            <X style={{ width: '24px', height: '24px' }} />
          </button>
          {PAGES.map((p) => (
            <button
              key={p.id}
              onClick={() => { onNavigate(p.id); setMobileOpen(false); }}
              className="font-display"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '20px', fontWeight: 700, textTransform: 'uppercase',
                color: currentPage === p.id ? 'var(--pink)' : 'white',
                letterSpacing: '0.04em',
                transition: 'color 0.2s ease',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
