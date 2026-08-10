import React, { useState } from 'react';
import MagazineFlipbook from './components/MagazineFlipbook';

export default function App() {
  // All user uploaded real photos from /katya_photos/
  const realPhotos = [
    '/katya_photos/photo_2025-09-02_22-57-08.jpg', // Pink-haired portrait for cover
    '/katya_photos/photo_2026-08-04_16-37-52.jpg',
    '/katya_photos/photo_2026-06-01_15-17-34.jpg',
    '/katya_photos/photo_2026-06-01_15-13-07.jpg',
    '/katya_photos/photo_2026-06-01_15-07-55.jpg',
    '/katya_photos/photo_2026-04-25_14-49-07.jpg',
    '/katya_photos/photo_2026-04-06_11-37-35.jpg',
    '/katya_photos/photo_2026-04-06_11-36-50.jpg',
    '/katya_photos/photo_2026-03-12_16-57-19.jpg',
    '/katya_photos/photo_2026-03-09_14-32-25.jpg',
    '/katya_photos/photo_2026-03-06_18-17-06.jpg',
    '/katya_photos/photo_2026-03-03_11-42-17.jpg',
    '/katya_photos/photo_2026-03-02_14-39-21.jpg',
    '/katya_photos/photo_2026-03-02_14-38-55.jpg',
    '/katya_photos/photo_2026-03-02_13-42-22.jpg',
    '/katya_photos/photo_2026-02-10_19-22-32.jpg',
    '/katya_photos/photo_2026-02-10_19-16-31.jpg',
    '/katya_photos/photo_2026-02-09_13-56-03.jpg',
    '/katya_photos/photo_2026-02-09_13-55-48.jpg',
    '/katya_photos/photo_2026-02-09_13-17-41.jpg',
    '/katya_photos/photo_2026-02-09_13-03-43.jpg',
    '/katya_photos/photo_2026-02-05_14-05-20.jpg',
    '/katya_photos/photo_2026-01-17_20-11-57.jpg'
  ];

  const [journalData] = useState({
    girlName: 'Катя',
    birthMonthYear: 'ЯНВАРЬ 2004',
    birthDayNumber: 29,
    ageNumber: 22,
    
    // Cats: Luna (light), Athena (black)
    lunaPhoto: '/katya_photos/luna.jpg',
    athenaPhoto: '/katya_photos/athena.jpg',

    // Key Spreads Real Photos
    coverPhoto: '/katya_photos/photo_2025-09-02_22-57-08.jpg',
    calendarPhoto: '/katya_photos/photo_2026-06-01_15-17-34.jpg',
    mainPhoto: '/katya_photos/photo_2026-04-25_14-49-07.jpg',
    polaroidPhoto: '/katya_photos/photo_2026-04-06_11-37-35.jpg',
    airdropPhoto: '/katya_photos/photo_2026-03-12_16-57-19.jpg',
    playlistPhoto: '/katya_photos/photo_2026-03-09_14-32-25.jpg',
    stylePhoto: '/katya_photos/photo_2026-03-06_18-17-06.jpg',
    backCoverPhoto: '/katya_photos/photo_2026-03-03_11-42-17.jpg',
    simsPhoto: '/katya_photos/photo_2026-02-10_19-22-32.jpg',
    
    gridPhotos: realPhotos.slice(0, 8),
    childhoodPhotos: realPhotos.slice(8, 12),
    heartPhotos: realPhotos.slice(12, 20),
    voguePhotos: realPhotos.slice(2, 4),
    macPhotos: realPhotos.slice(4, 6),
    
    monthPhotos: {
      jan: realPhotos[21],
      feb: realPhotos[19],
      mar: realPhotos[13],
      apr: realPhotos[6],
      may: realPhotos[5],
      jun: realPhotos[2],
      jul: realPhotos[1],
      aug: realPhotos[0],
      sep: realPhotos[22],
      oct: realPhotos[18],
      nov: realPhotos[15],
      dec: realPhotos[14]
    }
  });

  return (
    <div className="w-full h-screen bg-[#0d0e12] overflow-hidden select-none">
      <MagazineFlipbook journalData={journalData} />
    </div>
  );
}
