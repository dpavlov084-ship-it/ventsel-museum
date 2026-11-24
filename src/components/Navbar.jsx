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
  const radius = 12;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

  return (
    <header className="sticky top-3 z-40 px-3 sm:px-6 pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto space-y-2">
        <div className="liquid-glass-dark text-white rounded-[28px] px-4 py-2.5 flex items-center justify-between gap-3 transition-all duration-300">
          <button
            onClick={() => navigateTo('hall')}
            className="flex items-center gap-3 text-left group cursor-pointer active:scale-95 transition-transform"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 text-stone-950 flex items-center justify-center font-bold text-sm shadow-inner">
              КВ
            </div>
            <div>
              <div className="font-semibold text-sm tracking-tight text-white leading-none">
                К. Н. Вентцель
              </div>
              <div className="text-[11px] text-stone-400 mt-1">
                Экспозиция 1857–1947
              </div>
            </div>
          </button>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <div className="relative w-7 h-7 flex items-center justify-center">
                <svg className="w-7 h-7 -rotate-90" viewBox="0 0 32 32">
                  <circle
                    cx="16"
                    cy="16"
                    r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="3"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r={radius}
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="3"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-500"
                  />
                </svg>
                <span className="absolute text-[9px] font-bold text-amber-300">
                  {visited.length}
                </span>
              </div>
              <span className="text-xs text-stone-300 hidden sm:inline pr-1">
                из {HALLS.length} залов
              </span>
            </div>

            <button
              onClick={onOpenQr}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white text-stone-950 hover:bg-amber-100 text-xs font-semibold transition active:scale-95 shadow-sm cursor-pointer"
            >
              <QrCode className="w-3.5 h-3.5 text-amber-700" />
              <span>QR</span>
            </button>
          </div>
        </div>

        <nav className="flex justify-start sm:justify-center overflow-x-auto no-scrollbar py-1">
          <div className="liquid-glass rounded-full p-1.5 flex items-center gap-1">
            {HALLS.map((hall) => {
              const Icon = ICONS[hall.id] || Landmark;
              const isActive = activeHall === hall.id;
              const isVisited = visited.includes(hall.id);
              return (
                <button
                  key={hall.id}
                  onClick={() => navigateTo(hall.id)}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer active:scale-95 ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-md'
                      : 'text-stone-700 hover:bg-white/70'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-stone-500'}`} />
                  <span>{hall.short}</span>
                  {!isActive && isVisited && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}