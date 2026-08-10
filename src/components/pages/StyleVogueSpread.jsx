import React, { useState } from 'react';

/* ═══════════════════════════════════════════════════════════════
   BEAUTY EDITORIAL SPREAD — "МАГИЯ КОНТРАСТОВ"
   Left:  Full portrait + colour DNA data overlay
   Right: Macro eye + makeup/style guide
   No JournalPage wrapper — custom dark editorial layout
   ═══════════════════════════════════════════════════════════════ */

export default function StyleVogueSpread({ data }) {
  const portraitSrc = '/katya_photos/photo_2025-09-02_22-57-08.jpg';
  const eyeMacroSrc = '/katya_photos/photo_2026-03-06_18-17-06.jpg';
  const [hoveredNote, setHoveredNote] = useState(null);

  /* ─── colour palette swatches ─── */
  const palette = [
    { hex: '#1a4d3a', label: 'Изумруд' },
    { hex: '#8b2252', label: 'Ягодный' },
    { hex: '#c44569', label: 'Малиновый' },
    { hex: '#d4a373', label: 'Золотой' },
    { hex: '#2d6a4f', label: 'Тёмный лес' },
    { hex: '#f4acb7', label: 'Румянец' },
  ];

  /* ─── colour-type characteristics ─── */
  const colourDNA = [
    { label: 'Цветотип', value: 'Холодное лето с тёплыми нотами', icon: '❄️' },
    { label: 'Подтон кожи', value: 'Нейтрально-розовый', icon: '🌸' },
    { label: 'Радужка', value: 'Изумрудно-серый с янтарным кольцом', icon: '💎' },
    { label: 'Натуральный оттенок', value: 'Русо-каштановый', icon: '🍂' },
  ];

  /* ─── makeup recommendations ─── */
  const makeupNotes = [
    {
      zone: 'ГЛАЗА',
      icon: '👁️',
      tip: 'Изумрудный smoky с золотистым пигментом. Стрелка — графитовый лайнер. Тушь — угольно-чёрная.',
      shade: '#1a4d3a',
    },
    {
      zone: 'ГУБЫ',
      icon: '💋',
      tip: 'Ягодный градиент: ежевика по контуру, малиновый блик в центре. Матовая формула.',
      shade: '#8b2252',
    },
    {
      zone: 'СКУЛЫ',
      icon: '✨',
      tip: 'Холодный розовый румянец + хайлайтер с шампань-подтоном на скулы.',
      shade: '#f4acb7',
    },
    {
      zone: 'БРОВИ',
      icon: '🖋️',
      tip: 'Натуральная форма с лёгким заполнением оттенком taupe. Прозрачный гель.',
      shade: '#6b4f3b',
    },
  ];

  /* ─── style vector tags ─── */
  const styleTags = [
    'Dark Academia', 'Soft Grunge', 'Романтичный Gothic',
    'Cottagecore Noir', 'Ethereal Chic', 'Vintage Renaissance'
  ];

  const headerFont = "'Cormorant Garamond', 'Georgia', serif";

  return (
    <div className="w-full h-full flex flex-col md:flex-row">

      {/* ════════════════════════════════════════════════════════
          LEFT PAGE — PORTRAIT + БЬЮТИ-ДНК
          ════════════════════════════════════════════════════════ */}
      <div className="page-sheet w-full h-full relative flex flex-col" style={{
        background: '#0a0a0a', padding: 'clamp(0.5rem, 1.5vw, 1.2rem)',
        boxSizing: 'border-box',
      }}>
        {/* inner spine shadow */}
        <div className="page-inner-shadow-right" />

        {/* ── TOP EDITORIAL HEADER ── */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: '1px solid rgba(196,69,105,0.3)', paddingBottom: '0.4rem',
          marginBottom: '0.3rem',
        }}>
          <span style={{
            fontFamily: headerFont, fontSize: 'clamp(0.45rem, 0.9vw, 0.65rem)',
            letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c44569',
          }}>
            FASHION & BEAUTY EDITORIAL
          </span>
          <span style={{
            fontFamily: headerFont, fontSize: 'clamp(0.4rem, 0.7vw, 0.55rem)',
            color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em',
          }}>
            ISSUE 08 / 2026
          </span>
        </div>

        {/* ── MAIN TITLE ── */}
        <div style={{ textAlign: 'center', paddingBottom: '0.3rem' }}>
          <h2 style={{
            fontFamily: headerFont,
            fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
            fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: '#fff',
            lineHeight: 1.15, margin: 0,
          }}>
            Магия Контрастов
          </h2>
          <p style={{
            fontFamily: headerFont,
            fontSize: 'clamp(0.5rem, 1vw, 0.7rem)', color: '#c44569',
            fontStyle: 'italic', letterSpacing: '0.1em',
            margin: '0.15rem 0 0', textTransform: 'uppercase',
          }}>
            Изумруд & Ягодный Градиент
          </p>
        </div>

        {/* ── PORTRAIT IMAGE — dominant area ── */}
        <div style={{
          flex: '1 1 auto', borderRadius: '0.6rem', overflow: 'hidden',
          position: 'relative', border: '1px solid rgba(196,69,105,0.25)',
          minHeight: 0,
        }}>
          <img
            src={portraitSrc}
            alt="Катя — Beauty Editorial"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              objectPosition: 'center 20%',
              filter: 'contrast(1.05) saturate(1.1)',
            }}
          />
          {/* gradient overlay at bottom */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
            background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.5) 50%, transparent 100%)',
          }} />
          {/* name overlay */}
          <div style={{ position: 'absolute', bottom: '0.6rem', left: '0.8rem', zIndex: 5 }}>
            <span style={{
              fontFamily: headerFont,
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: 300, fontStyle: 'italic',
              color: '#fff', letterSpacing: '0.05em',
              textShadow: '0 2px 12px rgba(0,0,0,0.6)',
            }}>
              Катя
            </span>
            <span style={{
              display: 'block', fontFamily: headerFont,
              fontSize: 'clamp(0.4rem, 0.8vw, 0.55rem)', color: '#f4acb7',
              letterSpacing: '0.15em', textTransform: 'uppercase',
            }}>
              БЬЮТИ-ДОСЬЕ • ПЕРСОНАЛЬНЫЙ КОЛОРИТ
            </span>
          </div>
          {/* top-right editorial tag */}
          <div style={{
            position: 'absolute', top: '0.5rem', right: '0.5rem',
            background: 'rgba(196,69,105,0.85)', backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            padding: '0.2rem 0.55rem', borderRadius: '0.25rem',
          }}>
            <span style={{
              fontFamily: headerFont, fontSize: 'clamp(0.35rem, 0.7vw, 0.5rem)',
              color: '#fff', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600,
            }}>
              SPECIAL BEAUTY REPORT
            </span>
          </div>
        </div>

        {/* ── COLOUR DNA GRID ── */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '0.35rem', padding: '0.35rem 0 0.25rem',
        }}>
          {colourDNA.map((item, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(196,69,105,0.18)',
              borderRadius: '0.4rem', padding: '0.35rem 0.5rem',
              display: 'flex', alignItems: 'center', gap: '0.35rem',
            }}>
              <span style={{ fontSize: '0.85rem', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{
                  fontFamily: headerFont,
                  fontSize: 'clamp(0.4rem, 0.7vw, 0.52rem)', color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600,
                }}>{item.label}</div>
                <div style={{
                  fontFamily: headerFont,
                  fontSize: 'clamp(0.5rem, 0.9vw, 0.65rem)', color: '#e0e0e0',
                  fontStyle: 'italic', lineHeight: 1.3,
                }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── PALETTE STRIP ── */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          borderTop: '1px solid rgba(196,69,105,0.2)', paddingTop: '0.3rem',
        }}>
          <span style={{
            fontFamily: headerFont,
            fontSize: 'clamp(0.38rem, 0.65vw, 0.48rem)', color: 'rgba(255,255,255,0.35)',
            textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, whiteSpace: 'nowrap',
          }}>
            ПАЛИТРА:
          </span>
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
            {palette.map((c, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <div style={{
                  width: '0.7rem', height: '0.7rem', borderRadius: '50%',
                  backgroundColor: c.hex, border: '1.5px solid rgba(255,255,255,0.2)',
                  boxShadow: `0 0 6px ${c.hex}55`,
                }} />
                <span style={{
                  fontFamily: headerFont,
                  fontSize: 'clamp(0.35rem, 0.6vw, 0.45rem)', color: 'rgba(255,255,255,0.45)',
                  fontStyle: 'italic',
                }}>{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* page number */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '1px solid rgba(196,69,105,0.2)', paddingTop: '0.3rem',
          marginTop: '0.2rem',
        }}>
          <span style={{
            fontFamily: headerFont,
            fontSize: 'clamp(0.35rem, 0.6vw, 0.45rem)', color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>СТРАНИЦА 21</span>
          <span style={{
            fontFamily: headerFont,
            fontSize: 'clamp(0.4rem, 0.7vw, 0.5rem)', color: '#c44569',
            fontStyle: 'italic', letterSpacing: '0.06em',
          }}>♡ ТОЛЬКО ДЛЯ НЕЕ ♡</span>
          <span style={{
            fontFamily: headerFont,
            fontSize: 'clamp(0.35rem, 0.6vw, 0.45rem)', color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>BEAUTY EDITION 2026</span>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          RIGHT PAGE — MACRO EYE + MAKEUP GUIDE
          ════════════════════════════════════════════════════════ */}
      <div className="page-sheet w-full h-full relative flex flex-col" style={{
        background: '#0a0a0a', padding: 'clamp(0.5rem, 1.5vw, 1.2rem)',
        boxSizing: 'border-box',
      }}>
        {/* inner spine shadow */}
        <div className="page-inner-shadow-left" />

        {/* ── TOP EDITORIAL HEADER ── */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: '1px solid rgba(26,77,58,0.4)', paddingBottom: '0.4rem',
          marginBottom: '0.3rem',
        }}>
          <span style={{
            fontFamily: headerFont, fontSize: 'clamp(0.45rem, 0.9vw, 0.65rem)',
            letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2d6a4f', fontWeight: 600,
          }}>
            SPECIAL BEAUTY REPORT
          </span>
          <span style={{
            fontFamily: headerFont, fontSize: 'clamp(0.4rem, 0.8vw, 0.55rem)',
            color: '#c44569', fontStyle: 'italic', letterSpacing: '0.08em',
          }}>
            Катя • Персональный Разбор
          </span>
        </div>

        {/* ── PAGE TITLE ── */}
        <div style={{ textAlign: 'center', paddingBottom: '0.3rem' }}>
          <h2 style={{
            fontFamily: headerFont,
            fontSize: 'clamp(0.8rem, 2vw, 1.3rem)',
            fontWeight: 300, fontStyle: 'italic',
            color: '#fff', letterSpacing: '0.06em', margin: 0, lineHeight: 1.2,
          }}>
            Макияж & Стилевой Вектор
          </h2>
          <p style={{
            fontFamily: headerFont,
            fontSize: 'clamp(0.4rem, 0.7vw, 0.5rem)', color: 'rgba(255,255,255,0.35)',
            textTransform: 'uppercase', letterSpacing: '0.18em', margin: '0.15rem 0 0',
          }}>
            БЬЮТИ-КАРТА НА ОСНОВЕ КОЛОРИТА
          </p>
        </div>

        {/* ── EYE MACRO IMAGE ── */}
        <div style={{
          flex: '1 1 45%', borderRadius: '0.6rem', overflow: 'hidden',
          position: 'relative', border: '1px solid rgba(26,77,58,0.35)',
          minHeight: 0,
        }}>
          <img
            src={eyeMacroSrc}
            alt="Макро — радужка глаза Кати"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              objectPosition: 'center center',
              filter: 'contrast(1.08) saturate(1.15)',
            }}
          />
          {/* left gradient */}
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: '30%',
            background: 'linear-gradient(to right, rgba(10,10,10,0.75), transparent)',
          }} />
          {/* iris label */}
          <div style={{
            position: 'absolute', bottom: '0.5rem', left: '0.6rem',
            background: 'rgba(10,10,10,0.7)', backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            padding: '0.25rem 0.55rem', borderRadius: '0.25rem',
            border: '1px solid rgba(26,77,58,0.4)',
          }}>
            <span style={{
              fontFamily: headerFont,
              fontSize: 'clamp(0.4rem, 0.75vw, 0.55rem)', color: '#4ade80',
              letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600,
            }}>
              💎 ИЗУМРУДНО-СЕРАЯ РАДУЖКА
            </span>
          </div>
          {/* top-right zoom tag */}
          <div style={{
            position: 'absolute', top: '0.5rem', right: '0.5rem',
            background: 'rgba(26,77,58,0.85)', backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            padding: '0.15rem 0.5rem', borderRadius: '0.25rem',
          }}>
            <span style={{
              fontFamily: headerFont,
              fontSize: 'clamp(0.35rem, 0.65vw, 0.48rem)', color: '#fff',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}>
              MACRO × 40
            </span>
          </div>
        </div>

        {/* ── MAKEUP NOTES GRID ── */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '0.35rem', padding: '0.35rem 0',
        }}>
          {makeupNotes.map((note, i) => (
            <div
              key={i}
              style={{
                background: hoveredNote === i
                  ? 'rgba(255,255,255,0.08)'
                  : 'rgba(255,255,255,0.035)',
                border: `1px solid ${note.shade}44`,
                borderRadius: '0.45rem', padding: '0.4rem 0.5rem',
                cursor: 'default', transition: 'background 0.2s ease',
              }}
              onMouseEnter={() => setHoveredNote(i)}
              onMouseLeave={() => setHoveredNote(null)}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: '0.3rem',
                marginBottom: '0.2rem',
              }}>
                <span style={{ fontSize: '0.75rem' }}>{note.icon}</span>
                <div style={{
                  width: '0.55rem', height: '0.55rem', borderRadius: '50%',
                  backgroundColor: note.shade,
                  border: '1.5px solid rgba(255,255,255,0.2)',
                  boxShadow: `0 0 8px ${note.shade}44`, flexShrink: 0,
                }} />
                <span style={{
                  fontFamily: headerFont,
                  fontSize: 'clamp(0.45rem, 0.8vw, 0.58rem)', color: note.shade,
                  textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700,
                  filter: 'brightness(1.5)',
                }}>{note.zone}</span>
              </div>
              <p style={{
                fontFamily: headerFont,
                fontSize: 'clamp(0.42rem, 0.75vw, 0.55rem)',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.4, margin: 0, fontStyle: 'italic',
              }}>{note.tip}</p>
            </div>
          ))}
        </div>

        {/* ── STYLE VECTOR TAGS ── */}
        <div style={{ borderTop: '1px solid rgba(26,77,58,0.25)', paddingTop: '0.3rem' }}>
          <div style={{
            fontFamily: headerFont,
            fontSize: 'clamp(0.38rem, 0.65vw, 0.48rem)', color: 'rgba(255,255,255,0.35)',
            textTransform: 'uppercase', letterSpacing: '0.12em',
            fontWeight: 600, marginBottom: '0.25rem',
          }}>
            СТИЛЕВОЙ ВЕКТОР КАТИ:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
            {styleTags.map((tag, i) => (
              <span key={i} style={{
                fontFamily: headerFont,
                fontSize: 'clamp(0.4rem, 0.7vw, 0.5rem)',
                color: i % 2 === 0 ? '#4ade80' : '#f472b6',
                fontStyle: 'italic',
                background: i % 2 === 0 ? 'rgba(26,77,58,0.15)' : 'rgba(196,69,105,0.12)',
                border: `1px solid ${i % 2 === 0 ? 'rgba(26,77,58,0.3)' : 'rgba(196,69,105,0.25)'}`,
                padding: '0.15rem 0.45rem', borderRadius: '1rem', whiteSpace: 'nowrap',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── BOTTOM QUOTE ── */}
        <div style={{
          textAlign: 'center', paddingTop: '0.2rem',
          borderTop: '1px solid rgba(196,69,105,0.15)', marginTop: '0.2rem',
        }}>
          <p style={{
            fontFamily: headerFont,
            fontSize: 'clamp(0.48rem, 0.9vw, 0.6rem)', fontStyle: 'italic',
            color: 'rgba(255,255,255,0.5)', margin: 0, letterSpacing: '0.04em',
          }}>
            «Её красота — это не тренд. Это природная магия,
            <br />которую невозможно повторить.»
          </p>
        </div>

        {/* page number */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderTop: '1px solid rgba(26,77,58,0.2)', paddingTop: '0.3rem',
          marginTop: '0.2rem',
        }}>
          <span style={{
            fontFamily: headerFont,
            fontSize: 'clamp(0.35rem, 0.6vw, 0.45rem)', color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>BEAUTY EDITION 2026</span>
          <span style={{
            fontFamily: headerFont,
            fontSize: 'clamp(0.4rem, 0.7vw, 0.5rem)', color: '#c44569',
            fontStyle: 'italic', letterSpacing: '0.06em',
          }}>♡ ТОЛЬКО ДЛЯ НЕЕ ♡</span>
          <span style={{
            fontFamily: headerFont,
            fontSize: 'clamp(0.35rem, 0.6vw, 0.45rem)', color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
          }}>СТРАНИЦА 22</span>
        </div>
      </div>
    </div>
  );
}
