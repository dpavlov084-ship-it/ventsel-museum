import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Compass, UserCheck, Briefcase, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { PEDAGOGICAL_CASES } from '../data/museumData';

const COMPARISONS = [
  {
    past: 'Отказ от единого шаблона («сколько детей — столько систем»)',
    present: 'Индивидуальные образовательные траектории, тьюторство и адаптивные платформы под темп каждого ученика.'
  },
  {
    past: 'Ребенок сам выбирает дело, а знания рождаются из практики',
    present: 'Проектное обучение, интерактивные симуляторы и геймификация, включающие внутреннюю мотивацию вместо зубрежки.'
  },
  {
    past: 'Субъектность ребенка и «Декларация прав ребенка» (1917)',
    present: 'Школьное самоуправление, защита личных границ и антибуллинговые программы в образовательной среде.'
  },
  {
    past: 'Космическое самосознание и единство с природой',
    present: 'Экологическое мышление и глобальная ответственность за будущее планеты в эпоху технологических рисков.'
  }
];

export default function HallModern() {
  const [caseIdx, setCaseIdx] = useState(0);
  const activeCase = PEDAGOGICAL_CASES[caseIdx];

  return (
    <div className="space-y-8">
      <div className="px-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-800 text-xs font-bold">
          <span>Зал 04</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-950 mt-2">
          Актуальность в 2026 году и практикум
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-1">
          Как идеи столетней давности решают реальные психолого-педагогические задачи сегодня.
        </p>
      </div>

      <div className="liquid-glass rounded-[32px] p-6 sm:p-8 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-stone-950">
                Педагогический практикум: разбор кейсов
              </h3>
              <p className="text-xs text-stone-500">
                Решение школьных конфликтов по методу К. Н. Вентцеля
              </p>
            </div>
          </div>

          <div className="flex gap-1.5">
            {PEDAGOGICAL_CASES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCaseIdx(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                  caseIdx === idx
                    ? 'bg-stone-950 text-amber-300'
                    : 'bg-white/70 hover:bg-white text-stone-700'
                }`}
              >
                Кейс №{idx + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-stone-900 text-white rounded-2xl p-5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
            Проблемная ситуация
          </div>
          <p className="text-sm sm:text-base leading-relaxed font-medium">
            {activeCase.situation}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-800">
              <AlertTriangle className="w-4 h-4" />
              <span>Авторитарный путь (тупик)</span>
            </div>
            <p className="text-sm text-stone-800 leading-relaxed">
              {activeCase.authoritarian}
            </p>
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <CheckCircle2 className="w-4 h-4" />
              <span>Решение по Вентцелю</span>
            </div>
            <p className="text-sm text-stone-900 font-medium leading-relaxed">
              {activeCase.ventselWay}
            </p>
            <div className="text-[11px] text-emerald-900/80 pt-1">
              Опора: {activeCase.sourceNote}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-stone-900 px-2">Параллели эпох</h3>
        {COMPARISONS.map((item, idx) => (
          <div key={idx} className="liquid-glass rounded-[28px] p-5 sm:p-6 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4">
            <div className="bg-amber-500/10 rounded-2xl p-4 border border-amber-500/15">
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800 mb-1">
                Идея Вентцеля (1906–1925)
              </div>
              <div className="text-sm font-semibold text-stone-900 leading-snug">
                {item.past}
              </div>
            </div>

            <div className="hidden md:flex w-8 h-8 rounded-full bg-stone-900 text-white items-center justify-center shrink-0">
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </div>

            <div className="bg-white/75 rounded-2xl p-4 border border-white">
              <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                Практика 2026 года
              </div>
              <div className="text-sm text-stone-700 leading-snug">
                {item.present}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-bold text-stone-900 px-2">Три главных урока наследия</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="liquid-glass rounded-[28px] p-5 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="font-bold text-base text-stone-950">1. Без насилия</div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Принуждение рождает лицемерие и протест. Искренний интерес ученика появляется там, где есть право выбора.
            </p>
          </div>

          <div className="liquid-glass rounded-[28px] p-5 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-sky-500/15 text-sky-700 flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <div className="font-bold text-base text-stone-950">2. Поиск важнее ответа</div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Не спешите давать готовый шаблон. Помогите человеку самому пройти путь исследования и совершить открытие.
            </p>
          </div>

          <div className="liquid-glass rounded-[28px] p-5 space-y-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <div className="font-bold text-base text-stone-950">3. Начни с себя</div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Главный инструмент психолога и педагога — его собственная личность. Нельзя научить свободе, оставаясь несвободным внутри.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}