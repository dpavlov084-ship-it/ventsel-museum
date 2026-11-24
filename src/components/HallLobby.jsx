import React from 'react';
import {
  Compass,
  ChevronRight,
  QrCode,
  CheckCircle2,
  ExternalLink,
  Clock,
  BookOpen,
  Sparkles,
  Globe,
  UserCheck,
  Award
} from 'lucide-react';
import { HALLS } from '../data/museumData';

const HALL_ICONS = {
  bio: Clock,
  ideas: BookOpen,
  spirit: Sparkles,
  modern: Globe,
  personal: UserCheck,
  quiz: Award,
};

export default function HallLobby({ visited, navigateTo, onOpenQr }) {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-amber-50 rounded-2xl p-6 sm:p-10 shadow-lg border border-amber-800/40">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>Виртуальная педагогическая экскурсия</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight leading-tight text-white">
            Константин Николаевич Вентцель (1857–1947)
          </h1>
          <p className="text-amber-100/90 text-base sm:text-lg leading-relaxed">
            Пророк свободного воспитания, автор первой в мире «Декларации прав ребенка» (1917) и создатель космической педагогики.
          </p>
          <blockquote className="border-l-2 border-amber-400 pl-4 py-1 italic text-amber-200 text-sm sm:text-base font-serif">
            «Пускай это утопия, пускай это мечта! Попытаемся все-таки ее осуществить!»
          </blockquote>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => navigateTo('bio')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm transition shadow cursor-pointer"
            >
              <span>Начать экскурсию с 1-го зала</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenQr}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition border border-white/20 cursor-pointer"
            >
              <QrCode className="w-4 h-4" />
              <span>Открыть на смартфоне</span>
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-serif font-bold text-stone-900">План залов музея</h2>
          <span className="text-xs text-stone-500">Нажмите на любой зал для перехода</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {HALLS.slice(1).map((hall) => {
            const Icon = HALL_ICONS[hall.id] || Compass;
            const isVisited = visited.includes(hall.id);
            return (
              <button
                key={hall.id}
                onClick={() => navigateTo(hall.id)}
                className="group text-left bg-white rounded-xl p-5 border border-amber-200/80 hover:border-amber-700 hover:shadow-md transition flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-900 flex items-center justify-center group-hover:bg-amber-900 group-hover:text-amber-50 transition">
                      <Icon className="w-5 h-5" />
                    </div>
                    {isVisited && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Осмотрено
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-stone-900 group-hover:text-amber-900 transition">
                      {hall.title}
                    </h3>
                    <p className="text-sm text-stone-600 mt-1">{hall.desc}</p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center text-xs font-semibold text-amber-800">
                  <span>Войти в зал</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-amber-50/70 rounded-xl p-5 border border-amber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
            Первоисточник экспозиции
          </div>
          <div className="font-serif font-bold text-stone-900">
            К. Н. Вентцель. Серия «Антология гуманной педагогики»
          </div>
          <div className="text-sm text-stone-700">
            Издательский Дом Шалвы Амонашвили, Москва, 1999 г. Составители: М. В. Богуславский, Г. Б. Корнетов.
          </div>
        </div>
        <a
          href="https://search.rsl.ru/ru/record/01000607119"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-amber-100 text-stone-800 border border-amber-300 text-xs font-semibold whitespace-nowrap transition"
        >
          <span>Карточка в РГБ</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}