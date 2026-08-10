import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, BookOpen, Sparkles } from 'lucide-react';

import CoverSpread from './pages/CoverSpread';
import CalendarSpread from './pages/CalendarSpread';
import CatsSpread from './pages/CatsSpread';
import SimsSpread from './pages/SimsSpread';
import PerfumeSpread from './pages/PerfumeSpread';
import WhosThatGirlSpread from './pages/WhosThatGirlSpread';
import YearInPhotosSpread from './pages/YearInPhotosSpread';
import HomeHeartSpread from './pages/HomeHeartSpread';
import MusicPlaylistSpread from './pages/MusicPlaylistSpread';
import AirDropOsSpread from './pages/AirDropOsSpread';
import StyleVogueSpread from './pages/StyleVogueSpread';
import BackCoverSpread from './pages/BackCoverSpread';

export default function MagazineFlipbook({ journalData }) {
  const [currentSpread, setCurrentSpread] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showToc, setShowToc] = useState(false);
  const containerRef = useRef(null);

  const spreads = [
    { id: 'cover', label: '01. Обложка & Письмо', Component: CoverSpread },
    { id: 'calendar', label: '02. Календарь (29.01.2004)', Component: CalendarSpread },
    { id: 'cats', label: '03. Кошки: Луна & Афина 🐱', Component: CatsSpread },
    { id: 'sims', label: '04. The Sims 4 Katya Edition 💚', Component: SimsSpread },
    { id: 'perfume', label: '05. Парфюмерный гардероб 🌸', Component: PerfumeSpread },
    { id: 'whos-girl', label: '06. Ты моё Солнце ♡', Component: WhosThatGirlSpread },
    { id: 'year-photos', label: '07. Год в фото (12 месяцев)', Component: YearInPhotosSpread },
    { id: 'home-heart', label: '08. Hóme & Сердце из фото', Component: HomeHeartSpread },
    { id: 'playlist', label: '09. Плейлист для неё', Component: MusicPlaylistSpread },
    { id: 'airdrop-os', label: '10. AirDrop & macOS', Component: AirDropOsSpread },
    { id: 'vogue-style', label: '11. Магия Контрастов ✨', Component: StyleVogueSpread },
    { id: 'back-cover', label: '12. Задняя обложка (22 года)', Component: BackCoverSpread }
  ];

  const totalSpreads = spreads.length;

  // Synthesized page turn audio
  const playFlipSound = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(35, ctx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } catch (e) { }
  };

  const nextPage = () => {
    if (currentSpread < totalSpreads - 1) {
      playFlipSound();
      setCurrentSpread((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentSpread > 0) {
      playFlipSound();
      setCurrentSpread((prev) => prev - 1);
    }
  };

  const jumpToSpread = (idx) => {
    if (idx >= 0 && idx < totalSpreads) {
      playFlipSound();
      setCurrentSpread(idx);
      setShowToc(false);
    }
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Swipe threshold in pixels
  const minSwipeDistance = 45;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      nextPage();
    } else if (distance < -minSwipeDistance) {
      prevPage();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextPage();
      } else if (e.key === 'ArrowLeft') {
        prevPage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSpread]);

  const CurrentSpreadComponent = spreads[currentSpread].Component;

  return (
    <div ref={containerRef} className="flipbook-viewport w-full h-screen text-zinc-100 flex flex-col justify-between overflow-hidden select-none">

      {/* TOP HEADER NAV */}
      <header className="z-40 w-full px-2.5 py-2 sm:px-4 sm:py-3 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center justify-between">

        {/* Title */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-500/20 border border-rose-500/50 flex items-center justify-center text-rose-400">
            <Sparkles size={15} />
          </div>
          <div>
            <h1 className="font-vogue text-xs sm:text-base font-extrabold uppercase tracking-widest text-white leading-none">
              СОЛНЫШКО ☀️
            </h1>
            <span className="text-[8px] sm:text-[9px] font-sans text-rose-300 tracking-wider uppercase font-semibold block">
              СПЕЦИАЛЬНЫЙ ЖУРНАЛ ДЛЯ ТЕБЯ
            </span>
          </div>
        </div>

        {/* Center: Page Slider */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-zinc-900/90 px-2.5 sm:px-3 py-1 rounded-full border border-white/10">
          <button onClick={prevPage} disabled={currentSpread === 0} className="text-zinc-400 hover:text-white disabled:opacity-20 p-0.5">
            <ChevronLeft size={16} />
          </button>

          <span className="font-mono text-[11px] sm:text-xs font-bold text-rose-300">
            {currentSpread + 1} / {totalSpreads}
          </span>

          <button onClick={nextPage} disabled={currentSpread === totalSpreads - 1} className="text-zinc-400 hover:text-white disabled:opacity-20 p-0.5">
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          <button
            onClick={() => setShowToc(!showToc)}
            className="p-1.5 sm:p-2 rounded-xl bg-rose-600/90 hover:bg-rose-500 text-white text-xs font-semibold flex items-center gap-1 border border-rose-400/40 shadow-sm"
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline">Оглавление</span>
          </button>

          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 sm:p-2 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-white/10"
          >
            {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </button>
        </div>

      </header>

      {/* MAIN CONTENT AREA WITH TOUCH SWIPE */}
      <main
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="flex-1 w-full flex items-center justify-center p-0 sm:p-2 relative overflow-y-auto md:overflow-hidden custom-scroll"
      >

        {/* Desktop Prev Arrow */}
        <button
          onClick={prevPage}
          disabled={currentSpread === 0}
          className="absolute left-1 sm:left-2 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-rose-600 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl disabled:opacity-0 transition-all hover:scale-110 hidden sm:flex"
        >
          <ChevronLeft size={22} />
        </button>

        {/* 3D Book Container (Adaptive for Mobile) */}
        <div className="book-container w-full max-w-[98vw] xl:max-w-[1500px] h-full md:h-[90vh] aspect-auto md:aspect-[4/3] relative my-auto overflow-y-auto md:overflow-hidden">

          <div className="book-spine-line hidden md:block" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSpread}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full h-full rounded-md overflow-y-auto md:overflow-hidden shadow-2xl custom-scroll"
            >
              <CurrentSpreadComponent
                data={journalData}
                onJumpToPage={jumpToSpread}
              />
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Desktop Next Arrow */}
        <button
          onClick={nextPage}
          disabled={currentSpread === totalSpreads - 1}
          className="absolute right-1 sm:right-2 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-rose-600 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-xl disabled:opacity-0 transition-all hover:scale-110 hidden sm:flex"
        >
          <ChevronRight size={22} />
        </button>

        <div className="book-shadow-floor" />
      </main>

      {/* TOC DRAWER */}
      {showToc && (
        <div className="absolute inset-x-0 top-14 z-50 bg-zinc-950/95 backdrop-blur-xl border-b border-rose-500/40 p-3 max-h-[75vh] overflow-y-auto custom-scroll shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-2 border-b border-zinc-800 pb-2">
              <span className="font-vogue text-xs font-bold uppercase tracking-widest text-rose-400">
                ОГЛАВЛЕНИЕ ЖУРНАЛА «СОЛНЫШКО»
              </span>
              <button onClick={() => setShowToc(false)} className="text-zinc-400 hover:text-white text-xs px-2 py-1">
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {spreads.map((s, idx) => (
                <div
                  key={s.id}
                  onClick={() => jumpToSpread(idx)}
                  className={`p-2.5 rounded-lg cursor-pointer flex justify-between items-center transition-all ${currentSpread === idx ? 'bg-rose-900/70 border border-rose-500/50 text-white font-bold' : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300'}`}
                >
                  <span className="text-xs">{s.label}</span>
                  <span className="text-[10px] font-mono text-zinc-500">Разворот {idx + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER BAR WITH TOUCH SWIPE HINT */}
      <footer className="z-40 w-full px-3 py-2 bg-black/70 backdrop-blur-md border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-300 font-sans">
        <button
          onClick={prevPage}
          disabled={currentSpread === 0}
          className="py-1.5 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-20 flex items-center gap-1 sm:hidden font-semibold active:scale-95 transition-transform"
        >
          <ChevronLeft size={14} /> Назад
        </button>

        <span className="mx-auto sm:mx-0 font-semibold text-rose-300 text-center truncate px-1">
          <span className="hidden sm:inline">Эксклюзивный экземпляр создан только для тебя ♡</span>
          <span className="inline sm:hidden text-[9px] text-zinc-400">👈 свайп для листания 👉</span>
        </span>

        <button
          onClick={nextPage}
          disabled={currentSpread === totalSpreads - 1}
          className="py-1.5 px-3 rounded-lg bg-rose-600 hover:bg-rose-500 text-white disabled:opacity-20 flex items-center gap-1 sm:hidden font-semibold active:scale-95 transition-transform"
        >
          Вперед <ChevronRight size={14} />
        </button>
      </footer>

    </div>
  );
}
