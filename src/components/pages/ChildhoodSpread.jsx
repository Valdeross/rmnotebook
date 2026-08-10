import React from 'react';
import JournalPage from '../JournalPage';

export default function ChildhoodSpread({ data }) {
  const { girlName = 'Катя', childhoodPhotos = [] } = data;

  const defaultChildhood = [
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&auto=format&fit=crop&q=80'
  ];

  const kids = childhoodPhotos.length >= 4 ? childhoodPhotos : defaultChildhood;

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* LEFT PAGE: Tickets */}
      <JournalPage pageNumber={13} position="left" bgClass="bg-[#241a1c] text-white">
        <div className="h-full flex flex-col justify-between p-1">
          <div className="border-b border-rose-900/50 pb-2">
            <h2 className="font-vogue text-2xl sm:text-3xl text-rose-100 font-extrabold tracking-widest">
              БИЛЕТЫ <span className="font-handwriting text-rose-300 font-normal capitalize">в детство</span>
            </h2>
            <p className="font-sans text-[10px] text-rose-400 tracking-wider uppercase mt-0.5">
              29 ЯНВАРЯ 2004 ГОДА
            </p>
          </div>

          {/* 3 Tickets */}
          <div className="my-auto space-y-2.5 px-1">
            
            <div className="ticket-cutout p-2 flex items-center gap-3 bg-[#171113]">
              <div className="w-14 h-14 rounded overflow-hidden flex-shrink-0 border border-rose-400/30">
                <img src={kids[0]} alt="Ticket 1" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[8px] font-mono text-rose-400 tracking-widest uppercase">
                  БИЛЕТ В ДЕТСТВО
                </div>
                <div className="font-editorial italic text-xs text-white font-bold leading-tight">
                  Первые шаги Солнышка
                </div>
                <div className="text-[7px] font-sans text-zinc-400 mt-0.5 flex justify-between">
                  <span>ДОПУСК: 2004</span>
                  <span>#001</span>
                </div>
              </div>
            </div>

            <div className="ticket-cutout p-2 flex items-center gap-3 bg-[#171113]">
              <div className="w-14 h-14 rounded overflow-hidden flex-shrink-0 border border-rose-400/30">
                <img src={kids[1]} alt="Ticket 2" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[8px] font-mono text-rose-400 tracking-widest uppercase">
                  БИЛЕТ В ДЕТСТВО
                </div>
                <div className="font-editorial italic text-xs text-white font-bold leading-tight">
                  Искренние улыбки
                </div>
                <div className="text-[7px] font-sans text-zinc-400 mt-0.5 flex justify-between">
                  <span>СВЕТЛОЕ СЧАСТЬЕ</span>
                  <span>#002</span>
                </div>
              </div>
            </div>

            <div className="ticket-cutout p-2 flex items-center gap-3 bg-[#171113]">
              <div className="w-14 h-14 rounded overflow-hidden flex-shrink-0 border border-rose-400/30">
                <img src={kids[2]} alt="Ticket 3" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[8px] font-mono text-rose-400 tracking-widest uppercase">
                  БИЛЕТ В ДЕТСТВО
                </div>
                <div className="font-editorial italic text-xs text-white font-bold leading-tight">
                  Маленькая принцесса
                </div>
                <div className="text-[7px] font-sans text-zinc-400 mt-0.5 flex justify-between">
                  <span>ВСЕГДА ЮНАЯ</span>
                  <span>#003</span>
                </div>
              </div>
            </div>

          </div>

          <div className="text-center border-t border-rose-900/50 pt-1">
            <span className="font-handwriting text-sm text-rose-300">
              «Глаза, которые всегда излучали доброту»
            </span>
          </div>
        </div>
      </JournalPage>

      {/* RIGHT PAGE: Baby Scrapbook */}
      <JournalPage pageNumber={14} position="right" bgClass="bg-[#faf5f0]">
        <div className="h-full flex flex-col justify-between p-1">
          <div className="flex justify-between items-center mb-1">
            <span className="font-vogue text-xs uppercase tracking-widest text-zinc-400">
              ДЕТСКИЙ СКРАПБУКИНГ
            </span>
            <span className="font-handwriting text-rose-500 text-sm">
              малышка Катя ♡
            </span>
          </div>

          <div className="relative flex-1 my-1">
            <div className="absolute top-2 left-2 w-32 sm:w-36 polaroid-card rotate-[-5deg] z-10">
              <img src={kids[0]} alt="Baby 1" className="w-full h-20 object-cover rounded-sm" />
              <div className="text-center mt-1">
                <span className="font-handwriting text-[10px] text-zinc-700">Первые мечты</span>
              </div>
            </div>

            <div className="absolute top-3 right-2 w-30 sm:w-34 polaroid-card rotate-[4deg] z-20">
              <img src={kids[1]} alt="Baby 2" className="w-full h-20 object-cover rounded-sm" />
              <div className="text-center mt-1">
                <span className="font-handwriting text-[10px] text-zinc-700">Солнечная улыбка</span>
              </div>
            </div>

            <div className="absolute bottom-2 left-4 w-32 sm:w-36 polaroid-card rotate-[2deg] z-30">
              <img src={kids[2]} alt="Baby 3" className="w-full h-20 object-cover rounded-sm" />
              <div className="text-center mt-1">
                <span className="font-handwriting text-[10px] text-zinc-700">Принцесса Катя</span>
              </div>
            </div>
          </div>

          <div className="text-center pt-1 border-t border-zinc-200">
            <p className="font-editorial italic text-xs text-zinc-500">
              Детство, наполненное светлыми надеждами и радостью.
            </p>
          </div>
        </div>
      </JournalPage>
    </div>
  );
}
