import React, { useState } from 'react';
import JournalPage from '../JournalPage';
import confetti from 'canvas-confetti';

export default function SimsSpread({ data }) {
  const { girlName = 'Катя', simsPhoto } = data;
  const [showSecretScreen, setShowSecretScreen] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Reliable GIF sources for CatJam
  const primaryGif = 'https://media.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif';
  const fallbackCatImage = 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&auto=format&fit=crop&q=80';

  const handleAcceptCongratulations = () => {
    setShowSecretScreen(true);
    confetti({
      particleCount: 90,
      spread: 95,
      origin: { y: 0.5 },
      colors: ['#00ff9d', '#00ffaa', '#f472b6', '#fbbf24', '#ffffff']
    });
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row relative">
      {/* LEFT PAGE: Sims Plumbob, Header & CatJam GIF */}
      <JournalPage pageNumber={7} position="left" bgClass="bg-[#050b07] text-white font-pixel" darkTheme={true}>
        <div className="h-full flex flex-col justify-between p-1">
          
          {/* Header & Floating Plumbob */}
          <div className="flex justify-between items-start border-b border-[#00ff9d]/40 pb-2">
            <div>
              <div className="text-[8px] sm:text-[9px] text-[#00ffaa] tracking-widest uppercase font-bold">
                KATYA EDITION
              </div>
              <h2 className="font-bold sims-green text-xl sm:text-2xl md:text-3xl tracking-tight leading-none mt-1">
                THE SIMS
              </h2>
              <p className="text-xs sm:text-sm sims-green-soft mt-0.5">
                Katya Spring Edition
              </p>
            </div>
            <div className="plumbob-pixel flex-shrink-0" />
          </div>

          {/* Sims 4 Simoleons & Status Bar */}
          <div className="flex justify-between items-center bg-[#09150d] p-2 rounded-xl border border-[#00ff9d]/40 text-[10px] my-1">
            <span className="sims-green font-bold">§ 999,999 SIMOLEONS</span>
            <span className="bg-[#00ff9d]/20 text-[#00ffaa] px-2 py-0.5 rounded-md border border-[#00ff9d]/50 font-bold">
              🟢 ONLINE
            </span>
          </div>

          {/* GIF / Photo Neon Frame */}
          <div className="my-auto">
            <div className="bg-black border-4 border-[#00ff9d] rounded-2xl overflow-hidden shadow-2xl neon-glow p-1">
              <div className="w-full h-36 sm:h-44 rounded-xl overflow-hidden bg-zinc-950 flex items-center justify-center">
                <img
                  src={simsPhoto || (imgError ? fallbackCatImage : primaryGif)}
                  onError={() => setImgError(true)}
                  alt="Cat Jam Sims"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-[8px] text-center sims-green-soft mt-1.5 flex justify-center items-center gap-2">
              <span>★ CATJAM_HEADPHONES_SIMS ★</span>
            </div>
          </div>

          {/* Sims Moodlet Badge (FIXED: +100 fits comfortably inside badge) */}
          <div className="bg-[#09150d] p-2.5 rounded-xl border border-[#00ff9d]/50 flex items-center gap-3">
            <div className="px-2 py-1 min-w-[50px] h-9 rounded-lg bg-[#00ff9d] text-black flex items-center justify-center font-bold text-xs shadow-md border border-[#00ffaa] flex-shrink-0">
              +100
            </div>
            <div className="min-w-0 flex-1">
              <div className="sims-green text-[10px] font-bold">Счастлива (Солнышко)</div>
              <div className="text-[8px] text-zinc-300 font-sans leading-tight">
                Катя в восторге от уюта, музыки и любимых кошек.
              </div>
            </div>
          </div>

          <div className="text-center pt-1 border-t border-[#00ff9d]/30">
            <span className="text-[8px] text-emerald-400/80">
              The Sims 4 • Katya Special 2026
            </span>
          </div>

        </div>
      </JournalPage>

      {/* RIGHT PAGE: Character Needs, Traits & Interactive Button */}
      <JournalPage pageNumber={8} position="right" bgClass="bg-[#050b07] text-white font-pixel" darkTheme={true}>
        <div className="h-full flex flex-col justify-between p-1">
          
          {/* Character Needs Header */}
          <div className="border-b border-[#00ff9d]/40 pb-1 flex justify-between items-center">
            <div className="text-[#00ffaa] text-[10px] tracking-widest uppercase font-bold sims-green-soft">
              CHARACTER NEEDS
            </div>
            <span className="text-[8px] text-[#00ffaa] font-bold">KATYA STATUS</span>
          </div>

          {/* 4 Needs Bars (FIXED: Light neon green text for labels) */}
          <div className="my-auto space-y-2 text.xs font-pixel">
            <div>
              <div className="flex justify-between mb-0.5 text-[#00ffaa] font-bold text-[10px] sims-green-soft">
                <span>Счастье</span>
                <span>100%</span>
              </div>
              <div className="bg-zinc-900 rounded-full overflow-hidden p-0.5 border border-[#00ff9d]/40">
                <div className="need-bar-fill w-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-0.5 text-[#00ffaa] font-bold text-[10px] sims-green-soft">
                <span>Любовь</span>
                <span>100%</span>
              </div>
              <div className="bg-zinc-900 rounded-full overflow-hidden p-0.5 border border-[#00ff9d]/40">
                <div className="need-bar-fill w-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-0.5 text-[#00ffaa] font-bold text-[10px] sims-green-soft">
                <span>Симс</span>
                <span>100%</span>
              </div>
              <div className="bg-zinc-900 rounded-full overflow-hidden p-0.5 border border-[#00ff9d]/40">
                <div className="need-bar-fill w-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-0.5 text-[#00ffaa] font-bold text-[10px] sims-green-soft">
                <span>Настроение</span>
                <span>100%</span>
              </div>
              <div className="bg-zinc-900 rounded-full overflow-hidden p-0.5 border border-[#00ff9d]/40">
                <div className="need-bar-fill w-full" />
              </div>
            </div>
          </div>

          {/* Sims Character Traits Badges */}
          <div className="grid grid-cols-2 gap-1.5 my-1 text-[8px] font-sans">
            <div className="bg-[#09150d] p-1.5 rounded-lg border border-[#00ff9d]/40 flex items-center gap-1.5">
              <span className="text-base">👑</span>
              <div>
                <div className="text-[#00ff9d] font-bold">Икона стиля</div>
                <div className="text-[7px] text-zinc-300">10/10 всегда</div>
              </div>
            </div>
            <div className="bg-[#09150d] p-1.5 rounded-lg border border-[#00ff9d]/40 flex items-center gap-1.5">
              <span className="text-base">🐾</span>
              <div>
                <div className="text-[#00ff9d] font-bold">Кошачья мама</div>
                <div className="text-[7px] text-zinc-300">Луна и Афина</div>
              </div>
            </div>
          </div>

          {/* Retro Message Box (FIXED: Full 100% width) */}
          <div className="retro-message-box w-full">
            <p className="w-full text-center text-[#00ffc6] text-[9px] sm:text-[10px] leading-relaxed font-pixel">
              Ты строишь лучшие миры,<br />
              но лучший мир — это тот,<br />
              где ты есть со мной.
            </p>
          </div>

          {/* Interactive Acceptance Button */}
          <button
            onClick={handleAcceptCongratulations}
            className="w-full py-3.5 bg-[#00ff9d] hover:bg-[#00ffaa] text-black font-bold text-xs sm:text-sm rounded-xl transition-all active:scale-95 neon-glow border-2 border-[#00ff9d]/60 shadow-xl font-pixel"
          >
            ПРИНЯТЬ ПОЗДРАВЛЕНИЕ
          </button>

        </div>
      </JournalPage>

      {/* SECRET SCREEN OVERLAY */}
      {showSecretScreen && (
        <div className="absolute inset-0 z-50 bg-gradient-to-br from-pink-950 via-purple-950 to-black flex items-center justify-center p-4 font-pixel text-center animate-soft-float">
          <div className="max-w-md w-full space-y-4">
            
            <div className="text-4xl sm:text-5xl">💖🌸🐱</div>
            
            <h2 className="text-2xl sm:text-3xl font-bold sims-green leading-tight">
              С ДНЕМ РОЖДЕНИЯ
            </h2>
            <h3 className="text-xl sm:text-2xl text-pink-300 font-bold">
              МОЁ СОЛНЦЕ ❤️
            </h3>

            <div className="bg-black/70 backdrop-blur-xl p-4 rounded-2xl border-2 border-pink-400 text-left shadow-2xl">
              <p className="text-[10px] sm:text-xs leading-relaxed text-pink-100 font-sans">
                Ты строишь лучшие миры в моей жизни.<br />
                Но самый лучший мир — это тот,<br />
                где ты рядом со мной.<br /><br />
                Спасибо, что делаешь каждый день особенным.<br />
                Я очень тебя люблю.
              </p>
              <div className="mt-3 text-center text-[#00ff9d] text-lg">❤️</div>
            </div>

            <button
              onClick={() => setShowSecretScreen(false)}
              className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs border border-white/40 transition-all font-sans"
            >
              ← Вернуться в журнал
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
