import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HALLS } from './data/museumData';
import Navbar from './components/Navbar';
import HallLobby from './components/HallLobby';
import HallTimeline from './components/HallTimeline';
import HallIdeas from './components/HallIdeas';
import HallQuotes from './components/HallQuotes';
import HallModern from './components/HallModern';
import HallPersonal from './components/HallPersonal';
import HallQuiz from './components/HallQuiz';

export default function App() {
  const [activeHall, setActiveHall] = useState('hall');
  const [visited, setVisited] = useState(['hall']);
  const [showQrModal, setShowQrModal] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const navigateTo = (id) => {
    setActiveHall(id);
    if (!visited.includes(id)) {
      setVisited([...visited, id]);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentHallIndex = HALLS.findIndex((h) => h.id === activeHall);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900">
      <Navbar
        activeHall={activeHall}
        visited={visited}
        navigateTo={navigateTo}
        onOpenQr={() => setShowQrModal(true)}
      />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        {activeHall === 'hall' && (
          <HallLobby
            visited={visited}
            navigateTo={navigateTo}
            onOpenQr={() => setShowQrModal(true)}
          />
        )}
        {activeHall === 'bio' && <HallTimeline />}
        {activeHall === 'ideas' && <HallIdeas />}
        {activeHall === 'spirit' && <HallQuotes />}
        {activeHall === 'modern' && <HallModern />}
        {activeHall === 'personal' && <HallPersonal />}
        {activeHall === 'quiz' && <HallQuiz />}

        <div className="mt-10 pt-6 border-t border-amber-200/80 flex items-center justify-between">
          {currentHallIndex > 0 ? (
            <button
              onClick={() => navigateTo(HALLS[currentHallIndex - 1].id)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-amber-300 hover:bg-amber-50 text-stone-800 text-sm font-medium transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{HALLS[currentHallIndex - 1].short}</span>
            </button>
          ) : (
            <div />
          )}

          {currentHallIndex < HALLS.length - 1 ? (
            <button
              onClick={() => navigateTo(HALLS[currentHallIndex + 1].id)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-800 text-amber-50 text-sm font-medium transition shadow-sm cursor-pointer"
            >
              <span>Далее: {HALLS[currentHallIndex + 1].short}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => navigateTo('hall')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium transition cursor-pointer"
            >
              <span>Вернуться в главный холл</span>
            </button>
          )}
        </div>
      </main>

      {showQrModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-sm w-full p-6 text-center space-y-4 shadow-xl border border-amber-200"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-serif font-bold text-lg text-stone-900">
              QR-код виртуального музея
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Покажите этот экран преподавателю и одногруппникам, чтобы они открыли экскурсию на своих телефонах.
            </p>
            <div className="bg-amber-50/60 p-4 rounded-xl border border-amber-200 inline-block">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
                  currentUrl || 'https://vercel.com'
                )}`}
                alt="QR код сайта"
                className="w-48 h-48 mx-auto"
              />
            </div>
            <div className="text-[11px] text-stone-400 break-all px-2">{currentUrl}</div>
            <button
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 rounded-xl bg-amber-900 text-amber-50 text-sm font-medium hover:bg-amber-800 transition cursor-pointer"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}