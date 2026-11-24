import React, { useState } from 'react';
import { Lightbulb, Play, ExternalLink, AlertCircle } from 'lucide-react';
import { TIMELINE } from '../data/museumData';

export default function HallTimeline() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const current = TIMELINE[selectedIdx];

  return (
    <div className="space-y-6">
      <div className="border-b border-amber-200 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Зал 1 из 6</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
          Жизненный путь с остановками на педагогике и психологии
        </h2>
        <p className="text-stone-600 mt-1">
          От народовольца в одиночной камере до создателя «Дома свободного ребенка» и философа Космоса.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {TIMELINE.map((item, idx) => (
          <button
            key={item.year}
            onClick={() => setSelectedIdx(idx)}
            className={`p-3 rounded-xl border text-left transition cursor-pointer ${
              selectedIdx === idx
                ? 'bg-amber-900 text-amber-50 border-amber-900 shadow-sm'
                : 'bg-white text-stone-800 border-amber-200 hover:border-amber-600'
            }`}
          >
            <div className={`text-xs font-semibold ${selectedIdx === idx ? 'text-amber-300' : 'text-amber-800'}`}>
              {item.tag}
            </div>
            <div className="font-serif font-bold text-sm sm:text-base mt-0.5">{item.year}</div>
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-amber-200/90 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold">
            {current.year} — {current.tag}
          </span>
          <span className="text-xs text-stone-500">
            Экспонат {selectedIdx + 1} из {TIMELINE.length}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
          {current.title}
        </h3>

        <p className="text-stone-700 leading-relaxed text-base">
          {current.text}
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
          <Lightbulb className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-bold uppercase text-amber-950">Интересный факт из архива</div>
            <p className="text-sm text-stone-800 mt-1">{current.fact}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 border border-amber-200/80 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <Play className="w-4 h-4" />
            <span>Видеоматериалы и лекции</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Подборка видеолекций историков педагогики о «Доме свободного ребенка» и судьбе К. Н. Вентцеля.
          </p>
          <a
            href="https://www.youtube.com/results?search_query=Константин+Николаевич+Вентцель+свободное+воспитание"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:underline pt-1"
          >
            <span>Открыть видеоматериалы</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white rounded-xl p-5 border border-amber-200/80 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>Человек вне эпох</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Вентцеля одновременно критиковали монархисты, большевики, церковь, либералы и даже толстовцы за бескомпромиссную защиту свободы ребенка от любой идеологии.
          </p>
        </div>
      </div>
    </div>
  );
}