import React from 'react';
import JournalPage from '../JournalPage';
import { Sparkles } from 'lucide-react';

export default function CalendarSpread({ data }) {
  const { girlName = 'Катя', birthMonthYear = 'ЯНВАРЬ 2004', birthDayNumber = 29, calendarPhoto } = data;

  const daysOfWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* LEFT PAGE: Birth Month Calendar */}
      <JournalPage pageNumber={3} position="left" bgClass="bg-[#faf8f5]">
        <div className="h-full flex flex-col justify-between p-1">
          
          <div className="text-center border-b border-zinc-200 pb-2">
            <h2 className="font-vogue text-2xl sm:text-3xl tracking-widest text-zinc-900 uppercase">
              {birthMonthYear}
            </h2>
            <p className="font-handwriting text-base text-rose-500 mt-0.5">
              День, когда родилось наше Солнышко
            </p>
          </div>

          {/* Calendar Grid */}
          <div className="my-auto px-1">
            <div className="grid grid-cols-7 gap-1 text-center font-sans text-xs font-semibold text-zinc-400 mb-2 border-b border-zinc-100 pb-2">
              {daysOfWeek.map((day, idx) => (
                <div key={idx}>{day}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-y-2 gap-x-1 text-center font-editorial text-base sm:text-lg text-zinc-700">
              {calendarDays.map((day) => {
                const isTargetDay = Number(day) === Number(birthDayNumber);
                return (
                  <div key={day} className="relative flex items-center justify-center h-8">
                    <span className={isTargetDay ? 'font-bold text-rose-600 z-10' : ''}>
                      {day}
                    </span>

                    {/* Lipstick Kiss / Heart Circle on Birthday */}
                    {isTargetDay && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-kiss-pulse">
                        <div className="w-8 h-8 rounded-full bg-rose-500/20 border-2 border-rose-500/80 flex items-center justify-center">
                          <span className="text-xs text-rose-600 font-sans font-bold">💋</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center border-t border-zinc-200 pt-2">
            <p className="font-editorial italic text-sm text-rose-500 tracking-wide">
              Начало самой прекрасной истории.
            </p>
          </div>
        </div>
      </JournalPage>

      {/* RIGHT PAGE: Happy Birthday Portrait */}
      <JournalPage pageNumber={4} position="right" bgClass="bg-[#f5eef0]">
        <div className="h-full relative flex flex-col justify-between p-3 rounded-md overflow-hidden bg-cover bg-center text-white" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.6) 100%), url(${calendarPhoto})` }}>
          
          <div className="z-10 text-center">
            <h2 className="font-editorial text-2xl sm:text-3xl text-white font-bold tracking-wider uppercase drop-shadow">
              С ДНЕМ РОЖДЕНИЯ, СОЛНЫШКО!
            </h2>
            <div className="w-12 h-[2px] bg-rose-400 mx-auto mt-1" />
          </div>

          <div className="z-10 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-white/20 text-center">
            <div className="flex items-center justify-center gap-1 text-rose-300 text-[10px] font-sans font-semibold tracking-widest uppercase mb-1">
              <Sparkles size={12} />
              <span>29 ЯНВАРЯ 2004</span>
              <Sparkles size={12} />
            </div>
            <p className="font-serif-classic italic text-base text-cream">
              «Пусть твой день будет наполнен светом, искренними улыбками и сбывающимися мечтами!»
            </p>
            <div className="mt-1 text-right">
              <span className="font-handwriting text-lg text-rose-300">
                — Для Кати ♡
              </span>
            </div>
          </div>

        </div>
      </JournalPage>
    </div>
  );
}
