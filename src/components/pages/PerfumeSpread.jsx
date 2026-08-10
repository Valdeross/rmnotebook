import React, { useState } from 'react';
import JournalPage from '../JournalPage';
import { Flower2, Sparkles, Camera } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PerfumeSpread({ data }) {
  const { girlName = 'Катя' } = data;
  const [activePerfume, setActivePerfume] = useState(0);
  const [showRealPhoto, setShowRealPhoto] = useState(false);

  const perfumes = [
    {
      name: 'Mur Mur',
      brand: 'FABERLIC',
      subtitle: 'Кокос & Белый Шоколад',
      topNotes: 'Игристый Бергамот • Сладкий Кокос',
      heartNotes: 'Белый Шоколад • Сливочная Ваниль',
      baseNotes: 'Шелковый Мускус • Древесный Сандал',
      vibe: 'Сливочно-сладкий, уютный и кокетливый аромат с гурманскими нотами',
      studioImg: './katya_photos/studio_mur_mur.png',
      realImg: './katya_photos/real_mur_mur.jpg',
      color: 'from-amber-900 via-rose-900 to-stone-900'
    },
    {
      name: 'Cuba Gold',
      brand: 'CUBA PARIS',
      subtitle: 'Пряная Лаванда & Табак',
      topNotes: 'Розовый Перец • Сицилийский Лимон',
      heartNotes: 'Горная Лаванда • Пряный Табак',
      baseNotes: 'Древесный Январь • Дымчатая Ваниль',
      vibe: 'Тёплый, глубокий и интригующий восточно-пряный шлейф',
      studioImg: './katya_photos/studio_cuba_gold.png',
      realImg: './katya_photos/real_cuba_gold.jpg',
      color: 'from-amber-800 via-yellow-950 to-zinc-950'
    },
    {
      name: 'Sweet Cherry',
      brand: 'SWEET CHERRY',
      subtitle: 'Сочная Вишня & Горький Миндаль',
      topNotes: 'Спелая Вишня • Горький Миндаль',
      heartNotes: 'Вишнёвый Ликёр • Дамасская Роза',
      baseNotes: 'Бобы Тонка • Сахарная Ваниль',
      vibe: 'Сладкий, соблазнительный и яркий вишнёвый соблазн',
      studioImg: './katya_photos/studio_sweet_cherry.png',
      realImg: './katya_photos/real_sweet_cherry.jpg',
      color: 'from-rose-900 via-red-950 to-black'
    },
    {
      name: 'Verato Pour Femme',
      brand: 'VERATO',
      subtitle: 'Персик & Белый Жасмин',
      topNotes: 'Сочный Персик • Цитрусовая Свежесть',
      heartNotes: 'Белый Жасмин • Нежная Лилия',
      baseNotes: 'Бархатный Мускус • Светлая Амбра',
      vibe: 'Утонченный, женственный и изысканный фруктово-цветочный вальс',
      studioImg: './katya_photos/studio_verato.png',
      realImg: './katya_photos/real_verato.jpg',
      color: 'from-purple-900 via-pink-950 to-zinc-950'
    }
  ];

  const handleSpray = () => {
    confetti({
      particleCount: 60,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#fb7185', '#f43f5e', '#fef08a', '#ffffff']
    });
  };

  const current = perfumes[activePerfume];

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* LEFT PAGE: Fragrance Pyramid */}
      <JournalPage pageNumber={9} position="left" bgClass="bg-[#fcf8f9]">
        <div className="h-full flex flex-col justify-between p-1 text-zinc-900">
          
          <div className="text-center border-b border-rose-100 pb-2">
            <h2 className="font-vogue text-2xl sm:text-3xl text-rose-700 font-extrabold tracking-tight">
              ПАРФЮМЕРНЫЙ ГАРДЕРОБ
            </h2>
            <p className="font-handwriting text-base text-rose-500 mt-0.5">
              Ароматная коллекция Кати ({current.name})
            </p>
          </div>

          {/* Fragrance Pyramid (Dynamically updating based on selected perfume) */}
          <div className="my-auto space-y-2.5 px-1">
            <div className="bg-white p-2.5 rounded-2xl shadow-sm border border-rose-100 text-center">
              <span className="text-[9px] font-sans font-bold text-rose-400 uppercase tracking-widest block mb-0.5">
                ВЕРХНИЕ НОТЫ (Первое впечатление):
              </span>
              <p className="font-serif-classic text-xs sm:text-sm text-zinc-800 font-bold">
                {current.topNotes}
              </p>
            </div>

            <div className="bg-white p-2.5 rounded-2xl shadow-sm border border-rose-100 text-center">
              <span className="text-[9px] font-sans font-bold text-rose-500 uppercase tracking-widest block mb-0.5">
                НОТЫ СЕРДЦА (Душа аромата):
              </span>
              <p className="font-serif-classic text-xs sm:text-sm text-rose-900 font-bold">
                {current.heartNotes}
              </p>
            </div>

            <div className="bg-white p-2.5 rounded-2xl shadow-sm border border-rose-100 text-center">
              <span className="text-[9px] font-sans font-bold text-rose-400 uppercase tracking-widest block mb-0.5">
                БАЗОВЫЕ НОТЫ (Неповторимый Шлейф):
              </span>
              <p className="font-serif-classic text-xs sm:text-sm text-zinc-800 font-bold">
                {current.baseNotes}
              </p>
            </div>
          </div>

          <div className="text-center pt-1 border-t border-rose-100">
            <span className="font-editorial italic text-xs text-zinc-400">
              «Ароматы, подчеркивающие неповторимый стиль Кати»
            </span>
          </div>

        </div>
      </JournalPage>

      {/* RIGHT PAGE: Studio Photo & Real Bottle Display */}
      <JournalPage pageNumber={10} position="right" bgClass="bg-[#181317] text-white">
        <div className="h-full flex flex-col justify-between p-1">
          
          <div className="flex justify-between items-center border-b border-rose-900/50 pb-1.5">
            <span className="font-vogue text-xs uppercase tracking-widest text-rose-300 font-bold">
              КОЛЛЕКЦИЯ ДУХОВ КАТИ
            </span>
            <button
              onClick={() => setShowRealPhoto(!showRealPhoto)}
              className="text-[9px] font-sans text-rose-300 bg-rose-950/80 hover:bg-rose-900 border border-rose-700/50 px-2 py-0.5 rounded-full flex items-center gap-1 transition-colors"
            >
              <Camera size={11} />
              <span>{showRealPhoto ? 'Студийное фото' : 'Реальный флакон'}</span>
            </button>
          </div>

          {/* Interactive Perfume Bottle Card */}
          <div className={`my-auto bg-gradient-to-br ${current.color} p-3 sm:p-4 rounded-2xl shadow-2xl border border-white/20 text-center space-y-2 relative overflow-hidden transition-all duration-300`}>
            
            {/* Perfume Bottle Image (Studio vs Real toggle) */}
            <div className="w-24 sm:w-28 h-32 sm:h-36 mx-auto relative rounded-xl overflow-hidden shadow-2xl border border-white/30 bg-black/40 group">
              <img
                src={showRealPhoto ? current.realImg : current.studioImg}
                alt={current.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-1 right-1 bg-black/70 backdrop-blur-md text-[7px] text-zinc-300 px-1.5 py-0.5 rounded">
                {showRealPhoto ? 'Фото из коллекции' : 'Studio Edit'}
              </div>
            </div>

            <div>
              <div className="text-[9px] font-sans text-rose-200 tracking-widest uppercase font-bold">
                {current.brand}
              </div>
              <h3 className="font-vogue text-lg sm:text-xl text-white font-extrabold leading-tight">
                {current.name}
              </h3>
              <p className="font-serif-classic italic text-xs text-rose-100 mt-0.5">
                «{current.vibe}»
              </p>
            </div>

            <button
              onClick={handleSpray}
              className="py-2 px-4 rounded-full bg-white text-rose-950 font-sans text-xs font-bold shadow-lg flex items-center justify-center gap-2 mx-auto hover:scale-105 transition-transform"
            >
              <Flower2 size={14} className="text-rose-600" />
              <span>Распылить {current.name} ✨</span>
            </button>
          </div>

          {/* 4 Perfume Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 border-t border-rose-900/50 pt-2">
            {perfumes.map((p, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActivePerfume(idx);
                  setShowRealPhoto(false);
                }}
                className={`py-1.5 px-1 rounded-lg text-[9px] font-sans font-bold transition-all truncate text-center ${activePerfume === idx ? 'bg-rose-600 text-white shadow-md ring-1 ring-rose-400' : 'bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800'}`}
              >
                {p.name}
              </button>
            ))}
          </div>

        </div>
      </JournalPage>
    </div>
  );
}
