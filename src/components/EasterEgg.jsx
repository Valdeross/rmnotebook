import React, { useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const NEON_PHRASES = [
  'Мне нужна только ты',
  'Ты делаешь мой день лучше',
  'Я правда люблю тебя',
  'Ты один из лучших людей в моей жизни',
  'Общение с тобой делает меня счастливым',
  'Я думаю о тебе каждый день',
  'Твоя улыбка — моё лекарство',
  'Без тебя всё не то',
  'Ты — мой покой',
  'Хочу быть рядом с тобой',
  'Скучаю по тебе',
  'Ты — моё счастье',
  'Мне спокойно рядом с тобой',
  'Ты — самое лучшее, что случилось со мной',
  'Каждый момент с тобой бесценен',
  'Мир ярче, когда ты рядом',
  'Я выбираю тебя снова и снова',
  'Люблю тебя сильнее, чем вчера',
  'Ты — моё всё ♡',
  'С тобой я чувствую себя дома',
  'Твой голос лечит мою душу',
  'Я благодарен за каждую секунду с тобой',
  'Ты заслуживаешь всего самого лучшего',
  'Каждое твоё сообщение делает мой день',
  'Ты — мой самый любимый человек',
  'С тобой даже молчание уютное',
];

const COLORS = [
  'rgba(157, 191, 110, ', // matcha
  'rgba(240, 112, 152, ', // pink
  'rgba(196, 181, 253, ', // lavender
  'rgba(253, 230, 138, ', // peach
];

export default function EasterEgg({ onClose }) {
  const [effectsEnabled, setEffectsEnabled] = React.useState(true);

  const launchConfetti = () => {
    const count = 40;
    const colors = ['#f07098', '#9dbf6e', '#ffffff', '#c4b5fd', '#fde68a'];
    confetti({ particleCount: count, spread: 80, origin: { y: 0.45 }, colors });
  };

  useEffect(() => {
    launchConfetti();
  }, []);

  // Generate lightweight floating stream items once (10 items instead of 32)
  const floatingItems = useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => {
      const phrase = NEON_PHRASES[i % NEON_PHRASES.length];
      const colorBase = COLORS[i % COLORS.length];
      const fontSize = 11 + (i % 4) * 1.5;
      const opacity = 0.35 + (i % 3) * 0.12;
      const left = ((i * 23) % 85) + 5;
      const duration = 16 + (i % 5) * 3;
      const delay = -(i * 2.5);
      return { id: i, phrase, colorBase, fontSize, opacity, left, duration, delay };
    });
  }, []);

  return (
    <AnimatePresence>
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 100,
          background: 'rgba(5, 8, 6, 0.94)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          overflow: 'hidden',
        }}
      >
        {/* Floating Neon Stream Background — GPU Accelerated Pure CSS Keyframes */}
        {effectsEnabled && (
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
            {floatingItems.map((item) => (
              <div
                key={item.id}
                className="float-neon-item"
                style={{
                  position: 'absolute',
                  left: `${item.left}%`,
                  top: 0,
                  fontSize: `${item.fontSize}px`,
                  color: item.colorBase + '0.9)',
                  textShadow: `0 0 8px ${item.colorBase}0.5)`,
                  opacity: item.opacity,
                  whiteSpace: 'nowrap',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  animationDuration: `${item.duration}s`,
                  animationDelay: `${item.delay}s`,
                }}
              >
                {item.phrase}
              </div>
            ))}
          </div>
        )}

        {/* Radial Center Glow */}
        {effectsEnabled && (
          <div style={{
            position: 'absolute', width: '450px', height: '450px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(240,112,152,0.12) 0%, rgba(157,191,110,0.06) 40%, transparent 70%)',
            pointerEvents: 'none', zIndex: 1,
          }} />
        )}

        {/* Central Card */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="custom-scroll"
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '520px',
            width: '92vw',
            maxHeight: '88vh',
            overflowY: 'auto',
            padding: '28px 20px',
            borderRadius: '24px',
            background: 'linear-gradient(#080d09, #0d160f) padding-box, linear-gradient(135deg, var(--matcha), var(--pink), var(--lavender)) border-box',
            border: '2px solid transparent',
            boxShadow: '0 0 40px rgba(240,112,152,0.25), 0 0 60px rgba(157,191,110,0.15)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          {/* Top Header Buttons: Close & Toggle Effects */}
          <div style={{ position: 'absolute', top: '14px', right: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={() => setEffectsEnabled(!effectsEnabled)}
              title={effectsEnabled ? 'Отключить эффекты фона' : 'Включить эффекты фона'}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '9999px',
                padding: '4px 10px',
                fontSize: '10px',
                color: effectsEnabled ? 'var(--matcha)' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <Sparkles style={{ width: '11px', height: '11px' }} />
              {effectsEnabled ? 'Эффекты: Вкл' : 'Эффекты: Выкл'}
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '50%',
                width: '32px', height: '32px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'rgba(255,255,255,0.6)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(240,112,152,0.2)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
            >
              <X style={{ width: '16px', height: '16px' }} />
            </button>
          </div>

          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '4px 16px', borderRadius: '9999px',
            background: 'rgba(240,112,152,0.12)',
            border: '1px solid rgba(240,112,152,0.35)',
            fontSize: '11px', fontWeight: 700,
            color: 'var(--pink)', letterSpacing: '0.12em', textTransform: 'uppercase',
            marginTop: '8px',
          }}>
            <Sparkles style={{ width: '12px', height: '12px' }} />
            ✦ СЕКРЕТ ♡ ONLY YOU ✦
          </div>

          {/* Emojis row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '2px 0' }}>
            <span style={{ fontSize: '36px', filter: 'drop-shadow(0 0 10px rgba(253, 230, 138, 0.8))' }}>☀️</span>
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ fontSize: '24px', color: 'var(--pink)', display: 'inline-block' }}
            >
              ♡
            </motion.span>
            <span style={{ fontSize: '36px', filter: 'drop-shadow(0 0 10px rgba(196, 181, 253, 0.8))' }}>🌙</span>
          </div>

          {/* Main Title */}
          <div>
            <h2 className="font-display" style={{
              fontSize: 'clamp(20px, 4.5vw, 28px)',
              fontWeight: 900,
              background: 'linear-gradient(135deg, var(--matcha), var(--pink), var(--lavender))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.2,
              margin: 0,
            }}>
              Мне нужна только ты
            </h2>
            <span className="font-hand" style={{ fontSize: 'clamp(18px, 3.5vw, 24px)', color: 'var(--pink)', opacity: 0.9 }}>
              — и никто больше ♡
            </span>
          </div>

          {/* Divider */}
          <div style={{
            width: '100%', height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--matcha), var(--pink), transparent)',
            opacity: 0.4,
          }} />

          {/* Heartfelt Text Paragraphs */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '10px',
            fontSize: 'clamp(13px, 2.5vw, 15px)', lineHeight: 1.5,
            color: 'rgba(255,255,255,0.85)', textAlign: 'center',
          }}>
            <p style={{ margin: 0 }}>
              Я люблю тебя <strong style={{ color: 'var(--pink)', textShadow: '0 0 8px var(--pink)' }}>любую</strong>: грустную, злую, радостную, уставшую, счастливую —{' '}
              <strong style={{ color: 'var(--matcha)', textShadow: '0 0 8px var(--matcha)' }}>лишь бы ты была рядом.</strong>
            </p>
            <p style={{ margin: 0 }}>
              Мне очень нравится любоваться тобой и очень хочется как можно больше рандомных фото и кружочков —{' '}
              <strong style={{ color: 'var(--pink)', textShadow: '0 0 8px var(--pink)' }}>лишь бы как можно чаще видеть тебя ♡</strong>
            </p>
            <p style={{ margin: 0, fontSize: '13px', opacity: 0.75, color: 'var(--lavender)' }}>
              Единственное, чего мне не хватает — это тебя рядом. Ты делаешь каждый мой день лучше просто тем, что ты есть.
            </p>
          </div>

          {/* Divider */}
          <div style={{
            width: '100%', height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--pink), var(--matcha), transparent)',
            opacity: 0.4,
          }} />

          {/* Subtitle */}
          <div className="font-hand" style={{ fontSize: '18px', color: 'var(--matcha)', opacity: 0.9 }}>
            Всё, чего бы мне сейчас хотелось — это обнять тебя и не отпускать 🫂
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px', width: '100%', justifyContent: 'center', marginTop: '6px', flexWrap: 'wrap' }}>
            <button
              onClick={launchConfetti}
              style={{
                flex: 1, minWidth: '140px', maxWidth: '200px',
                padding: '11px 20px', borderRadius: '9999px',
                background: 'linear-gradient(135deg, var(--pink), #d44f72)',
                border: 'none', color: 'white', fontWeight: 700, fontSize: '12px',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                boxShadow: '0 6px 20px rgba(240,112,152,0.4)', transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Heart style={{ width: '14px', height: '14px', fill: 'currentColor' }} />
              Конфетти!
            </button>

            <button
              onClick={onClose}
              style={{
                padding: '11px 24px', borderRadius: '9999px',
                background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)',
                color: 'var(--text)', fontWeight: 600, fontSize: '12px', cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.12)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
            >
              ← Закрыть
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
