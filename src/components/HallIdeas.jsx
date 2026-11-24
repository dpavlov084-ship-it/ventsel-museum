import React, { useState } from 'react';
import { Sun, Users, Orbit, BookOpen, ChevronDown, Sparkles, Scale, BookMarked } from 'lucide-react';
import { BOOKS, DECLARATION_COMPARE, TERMS_GLOSSARY } from '../data/museumData';

const PILLARS = [
  {
    num: '01',
    title: 'Ребенок как цель',
    desc: 'Детство не черновик взрослой жизни. Воспитание раскрывает внутренние силы личности, а не обтесывает ее как мрамор.',
    icon: Sun,
    accent: 'bg-amber-500/15 text-amber-700'
  },
  {
    num: '02',
    title: 'Свободная община',
    desc: 'Союз детей, родителей и педагогов без оценок и звонков. Учитель здесь старший товарищ, которого выбирают сами дети.',
    icon: Users,
    accent: 'bg-emerald-500/15 text-emerald-700'
  },
  {
    num: '03',
    title: 'Космизм духа',
    desc: 'Личность неразрывно связана с природой и Вселенной. Задача школы — воспитать творческого гражданина Космоса.',
    icon: Orbit,
    accent: 'bg-indigo-500/15 text-indigo-700'
  }
];

export default function HallIdeas() {
  const [openBook, setOpenBook] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(0);
  const [selectedTerm, setSelectedTerm] = useState(0);

  return (
    <div className="space-y-8">
      <div className="px-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/15 text-orange-800 text-xs font-bold">
          <span>Зал 02</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-950 mt-2">
          Идеи, первоисточники и понятия
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-1">
          Коперниканский переворот: ребенок становится солнцем, вокруг которого вращается образование.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PILLARS.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.num} className="liquid-glass rounded-[30px] p-6 flex flex-col justify-between space-y-5">
              <div className="flex items-center justify-between">
                <div className={`w-11 h-11 rounded-2xl ${item.accent} flex items-center justify-center`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-stone-400">{item.num}</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-stone-950">{item.title}</h3>
                <p className="text-sm text-stone-600 mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="liquid-glass rounded-[32px] p-6 sm:p-8 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-amber-800 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-stone-950">
                Сравнительный анализ Деклараций
              </h3>
              <p className="text-xs text-stone-500">
                Манифест Вентцеля (1917) против Декларации ООН (1959)
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-stone-900 text-amber-300 text-xs font-bold">
            {DECLARATION_COMPARE[selectedArticle].article}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {DECLARATION_COMPARE.map((item, idx) => (
            <button
              key={item.topic}
              onClick={() => setSelectedArticle(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                selectedArticle === idx
                  ? 'bg-stone-950 text-white shadow-sm'
                  : 'bg-white/70 hover:bg-white text-stone-700 border border-white'
              }`}
            >
              {item.topic}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-5 space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-900">
              К. Н. Вентцель (Сентябрь 1917 г.)
            </div>
            <p className="text-sm text-stone-900 leading-relaxed font-medium">
              «{DECLARATION_COMPARE[selectedArticle].ventsel1917}»
            </p>
          </div>

          <div className="bg-white/75 border border-white rounded-2xl p-5 space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
              Резолюция ООН (Ноябрь 1959 г.)
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">
              {DECLARATION_COMPARE[selectedArticle].un1959}
            </p>
          </div>
        </div>
      </div>

      <div className="liquid-glass rounded-[32px] p-6 sm:p-8 space-y-5">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 text-indigo-700 flex items-center justify-center">
            <BookMarked className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-stone-950">
              Понятийный аппарат и компаративистика
            </h3>
            <p className="text-xs text-stone-500">
              Авторские термины Вентцеля в сравнении с Л. Н. Толстым и М. Монтессори
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {TERMS_GLOSSARY.map((item, idx) => (
            <button
              key={item.term}
              onClick={() => setSelectedTerm(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition cursor-pointer ${
                selectedTerm === idx
                  ? 'bg-indigo-950 text-white shadow-sm'
                  : 'bg-white/70 hover:bg-white text-stone-700 border border-white'
              }`}
            >
              {item.term}
            </button>
          ))}
        </div>

        <div className="bg-white/75 border border-white rounded-2xl p-5 space-y-3">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-indigo-800">
              Определение по первоисточнику
            </div>
            <p className="text-sm sm:text-base text-stone-900 font-medium mt-1 leading-relaxed">
              {TERMS_GLOSSARY[selectedTerm].definition}
            </p>
          </div>
          <div className="pt-2 border-t border-stone-200/70">
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
              Отличие от других концепций
            </div>
            <p className="text-xs sm:text-sm text-stone-700 mt-1 leading-relaxed">
              {TERMS_GLOSSARY[selectedTerm].contrast}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-700" />
            <span>Труды из тома Антологии</span>
          </h3>
          <span className="text-xs text-stone-500">Нажмите для разбора</span>
        </div>

        <div className="liquid-glass rounded-[30px] overflow-hidden divide-y divide-stone-200/60">
          {BOOKS.map((book, idx) => {
            const isExpanded = openBook === idx;
            return (
              <div key={book.title} className="transition-colors">
                <button
                  onClick={() => setOpenBook(isExpanded ? -1 : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/60 transition cursor-pointer"
                >
                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-stone-900 text-amber-300 text-[11px] font-bold">
                      {book.year} год
                    </span>
                    <h4 className="font-bold text-base sm:text-lg text-stone-950">
                      {book.title}
                    </h4>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 bg-stone-900 text-white' : 'text-stone-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 sm:px-6 pb-6 space-y-3">
                    <p className="text-sm text-stone-700 leading-relaxed">
                      {book.summary}
                    </p>
                    <div className="inline-flex items-center gap-2 bg-amber-500/15 text-amber-950 px-3.5 py-2 rounded-2xl text-xs font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>Главный тезис: {book.keyPoint}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}