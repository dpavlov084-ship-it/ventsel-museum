import React from 'react';

export default function HallModern() {
  return (
    <div className="space-y-6">
      <div className="border-b border-amber-200 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Зал 4 из 6</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
          Актуальность для современности и уроки наследия
        </h2>
        <p className="text-stone-600 mt-1">
          Почему идеи столетней давности прямо отвечают на вызовы школы и психологии в 2026 году.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-amber-200/90 overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-amber-100/70 border-b border-amber-200 text-xs font-bold uppercase text-amber-950">
                <th className="p-4">Идея К. Н. Вентцеля (1906–1925)</th>
                <th className="p-4">Воплощение в образовании 2026 года</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100 text-sm">
              <tr>
                <td className="p-4 font-medium text-stone-900">
                  Отказ от единого шаблона и конвейера («сколько детей — столько систем»)
                </td>
                <td className="p-4 text-stone-700">
                  Индивидуальные образовательные траектории, тьюторство, адаптивные цифровые платформы под темп каждого ученика.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-stone-900">
                  Ребенок сам выбирает материал под свои интересы, а знания рождаются из дела
                </td>
                <td className="p-4 text-stone-700">
                  Проектное обучение, интерактивные симуляторы и геймификация, которые включают внутреннюю мотивацию подростков вместо зубрежки.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-stone-900">
                  Субъектность ребенка и право на собственное мнение в «Декларации прав ребенка»
                </td>
                <td className="p-4 text-stone-700">
                  Школьное самоуправление, защита личных границ, отказ от авторитарного давления и буллинга в образовательной среде.
                </td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-stone-900">
                  Космическое самосознание и единство человека с природой
                </td>
                <td className="p-4 text-stone-700">
                  Экологическое мышление, глобальная ответственность за будущее планеты в эпоху технологических рисков.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-serif font-bold text-stone-900">Три главных урока наследия Вентцеля</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-1.5">
            <div className="text-lg font-serif font-bold text-amber-950">Урок 1. Без насилия</div>
            <p className="text-sm text-stone-800 leading-relaxed">
              Принуждение рождает только лицемерие и протест. Искренний интерес ученика возникает там, где есть право выбора.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-1.5">
            <div className="text-lg font-serif font-bold text-amber-950">Урок 2. Поиск важнее ответа</div>
            <p className="text-sm text-stone-800 leading-relaxed">
              Не спешите давать готовый ответ. Помогите человеку самому пройти путь исследования и совершить собственное открытие.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 space-y-1.5">
            <div className="text-lg font-serif font-bold text-amber-950">Урок 3. Начни с себя</div>
            <p className="text-sm text-stone-800 leading-relaxed">
              Главный инструмент педагога и психолога — его собственная личность. Невозможно научить свободе, оставаясь несвободным внутри.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}