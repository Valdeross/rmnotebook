import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Play, ArrowUpRight } from 'lucide-react';

export const showcaseItems = [
  {
    id: 1, title: 'ТЕПЛО ТАМ ГДЕ ТЫ',
    category: 'ГЛАВНЫЕ СЛОВА', year: '2026',
    frame: './media/frames/frame_019.jpg',
    quote: 'Тепло только там, где есть ты!!!!',
    timestamp: 4.4, tag: 'Самое важное',
  },
  {
    id: 4, title: 'ТВОЯ СВЕТЛАЯ УЛЫБКА',
    category: 'ИСКРЕННОСТЬ', year: '2026',
    frame: './media/frames/frame_021.jpg',
    quote: 'Твой счастливый взгляд освещает всё вокруг',
    timestamp: 5.0, tag: 'Улыбка (5.0s)',
  },
  {
    id: 5, title: 'НЕЖНОСТЬ В ДЕТАЛЯХ',
    category: 'ТЁПЛЫЕ МИНУТЫ', year: '2026',
    frame: './media/frames/frame_022.jpg',
    quote: 'Самые добрые моменты, к которым хочется возвращаться',
    timestamp: 5.5, tag: 'Нежность (5.5s)',
  },
  {
    id: 6, title: 'УЮТНЫЕ ВЕЧЕРА',
    category: 'НАШИ ВСТРЕЧИ', year: '2026',
    frame: './media/frames/frame_025.jpg',
    quote: 'Когда время замедляет ход и весь мир подождёт',
    timestamp: 6.0, tag: 'Атмосфера (6.0s)',
  },
  {
    id: 7, title: 'СВЕТЯЩИЙСЯ ВЗГЛЯД',
    category: 'РАДОСТЬ ДНЯ', year: '2026',
    frame: './media/frames/frame_027.jpg',
    quote: 'Твои глаза, полные тепла и добра',
    timestamp: 6.5, tag: 'Счастье (6.5s)',
  },
  {
    id: 8, title: 'МОМЕНТЫ РАДОСТИ',
    category: 'ПАМЯТНЫЙ КАДР', year: '2026',
    frame: './media/frames/frame_029.jpg',
    quote: 'Каждая секунда рядом с тобой дарит улыбку',
    timestamp: 7.0, tag: 'Воспоминания (7.0s)',
  },
  {
    id: 9, title: 'ОСОБЕННЫЙ ДЕНЬ',
    category: 'ВМЕСТЕ ♡', year: '2026',
    frame: './media/frames/frame_030.jpg',
    quote: 'Наши самые любимые и уютные истории',
    timestamp: 7.5, tag: 'Любовь (7.5s)',
  },
  {
    id: 10, title: 'ТЕПЛЫЕ ОБНИМАШКИ',
    category: 'ЗАБОТА', year: '2026',
    frame: './media/frames/frame_035.jpg',
    quote: 'В твоих объятиях становится так легко и тепло',
    timestamp: 8.5, tag: 'Забота (8.5s)',
  },
  {
    id: 11, title: 'КОТИК СПРАВИТСЯ',
    category: 'ПОДДЕРЖКА 24/7', year: '2026',
    frame: './media/frames/frame_041.jpg',
    quote: 'Котик, ты со всем справишься! Я верю в тебя 🐱',
    timestamp: 10.0, tag: 'Поддержка (10.0s)',
  },
  {
    id: 12, title: 'FOR THE BEST GIRL',
    category: 'БЕСКОНЕЧНОСТЬ', year: '∞',
    frame: './media/frames/frame_043.jpg',
    quote: 'Для самой лучшей девушки на свете ♡',
    timestamp: 10.5, tag: 'Финал (10.5s)',
  },
];

export default function ShowcaseList({ onSelectItem }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const activeItem = showcaseItems.find((i) => i.id === hoveredId);

  return (
    <div className="page" style={{ justifyContent: 'flex-start', overflowY: 'auto' }}>
      {/* Sticky section header */}
      <div style={{
        width: '100%',
        paddingTop: '80px',
        paddingBottom: '8px',
        textAlign: 'center',
        flexShrink: 0,
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '5px 16px',
          border: '1px dashed rgba(157,191,110,0.3)',
          borderRadius: '9999px',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--matcha)',
          marginBottom: '6px',
        }}>
          <Sparkles style={{ width: '12px', height: '12px' }} />
          Любимые моменты
          <Sparkles style={{ width: '12px', height: '12px' }} />
        </div>
        <p style={{ fontSize: '11px', opacity: 0.4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          наведи на строчку · нажми чтобы узнать больше
        </p>
      </div>

      {/* List container */}
      <div style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '4px 0 24px' }}>
        {showcaseItems.map((item) => {
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              style={{ position: 'relative', width: '100%', padding: '14px 0', cursor: 'pointer' }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectItem(item)}
            >
              {/* Highlight strip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    layoutId="strip"
                    className="row-strip"
                    initial={{ opacity: 0, scaleY: 0.8 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0.8 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </AnimatePresence>

              {/* Row content */}
              <div
                className={`row-text${isHovered ? ' lit' : ''}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 clamp(16px, 4vw, 56px)',
                }}
              >
                {/* Left label */}
                <div style={{ width: '22%', display: 'none' }} className="md-show">
                  <span className="sub" style={{ fontSize: '11px', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.65 }}>
                    {item.category}
                  </span>
                </div>

                {/* Center title */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: 'clamp(22px, 5.5vw, 72px)',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      transition: 'transform 0.18s ease',
                      transform: isHovered ? 'scale(1.018)' : 'scale(1)',
                    }}
                  >
                    {item.title}
                  </h2>
                  {/* Mobile subtitle */}
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '2px' }} className="md-hide">
                    <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.6 }}>{item.category}</span>
                  </div>
                </div>

                {/* Right year */}
                <div style={{ width: '22%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '6px' }} className="md-show">
                  <span className="sub" style={{ fontSize: '12px', fontFamily: 'monospace', fontWeight: 700, opacity: 0.65 }}>{item.year}</span>
                  <ArrowUpRight style={{
                    width: '16px', height: '16px',
                    opacity: isHovered ? 1 : 0.25,
                    transform: isHovered ? 'translate(2px,-2px)' : 'translate(0,0)',
                    transition: 'all 0.2s ease',
                  }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating right card — follows cursor */}
      <AnimatePresence>
        {hoveredId && activeItem && (
          <>
            {/* Main preview card */}
            <motion.div
              key={`right-${activeItem.id}`}
              initial={{ opacity: 0, scale: 0.82, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.82, y: 16 }}
              transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              style={{
                position: 'fixed',
                left: Math.min(window.innerWidth - 290, mousePos.x + 28),
                top: Math.max(70, mousePos.y - 155),
                zIndex: 55,
                pointerEvents: 'none',
                width: '270px',
                borderRadius: '14px',
                overflow: 'hidden',
                background: '#0c1110',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.7), 0 0 24px rgba(157,191,110,0.08)',
              }}
            >
              {/* Image area */}
              <div style={{
                height: '200px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(157,191,110,0.05)',
                padding: '12px',
                position: 'relative',
              }}>
                <img src={activeItem.frame} alt={activeItem.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                <div style={{
                  position: 'absolute', top: '8px', right: '8px',
                  display: 'flex', alignItems: 'center', gap: '4px',
                  padding: '2px 8px', background: 'rgba(0,0,0,0.75)',
                  borderRadius: '6px', border: '1px solid rgba(240,112,152,0.3)',
                  fontSize: '9px', fontFamily: 'monospace', color: 'var(--pink)',
                }}>
                  <Heart style={{ width: '9px', height: '9px', fill: 'currentColor' }} />
                  КАДР
                </div>
              </div>
              {/* Footer */}
              <div style={{ padding: '10px 12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', fontWeight: 700, color: 'var(--matcha)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{activeItem.category}</span>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.35)' }}>{activeItem.year}</span>
                </div>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>"{activeItem.quote}"</p>
              </div>
            </motion.div>

            {/* Left handwritten quote card */}
            <motion.div
              key={`left-${activeItem.id}`}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ type: 'spring', stiffness: 320, damping: 26, delay: 0.04 }}
              style={{
                position: 'fixed',
                left: Math.max(12, mousePos.x - 260),
                top: mousePos.y - 60,
                zIndex: 50,
                pointerEvents: 'none',
                width: '220px',
                padding: '14px 16px',
                borderRadius: '12px',
                background: 'rgba(12,17,16,0.96)',
                border: '1px solid rgba(255,255,255,0.06)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
              }}
              className="hidden xl:block"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontFamily: 'monospace', marginBottom: '8px' }}>
                <span style={{ color: 'var(--pink)', fontWeight: 700 }}>♥ #{activeItem.id}</span>
                <span style={{ color: 'rgba(255,255,255,0.35)' }}>{activeItem.tag}</span>
              </div>
              <p className="font-hand" style={{ fontSize: '20px', color: 'var(--matcha)', lineHeight: 1.25 }}>
                {activeItem.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '8px', fontSize: '9px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                <Play style={{ width: '9px', height: '9px', fill: 'var(--matcha)', color: 'var(--matcha)' }} />
                нажми для подробностей
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
