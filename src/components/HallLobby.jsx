import React from 'react';
import {
  Compass,
  ArrowUpRight,
  QrCode,
  Check,
  BookMarked,
  Clock,
  BookOpen,
  Sparkles,
  Globe,
  UserCheck,
  Award,
  ChevronRight
} from 'lucide-react';
import { HALLS } from '../data/museumData';

const HALL_STYLE = {
  bio: { icon: Clock, color: 'bg-amber-500/15 text-amber-700' },
  ideas: { icon: BookOpen, color: 'bg-orange-500/15 text-orange-700' },
  spirit: { icon: Sparkles, color: 'bg-yellow-500/15 text-yellow-700' },
  modern: { icon: Globe, color: 'bg-emerald-500/15 text-emerald-700' },
  personal: { icon: UserCheck, color: 'bg-sky-500/15 text-sky-700' },
  quiz: { icon: Award, color: 'bg-purple-500/15 text-purple-700' },
};

export default function HallLobby({ visited, navigateTo, onOpenQr }) {
  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-[36px] liquid-glass p-7 sm:p-11">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-white text-stone-700 text-xs font-semibold shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>Цифровой архив гуманной педагогики</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-stone-950 leading-[1.1]">
            Константин Вентцель
            <span className="block text-amber-800/80 font-medium text-2xl sm:text-3xl mt-1">
              Философия свободного ребенка
            </span>
          </h1>

          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Автор первой в мире «Декларации прав ребенка» (1917), основатель школы без оценок и создатель космической педагогики.
          </p>

          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/80">
            <p className="text-stone-800 italic text-sm sm:text-base">
              «Пускай это утопия, пускай это мечта! Попытаемся все-таки ее осуществить!»
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigateTo('bio')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-stone-950 hover:bg-stone-800 text-white font-semibold text-sm transition active:scale-95 shadow-lg shadow-stone-950/15 cursor-pointer"
            >
              <span>Начать экскурсию</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={onOpenQr}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/80 hover:bg-white text-stone-900 font-semibold text-sm transition active:scale-95 border border-white shadow-xs cursor-pointer"
            >
              <QrCode className="w-4 h-4 text-amber-700" />
              <span>Поделиться QR</span>
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-lg font-bold tracking-tight text-stone-900">Маршрут экспозиции</h2>
          <span className="text-xs font-medium text-stone-500">6 тематических залов</span>
        </div>

        <div className="liquid-glass rounded-[30px] overflow-hidden divide-y divide-stone-200/60">
          {HALLS.slice(1).map((hall, index) => {
            const style = HALL_STYLE[hall.id] || { icon: Compass, color: 'bg-amber-500/15 text-amber-700' };
            const Icon = style.icon;
            const isVisited = visited.includes(hall.id);

            return (
              <button
                key={hall.id}
                onClick={() => navigateTo(hall.id)}
                className="w-full group text-left p-4 sm:p-5 hover:bg-white/70 transition-colors flex items-center justify-between gap-4 cursor-pointer active:bg-white/90"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className={`w-12 h-12 rounded-2xl ${style.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                        Зал 0{index + 1}
                      </span>
                      {isVisited && (
                        <span className="inline-flex items-center gap-0.5 text-[11px] font-semibold text-emerald-700 bg-emerald-500/15 px-2 py-0.5 rounded-full">
                          <Check className="w-3 h-3" />
                          Пройден
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-base sm:text-lg text-stone-900 truncate mt-0.5">
                      {hall.title.replace(/^Зал \d+\.\s*/, '')}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500 truncate mt-0.5">
                      {hall.desc}
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-stone-100/80 group-hover:bg-stone-900 group-hover:text-white text-stone-400 flex items-center justify-center shrink-0 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="liquid-glass rounded-[28px] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-2xl bg-amber-900/10 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
            <BookMarked className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
              Первоисточник
            </div>
            <div className="font-semibold text-stone-900 text-sm sm:text-base mt-0.5">
              К. Н. Вентцель. Серия «Антология гуманной педагогики»
            </div>
            <div className="text-xs text-stone-500 mt-0.5">
              Издательский Дом Шалвы Амонашвили, Москва, 1999 г.
            </div>
          </div>
        </div>
        <a
          href="https://search.rsl.ru/ru/record/01000607119"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-stone-900 hover:text-white text-stone-800 text-xs font-semibold transition shadow-2xs shrink-0"
        >
          <span>Каталог РГБ</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}