import React, { useState, useEffect, useRef } from 'react';
import JournalPage from '../JournalPage';
import { Play, Pause, SkipBack, SkipForward, Heart, Volume2, VolumeX, Music, Sparkles } from 'lucide-react';

export default function MusicPlaylistSpread({ data }) {
  const { girlName = 'Катя' } = data;

  const playlist = [
    {
      id: 'splean',
      title: 'Моё сердце',
      artist: 'Сплин',
      album: '25-й кадр',
      durationSec: 249,
      durationStr: '4:09',
      cover: './katya_photos/photo_2026-03-09_14-32-25.jpg',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-acoustic-11270.mp3',
      notes: [329.63, 392.00, 440.00, 523.25, 440.00, 392.00]
    },
    {
      id: 'daytetank',
      title: 'Мы',
      artist: 'Дайте танк (!)',
      album: 'Человеко-часы',
      durationSec: 198,
      durationStr: '3:18',
      cover: './katya_photos/photo_2026-03-06_18-17-06.jpg',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73229.mp3?filename=indie-rock-loop-20120.mp3',
      notes: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00]
    },
    {
      id: 'alyona',
      title: 'солнце вышло покурить',
      artist: 'Алёна Швец',
      album: 'Королева секонд-хенда',
      durationSec: 165,
      durationStr: '2:45',
      cover: './katya_photos/photo_2026-04-25_14-49-07.jpg',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=sunshine-pop-14731.mp3',
      notes: [349.23, 392.00, 440.00, 523.25, 587.33]
    },
    {
      id: 'ksb',
      title: 'Ослепительна',
      artist: 'KSB muzic',
      album: 'Ослепительна (Single)',
      durationSec: 215,
      durationStr: '3:35',
      cover: './katya_photos/photo_2025-09-02_22-57-08.jpg',
      audioUrl: 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_2c9748b6ef.mp3?filename=dazzling-beat-124800.mp3',
      notes: [440.00, 523.25, 659.25, 587.33, 523.25]
    }
  ];

  const [activeTrackIndex, setActiveTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);

  const currentTrack = playlist[activeTrackIndex];
  const audioRef = useRef(null);
  const synthIntervalRef = useRef(null);
  const audioCtxRef = useRef(null);

  // Web Audio Synthesizer backup to guarantee sound output
  const playSynthChord = (track) => {
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume();

      const notes = track.notes || [329.63, 392.00, 440.00];
      const freq = notes[Math.floor(Math.random() * notes.length)];

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const effectiveVol = isMuted ? 0 : volume * 0.15;
      gain.gain.setValueAtTime(effectiveVol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch (e) {}
  };

  // Toggle Play / Pause
  const togglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);

    if (audioRef.current) {
      if (nextState) {
        audioRef.current.play().catch(() => {
          // If HTML5 audio blocked, start Web Audio synth
          if (!synthIntervalRef.current) {
            synthIntervalRef.current = setInterval(() => {
              playSynthChord(currentTrack);
            }, 600);
          }
        });
      } else {
        audioRef.current.pause();
        if (synthIntervalRef.current) {
          clearInterval(synthIntervalRef.current);
          synthIntervalRef.current = null;
        }
      }
    }
  };

  // Switch Track
  const changeTrack = (newIndex) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
    setActiveTrackIndex(newIndex);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  // Update HTML5 audio source when track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentTrack.audioUrl;
      audioRef.current.currentTime = 0;
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          if (!synthIntervalRef.current) {
            synthIntervalRef.current = setInterval(() => {
              playSynthChord(currentTrack);
            }, 600);
          }
        });
      }
    }
  }, [activeTrackIndex]);

  // Sync Audio Volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Timer loop for progress bar
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentTrack.durationSec) {
            changeTrack((activeTrackIndex + 1) % playlist.length);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeTrackIndex, currentTrack.durationSec]);

  // Handle Seek Bar Click
  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const newSec = Math.floor(ratio * currentTrack.durationSec);
    setCurrentTime(newSec);
    if (audioRef.current) {
      audioRef.current.currentTime = newSec;
    }
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = Math.min(100, (currentTime / currentTrack.durationSec) * 100);

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={currentTrack.audioUrl}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(Math.floor(audioRef.current.currentTime));
          }
        }}
        onEnded={() => changeTrack((activeTrackIndex + 1) % playlist.length)}
      />

      {/* LEFT PAGE: Phone Screen Audio Player */}
      <JournalPage pageNumber={17} position="left" bgClass="bg-[#eef2f5]">
        <div className="h-full flex items-center justify-center p-1">
          <div className="w-56 sm:w-60 h-[350px] sm:h-[380px] bg-black rounded-[38px] p-2.5 shadow-2xl border-4 border-zinc-800 relative flex flex-col justify-between overflow-hidden">
            
            {/* Dynamic Island Notch */}
            <div className="w-20 h-4 bg-black rounded-full mx-auto z-20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-rose-500/80 animate-ping" />
            </div>

            {/* Screen Viewport */}
            <div className="flex-1 rounded-[28px] bg-gradient-to-b from-rose-950 via-zinc-950 to-black p-3 text-white flex flex-col justify-between overflow-hidden relative border border-white/10">
              
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-sans font-bold uppercase tracking-widest text-rose-300 flex items-center gap-1">
                  <Music size={10} />
                  <span>МУЗЫКА ДЛЯ КАТИ</span>
                </span>
                <span className="text-[9px] font-mono text-zinc-400">
                  {activeTrackIndex + 1}/{playlist.length}
                </span>
              </div>

              {/* Cover Art */}
              <div className="w-32 sm:w-36 h-32 sm:h-36 mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 relative my-1 group">
                <img
                  src={currentTrack.cover}
                  alt={currentTrack.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {isPlaying && (
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-rose-500/80 text-white flex items-center justify-center animate-pulse">
                      <Sparkles size={16} />
                    </div>
                  </div>
                )}
              </div>

              {/* Track Info & Progress */}
              <div>
                <div className="text-center px-1">
                  <div className="font-bold text-xs sm:text-sm text-white truncate drop-shadow">
                    {currentTrack.title}
                  </div>
                  <div className="text-[10px] text-rose-300 font-medium truncate mt-0.5">
                    {currentTrack.artist} — {currentTrack.album}
                  </div>
                </div>

                {/* Draggable / Clickable Seek Bar */}
                <div className="mt-2 space-y-1">
                  <div
                    onClick={handleSeek}
                    className="w-full bg-white/20 h-1.5 rounded-full cursor-pointer overflow-hidden relative"
                  >
                    <div
                      className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-150"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  <div className="flex justify-between text-[8px] font-mono text-zinc-400">
                    <span>{formatTime(currentTime)}</span>
                    <span>{currentTrack.durationStr}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex justify-around items-center pt-1">
                  <button
                    onClick={() => changeTrack(activeTrackIndex > 0 ? activeTrackIndex - 1 : playlist.length - 1)}
                    className="text-zinc-400 hover:text-white transition-colors p-1"
                  >
                    <SkipBack size={18} />
                  </button>

                  <button
                    onClick={togglePlay}
                    className="w-9 h-9 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} fill="white" className="ml-0.5" />}
                  </button>

                  <button
                    onClick={() => changeTrack((activeTrackIndex + 1) % playlist.length)}
                    className="text-zinc-400 hover:text-white transition-colors p-1"
                  >
                    <SkipForward size={18} />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      </JournalPage>

      {/* RIGHT PAGE: Playlist Tracklist & Equalizer */}
      <JournalPage pageNumber={18} position="right" bgClass="bg-[#16161a] text-white">
        <div className="h-full flex flex-col justify-between p-1">
          
          {/* Header Track Info Box */}
          <div className="bg-zinc-900/90 p-2.5 rounded-2xl border border-zinc-800 flex gap-2.5 items-center shadow-lg">
            <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-rose-500/40 relative">
              <img src={currentTrack.cover} alt="Обложка" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[9px] font-sans text-rose-400 uppercase tracking-widest font-bold flex items-center gap-1">
                <Sparkles size={11} />
                <span>СЕЙЧАС ИГРАЕТ</span>
              </div>
              <h3 className="font-vogue text-sm text-white truncate font-bold mt-0.5">
                {currentTrack.title}
              </h3>
              <p className="text-[10px] text-zinc-400 truncate">
                {currentTrack.artist} • {currentTrack.album}
              </p>
            </div>
          </div>

          {/* Equalizer & Volume Bar */}
          <div className="bg-zinc-900/50 p-2 rounded-xl border border-zinc-800/80 my-1 space-y-1.5">
            <div className="flex items-end justify-center gap-1.5 h-6">
              {[40, 75, 35, 95, 55, 85, 65, 100, 50, 80, 45, 90].map((h, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-t from-rose-600 to-pink-400 rounded-full transition-all duration-300"
                  style={{
                    height: isPlaying ? `${h}%` : '20%',
                    opacity: isPlaying ? 1 : 0.3
                  }}
                />
              ))}
            </div>

            <div className="flex items-center gap-2 px-2 pt-1 border-t border-zinc-800/60">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-rose-400 hover:text-rose-300"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  setIsMuted(false);
                }}
                className="w-full h-1 bg-zinc-700 accent-rose-500 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          {/* 4 Requested Tracks List */}
          <div className="space-y-1 my-auto">
            <div className="text-[9px] font-sans text-rose-300 uppercase tracking-widest mb-1.5 font-bold flex justify-between">
              <span>ЛЮБИМЫЕ ТРЕКИ ДЛЯ КАТИ</span>
              <span>4 ПЕСНИ</span>
            </div>

            {playlist.map((track, idx) => {
              const isSelected = activeTrackIndex === idx;
              return (
                <div
                  key={track.id}
                  onClick={() => changeTrack(idx)}
                  className={`flex items-center justify-between p-2 rounded-xl cursor-pointer transition-all ${isSelected ? 'bg-gradient-to-r from-rose-950/90 to-pink-950/70 border border-rose-500/50 text-white shadow-md scale-[1.01]' : 'bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-300 border border-transparent'}`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`text-xs font-mono w-4 font-bold ${isSelected ? 'text-rose-400' : 'text-zinc-500'}`}>
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs font-bold truncate">{track.title}</div>
                      <div className="text-[10px] text-zinc-400 truncate">{track.artist}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[9px] font-mono text-zinc-500">
                      {track.durationStr}
                    </span>
                    <Heart
                      size={14}
                      className={isSelected ? 'text-rose-500 fill-rose-500 animate-pulse' : 'text-zinc-600'}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center border-t border-zinc-800 pt-1.5 mt-1">
            <span className="font-serif-classic italic text-xs text-rose-300 font-medium">
              «Саундтрек её идеального настроения ♡»
            </span>
          </div>

        </div>
      </JournalPage>
    </div>
  );
}
