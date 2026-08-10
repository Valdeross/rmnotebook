import React, { useState } from 'react';
import JournalPage from '../JournalPage';
import { Calendar, Sparkles, X, Heart } from 'lucide-react';

export default function YearInPhotosSpread({ data }) {
  const { girlName, monthPhotos = {} } = data;
  const [selectedMonth, setSelectedMonth] = useState(null);

  const months = [
    { key: 'jan', name: 'Январь', title: 'January', photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80', note: 'Зимние уютные вечера' },
    { key: 'feb', name: 'Февраль', title: 'February', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80', note: 'Теплые улыбки в мороз' },
    { key: 'mar', name: 'Март', title: 'March', photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80', note: 'Первые весенние цветы' },
    { key: 'apr', name: 'Апрель', title: 'April', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=80', note: 'Солнце и вдохновение' },
    { key: 'may', name: 'Май', title: 'May', photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=80', note: 'Прогулки до заката' },
    { key: 'jun', name: 'Июнь', title: 'June', photo: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=80', note: 'Летний бриз' },
    { key: 'jul', name: 'Июль', title: 'July', photo: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80', note: 'Загадочный загар' },
    { key: 'aug', name: 'Август', title: 'August', photo: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=80', note: 'Звездные ночи' },
    { key: 'sep', name: 'Сентябрь', title: 'September', photo: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=500&auto=format&fit=crop&q=80', note: 'Осенний эстетизм' },
    { key: 'oct', name: 'Октябрь', title: 'October', photo: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&auto=format&fit=crop&q=80', note: 'Кофе и свитера' },
    { key: 'nov', name: 'Ноябрь', title: 'November', photo: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500&auto=format&fit=crop&q=80', note: 'Мечты под пледом' },
    { key: 'dec', name: 'Декабрь', title: 'December', photo: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&auto=format&fit=crop&q=80', note: 'Праздничное волшебство' }
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row relative">
      {/* LEFT PAGE: Months Jan - Jun */}
      <JournalPage pageNumber={13} position="left" bgClass="bg-[#faf8f5]">
        <div className="h-full flex flex-col justify-between p-1">
          <div>
            <h2 className="font-vogue text-3xl font-extrabold text-rose-600 tracking-tight uppercase">
              ГОД В ФОТО
            </h2>
            <p className="font-serif-classic text-xs sm:text-sm text-zinc-600 mt-1 leading-snug">
              Год пролетел незаметно. Здесь собраны твои самые яркие моменты и эстетика за каждое время года.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto">
            {months.slice(0, 6).map((m) => {
              const imgSrc = monthPhotos[m.key] || m.photo;
              return (
                <div
                  key={m.key}
                  onClick={() => setSelectedMonth({ ...m, photo: imgSrc })}
                  className="group cursor-pointer flex flex-col items-center bg-white p-1 rounded-md shadow-sm border border-zinc-200/80 hover:border-rose-300 transition-all hover:scale-[1.03]"
                >
                  <div className="w-full h-20 sm:h-24 rounded overflow-hidden">
                    <img src={imgSrc} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <span className="font-sans text-[10px] font-semibold text-zinc-700 mt-1">
                    {m.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-1 border-t border-zinc-200">
            <span className="font-handwriting text-rose-500 text-sm">
              Первая половина года ♡
            </span>
          </div>
        </div>
      </JournalPage>

      {/* RIGHT PAGE: Months Jul - Dec */}
      <JournalPage pageNumber={14} position="right" bgClass="bg-[#f5f2ec]">
        <div className="h-full flex flex-col justify-between p-1">
          <div className="flex justify-between items-center mb-1">
            <span className="font-vogue text-xs uppercase tracking-widest text-zinc-400">
              YEAR HIGHLIGHTS
            </span>
            <span className="font-editorial italic text-xs text-rose-500">
              12 прекрасных месяцев
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto">
            {months.slice(6, 12).map((m) => {
              const imgSrc = monthPhotos[m.key] || m.photo;
              return (
                <div
                  key={m.key}
                  onClick={() => setSelectedMonth({ ...m, photo: imgSrc })}
                  className="group cursor-pointer flex flex-col items-center bg-white p-1 rounded-md shadow-sm border border-zinc-200/80 hover:border-rose-300 transition-all hover:scale-[1.03]"
                >
                  <div className="w-full h-20 sm:h-24 rounded overflow-hidden">
                    <img src={imgSrc} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <span className="font-sans text-[10px] font-semibold text-zinc-700 mt-1">
                    {m.name}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-1 border-t border-zinc-200">
            <span className="font-editorial italic text-xs text-zinc-500">
              Нажмите на любой месяц, чтобы рассмотреть кадр
            </span>
          </div>
        </div>
      </JournalPage>

      {/* Lightbox Modal for Selected Month */}
      {selectedMonth && (
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white text-zinc-900 rounded-xl p-5 max-w-sm w-full shadow-2xl relative animate-soft-float">
            <button
              onClick={() => setSelectedMonth(null)}
              className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-900 p-1"
            >
              <X size={20} />
            </button>
            <div className="w-full h-56 rounded-lg overflow-hidden mb-3">
              <img src={selectedMonth.photo} alt={selectedMonth.name} className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="font-vogue text-xl uppercase tracking-wider text-rose-600 font-bold">
                {selectedMonth.name} ({selectedMonth.title})
              </h3>
              <p className="font-serif-classic italic text-base text-zinc-700 mt-1">
                «{selectedMonth.note}»
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
