import React from 'react';
import JournalPage from '../JournalPage';
import { Heart, Sparkles } from 'lucide-react';

export default function WhosThatGirlSpread({ data }) {
  const { girlName = 'Катя', mainPhoto, polaroidPhoto, gridPhotos = [] } = data;

  const defaultGrid = [
    './katya_photos/photo_2026-08-04_16-37-52.jpg',
    './katya_photos/photo_2026-06-01_15-17-34.jpg',
    './katya_photos/photo_2026-06-01_15-13-07.jpg',
    './katya_photos/photo_2026-06-01_15-07-55.jpg',
    './katya_photos/photo_2026-04-25_14-49-07.jpg',
    './katya_photos/photo_2026-04-06_11-37-35.jpg',
    './katya_photos/photo_2026-04-06_11-36-50.jpg',
    './katya_photos/photo_2026-03-12_16-57-19.jpg',
    './katya_photos/photo_2026-03-09_14-32-25.jpg'
  ];

  const photos = gridPhotos.length >= 6 ? gridPhotos : defaultGrid;

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* LEFT PAGE: "Ты моё Солнце" Article */}
      <JournalPage pageNumber={11} position="left" bgClass="bg-[#fdfbf7]">
        <div className="h-full flex flex-col justify-between p-1 text-zinc-900">
          
          {/* Header Title & Top Featured Photo */}
          <div className="flex gap-3 items-center justify-between border-b border-rose-100 pb-2">
            <div>
              <div className="flex items-center gap-1 text-rose-500 font-sans text-[9px] tracking-widest uppercase font-bold mb-0.5">
                <Sparkles size={11} />
                <span>ЭКСПРЕССИЯ & СВЕТ</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-zinc-900 font-extrabold tracking-tight leading-none">
                Ты моё <br />
                <span className="font-handwriting text-3xl sm:text-4xl text-rose-500 font-normal">Солнце ♡</span>
              </h2>
            </div>
            
            <div className="w-24 sm:w-28 h-28 sm:h-32 rounded-2xl overflow-hidden shadow-md border-2 border-rose-200 bg-zinc-100 flex-shrink-0 group">
              <img
                src={mainPhoto || photos[0]}
                alt={girlName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Article Text Box (Strictly matches requested phrase) */}
          <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/40 p-3 sm:p-4 rounded-2xl border border-rose-100/80 shadow-sm space-y-2 my-2">
            <p className="font-serif-classic text-sm sm:text-base text-zinc-800 leading-relaxed font-medium">
              <strong className="font-sans text-rose-600 font-bold">Катюш</strong> — ты человек, чья светлая энергия преображает всё вокруг. В тебе удивительно сочетаются нежность, искренность, превосходное чувство юмора и тонкий вкус.
            </p>
            <p className="font-serif-classic text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Ты наполняешь любой день особым теплом, обожаешь своих котиков Луну и Афину, создаешь невероятную атмосферу уюта и делаешь этот мир по-настоящему счастливым.
            </p>
          </div>

          {/* Dual Polaroids Layout Filling Lower Gap */}
          <div className="flex items-center justify-between gap-2 pt-1 border-t border-rose-100 mt-auto">
            <div className="polaroid-card w-28 sm:w-32 rotate-[-4deg] shadow-sm">
              <div className="w-full h-20 rounded overflow-hidden bg-zinc-100">
                <img src={photos[1] || mainPhoto} alt="Катя" className="w-full h-full object-cover" />
              </div>
              <div className="mt-1 text-center">
                <span className="font-handwriting text-[10px] text-zinc-700">
                  Солнечный момент ♡
                </span>
              </div>
            </div>

            <div className="polaroid-card w-28 sm:w-32 rotate-[3deg] shadow-sm">
              <div className="w-full h-20 rounded overflow-hidden bg-zinc-100">
                <img src={photos[2] || polaroidPhoto} alt="Момент" className="w-full h-full object-cover" />
              </div>
              <div className="mt-1 text-center">
                <span className="font-handwriting text-[10px] text-rose-600 font-bold">
                  Самая родная ✨
                </span>
              </div>
            </div>
          </div>

        </div>
      </JournalPage>

      {/* RIGHT PAGE: Densely Packed Full-Bleed Pinterest Moodboard */}
      <JournalPage pageNumber={12} position="right" bgClass="bg-[#f8f5f0]">
        <div className="h-full flex flex-col justify-between p-1">
          
          <div className="flex justify-between items-center border-b border-zinc-200 pb-1.5 mb-1.5">
            <span className="font-vogue text-xs uppercase tracking-widest text-zinc-500 font-bold">
              ЭСТЕТИКА И АТМОСФЕРА КАТИ
            </span>
            <div className="flex items-center gap-1 text-rose-500 text-xs font-handwriting font-bold">
              <Heart size={13} fill="currentColor" />
              <span>атмосфера Солнышка</span>
            </div>
          </div>

          {/* Densely Packed 6-Photo Masonry Grid with NO EMPTY SPACES */}
          <div className="grid grid-cols-3 grid-rows-2 gap-1.5 flex-1 min-h-0">
            <div className="col-span-1 row-span-2 rounded-xl overflow-hidden shadow-sm border border-zinc-200/60 bg-zinc-200">
              <img src={photos[0]} alt="Atmosphere 1" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-sm border border-zinc-200/60 bg-zinc-200">
              <img src={photos[1]} alt="Atmosphere 2" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-2 rounded-xl overflow-hidden shadow-sm border border-zinc-200/60 bg-zinc-200">
              <img src={photos[2]} alt="Atmosphere 3" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-sm border border-zinc-200/60 bg-zinc-200">
              <img src={photos[3]} alt="Atmosphere 4" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-sm border border-zinc-200/60 bg-zinc-200">
              <img src={photos[4]} alt="Atmosphere 5" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 row-span-1 rounded-xl overflow-hidden shadow-sm border border-zinc-200/60 bg-zinc-200">
              <img src={photos[5] || photos[0]} alt="Atmosphere 6" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-center pt-1.5 border-t border-zinc-200 mt-1.5">
            <span className="font-editorial italic text-xs text-zinc-500 font-medium">
              «Красота в каждой детали твоей улыбки»
            </span>
          </div>

        </div>
      </JournalPage>
    </div>
  );
}
