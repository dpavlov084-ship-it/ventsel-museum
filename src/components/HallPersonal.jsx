import React from 'react';
import { Sparkles, Heart, Scale } from 'lucide-react';

export default function HallPersonal() {
  return (
    <div className="space-y-8">
      <div className="px-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/15 text-sky-800 text-xs font-bold">
          <span>Зал 04</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-950 mt-2">
          Личный взгляд экскурсовода
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-1">
          Честный разбор: что восхищает в К. Н. Вентцеле, а с чем можно поспорить.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="liquid-glass rounded-[32px] p-6 sm:p-7 space-y-3">
          <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 text-emerald-700 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Главное открытие
          </div>
          <h3 className="text-xl font-bold text-stone-950">
            Опередил историю на полвека
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            До изучения этой книги я считал, что права ребенка впервые закрепила ООН в середине XX века. Оказалось, что в сентябре 1917 года в России уже существовала «Декларация прав ребенка» Вентцеля, причем написанная гораздо смелее. В ней ребенок выступает не объектом опеки, а полноценной личностью со своим голосом.
          </p>
        </div>

        <div className="liquid-glass rounded-[32px] p-6 sm:p-7 space-y-3">
          <div className="w-11 h-11 rounded-2xl bg-amber-500/15 text-amber-700 flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
            Личное отношение
          </div>
          <h3 className="text-xl font-bold text-stone-950">
            Уважение к стойкости одиночки
          </h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            Меня поразила его внутренняя честность. Вентцель не подстраивался ни под царскую цензуру, ни под советскую идеологию. Даже в 1930-е годы, живя в нищете и изоляции, он писал письма в газеты с требованием отменить смертную казнь и освободить школу от государственного диктата.
          </p>
        </div>
      </div>

      <div className="liquid-glass-dark text-white rounded-[32px] p-6 sm:p-8 space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
            <Scale className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            Точка для дискуссии
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          Где проходит граница между свободой и хаосом?
        </h3>
        <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
          Я согласен с Вентцелем в том, что нельзя ломать личность ребенка и подавлять его инициативу. Но его радикальный отказ от любого расписания и программ в «Доме свободного ребенка» на практике оказался утопией. Без базовой структуры и внешних ориентиров детям сложно освоить системные знания. Поэтому сегодня идеи Вентцеля работают лучше всего как гуманистический вектор внутри современного образования.
        </p>
      </div>
    </div>
  );
}