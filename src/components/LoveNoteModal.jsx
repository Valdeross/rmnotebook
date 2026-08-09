import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Play, Sparkles } from 'lucide-react';

export default function LoveNoteModal({ item, onClose, onPlayTimestamp, onSpreadLove }) {
  if (!item) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 80,
        background: 'rgba(0,0,0,0.82)',
        backdropFilter: 'blur(18px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 24 }}
        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: '620px',
          background: 'linear-gradient(145deg, #111a12, #180e14)',
          border: '1px solid rgba(240,112,152,0.2)',
          borderRadius: '20px',
          padding: '28px',
          boxShadow: '0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(240,112,152,0.08)',
          position: 'relative',
          display: 'flex', flexDirection: 'column', gap: '20px',
        }}
      >
        {/* Close */}
        <button onClick={onClose} style={{
          position: 'absolute', top: '14px', right: '14px',
          width: '28px', height: '28px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.06)',
          border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: 'rgba(255,255,255,0.5)',
        }}>
          <X style={{ width: '14px', height: '14px' }} />
        </button>

        {/* Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            padding: '3px 12px', borderRadius: '9999px',
            background: 'rgba(157,191,110,0.12)',
            border: '1px solid rgba(157,191,110,0.3)',
            fontSize: '10px', fontWeight: 700, fontFamily: 'monospace',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            color: 'var(--matcha)',
          }}>{item.category}</span>
          <span style={{ fontSize: '11px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.35)' }}>{item.year}</span>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }} className="flex-col md:flex-row">
          {/* Frame */}
          <div style={{
            width: '200px', height: '200px', flexShrink: 0,
            borderRadius: '14px', overflow: 'hidden',
            background: 'rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img src={item.frame} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>

          {/* Info */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px', minWidth: 0 }}>
            <h3 className="font-display" style={{
              fontSize: 'clamp(18px, 2.5vw, 26px)',
              fontWeight: 900, textTransform: 'uppercase',
              color: 'var(--text)',
            }}>
              {item.title}
            </h3>

            <div style={{
              padding: '12px 14px', borderRadius: '12px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: 'var(--pink)', fontWeight: 700, marginBottom: '6px' }}>
                <Sparkles style={{ width: '11px', height: '11px' }} />
                Послание в кадре:
              </div>
              <p className="font-hand" style={{ fontSize: '22px', color: 'var(--matcha)', lineHeight: 1.25 }}>
                "{item.quote}"
              </p>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => onPlayTimestamp(item.timestamp)}
                style={{
                  padding: '12px', borderRadius: '12px',
                  background: 'var(--matcha)', border: 'none',
                  color: '#0c1110', fontFamily: "'Unbounded', sans-serif",
                  fontWeight: 700, fontSize: '11px',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#b8d47e'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--matcha)'}
              >
                <Play style={{ width: '14px', height: '14px', fill: 'currentColor' }} />
                Посмотреть момент в видео
              </button>

              <button
                onClick={onSpreadLove}
                style={{
                  padding: '10px', borderRadius: '12px',
                  background: 'rgba(240,112,152,0.1)',
                  border: '1px solid rgba(240,112,152,0.3)',
                  color: 'var(--pink)', fontWeight: 600, fontSize: '12px',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--pink)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(240,112,152,0.1)'; e.currentTarget.style.color = 'var(--pink)'; }}
              >
                <Heart style={{ width: '13px', height: '13px', fill: 'currentColor' }} />
                Найти секрет!
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
