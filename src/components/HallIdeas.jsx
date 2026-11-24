import React from 'react';
import { FileText } from 'lucide-react';
import { BOOKS } from '../data/museumData';

export default function HallIdeas() {
  return (
    <div className="space-y-6">
      <div className="border-b border-amber-200 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Зал 2 из 6</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
          Педагогические идеи и обзор книг
        </h2>
        <p className="text-stone-600 mt-1">
          Коперниканский переворот в педагогике: ребенок становится солнцем, вокруг которого вращается образование.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-amber-200/90 space-y-2 shadow-xs">
          <div className="text-xs font-bold text-amber-800 uppercase">Идея № 1</div>
          <h3 className="font-serif font-bold text-lg text-stone-900">Ребенок — цель, а не средство</h3>
          <p className="text-sm text-stone-700 leading-relaxed">
            Нельзя приносить детство в жертву государству, партии или будущей профессии. Воспитание должно помогать раскрытию внутренних творческих сил, а не обтесывать ребенка как глыбу мрамора.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-amber-200/90 space-y-2 shadow-xs">
          <div className="text-xs font-bold text-amber-800 uppercase">Идея № 2</div>
          <h3 className="font-serif font-bold text-lg text-stone-900">Педагогическая община</h3>
          <p className="text-sm text-stone-700 leading-relaxed">
            Школа и детский сад — это свободный союз детей, родителей и педагогов. Учитель не надзиратель, а старший товарищ, которого дети выбирают сами. Вместо зубрежки — свободный производительный труд и игра.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-amber-200/90 space-y-2 shadow-xs">
          <div className="text-xs font-bold text-amber-800 uppercase">Идея № 3</div>
          <h3 className="font-serif font-bold text-lg text-stone-900">Космическая педагогика</h3>
          <p className="text-sm text-stone-700 leading-relaxed">
            Личность неразрывно связана с природой, человечеством и Вселенной. Высшая задача воспитания — помочь человеку осознать себя творческим гражданином Космоса.
          </p>
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <h3 className="text-lg font-serif font-bold text-stone-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-amber-800" />
          <span>Ключевые труды из тома Антологии</span>
        </h3>
        <div className="space-y-3">
          {BOOKS.map((book) => (
            <div key={book.title} className="bg-white rounded-xl p-5 border border-amber-200/80 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-serif font-bold text-base sm:text-lg text-stone-900">{book.title}</h4>
                <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-950 text-xs font-bold">
                  {book.year} г.
                </span>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed">{book.summary}</p>
              <div className="text-xs font-medium text-amber-950 bg-amber-50 border border-amber-200/70 px-3 py-1.5 rounded-lg inline-block">
                Главный тезис: {book.keyPoint}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}