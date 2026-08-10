import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Heart, Sparkles, Film } from 'lucide-react';

const frames = [
  { src: './media/frames/frame_019.jpg', time: 4.5, text: 'Дом где всегда тепло 🏡' },
  { src: './media/frames/frame_021.jpg', time: 5.0, text: 'Твоя светлая улыбка' },
  { src: './media/frames/frame_023.jpg', time: 5.5, text: 'Нежность в деталях' },
  { src: './media/frames/frame_025.jpg', time: 6.0, text: 'Уютные вечера' },
  { src: './media/frames/frame_027.jpg', time: 6.5, text: 'Светящийся взгляд' },
  { src: './media/frames/frame_029.jpg', time: 7.0, text: 'Моменты радости' },
  { src: './media/frames/frame_030.jpg', time: 7.5, text: 'Особенный день' },
  { src: './media/frames/frame_035.jpg', time: 8.5, text: 'Теплые обнимашки' },
  { src: './media/frames/frame_037.jpg', time: 9.0, text: 'Счастливые секунды' },
  { src: './media/frames/frame_039.jpg', time: 9.5, text: 'Сердечный момент' },
  { src: './media/frames/frame_041.jpg', time: 10.0, text: 'Котик: Ты со всем справишься! 🐱' },
  { src: './media/frames/frame_043.jpg', time: 10.5, text: 'FOR THE BEST GIRL ♡' },
  { src: './media/frames/frame_045.jpg', time: 11.0, text: 'Самая лучшая девушка' },
];

export default function VideoPlayer({ isMuted, setIsMuted }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(11.19);
  const [activeFrame, setActiveFrame] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) videoRef.current.pause();
    else videoRef.current.play();
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const t = videoRef.current.currentTime;
    setCurrentTime(t);
    const idx = frames.findIndex((f, i) => {
      const next = frames[i + 1]?.time ?? duration;
      return t >= f.time && t < next;
    });
    if (idx !== -1) setActiveFrame(idx);
  };

  const jump = (time, idx) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
    setCurrentTime(time);
    setActiveFrame(idx);
    videoRef.current.play();
    setPlaying(true);
  };

  const seek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    const t = pct * duration;
    if (videoRef.current) { videoRef.current.currentTime = t; setCurrentTime(t); }
  };

  const pct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="page">
      {/* Page content wrapper */}
      <div style={{
        width: '100%',
        maxWidth: '1060px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '78px 12px 12px',
        gap: '10px',
      }}>
        {/* Header tag */}
        <div style={{ textAlign: 'center', flexShrink: 0 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            padding: '3px 12px', borderRadius: '9999px',
            border: '1px dashed rgba(240,112,152,0.35)',
            fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: 'var(--pink)',
            marginBottom: '4px',
          }}>
            <Film style={{ width: '11px', height: '11px' }} />
            Главный видеоролик
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(16px, 4vw, 36px)', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>
            НАШЕ ВИДЕО ДЛЯ ТЕБЯ
          </h2>
        </div>

        {/* Main player card */}
        <div style={{
          flex: 1,
          minHeight: 0,
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'rgba(0,0,0,0.88)',
          border: '1px solid var(--border)',
          boxShadow: '0 16px 50px rgba(0,0,0,0.5)',
        }}>
          {/* Main flex container: row on desktop (>=768px), column on mobile (<768px) */}
          <div className="video-main-layout">
            {/* Video column */}
            <div style={{ flex: 1, minWidth: 0, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
              <video
                ref={videoRef}
                src="./media/video.mp4"
                muted={isMuted}
                loop
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 11.19)}
                onClick={togglePlay}
                style={{ width: '100%', height: '100%', maxHeight: '100%', objectFit: 'contain', cursor: 'pointer' }}
              />

              {/* Big play button */}
              {!playing && (
                <button
                  onClick={togglePlay}
                  style={{
                    position: 'absolute',
                    width: '64px', height: '64px', borderRadius: '50%',
                    background: 'rgba(157,191,110,0.88)',
                    border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#0c1110',
                    boxShadow: '0 8px 28px rgba(157,191,110,0.4)',
                    backdropFilter: 'blur(6px)',
                    transition: 'transform 0.2s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Play style={{ width: '26px', height: '26px', fill: 'currentColor', marginLeft: '3px' }} />
                </button>
              )}

              {/* Top overlay captions */}
              <div style={{
                position: 'absolute', top: '10px', left: '10px', right: '10px',
                display: 'flex', justifyContent: 'space-between', pointerEvents: 'none', zIndex: 5,
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '5px',
                  padding: '3px 10px', background: 'rgba(0,0,0,0.72)',
                  backdropFilter: 'blur(6px)', borderRadius: '9999px',
                  border: '1px solid rgba(255,255,255,0.07)',
                  fontSize: '11px', fontFamily: 'monospace', color: 'var(--matcha)',
                  maxWidth: '70%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  <Heart style={{ width: '10px', height: '10px', fill: 'var(--pink)', color: 'var(--pink)', flexShrink: 0 }} />
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{frames[activeFrame]?.text}</span>
                </div>
                <div style={{
                  padding: '3px 10px', background: 'rgba(0,0,0,0.72)',
                  backdropFilter: 'blur(6px)', borderRadius: '9999px',
                  fontSize: '10px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.45)', flexShrink: 0,
                }}>
                  {currentTime.toFixed(1)}s / {duration.toFixed(1)}s
                </div>
              </div>

              {/* Progress bar at bottom of video player element */}
              <div
                onClick={seek}
                style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '5px', background: 'rgba(255,255,255,0.08)', cursor: 'pointer', zIndex: 5,
                }}
              >
                <div style={{
                  height: '100%',
                  width: `${pct}%`,
                  background: 'linear-gradient(90deg, var(--matcha), var(--pink))',
                  transition: 'width 0.1s linear',
                }} />
              </div>
            </div>

            {/* Desktop Side Panel Scrubber (Hidden on mobile < 768px) */}
            <div
              className="video-side-panel"
              style={{
                width: '260px',
                flexShrink: 0,
                background: 'rgba(8,12,9,0.98)',
                borderLeft: '1px solid rgba(255,255,255,0.05)',
                flexDirection: 'column',
                padding: '12px',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '8px' }}>
                <span className="font-display" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--matcha)' }}>
                  Кадры альбома (14)
                </span>
                <Sparkles style={{ width: '12px', height: '12px', color: 'var(--pink)' }} />
              </div>

              {/* Frames list */}
              <div className="custom-scroll" style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                {frames.map((f, i) => {
                  const isActive = activeFrame === i;
                  return (
                    <div
                      key={i}
                      onClick={() => jump(f.time, i)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        padding: '7px 8px', borderRadius: '8px', cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        background: isActive ? 'rgba(157,191,110,0.1)' : 'rgba(255,255,255,0.02)',
                        border: isActive ? '1px solid rgba(157,191,110,0.5)' : '1px solid transparent',
                        color: isActive ? 'white' : 'rgba(255,255,255,0.5)',
                      }}
                      onMouseEnter={(e) => { if (!isActive) { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'white'; } }}
                      onMouseLeave={(e) => { if (!isActive) { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; } }}
                    >
                      <img src={f.src} alt="" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '5px', background: 'rgba(0,0,0,0.4)', flexShrink: 0, border: '1px solid rgba(255,255,255,0.06)' }} />
                      <div style={{ overflow: 'hidden' }}>
                        <div style={{ fontSize: '11px', fontWeight: 600, lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{f.text}</div>
                        <div style={{ fontSize: '9px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.3)' }}>{f.time.toFixed(1)}s</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Desktop Controls bar */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.05)',
              }}>
                <button
                  onClick={togglePlay}
                  style={{ padding: '7px', borderRadius: '7px', background: 'rgba(255,255,255,0.07)', border: 'none', color: 'white', cursor: 'pointer' }}
                >
                  {playing ? <Pause style={{ width: '14px', height: '14px' }} /> : <Play style={{ width: '14px', height: '14px' }} />}
                </button>
                <div onClick={seek} style={{ flex: 1, height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', cursor: 'pointer', position: 'relative' }}>
                  <div style={{ height: '100%', width: `${pct}%`, background: 'var(--matcha)', borderRadius: '3px', transition: 'width 0.1s linear' }} />
                </div>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  style={{ padding: '7px', borderRadius: '7px', background: 'rgba(255,255,255,0.07)', border: 'none', cursor: 'pointer', color: isMuted ? 'rgba(255,255,255,0.4)' : 'var(--matcha)' }}
                >
                  {isMuted ? <VolumeX style={{ width: '14px', height: '14px' }} /> : <Volume2 style={{ width: '14px', height: '14px' }} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Horizontal Frame Scrubber & Controls Bar (Only visible on mobile < 768px) */}
          <div
            className="video-mobile-scrubber"
            style={{
              background: 'rgba(8,12,9,0.98)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              padding: '8px 10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            {/* Horizontal frame thumbnails list */}
            <div
              className="custom-scroll"
              style={{
                display: 'flex',
                gap: '8px',
                overflowX: 'auto',
                paddingBottom: '4px',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {frames.map((f, i) => {
                const isActive = activeFrame === i;
                return (
                  <div
                    key={i}
                    onClick={() => jump(f.time, i)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '3px',
                      padding: '4px 6px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      flexShrink: 0,
                      background: isActive ? 'rgba(157,191,110,0.18)' : 'rgba(255,255,255,0.03)',
                      border: isActive ? '1px solid rgba(157,191,110,0.6)' : '1px solid transparent',
                      minWidth: '60px',
                    }}
                  >
                    <img
                      src={f.src}
                      alt=""
                      style={{
                        width: '36px', height: '36px',
                        objectFit: 'contain',
                        borderRadius: '4px',
                        background: 'rgba(0,0,0,0.4)',
                      }}
                    />
                    <span style={{ fontSize: '8px', fontFamily: 'monospace', color: isActive ? 'var(--matcha)' : 'rgba(255,255,255,0.4)' }}>
                      {f.time.toFixed(1)}s
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Mobile Controls bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '2px' }}>
              <button
                onClick={togglePlay}
                style={{
                  padding: '6px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(157,191,110,0.2)',
                  border: '1px solid rgba(157,191,110,0.4)',
                  color: 'var(--matcha)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '11px',
                  fontWeight: 600,
                }}
              >
                {playing ? <Pause style={{ width: '13px', height: '13px' }} /> : <Play style={{ width: '13px', height: '13px' }} />}
                <span>{playing ? 'Пауза' : 'Смотреть'}</span>
              </button>

              <div onClick={seek} style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', cursor: 'pointer', position: 'relative' }}>
                <div style={{ height: '100%', width: `${pct}%`, background: 'var(--matcha)', borderRadius: '3px', transition: 'width 0.1s linear' }} />
              </div>

              <button
                onClick={() => setIsMuted(!isMuted)}
                style={{
                  padding: '6px 10px',
                  borderRadius: '9999px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'pointer',
                  color: isMuted ? 'rgba(255,255,255,0.4)' : 'var(--matcha)',
                }}
              >
                {isMuted ? <VolumeX style={{ width: '13px', height: '13px' }} /> : <Volume2 style={{ width: '13px', height: '13px' }} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
