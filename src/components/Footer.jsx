import React from 'react';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer({ onSpreadLove }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[var(--border-color)] bg-[var(--bg-color)]/90 backdrop-blur-md py-10 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-full bg-[var(--matcha-accent)]/20 border border-[var(--matcha-accent)]/40 flex items-center justify-center">
          <Heart className="w-3.5 h-3.5 text-[var(--pink-accent)] fill-current animate-heart" />
        </div>
        <span className="text-xs font-mono font-semibold tracking-wider text-[var(--text-color)]/80">
          MADE WITH LOVE FOR THE BEST GIRL ♡ 2026
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={onSpreadLove}
          className="text-xs font-mono text-[var(--matcha-accent)] hover:underline flex items-center gap-1"
        >
          <Sparkles className="w-3 h-3" />
          <span>Отправить сердцу лучик</span>
        </button>

        <button
          onClick={scrollToTop}
          className="w-8 h-8 rounded-full border border-[var(--border-color)] bg-white/5 flex items-center justify-center text-white/70 hover:text-[var(--matcha-accent)] hover:border-[var(--matcha-accent)] transition-colors"
          title="Наверх"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </footer>
  );
}
