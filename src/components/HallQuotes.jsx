import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Feather, HeartHandshake } from 'lucide-react';
import { QUOTES } from '../data/museumData';

export default function HallQuotes() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const currentQuote = QUOTES[quoteIdx];

  return (
    <div className="space-y-8">
      <div className="px-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/15 text-yellow-800 text-xs font-bold">
          <span>Зал 03</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-950 mt-2">
          Духовный опыт и живые цитаты
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-1">
          Освобождение от «цепей невидимого рабства» и вера в творческую природу человека.
        </p>
      </div>

      <div className="liquid-glass-dark text-white rounded-[36px] p-6 sm:p-10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold">
              <Quote className="w-3.5 h-3.5" />
              <span>Первоисточник {quoteIdx + 1} / {QUOTES.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuoteIdx((quoteIdx - 1 + QUOTES.length) % QUOTES.length)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition active:scale-90 cursor-pointer"
                aria-label="Назад"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setQuoteIdx((quoteIdx + 1) % QUOTES.length)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition active:scale-90 cursor-pointer"
                aria-label="Вперед"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <blockquote className="text-xl sm:text-3xl font-semibold tracking-tight leading-snug text-white">
            «{currentQuote.text}»
          </blockquote>

          <div className="text-xs text-stone-400">
            {currentQuote.source}
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 text-sm text-amber-100/90 leading-relaxed">
            <span className="font-bold text-amber-300 block text-xs uppercase tracking-wider mb-1">
              Смысл для педагога
            </span>
            {currentQuote.meaning}
          </div>

          <div className="flex justify-center gap-1.5 pt-1">
            {QUOTES.map((_, i) => (
              <button
                key={i}
                onClick={() => setQuoteIdx(i)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  i === quoteIdx ? 'w-6 bg-amber-400' : 'w-1.5 bg-white/25'
                }`}
                aria-label={`Цитата ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="liquid-glass rounded-[28px] p-6 space-y-2.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-700 flex items-center justify-center">
            <Feather className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-stone-950">Свободная нравственность</h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            Мораль нельзя вбить нотациями. Ребенок приходит к пониманию добра и зла через собственный опыт и живое общение.
          </p>
        </div>

        <div className="liquid-glass rounded-[28px] p-6 space-y-2.5">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center">
            <HeartHandshake className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-stone-950">Наследник важнее наследства</h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            Культура существует для человека, а не человек для культуры. Взрослый не сможет освободить ребенка, если сам остается внутренним рабом.
          </p>
        </div>
      </div>
    </div>
  );
}