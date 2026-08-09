import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronDown, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HeroSection({ onScrollNext }) {
  const [phase, setPhase] = useState('envelope'); // envelope → opening → letter → done
  const [clicked, setClicked] = useState(false);

  const openEnvelope = (e) => {
    if (e) e.stopPropagation();
    if (clicked) return;
    setClicked(true);

    // Heart burst confetti
    confetti({
      particleCount: 55,
      spread: 80,
      origin: { y: 0.55 },
      colors: ['#f07098', '#9dbf6e', '#ffffff', '#c4b5fd', '#fde68a'],
    });

    setPhase('opening');

    // Sequence timing: flap opens → letter rises → morphs to full letter state
    setTimeout(() => {
      setPhase('letter');
    }, 1150);

    setTimeout(() => {
      setPhase('done');
    }, 1850);
  };

  return (
    <div className="page" style={{ gap: 0, padding: '0 clamp(16px, 4vw, 40px)' }}>
      {/* Radial glow background */}
      <div style={{
        position: 'absolute',
        width: 'clamp(300px, 60vw, 650px)',
        height: 'clamp(300px, 60vw, 650px)',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240,112,152,0.12) 0%, rgba(157,191,110,0.04) 45%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <AnimatePresence mode="wait">
        {(phase === 'envelope' || phase === 'opening') && (
          <motion.div
            key="envelope-stage"
            initial={{ scale: 0.84, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={openEnvelope}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'clamp(20px, 3vw, 32px)',
              zIndex: 10,
              width: '100%',
              maxWidth: '420px',
            }}
          >
            {/* 3D Envelope Container with Fluid Aspect-Ratio */}
            <div style={{
              position: 'relative',
              width: 'clamp(280px, 85vw, 360px)',
              height: 'clamp(180px, 55vw, 230px)',
              perspective: '1200px',
              margin: '0 auto',
            }}>
              {/* 1. Envelope Interior / Back background */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '14px',
                background: 'linear-gradient(180deg, #09120a 0%, #121e14 100%)',
                border: '1.5px solid rgba(157,191,110,0.25)',
                boxShadow: '0 25px 65px rgba(0,0,0,0.75), 0 0 35px rgba(240,112,152,0.12)',
                overflow: 'hidden',
                zIndex: 1,
              }} />

              {/* 2. Tucked Letter inside envelope (hidden before opening, rises on click) */}
              <motion.div
                initial={{ y: 35, opacity: 0, scale: 0.9 }}
                animate={{
                  y: phase === 'opening' ? -140 : 35,
                  opacity: phase === 'opening' ? 1 : 0,
                  scale: phase === 'opening' ? 1.04 : 0.9,
                  rotate: phase === 'opening' ? -1.5 : 0,
                }}
                transition={{
                  duration: 0.75,
                  delay: phase === 'opening' ? 0.3 : 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  position: 'absolute',
                  left: '12px',
                  right: '12px',
                  top: '10px',
                  bottom: '10px',
                  background: 'linear-gradient(135deg, #1b2e1d 0%, #111e13 100%)',
                  border: '1.5px solid rgba(240,112,152,0.45)',
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.6), 0 0 20px rgba(240,112,152,0.15)',
                  zIndex: phase === 'opening' ? 8 : 2,
                  pointerEvents: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--pink)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}>
                  <Sparkles style={{ width: '13px', height: '13px' }} />
                  ПИСЬМО ДЛЯ ТЕБЯ
                  <Sparkles style={{ width: '13px', height: '13px' }} />
                </div>
                <p className="font-hand" style={{ fontSize: 'clamp(22px, 3.5vw, 28px)', color: 'var(--matcha)', textAlign: 'center', margin: 0, lineHeight: 1.2 }}>
                  Для самой лучшей девушки ♡
                </p>
              </motion.div>

              {/* 3. Left Pocket Flap */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #182a1a 0%, #101c12 100%)',
                borderLeft: '1.5px solid rgba(157,191,110,0.25)',
                clipPath: 'polygon(0 0, 52% 50%, 0 100%)',
                zIndex: 3,
                pointerEvents: 'none',
              }} />

              {/* 4. Right Pocket Flap */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '14px',
                background: 'linear-gradient(225deg, #182a1a 0%, #101c12 100%)',
                borderRight: '1.5px solid rgba(157,191,110,0.25)',
                clipPath: 'polygon(100% 0, 48% 50%, 100% 100%)',
                zIndex: 3,
                pointerEvents: 'none',
              }} />

              {/* 5. Bottom Pocket Flap */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '14px',
                background: 'linear-gradient(0deg, #162618 0%, #0d170e 100%)',
                borderBottom: '1.5px solid rgba(157,191,110,0.3)',
                clipPath: 'polygon(0 100%, 50% 46%, 100% 100%)',
                zIndex: 4,
                pointerEvents: 'none',
              }} />

              {/* 6. Top Flap lid (rotates 180deg in 3D space) */}
              <motion.div
                animate={{
                  rotateX: phase === 'opening' ? -180 : 0,
                }}
                transition={{
                  duration: 0.65,
                  ease: [0.4, 0, 0.2, 1],
                }}
                style={{
                  transformOrigin: 'top center',
                  transformStyle: 'preserve-3d',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '14px 14px 0 0',
                  background: 'linear-gradient(180deg, #253e28 0%, #17281a 100%)',
                  borderTop: '1.5px solid rgba(157,191,110,0.45)',
                  clipPath: 'polygon(0 0, 100% 0, 50% 54%)',
                  zIndex: phase === 'opening' ? 1 : 6,
                  filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.5))',
                }}
              />

              {/* 7. Heart Wax Seal button in center */}
              <AnimatePresence>
                {phase === 'envelope' && (
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.12, rotate: [0, -5, 5, 0] }}
                    whileTap={{ scale: 0.9 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 'clamp(44px, 12vw, 52px)',
                      height: 'clamp(44px, 12vw, 52px)',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle at 35% 35%, #f48fb1, #f07098 50%, #b83358 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 22px rgba(240,112,152,0.65), 0 0 16px rgba(240,112,152,0.4), inset 0 2px 4px rgba(255,255,255,0.6)',
                      border: '2px solid rgba(255,255,255,0.4)',
                      zIndex: 10,
                    }}
                  >
                    <Heart style={{ width: '22px', height: '22px', fill: 'white', color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Prompt text below */}
            <motion.p
              animate={{
                opacity: phase === 'opening' ? [0.6, 1] : [0.55, 1, 0.55],
                scale: phase === 'opening' ? 1.05 : 1,
              }}
              transition={{ duration: phase === 'opening' ? 0.3 : 2, repeat: phase === 'opening' ? 0 : Infinity }}
              className="font-hand"
              style={{
                fontSize: 'clamp(18px, 4vw, 24px)',
                color: 'var(--pink)',
                letterSpacing: '0.04em',
                margin: 0,
                textShadow: '0 2px 10px rgba(240,112,152,0.3)',
              }}
            >
              {phase === 'opening' ? 'Открывается с любовью... ✨' : 'Нажми, чтобы открыть ♡'}
            </motion.p>
          </motion.div>
        )}

        {(phase === 'letter' || phase === 'done') && (
          <motion.div
            key="letter-stage"
            initial={{ opacity: 0, y: 45, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'clamp(16px, 2.5vw, 24px)',
              maxWidth: '640px',
              textAlign: 'center',
              padding: '0 clamp(16px, 4vw, 32px)',
              zIndex: 10,
            }}
          >
            {/* Category tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 16px',
                borderRadius: '9999px',
                border: '1px dashed rgba(240,112,152,0.4)',
                fontSize: 'clamp(10px, 2vw, 12px)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--pink)',
              }}
            >
              <Heart style={{ width: '11px', height: '11px', fill: 'currentColor' }} />
              <span>Special Edition 2026</span>
              <Heart style={{ width: '11px', height: '11px', fill: 'currentColor' }} />
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display"
              style={{
                fontSize: 'clamp(28px, 6vw, 76px)',
                fontWeight: 900,
                color: 'var(--text)',
                lineHeight: 1.12,
              }}
            >
              ДЛЯ САМОЙ<br />
              <span style={{ color: 'var(--matcha)' }}>ЛУЧШЕЙ</span><br />
              ДЕВУШКИ
            </motion.h1>

            {/* Handwritten subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="font-hand"
              style={{
                fontSize: 'clamp(20px, 3.5vw, 32px)',
                color: 'rgba(240,112,152,0.85)',
                lineHeight: 1.3,
              }}
            >
              на свете ♡ это всё для тебя
            </motion.p>

            {/* Divider hearts */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
              style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
            >
              {['🍃', '♡', '🌸', '♡', '🍃'].map((s, i) => (
                <span key={i} style={{ fontSize: i === 2 ? '20px' : '14px', opacity: i === 2 ? 1 : 0.6 }}>{s}</span>
              ))}
            </motion.div>

            {/* Date */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              transition={{ delay: 0.75 }}
              style={{ fontSize: '12px', fontFamily: 'monospace', letterSpacing: '0.15em' }}
            >
              28 · 07 · 2026
            </motion.span>

            {/* Scroll hint */}
            {phase === 'done' && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                onClick={onScrollNext}
                style={{
                  marginTop: '8px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--pink)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  opacity: 0.7,
                }}
              >
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ChevronDown style={{ width: '20px', height: '20px' }} />
                </motion.div>
                <span>открыть</span>
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
