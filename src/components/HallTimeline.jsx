import React, { useState } from 'react';
import {
  Lightbulb,
  Play,
  ArrowUpRight,
  Sparkles,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { TIMELINE } from '../data/museumData';

export default function HallTimeline() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <div className="space-y-8">
      <div className="px-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-800 text-xs font-bold">
          <span>Зал 01</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-950 mt-2">
          Жизненный путь
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-1">
          От народовольца в одиночной камере до основателя «Дома свободного ребенка» и философа Космоса.
        </p>
      </div>

      <div className="space-y-3">
        {TIMELINE.map((item, idx) => {
          const isOpen = selectedIdx === idx;
          const isLast = idx === TIMELINE.length - 1;

          return (
            <div key={item.year} className="flex items-stretch gap-3 sm:gap-5">
              <div className="flex flex-col items-center pt-5">
                <button
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                    isOpen
                      ? 'bg-stone-950 ring-4 ring-amber-400/40 scale-110'
                      : 'bg-white border-2 border-amber-600 hover:scale-110'
                  }`}
                  aria-label={item.year}
                >
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-amber-400' : 'bg-amber-600'}`} />
                </button>
                {!isLast && (
                  <div className="w-[2px] flex-1 bg-gradient-to-b from-amber-500/60 to-amber-200/40 mt-2" />
                )}
              </div>

              <div
                onClick={() => setSelectedIdx(idx)}
                className={`flex-1 rounded-[28px] transition-all duration-300 cursor-pointer ${
                  isOpen
                    ? 'liquid-glass p-5 sm:p-7 shadow-lg'
                    : 'bg-white/50 hover:bg-white/80 border border-white/70 p-4 sm:p-5'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        isOpen ? 'bg-stone-950 text-amber-300' : 'bg-amber-500/15 text-amber-900'
                      }`}
                    >
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-stone-900' : ''
                    }`}
                  />
                </div>

                <h3
                  className={`font-bold tracking-tight text-stone-950 mt-2 ${
                    isOpen ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
                  }`}
                >
                  {item.title}
                </h3>

                {isOpen && (
                  <div className="mt-4 space-y-4" onClick={(e) => e.stopPropagation()}>
                    <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
                      {item.text}
                    </p>

                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 flex gap-3">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-800 flex items-center justify-center shrink-0">
                        <Lightbulb className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-wider text-amber-900">
                          Архивная деталь
                        </div>
                        <p className="text-xs sm:text-sm text-stone-800 mt-0.5 leading-relaxed">
                          {item.fact}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-stone-200/60">
                      <span className="text-xs font-medium text-stone-400">
                        Этап {idx + 1} из {TIMELINE.length}
                      </span>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          disabled={idx === 0}
                          onClick={() => setSelectedIdx(idx - 1)}
                          className="p-2 rounded-full bg-white/80 hover:bg-white disabled:opacity-30 text-stone-800 border border-stone-200 transition cursor-pointer disabled:cursor-default"
                          aria-label="Предыдущий этап"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          disabled={isLast}
                          onClick={() => setSelectedIdx(idx + 1)}
                          className="p-2 rounded-full bg-stone-950 hover:bg-stone-800 disabled:opacity-30 text-white transition cursor-pointer disabled:cursor-default"
                          aria-label="Следующий этап"
                        >
                          <ChevronRight className="w-4 h-4 text-amber-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-stone-900 px-2">Видеолекции и архив</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            href="https://rutube.ru/search/?query=%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD+%D0%92%D0%B5%D0%BD%D1%82%D1%86%D0%B5%D0%BB%D1%8C+%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%BD%D0%BE%D0%B5+%D0%B2%D0%BE%D1%81%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D0%B5"
            target="_blank"
            rel="noreferrer"
            className="liquid-glass rounded-[28px] p-5 flex items-center justify-between gap-4 hover:bg-white/85 transition group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-sky-500/15 text-sky-700 flex items-center justify-center shrink-0">
                <Play className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="font-semibold text-sm text-stone-900">Видеолекции на RuTube</div>
                <div className="text-xs text-stone-500 mt-0.5">Работает в РФ без замедлений</div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-stone-900 group-hover:text-white flex items-center justify-center transition shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>

          <a
            href="https://cyberleninka.ru/search?q=%D0%9A.%D0%9D.%20%D0%92%D0%B5%D0%BD%D1%82%D1%86%D0%B5%D0%BB%D1%8C"
            target="_blank"
            rel="noreferrer"
            className="liquid-glass rounded-[28px] p-5 flex items-center justify-between gap-4 hover:bg-white/85 transition group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-sm text-stone-900">Статьи в КиберЛенинке</div>
                <div className="text-xs text-stone-500 mt-0.5">Научные разборы и диссертации</div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-stone-900 group-hover:text-white flex items-center justify-center transition shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>

      <div className="liquid-glass rounded-[28px] p-5 flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-2xl bg-amber-500/15 text-amber-700 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <div className="font-semibold text-sm text-stone-900">Вне политических лагерей</div>
          <div className="text-xs text-stone-500 mt-0.5 leading-relaxed">
            Его идеи не приняли ни монархисты, ни большевики из-за запрета на любое давление на ребенка.
          </div>
        </div>
      </div>
    </div>
  );
}