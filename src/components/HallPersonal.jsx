import React from 'react';

export default function HallPersonal() {
  return (
    <div className="space-y-6">
      <div className="border-b border-amber-200 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Зал 5 из 6</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
          Личное отношение и открытия экскурсовода
        </h2>
        <p className="text-stone-600 mt-1">
          Честный разбор: что восхищает в К. Н. Вентцеле, а с чем можно поспорить.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white rounded-2xl p-6 border border-amber-200/90 space-y-3 shadow-xs">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold">
            Главное открытие
          </div>
          <h3 className="text-lg font-serif font-bold text-stone-900">
            Опередил мировую историю на полвека
          </h3>
          <p className="text-sm text-stone-700 leading-relaxed">
            До изучения этой книги я считал, что права ребенка впервые закрепила ООН в середине XX века. Оказалось, что в сентябре 1917 года в России уже существовала «Декларация прав ребенка» Вентцеля, причем написанная гораздо смелее и глубже. В ней ребенок рассматривается не как беспомощный объект защиты, а как полноценная личность со своим голосом.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-amber-200/90 space-y-3 shadow-xs">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold">
            Личное отношение
          </div>
          <h3 className="text-lg font-serif font-bold text-stone-900">
            Уважение к стойкости одиночки
          </h3>
          <p className="text-sm text-stone-700 leading-relaxed">
            Меня поразила его внутренняя честность. Вентцель не подстраивался ни под царскую цензуру, ни под советскую идеологию. Даже в 1930-е годы, живя в нищете и изоляции, он писал письма в газеты с требованием отменить смертную казнь и освободить школу от государственного диктата.
          </p>
        </div>
      </div>

      <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 space-y-3 border border-stone-800">
        <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
          Критическая оценка (точка для дискуссии)
        </div>
        <h3 className="text-xl font-serif font-bold text-white">
          Где проходит граница между свободой и хаосом?
        </h3>
        <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
          Я согласен с Вентцелем в том, что нельзя ломать личность ребенка и подавлять его инициативу. Но его радикальный отказ от любого расписания и программ в «Доме свободного ребенка» на практике оказался утопией. Без базовой структуры и внешних ориентиров детям сложно освоить системные знания. Поэтому сегодня идеи Вентцеля работают лучше всего не как полный отказ от школы, а как гуманистический вектор внутри современного образования.
        </p>
      </div>
    </div>
  );
}