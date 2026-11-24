import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { QUOTES } from '../data/museumData';

export default function HallQuotes() {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const currentQuote = QUOTES[quoteIdx];

  return (
    <div className="space-y-6">
      <div className="border-b border-amber-200 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Зал 3 из 6</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
          Духовный опыт, гуманизм и живые цитаты
        </h2>
        <p className="text-stone-600 mt-1">
          Освобождение от «цепей невидимого рабства» и вера в добрую творческую природу человека.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-amber-200/90 space-y-4 shadow-xs">
        <h3 className="text-lg font-serif font-bold text-stone-900">
          Триединая задача: ребенок, взрослый и общество
        </h3>
        <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
          Вентцель утверждал, что главное рабство — не внешнее, а внутреннее. Это привычка жить по чужим догмам, страх перед авторитетами и стадность. Взрослый не сможет воспитать свободную личность, если сам остается внутренним рабом. Поэтому педагогика начинается с духовного самоосвобождения самого учителя и родителя.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
            <div className="font-serif font-bold text-sm text-stone-900">Свободная нравственность</div>
            <p className="text-xs text-stone-700 mt-1 leading-relaxed">
              Мораль нельзя вбить проповедями. Ребенок должен сам прийти к пониманию добра и зла через собственный опыт и последствия своих поступков.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
            <div className="font-serif font-bold text-sm text-stone-900">Наследник важнее наследства</div>
            <p className="text-xs text-stone-700 mt-1 leading-relaxed">
              Культура существует для человека, а не человек для культуры. Каждый берет из мировой сокровищницы то, что созвучно его душе.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-amber-950 text-amber-50 rounded-2xl p-6 sm:p-8 shadow-md space-y-5 border border-amber-800">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300">
            <Quote className="w-4 h-4" />
            <span>Цитата {quoteIdx + 1} из {QUOTES.length}</span>
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setQuoteIdx((quoteIdx - 1 + QUOTES.length) % QUOTES.length)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer"
              aria-label="Предыдущая цитата"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setQuoteIdx((quoteIdx + 1) % QUOTES.length)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition cursor-pointer"
              aria-label="Следующая цитата"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <blockquote className="text-xl sm:text-2xl font-serif italic leading-relaxed text-white">
          «{currentQuote.text}»
        </blockquote>

        <div className="text-xs text-amber-300">
          Источник: {currentQuote.source}
        </div>

        <div className="bg-black/30 rounded-xl p-4 text-sm text-amber-100 border border-white/10 leading-relaxed">
          <span className="font-bold text-amber-300">Комментарий экскурсовода: </span>
          {currentQuote.meaning}
        </div>
      </div>
    </div>
  );
}