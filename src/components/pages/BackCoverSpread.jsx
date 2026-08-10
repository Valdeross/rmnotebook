import React from 'react';
import JournalPage from '../JournalPage';
import { Sparkles } from 'lucide-react';

export default function BackCoverSpread({ data }) {
  const { girlName = 'Катя', backCoverPhoto, ageNumber = 22 } = data;

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* LEFT PAGE: YOUR 22 */}
      <JournalPage pageNumber={23} position="left" bgClass="bg-[#19191e] text-white">
        <div className="h-full flex flex-col justify-between p-1">
          <div className="text-center border-b border-zinc-800 pb-2">
            <h2 className="font-vogue text-3xl sm:text-4xl text-rose-400 font-extrabold tracking-widest uppercase">
              ТЕБЕ {ageNumber} ГОДА
            </h2>
            <p className="font-handwriting text-lg text-rose-300">
              Новая прекрасная глава
            </p>
          </div>

          <div className="my-auto text-center px-2">
            <div className="text-3xl mb-1">👑</div>
            <div className="w-36 sm:w-44 h-44 sm:h-52 mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-rose-400/40 relative">
              <img src={backCoverPhoto} alt="Задняя обложка" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-center">
                <span className="font-editorial italic text-xs text-cream">
                  Королева сердец Катя
                </span>
              </div>
            </div>
          </div>

          <div className="text-center pt-1 border-t border-zinc-800">
            <span className="font-sans text-[9px] uppercase tracking-widest text-zinc-400 font-semibold">
              ЕГО ЕДИНСТВЕННЫЙ ЭКЗЕМПЛЯР • ТОЛЬКО ДЛЯ СОЛНЫШКА
            </span>
          </div>
        </div>
      </JournalPage>

      {/* RIGHT PAGE: Final Wishes */}
      <JournalPage pageNumber={24} position="right" bgClass="bg-[#121215] text-white">
        <div className="h-full flex flex-col justify-between p-2">
          
          <div className="text-left border-b border-zinc-800 pb-2">
            <span className="text-xs font-sans text-rose-400 uppercase tracking-widest font-semibold block">
              29 ЯНВАРЯ 2004 — 2026
            </span>
            <h3 className="font-vogue text-lg text-white font-bold mt-0.5">
              Все самое лучшее впереди!
            </h3>
          </div>

          {/* Final Wish Box */}
          <div className="bg-zinc-900/90 p-3 sm:p-4 rounded-2xl border border-zinc-800 my-auto text-center space-y-2.5 shadow-xl">
            <Sparkles size={22} className="text-rose-400 mx-auto animate-pulse" />
            <p className="font-serif-classic italic text-sm sm:text-base text-rose-100 leading-relaxed">
              «Пусть твоя жизнь будет такой же яркой, наполненной ароматами любимых духов, мурчанием Луны и Афины и огромным счастьем!»
            </p>
            <div className="pt-1 border-t border-zinc-800/80">
              <span className="font-handwriting text-xl text-rose-400 font-bold block">
                Мое Солнышко! ♡
              </span>
            </div>
          </div>

          {/* Dedicated Badge */}
          <div className="border-t border-zinc-800 pt-2 space-y-2">
            <div className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-rose-950/80 via-purple-950/80 to-pink-950/80 border border-rose-500/40 text-rose-300 font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg">
              <Sparkles size={15} className="text-rose-400" />
              <span>ЭКСКЛЮЗИВНЫЙ ВЫПУСК ТОЛЬКО ДЛЯ КАТИ ♡</span>
            </div>

            <div className="flex justify-between items-center text-[8px] font-sans text-zinc-500 font-medium">
              <span>СОЗДАНО С ЛЮБОВЬЮ</span>
              <span>© 2026 ДЛЯ КАТИ</span>
            </div>
          </div>

        </div>
      </JournalPage>
    </div>
  );
}
