import React from 'react';

export default function JournalPage({ pageNumber, position, children, bgClass = 'bg-[#faf8f5]', darkTheme = false }) {
  const isLeft = position === 'left';
  const isRight = position === 'right';

  return (
    <div
      className={`page-sheet w-full h-full relative flex flex-col justify-between p-2.5 sm:p-5 md:p-7 overflow-y-auto custom-scroll ${bgClass}`}
      style={{
        boxSizing: 'border-box',
        backgroundColor: darkTheme ? '#050b07' : undefined,
      }}
    >
      {/* Inner spine shadow gradient */}
      {isLeft && <div className="page-inner-shadow-right hidden md:block" />}
      {isRight && <div className="page-inner-shadow-left hidden md:block" />}

      {/* Top Header line */}
      <div className={`flex items-center justify-between text-[8px] sm:text-[10px] tracking-[0.15em] uppercase font-sans pb-1 z-10 flex-shrink-0 ${darkTheme ? 'border-b border-[#00ff9d]/30 text-[#00ff9d]' : 'border-b border-zinc-200/80 text-zinc-400'}`}>
        <span className="truncate pr-1">{darkTheme ? 'THE SIMS • KATYA EDITION' : 'СПЕЦИАЛЬНЫЙ ВЫПУСК ДЛЯ ТЕБЯ'}</span>
        <span className={darkTheme ? 'font-pixel text-[8px] sm:text-[9px] text-[#00ffaa] flex-shrink-0' : 'font-editorial italic capitalize tracking-normal text-rose-500 text-[10px] sm:text-[11px] flex-shrink-0'}>
          {darkTheme ? '§ 999,999' : 'Мое Солнышко ♡'}
        </span>
        <span className="hidden sm:inline pl-1">29.01.2004</span>
      </div>

      {/* Main Page Content Area */}
      <div className="relative flex-1 my-1 sm:my-2 flex flex-col z-20 min-h-0 overflow-y-auto custom-scroll">
        {children}
      </div>

      {/* Bottom Footer line */}
      <div className={`flex items-center justify-between text-[8px] sm:text-[10px] tracking-wider font-sans pt-1 z-10 flex-shrink-0 ${darkTheme ? 'border-t border-[#00ff9d]/30 text-[#00ff9d]/80' : 'border-t border-zinc-200/80 text-zinc-400'}`}>
        <span>{isLeft ? `СТРАНИЦА ${pageNumber}` : 'THE SIMS 4 HUD'}</span>
        <span className={darkTheme ? 'text-[7px] sm:text-[8px] tracking-[0.15em] text-[#00ff9d] font-bold uppercase font-pixel' : 'text-[7px] sm:text-[8px] tracking-[0.15em] text-pink-500 font-semibold uppercase'}>
          {darkTheme ? '★ KATYA SPECIAL ★' : '♡ ТОЛЬКО ДЛЯ ТЕБЯ ♡'}
        </span>
        <span>{isRight ? `СТРАНИЦА ${pageNumber}` : 'SPRING 2026'}</span>
      </div>
    </div>
  );
}
