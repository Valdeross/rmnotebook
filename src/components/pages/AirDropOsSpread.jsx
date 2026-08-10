import React, { useState } from 'react';
import JournalPage from '../JournalPage';
import confetti from 'canvas-confetti';
import { Send, Check } from 'lucide-react';

export default function AirDropOsSpread({ data }) {
  const { girlName = 'Катя', airdropPhoto, macPhotos = [] } = data;
  const [accepted, setAccepted] = useState(false);

  const defaultMac = [
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80'
  ];

  const windows = macPhotos.length >= 2 ? macPhotos : defaultMac;

  const handleAcceptAirDrop = () => {
    setAccepted(true);
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#e11d48', '#fbbf24']
    });
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* LEFT PAGE: AirDrop Modal */}
      <JournalPage pageNumber={19} position="left" bgClass="bg-[#f0edf2]">
        <div className="h-full relative flex flex-col justify-between p-2 rounded-md overflow-hidden bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%), url(${airdropPhoto})` }}>
          
          <div className="z-10 text-right">
            <span className="bg-black/60 backdrop-blur-md text-white text-[9px] font-sans tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/20">
              AirDrop Функция
            </span>
          </div>

          {/* AirDrop Glass Modal Center */}
          <div className="airdrop-glass p-4 rounded-2xl max-w-xs mx-auto text-center shadow-2xl border border-white/80 my-auto z-20">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center mx-auto mb-2">
              <Send size={20} className="rotate-[-20deg]" />
            </div>

            <h3 className="font-sans font-bold text-sm text-zinc-900 mb-0.5">
              AirDrop от {girlName} ☀️
            </h3>
            <p className="text-xs text-zinc-600 font-sans mb-3">
              хочет отправить вам 100% искренней любви и тепла (1 фото)
            </p>

            {accepted ? (
              <div className="bg-rose-500 text-white p-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 animate-pulse">
                <Check size={16} />
                <span>Принято с любовью ♡</span>
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => setAccepted(false)}
                  className="flex-1 py-1.5 px-3 rounded-xl bg-zinc-200/80 hover:bg-zinc-300 text-zinc-700 text-xs font-semibold transition-colors"
                >
                  Отклонить
                </button>
                <button
                  onClick={handleAcceptAirDrop}
                  className="flex-1 py-1.5 px-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
                >
                  Принять
                </button>
              </div>
            )}
          </div>

          <div className="z-10 text-center text-white/90">
            <span className="font-serif-classic italic text-xs drop-shadow">
              Нажмите «Принять» для салюта из сердечек
            </span>
          </div>

        </div>
      </JournalPage>

      {/* RIGHT PAGE: macOS Glass Windows */}
      <JournalPage pageNumber={20} position="right" bgClass="bg-[#e9e6ec]">
        <div className="h-full flex flex-col justify-between p-1">
          <div className="flex justify-between items-center mb-1">
            <span className="font-vogue text-xs uppercase tracking-widest text-zinc-400">
              ГАЛЕРЕЯ MACOS
            </span>
            <span className="font-sans text-xs text-zinc-500 font-medium">
              фото_катерины.app
            </span>
          </div>

          {/* Stacked Window Frames */}
          <div className="relative flex-1 my-1">
            <div className="macos-window w-44 sm:w-52 absolute top-2 left-2 shadow-xl z-10 border border-zinc-200">
              <div className="macos-header">
                <div className="macos-dot macos-red" />
                <div className="macos-dot macos-yellow" />
                <div className="macos-dot macos-green" />
                <span className="text-[9px] font-sans text-zinc-500 font-semibold ml-2">солнышко.jpg</span>
              </div>
              <div className="w-full h-28 sm:h-32 overflow-hidden">
                <img src={windows[0]} alt="Mac 1" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="macos-window w-44 sm:w-52 absolute bottom-2 right-2 shadow-2xl z-20 border border-zinc-300">
              <div className="macos-header">
                <div className="macos-dot macos-red" />
                <div className="macos-dot macos-yellow" />
                <div className="macos-dot macos-green" />
                <span className="text-[9px] font-sans text-zinc-500 font-semibold ml-2">любовь.png</span>
              </div>
              <div className="w-full h-28 sm:h-32 overflow-hidden">
                <img src={windows[1]} alt="Mac 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="text-center pt-1 border-t border-zinc-200">
            <span className="font-editorial italic text-xs text-zinc-500">
              Оконный стиль современной эстетики
            </span>
          </div>
        </div>
      </JournalPage>
    </div>
  );
}
