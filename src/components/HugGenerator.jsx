import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

const catEmojis = [
  '🐱', '😻', '😸', '😽', '😼', '🐾', '🐈', '🐈‍⬛', '😻✨', '😽💕',
  '🐱‍👤', '🐱‍👓', '🐱‍🚀', '🐱‍💻', '😽💖', '😻🌸', '😺', '🙀❤️'
];

const quotes = [
  { text: 'Тепло только там, где есть ты!!!! 🐱✨', img: './media/frames/frame_019.jpg', by: 'Главные слова ♡' },
  { text: 'Котик, ты со всем справишься! Я верю в тебя 24/7 🐾💪', img: './media/frames/frame_041.jpg', by: 'Поддержка котика ♡' },
  { text: 'Твой счастливый взгляд освещает всё вокруг ☀️😸', img: './media/frames/frame_021.jpg', by: 'Солнышко ♡' },
  { text: 'Самые добрые моменты, к которым хочется возвращаться 🌸🐱', img: './media/frames/frame_022.jpg', by: 'Тёплые минутники ♡' },
  { text: 'Когда время замедляет ход и весь мир подождёт ☕🐈', img: './media/frames/frame_025.jpg', by: 'Уютный вечер ♡' },
  { text: 'Твои глаза — это самое настоящее волшебство! 🪄😻', img: './media/frames/frame_027.jpg', by: 'Светящийся взгляд ♡' },
  { text: 'Каждая секунда рядом с тобой дарит улыбку и мур! 🎶😽', img: './media/frames/frame_029.jpg', by: 'Моменты радости ♡' },
  { text: 'Наши самые любимые и теплые истории впереди ✨🐾', img: './media/frames/frame_030.jpg', by: 'Особенный день ♡' },
  { text: 'В твоих объятиях становится так легко и спокойно 🫂💕', img: './media/frames/frame_035.jpg', by: 'Теплые обнимашки ♡' },
  { text: 'Ты — самая невероятная и любимая девчонка во всей вселенной! 🌌💖', img: './media/frames/frame_043.jpg', by: 'FOR THE BEST GIRL ♡' },
  { text: 'Мур-мур-мур! Лови мгновенный поцелуй прямо в носик! 😽💋', img: './media/frames/frame_039.jpg', by: 'Поцелуй в носик ♡' },
  { text: 'Хрустящий пледик, горячий какао и ты рядом — идеальный рецепт счастья 🫖🐱', img: './media/frames/frame_035.jpg', by: 'Уютный мур ♡' },
  { text: 'Ты даришь мне столько света и радости ежедневно! 🌟🐈‍⬛', img: './media/frames/frame_037.jpg', by: 'Светлый котик ♡' },
  { text: 'Супер-котик активирован! Помни, ты невероятна 🐱⚡', img: './media/frames/frame_023.jpg', by: 'Супер-сила ♡' },
  { text: 'Ты заслуживаешь океан самых нежных обнимашек и заботы! 🌊🐾', img: './media/frames/frame_045.jpg', by: 'Океан любви ♡' },
];

function fireLove() {
  const colors = ['#f07098', '#9dbf6e', '#ffffff', '#c4b5fd', '#fde68a'];
  confetti({ particleCount: 55, spread: 70, origin: { y: 0.65 }, colors });
  setTimeout(() => confetti({ particleCount: 30, spread: 50, origin: { x: 0.15, y: 0.6 }, angle: 65, colors }), 200);
  setTimeout(() => confetti({ particleCount: 30, spread: 50, origin: { x: 0.85, y: 0.6 }, angle: 115, colors }), 200);
}

export default function HugGenerator() {
  const [idx, setIdx] = useState(0);
  const [count, setCount] = useState(1);

  const next = () => {
    setIdx((p) => (p + 1) % quotes.length);
    setCount((p) => p + 1);
    fireLove();
  };

  const q = quotes[idx];
  const plural = count === 1 ? 'обнимашку' : count < 5 ? 'обнимашки' : 'обнимашек';

  return (
    <div className="page">
      <div style={{
        width: '100%', maxWidth: '680px', padding: '0 16px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '4px 16px', borderRadius: '9999px',
            border: '1px dashed rgba(240,112,152,0.35)',
            fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--pink)', marginBottom: '10px',
          }}>
            🤗 Генератор тепла
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(20px, 3.5vw, 40px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1 }}>
            НАЖМИ ЕСЛИ<br /><span style={{ color: 'var(--matcha)' }}>НУЖНО ТЕПЛО</span>
          </h2>
        </div>

        {/* Main card */}
        <div style={{
          width: '100%',
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '18px',
          padding: '24px',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
        }} className="flex-col md:flex-row">
          {/* Frame image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={q.img}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.3 }}
              style={{
                width: '180px', height: '180px', flexShrink: 0,
                borderRadius: '14px', overflow: 'hidden',
                background: 'rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <img src={q.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </motion.div>
          </AnimatePresence>

          {/* Text & button */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'var(--matcha)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              ПОСЛАНИЕ №{idx + 1} · {q.by}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={q.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28 }}
                className="font-hand"
                style={{ fontSize: 'clamp(22px, 3vw, 32px)', color: 'var(--matcha)', lineHeight: 1.25 }}
              >
                "{q.text}"
              </motion.p>
            </AnimatePresence>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <span style={{ fontSize: '11px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)' }}>
                Получено: <strong style={{ color: 'var(--pink)' }}>{count}</strong> {plural}
              </span>
              <button
                onClick={next}
                style={{
                  padding: '10px 22px', borderRadius: '9999px',
                  background: 'var(--pink)', border: 'none', color: 'white',
                  fontWeight: 700, fontSize: '12px',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '6px',
                  boxShadow: '0 6px 20px rgba(240,112,152,0.35)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <RefreshCw style={{ width: '13px', height: '13px' }} />
                Ещё обнимашка!
              </button>
            </div>
          </div>
        </div>

        {/* Cute counter banner */}
        <motion.div
          key={count}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{
            width: '100%', textAlign: 'center',
            padding: '18px 20px', borderRadius: '14px',
            background: 'rgba(240,112,152,0.05)',
            border: '1px solid rgba(240,112,152,0.12)',
          }}
        >
          <div className="animate-float" style={{ fontSize: '44px', marginBottom: '8px' }}>
            {catEmojis[count % catEmojis.length]}
          </div>
          <p className="font-hand" style={{ fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--pink)' }}>
            Ты получила уже {count} {plural}!
          </p>
          <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>
            каждая — маленькая порция счастья ♡
          </p>

          {/* Hint about easter egg */}
          {count === 3 && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-hand"
              style={{ marginTop: '10px', fontSize: '16px', color: 'var(--matcha)', opacity: 0.7 }}
            >
              psst... а ты знаешь про секрет? 🐾
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
