import React from 'react';
import JournalPage from '../JournalPage';
import { Sparkles } from 'lucide-react';

export default function CoverSpread({ data, onJumpToPage }) {
  const { girlName = 'Катя', birthDate = '29 ЯНВАРЯ 2004', coverPhoto } = data;

  const defaultCoverPhoto = './katya_photos/photo_2025-09-02_22-57-08.jpg';
  const currentCover = coverPhoto || defaultCoverPhoto;

  const toc = [
    { title: '01. ДЕНЬ РОЖДЕНИЯ СОЛНЫШКА', page: 'Стр. 03-04', index: 1 },
    { title: '02. КАТИНЫ ЛЮБИМЫЕ КОШКИ (ЛУНА И АФИНА)', page: 'Стр. 05-06', index: 2 },
    { title: '03. THE SIMS 4: KATYA EDITION', page: 'Стр. 07-08', index: 3 },
    { title: '04. ПАРФЮМЕРНЫЙ ГАРДЕРОБ & ДУХИ', page: 'Стр. 09-10', index: 4 },
    { title: '05. ТЫ МОЁ СОЛНЦЕ ♡ & МОДБОРД', page: 'Стр. 11-12', index: 5 },
    { title: '06. ГОД В ФОТО (12 МЕСЯЦЕВ)', page: 'Стр. 13-14', index: 6 },
    { title: '07. HÓME & СЕРДЦЕ ИЗ ФОТО', page: 'Стр. 15-16', index: 7 },
    { title: '08. МУЗЫКАЛЬНЫЙ ПЛЕЙЛИСТ', page: 'Стр. 17-18', index: 8 },
    { title: '09. AIRDROP & MACOS СТИЛЬ', page: 'Стр. 19-20', index: 9 },
    { title: '10. VOGUE & НЕПОВТОРИМЫЙ СТИЛЬ', page: 'Стр. 21-22', index: 10 }
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* LEFT PAGE: Inside Cover / Table of Contents */}
      <JournalPage pageNumber={1} position="left" bgClass="bg-[#fcf9f5]">
        <div className="h-full flex flex-col justify-between p-1 text-zinc-900">
          <div>
            <div className="flex items-center gap-1.5 mb-1 text-rose-500 font-sans text-[10px] tracking-widest uppercase font-bold">
              <Sparkles size={13} />
              <span>СПЕЦИАЛЬНЫЙ ВЫПУСК</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl text-zinc-900 leading-tight mb-2">
              Письмо для <br />
              <span className="italic font-vogue text-rose-600">нашего Солнышка ({girlName})</span>
            </h2>
            <p className="font-serif-classic text-xs sm:text-sm text-zinc-700 leading-relaxed mb-3">
              Этот журнал создан для одного самого главного человека. Здесь только её любимые увлечения, её котики Луна и Афина, вселенная Sims, гардероб духов и самые светлые моменты!
            </p>
          </div>

          {/* Table of Contents */}
          <div className="my-auto bg-white p-3 rounded-xl border border-rose-100 shadow-sm space-y-1.5">
            <h3 className="font-vogue text-[10px] uppercase tracking-[0.2em] text-zinc-400 border-b border-rose-100 pb-1 font-bold">
              СОДЕРЖАНИЕ НОМЕРА
            </h3>
            <div className="space-y-1 font-sans text-[11px] text-zinc-700">
              {toc.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onJumpToPage(item.index)}
                  className="flex justify-between items-center cursor-pointer hover:text-rose-600 transition-colors group py-0.5"
                >
                  <span className="font-medium group-hover:translate-x-1 transition-transform truncate pr-2">
                    {item.title}
                  </span>
                  <span className="font-serif-classic italic text-zinc-400 text-xs flex-shrink-0">
                    {item.page}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-right pt-1 border-t border-zinc-100">
            <span className="font-handwriting text-xl text-rose-600">С любовью, для Солнышка ♡</span>
          </div>
        </div>
      </JournalPage>

      {/* RIGHT PAGE: Front Magazine Cover */}
      <JournalPage pageNumber={2} position="right" bgClass="bg-[#121318]">
        <div className="h-full relative flex flex-col justify-between text-white p-3 sm:p-5 overflow-hidden rounded-md bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.7) 100%), url(${currentCover})` }}>
          
          {/* Top Magazine Header */}
          <div className="z-10 text-center">
            <h1 className="font-vogue text-4xl sm:text-5xl md:text-6xl tracking-tight text-white font-extrabold uppercase drop-shadow-lg">
              СОЛНЫШКО
            </h1>
            <div className="flex justify-between items-center text-[10px] sm:text-xs font-sans tracking-[0.2em] uppercase text-rose-300 border-y border-rose-400/40 py-1 my-1">
              <span>СПЕЦИАЛЬНЫЙ ВЫПУСК</span>
              <span>{birthDate}</span>
              <span>2026</span>
            </div>
          </div>

          {/* Center Callout Headlines */}
          <div className="z-10 my-auto text-left space-y-2">
            <div className="inline-block bg-rose-600 text-white text-[10px] font-sans font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow">
              ЭКСКЛЮЗИВНО ДЛЯ КАТИ
            </div>
            
            <h2 className="font-editorial text-2xl sm:text-3xl italic text-cream leading-tight drop-shadow-md">
              Для самой лучшей, <br />
              <span className="font-sans font-normal not-italic text-lg sm:text-xl text-rose-200">самой прекрасной и любимой!</span>
            </h2>

            <div className="pt-1">
              <span className="font-editorial text-2xl sm:text-3xl text-amber-300 font-bold block drop-shadow-lg">
                22 года светлого счастья
              </span>
              <span className="text-xs font-sans text-zinc-200 tracking-wider font-medium">Главная Икона Стиля и Уюта</span>
            </div>
          </div>

          {/* Bottom Cover Name & Barcode */}
          <div className="z-10 flex justify-between items-end border-t border-white/30 pt-2">
            <div>
              <div className="font-vogue text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-widest leading-none drop-shadow-lg">
                {girlName}
              </div>
              <div className="text-[10px] font-sans text-rose-300 tracking-widest uppercase mt-1 font-semibold">
                Луна • Афина • Sims • Парфюм
              </div>
            </div>

            {/* Barcode */}
            <div className="bg-white/90 p-1.5 rounded flex flex-col items-center shadow">
              <div className="flex gap-[2px] h-6 items-center">
                <div className="w-[2px] h-full bg-black" />
                <div className="w-[1px] h-full bg-black" />
                <div className="w-[3px] h-full bg-black" />
                <div className="w-[1px] h-full bg-black" />
                <div className="w-[2px] h-full bg-black" />
                <div className="w-[4px] h-full bg-black" />
              </div>
              <span className="text-[7px] text-black font-mono tracking-wider font-bold mt-0.5">
                29012004
              </span>
            </div>
          </div>

        </div>
      </JournalPage>
    </div>
  );
}
