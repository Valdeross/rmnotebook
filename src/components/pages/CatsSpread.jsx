import React, { useState } from 'react';
import JournalPage from '../JournalPage';
import { Heart, Sparkles, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CatsSpread({ data }) {
  const { lunaPhoto, athenaPhoto } = data;
  const [lunaLoved, setLunaLoved] = useState(false);
  const [athenaLoved, setAthenaLoved] = useState(false);

  const defaultLuna = '/katya_photos/luna.jpg';
  const defaultAthena = '/katya_photos/athena.jpg';

  // Meow audio sound synthesizer via Web Audio API
  const playMeow = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(750, ctx.currentTime + 0.15);
      osc.frequency.linearRampToValueAtTime(350, ctx.currentTime + 0.4);
      
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch (e) {}
  };

  const handlePetCat = (catName) => {
    playMeow();
    if (catName === 'luna') setLunaLoved(true);
    if (catName === 'athena') setAthenaLoved(true);
    
    confetti({
      particleCount: 35,
      spread: 55,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#ec4899', '#fbbf24', '#ffffff']
    });
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* LEFT PAGE: Луна (Светлая) */}
      <JournalPage pageNumber={5} position="left" bgClass="bg-[#faf5f7]">
        <div className="h-full flex flex-col justify-between p-1 text-zinc-900">
          
          <div className="flex justify-between items-center border-b border-rose-100 pb-2">
            <h2 className="font-vogue text-2xl sm:text-3xl text-rose-600 font-extrabold uppercase">
              ЛУНА 🐾
            </h2>
            <span className="font-handwriting text-base text-rose-500 font-bold">
              Светлая красавица 🤍
            </span>
          </div>

          {/* Luna Photo Card */}
          <div className="my-auto bg-white p-3 rounded-2xl shadow-md border border-rose-100 flex flex-col items-center text-center">
            <div className="w-40 sm:w-48 h-40 sm:h-48 rounded-xl overflow-hidden shadow-inner border border-zinc-200 mb-3 relative group bg-zinc-100">
              <img src={lunaPhoto || defaultLuna} alt="Луна (Светлая кошка)" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white text-[9px] font-sans px-2 py-0.5 rounded-full font-bold">
                Светлое облачко 🤍
              </div>
            </div>

            <h3 className="font-serif-classic text-lg font-bold text-zinc-800 mb-1">
              Кошка Луна
            </h3>
            <p className="font-sans text-xs text-zinc-600 leading-relaxed mb-3">
              Нежная и светлая хранительница домашнего уюта. Обожает мурчать рядом с Катей и приносить тепло.
            </p>

            <button
              onClick={() => handlePetCat('luna')}
              className="py-2 px-4 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-sans text-xs font-bold flex items-center gap-2 shadow transition-all hover:scale-105"
            >
              <span>🐾 Погладить Луну</span>
              <Volume2 size={14} />
            </button>
            {lunaLoved && <span className="text-[10px] text-rose-500 font-handwriting mt-1">«Муррр! Светлая Луна довольна ♡»</span>}
          </div>

          <div className="text-center pt-1 border-t border-rose-100">
            <span className="font-editorial italic text-xs text-zinc-400">
              Первая половина кошачьего дуэта Кати
            </span>
          </div>

        </div>
      </JournalPage>

      {/* RIGHT PAGE: Афина (Чёрная) */}
      <JournalPage pageNumber={6} position="right" bgClass="bg-[#f7f4fa]">
        <div className="h-full flex flex-col justify-between p-1 text-zinc-900">
          
          <div className="flex justify-between items-center border-b border-purple-100 pb-2">
            <h2 className="font-vogue text-2xl sm:text-3xl text-purple-600 font-extrabold uppercase">
              АФИНА 🖤
            </h2>
            <span className="font-handwriting text-base text-purple-500 font-bold">
              Чёрная пантера 👑
            </span>
          </div>

          {/* Athena Photo Card */}
          <div className="my-auto bg-white p-3 rounded-2xl shadow-md border border-purple-100 flex flex-col items-center text-center">
            <div className="w-40 sm:w-48 h-40 sm:h-48 rounded-xl overflow-hidden shadow-inner border border-zinc-200 mb-3 relative group bg-zinc-900">
              <img src={athenaPhoto || defaultAthena} alt="Афина (Чёрная кошка)" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute top-2 right-2 bg-purple-900/80 backdrop-blur-md text-white text-[9px] font-sans px-2 py-0.5 rounded-full font-bold">
                Чёрный бархат 🖤
              </div>
            </div>

            <h3 className="font-serif-classic text-lg font-bold text-zinc-800 mb-1">
              Кошка Афина
            </h3>
            <p className="font-sans text-xs text-zinc-600 leading-relaxed mb-3">
              Грациозная чёрная красавица с царским характером. Встречает у двери и дарит море любви.
            </p>

            <button
              onClick={() => handlePetCat('athena')}
              className="py-2 px-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-sans text-xs font-bold flex items-center gap-2 shadow transition-all hover:scale-105"
            >
              <span>🐾 Погладить Афину</span>
              <Volume2 size={14} />
            </button>
            {athenaLoved && <span className="text-[10px] text-purple-600 font-handwriting mt-1">«Мяу! Чёрная Афина в восторге ♡»</span>}
          </div>

          <div className="text-center pt-1 border-t border-purple-100">
            <span className="font-editorial italic text-xs text-zinc-400">
              Луна и Афина — самые любимые хвостики
            </span>
          </div>

        </div>
      </JournalPage>
    </div>
  );
}
