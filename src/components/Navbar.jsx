import React from 'react';
import {
  Landmark,
  Clock,
  BookOpen,
  Sparkles,
  Globe,
  UserCheck,
  Award,
  QrCode
} from 'lucide-react';
import { HALLS } from '../data/museumData';

const ICONS = {
  hall: Landmark,
  bio: Clock,
  ideas: BookOpen,
  spirit: Sparkles,
  modern: Globe,
  personal: UserCheck,
  quiz: Award,
};

export default function Navbar({ activeHall, visited, navigateTo, onOpenQr }) {
  const progressPercent = Math.round((visited.length / HALLS.length) * 100);

  return (
    <header className="sticky top-0 z-40 bg-amber-50/95 backdrop-blur border-b border-amber-200/80 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <button
          onClick={() => navigateTo('hall')}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-900 text-amber-50 flex items-center justify-center font-serif font-bold text-lg shadow-sm group-hover:bg-amber-800 transition">
            КВ
          </div>
          <div>
            <div className="font-serif font-bold text-sm sm:text-base leading-tight text-stone-900">
              Музей К. Н. Вентцеля
            </div>
            <div className="text-xs text-stone-600 hidden sm:block">
              Антология гуманной педагогики
            </div>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-3 flex-1 max-w-xs">
          <div className="w-full bg-amber-200/70 h-2 rounded-full overflow-hidden">
            <div
              className="bg-amber-800 h-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-xs font-medium text-stone-700 whitespace-nowrap">
            {visited.length}/{HALLS.length} залов
          </span>
        </div>

        <button
          onClick={onOpenQr}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-amber-100 text-stone-800 text-xs sm:text-sm font-medium transition border border-amber-300 shadow-xs cursor-pointer"
        >
          <QrCode className="w-4 h-4 text-amber-800" />
          <span>QR для группы</span>
        </button>
      </div>

      <nav className="max-w-6xl mx-auto px-4 pb-2.5 overflow-x-auto flex gap-1.5">
        {HALLS.map((hall) => {
          const Icon = ICONS[hall.id] || Landmark;
          const isActive = activeHall === hall.id;
          const isVisited = visited.includes(hall.id);
          return (
            <button
              key={hall.id}
              onClick={() => navigateTo(hall.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition cursor-pointer ${
                isActive
                  ? 'bg-amber-900 text-amber-50 shadow-sm'
                  : isVisited
                  ? 'bg-amber-100/80 text-amber-950 border border-amber-300 hover:bg-amber-200/70'
                  : 'bg-white/80 text-stone-700 border border-stone-200 hover:bg-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{hall.short}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}