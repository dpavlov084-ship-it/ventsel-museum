import React, { useState } from 'react';
import { Check, ChevronRight, Award, RotateCcw, Ticket } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/museumData';

export default function HallQuiz() {
  const [quizStep, setQuizStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [visitorName, setVisitorName] = useState('');

  const handleAnswer = (idx) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    if (idx === QUIZ_QUESTIONS[quizStep].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (quizStep + 1 < QUIZ_QUESTIONS.length) {
      setQuizStep(quizStep + 1);
      setSelectedAnswer(null);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="space-y-8">
      <div className="px-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 text-purple-800 text-xs font-bold">
          <span>Зал 06</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-950 mt-2">
          Интерактивный квиз
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-1">
          Проверьте знания по материалам экскурсии и получите именной билет в стиле Apple Wallet.
        </p>
      </div>

      {!quizFinished ? (
        <div className="liquid-glass rounded-[34px] p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {QUIZ_QUESTIONS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${
                    i === quizStep
                      ? 'w-8 bg-stone-950'
                      : i < quizStep
                      ? 'w-4 bg-amber-600'
                      : 'w-4 bg-stone-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-stone-500">
              Счет: {score} / {QUIZ_QUESTIONS.length}
            </span>
          </div>

          <h3 className="text-lg sm:text-2xl font-bold text-stone-950 leading-snug">
            {QUIZ_QUESTIONS[quizStep].q}
          </h3>

          <div className="space-y-2.5">
            {QUIZ_QUESTIONS[quizStep].options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === QUIZ_QUESTIONS[quizStep].correct;

              let rowStyle = 'bg-white/65 hover:bg-white border-white text-stone-900 cursor-pointer active:scale-[0.99]';
              if (selectedAnswer !== null) {
                if (isCorrect) {
                  rowStyle = 'bg-emerald-500/15 border-emerald-500/40 text-emerald-950 font-semibold';
                } else if (isSelected) {
                  rowStyle = 'bg-rose-500/15 border-rose-500/40 text-rose-950';
                } else {
                  rowStyle = 'bg-white/30 border-transparent text-stone-400';
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleAnswer(idx)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${rowStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-stone-900/5 text-xs font-bold flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm sm:text-base">{opt}</span>
                  </div>
                  {selectedAnswer !== null && isCorrect && (
                    <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 sm:p-5 space-y-4">
              <p className="text-sm text-stone-800 leading-relaxed">
                <span className="font-bold text-amber-950">Комментарий: </span>
                {QUIZ_QUESTIONS[quizStep].explanation}
              </p>
              <button
                onClick={nextQuestion}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-stone-950 hover:bg-stone-800 text-white text-sm font-semibold transition active:scale-95 cursor-pointer"
              >
                <span>{quizStep + 1 < QUIZ_QUESTIONS.length ? 'Дальше' : 'Открыть билет'}</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-md mx-auto space-y-5">
          <div className="liquid-glass-dark text-white rounded-[36px] overflow-hidden shadow-2xl">
            <div className="p-6 sm:p-7 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
                    Museum Pass
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[11px] font-bold">
                  {score} из {QUIZ_QUESTIONS.length}
                </span>
              </div>

              <div>
                <div className="text-xs text-stone-400">Почетный посетитель</div>
                <div className="text-2xl font-bold tracking-tight text-white mt-0.5">
                  {visitorName.trim() || 'Гость экспозиции'}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/10 text-xs">
                <div>
                  <div className="text-stone-400">Выставка</div>
                  <div className="font-semibold text-stone-100 mt-0.5">К. Н. Вентцель</div>
                </div>
                <div>
                  <div className="text-stone-400">Статус</div>
                  <div className="font-semibold text-emerald-400 mt-0.5">Пройдено</div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-between px-4">
              <div className="w-5 h-5 rounded-full bg-[#f5f3ef] -ml-6" />
              <div className="border-t border-dashed border-white/20 w-full" />
              <div className="w-5 h-5 rounded-full bg-[#f5f3ef] -mr-6" />
            </div>

            <div className="p-6 bg-white/5 flex items-center justify-between gap-4">
              <div className="text-xs text-stone-300 leading-relaxed">
                Антология гуманной педагогики. Издательский Дом Шалвы Амонашвили.
              </div>
              <div className="w-11 h-11 rounded-2xl bg-amber-400 text-stone-950 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="space-y-3 text-center">
            <input
              type="text"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              placeholder="Впишите свое имя в билет..."
              className="w-full px-5 py-3 rounded-full liquid-glass text-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-stone-900"
            />
            <button
              onClick={resetQuiz}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 hover:bg-white text-stone-700 text-xs font-semibold transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Пройти заново</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}