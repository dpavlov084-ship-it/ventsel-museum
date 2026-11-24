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
    <div className="min-h-screen flex flex-col relative selection:bg-amber-500/20">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-amber-200/35 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-200/30 blur-[110px]" />
      </div>

      <Navbar
        activeHall={activeHall}
        visited={visited}
        navigateTo={navigateTo}
        onOpenQr={() => setShowQrModal(true)}
      />

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 pt-6 pb-14">
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

        <div className="mt-10 flex items-center justify-between gap-3">
          {currentHallIndex > 0 ? (
            <button
              onClick={() => navigateTo(HALLS[currentHallIndex - 1].id)}
              className="liquid-glass inline-flex items-center gap-1.5 px-5 py-3 rounded-full hover:bg-white text-stone-800 text-xs sm:text-sm font-semibold transition active:scale-95 cursor-pointer"
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
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-stone-950 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition active:scale-95 shadow-lg shadow-stone-950/15 cursor-pointer"
            >
              <span>Далее: {HALLS[currentHallIndex + 1].short}</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          ) : (
            <button
              onClick={() => navigateTo('hall')}
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-stone-950 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold transition active:scale-95 cursor-pointer"
            >
              <span>В главный холл</span>
            </button>
          )}
        </div>
      </main>

      {showQrModal && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/50 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowQrModal(false)}
        >
          <div
            className="liquid-glass rounded-[36px] max-w-sm w-full p-7 text-center space-y-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-1">
              <h3 className="font-bold text-xl tracking-tight text-stone-950">
                Поделиться музеем
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Наведите камеру смартфона, чтобы открыть экскурсию на своем устройстве.
              </p>
            </div>

            <div className="bg-white p-4 rounded-[28px] inline-block shadow-sm">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(
                  currentUrl || 'https://vercel.com'
                )}`}
                alt="QR код"
                className="w-44 h-44 mx-auto"
              />
            </div>

            <div className="text-[11px] text-stone-500 break-all px-2">{currentUrl}</div>

            <button
              onClick={() => setShowQrModal(false)}
              className="w-full py-3 rounded-full bg-stone-950 text-white text-sm font-semibold hover:bg-stone-800 transition active:scale-95 cursor-pointer"
            >
              Готово
            </button>
          </div>
        </div>
      )}
    </div>
  );
}