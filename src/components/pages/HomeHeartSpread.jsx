import React from 'react';
import JournalPage from '../JournalPage';
import { Heart } from 'lucide-react';

export default function HomeHeartSpread({ data }) {
  const { girlName, heartPhotos = [] } = data;

  const defaultHeart = [
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=300&auto=format&fit=crop&q=80'
  ];

  const photos = heartPhotos.length >= 9 ? heartPhotos : defaultHeart;

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* LEFT PAGE: Heart Photo Mosaic */}
      <JournalPage pageNumber={15} position="left" bgClass="bg-[#fdfbf7]">
        <div className="h-full flex flex-col justify-between p-1 items-center">
          
          {/* Silk Bow Tie Sticker */}
          <div className="my-1 text-center">
            <svg width="42" height="28" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto text-zinc-900 stroke-current">
              <path d="M50 30 C30 10, 10 10, 10 30 C10 50, 30 50, 50 30 Z" strokeWidth="4" fill="none" />
              <path d="M50 30 C70 10, 90 10, 90 30 C90 50, 70 50, 50 30 Z" strokeWidth="4" fill="none" />
              <circle cx="50" cy="30" r="5" fill="currentColor" />
            </svg>
          </div>

          {/* Heart Form Mosaic Layout */}
          <div className="w-56 sm:w-64 my-auto relative flex flex-col items-center gap-1.5">
            {/* Top row of heart (2 blocks) */}
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-md overflow-hidden shadow-sm border border-zinc-200">
                <img src={photos[0]} alt="H1" className="w-full h-full object-cover" />
              </div>
              <div className="w-14 h-14 rounded-md overflow-hidden shadow-sm border border-zinc-200">
                <img src={photos[1]} alt="H2" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Middle row 1 of heart (3 blocks) */}
            <div className="flex gap-2">
              <div className="w-14 h-14 rounded-md overflow-hidden shadow-sm border border-zinc-200">
                <img src={photos[2]} alt="H3" className="w-full h-full object-cover" />
              </div>
              <div className="w-14 h-14 rounded-md overflow-hidden shadow-sm border border-zinc-200">
                <img src={photos[3]} alt="H4" className="w-full h-full object-cover" />
              </div>
              <div className="w-14 h-14 rounded-md overflow-hidden shadow-sm border border-zinc-200">
                <img src={photos[4]} alt="H5" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Middle row 2 of heart (2 blocks) */}
            <div className="flex gap-2">
              <div className="w-14 h-14 rounded-md overflow-hidden shadow-sm border border-zinc-200">
                <img src={photos[5]} alt="H6" className="w-full h-full object-cover" />
              </div>
              <div className="w-14 h-14 rounded-md overflow-hidden shadow-sm border border-zinc-200">
                <img src={photos[6]} alt="H7" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Bottom tip of heart (1 block) */}
            <div className="w-14 h-14 rounded-md overflow-hidden shadow-sm border border-zinc-200">
              <img src={photos[7]} alt="H8" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-center border-t border-zinc-200 w-full pt-1">
            <span className="font-editorial italic text-xs text-zinc-400">
              Mosaic of happiness ♡
            </span>
          </div>

        </div>
      </JournalPage>

      {/* RIGHT PAGE: Dictionary definition "hóme" */}
      <JournalPage pageNumber={16} position="right" bgClass="bg-[#ffffff]">
        <div className="h-full flex flex-col justify-center p-4 text-left">
          
          <div className="max-w-xs mx-auto space-y-4">
            <div>
              <h2 className="font-editorial text-5xl sm:text-6xl text-zinc-900 font-extrabold tracking-tight">
                hóme
              </h2>
              <div className="text-zinc-500 font-serif-classic italic text-base mt-1">
                | существительное |
              </div>
              <div className="w-full h-[1.5px] bg-zinc-900 my-4" />
            </div>

            <div className="dictionary-term">
              <p className="font-serif-classic text-lg sm:text-xl text-zinc-800 leading-relaxed">
                Дом — это человек, без которого жизнь кажется не такой яркой и красочной.
              </p>
            </div>

            <div className="pt-6 border-t border-zinc-100">
              <p className="font-handwriting text-2xl text-rose-500">
                Ты — мой самый главный дом {girlName} ♡
              </p>
            </div>
          </div>

        </div>
      </JournalPage>
    </div>
  );
}
