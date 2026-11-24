import React from 'react';
import { ArrowRight, ShieldCheck, Compass, UserCheck } from 'lucide-react';

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
  return (
    <div className="space-y-8">
      <div className="px-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-800 text-xs font-bold">
          <span>Зал 05</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-950 mt-2">
          Актуальность в 2026 году
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-1">
          Как идеи столетней давности работают в современной школе и психологии.
        </p>
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