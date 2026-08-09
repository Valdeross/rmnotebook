import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Circle, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

const tasks = [
  { id: 1, text: 'Улыбнуться прямо сейчас', emoji: '😊', tag: 'Забота' },
  { id: 2, text: 'Посмотреть видео до конца)', emoji: '🎬', tag: 'Видео' },
  { id: 3, text: 'Помнить: ты со всем справишься!', emoji: '💪', tag: 'Поддержка' },
  { id: 4, text: 'Нажми на конопочку ниже', emoji: '🤗', tag: 'Любовь' },
  { id: 5, text: 'Знай — ты самая лучшая ♡', emoji: '👑', tag: 'Главное' },
];

export default function InteractiveChecklist() {
  const [checked, setChecked] = useState(new Set([5]));

  const toggle = (id) => {
    const next = new Set(checked);
    if (next.has(id)) next.delete(id);
    else {
      next.add(id);
      if (next.size === tasks.length) {
        confetti({ particleCount: 180, spread: 110, origin: { y: 0.55 }, colors: ['#9dbf6e', '#f07098', '#ffffff', '#c4b5fd'] });
      }
    }
    setChecked(next);
  };

  const done = checked.size;
  const pct = Math.round((done / tasks.length) * 100);

  return (
    <div className="page">
      <div style={{
        width: '100%', maxWidth: '640px',
        padding: '0 16px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '4px 16px', borderRadius: '9999px',
            border: '1px dashed rgba(157,191,110,0.35)',
            fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--matcha)', marginBottom: '10px',
          }}>
            <Award style={{ width: '12px', height: '12px' }} />
            Чек-лист
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(20px, 3.5vw, 40px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1 }}>
            СПИСОК<br /><span style={{ color: 'var(--pink)' }}>НАПОМИНАНИЙ</span>
          </h2>
        </div>

        {/* Card */}
        <div style={{
          width: '100%',
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '18px',
          padding: '24px',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
        }}>
          {/* Progress */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'monospace', fontWeight: 700, color: 'var(--matcha)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Прогресс счастья: {pct}%
            </span>
            <span style={{ fontSize: '11px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.35)' }}>
              {done} / {tasks.length}
            </span>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.07)', borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
            <motion.div
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="progress-pulse"
              style={{ height: '100%', background: 'linear-gradient(90deg, var(--matcha), var(--pink))', borderRadius: '4px' }}
            />
          </div>

          {/* Task rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {tasks.map((task) => {
              const isChecked = checked.has(task.id);
              return (
                <motion.div
                  key={task.id}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toggle(task.id)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '13px 14px', borderRadius: '12px', cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: isChecked ? 'rgba(157,191,110,0.1)' : 'rgba(255,255,255,0.03)',
                    border: isChecked ? '1px solid rgba(157,191,110,0.45)' : '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {isChecked
                      ? <CheckCircle2 style={{ width: '20px', height: '20px', color: 'var(--matcha)', flexShrink: 0 }} />
                      : <Circle style={{ width: '20px', height: '20px', color: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
                    }
                    <span style={{ fontSize: '14px', fontWeight: 500, color: isChecked ? 'var(--text)' : 'rgba(255,255,255,0.6)', textDecoration: isChecked ? 'line-through' : 'none', opacity: isChecked ? 0.75 : 1 }}>
                      {task.emoji} {task.text}
                    </span>
                  </div>
                  <span style={{ fontSize: '10px', fontFamily: 'monospace', textTransform: 'uppercase', padding: '2px 8px', borderRadius: '5px', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.35)', flexShrink: 0 }}>
                    {task.tag}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Done state message */}
        {pct === 100 && (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-hand"
            style={{ fontSize: '24px', color: 'var(--pink)', textAlign: 'center' }}
          >
            Ты выполнила всё! Я тебя очень люблю 🌸
          </motion.p>
        )}
      </div>
    </div>
  );
}
