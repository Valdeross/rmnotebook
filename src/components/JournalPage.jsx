import React from 'react';

export default function JournalPage({ pageNumber, position, children, bgClass = 'bg-[#faf8f5]', darkTheme = false }) {
  const isLeft = position === 'left';
  const isRight = position === 'right';

  return (
    <div
      className={`page-sheet w-full h-full relative flex flex-col justify-between p-3 sm:p-6 md:p-8 ${bgClass}`}
      style={{
        boxSizing: 'border-box',
        backgroundColor: darkTheme ? '#050b07' : undefined,
      }}
    >
      {/* Inner spine shadow gradient */}
      {isLeft && <div className="page-inner-shadow-right" />}
      {isRight && <div className="page-inner-shadow-left" />}

      {/* Top Header line */}
      <div className={`flex items-center justify-between text-[8px] sm:text-[10px] tracking-[0.2em] uppercase font-sans pb-1.5 z-10 ${darkTheme ? 'border-b border-[#00ff9d]/30 text-[#00ff9d]' : 'border-b border-zinc-200/80 text-zinc-400'}`}>
        <span>{darkTheme ? 'THE SIMS • KATYA EDITION' : 'СПЕЦИАЛЬНЫЙ ВЫПУСК ДЛЯ ТЕБЯ'}</span>
        <span className={darkTheme ? 'font-pixel text-[9px] text-[#00ffaa]' : 'font-editorial italic capitalize tracking-normal text-rose-500 text-[10px] sm:text-[11px]'}>
          {darkTheme ? '§ 999,999' : 'Мое Солнышко ♡'}
        </span>
        <span>29.01.2004</span>
      </div>

      {/* Main Page Content Area */}
      <div className="relative flex-1 my-1.5 sm:my-3 flex flex-col z-20 overflow-hidden">
        {children}
      </div>

      {/* Bottom Footer line */}
      <div className={`flex items-center justify-between text-[8px] sm:text-[10px] tracking-wider font-sans pt-1.5 z-10 ${darkTheme ? 'border-t border-[#00ff9d]/30 text-[#00ff9d]/80' : 'border-t border-zinc-200/80 text-zinc-400'}`}>
        <span>{isLeft ? `СТРАНИЦА ${pageNumber}` : 'THE SIMS 4 HUD'}</span>
        <span className={darkTheme ? 'text-[8px] tracking-[0.2em] text-[#00ff9d] font-bold uppercase font-pixel' : 'text-[8px] tracking-[0.2em] text-pink-500 font-semibold uppercase'}>
          {darkTheme ? '★ KATYA SPECIAL ★' : '♡ ТОЛЬКО ДЛЯ ТЕБЯ ♡'}
        </span>
        <span>{isRight ? `СТРАНИЦА ${pageNumber}` : 'SPRING EDITION 2026'}</span>
      </div>
    </div>
  );
}
