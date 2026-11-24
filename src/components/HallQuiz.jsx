import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, Award, RotateCcw } from 'lucide-react';
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
    <div className="space-y-6">
      <div className="border-b border-amber-200 pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Зал 6 из 6</span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
          Проверочный квиз для посетителей музея
        </h2>
        <p className="text-stone-600 mt-1">
          Ответьте на 5 вопросов по материалам экскурсии и получите именной билет почетного гостя.
        </p>
      </div>

      {!quizFinished ? (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-amber-200/90 shadow-sm space-y-6">
          <div className="flex items-center justify-between text-xs font-bold text-stone-500">
            <span>Вопрос {quizStep + 1} из {QUIZ_QUESTIONS.length}</span>
            <span>Счет: {score}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">
            {QUIZ_QUESTIONS[quizStep].q}
          </h3>

          <div className="space-y-3">
            {QUIZ_QUESTIONS[quizStep].options.map((opt, idx) => {
              const isSelected = selectedAnswer === idx;
              const isCorrect = idx === QUIZ_QUESTIONS[quizStep].correct;
              let btnStyle = 'bg-amber-50/40 border-amber-200 hover:border-amber-700 text-stone-800 cursor-pointer';
              if (selectedAnswer !== null) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-600 text-emerald-950 font-semibold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-50 border-rose-500 text-rose-950';
                } else {
                  btnStyle = 'bg-stone-50 border-stone-200 text-stone-400';
                }
              }

              return (
                <button
                  key={opt}
                  onClick={() => handleAnswer(idx)}
                  disabled={selectedAnswer !== null}
                  className={`w-full text-left p-4 rounded-xl border transition flex items-center justify-between ${btnStyle}`}
                >
                  <span className="text-sm sm:text-base">{opt}</span>
                  {selectedAnswer !== null && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-3">
              <p className="text-sm text-stone-800 leading-relaxed">
                <span className="font-bold text-amber-950">Пояснение: </span>
                {QUIZ_QUESTIONS[quizStep].explanation}
              </p>
              <button
                onClick={nextQuestion}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-900 hover:bg-amber-800 text-amber-50 text-sm font-medium transition cursor-pointer"
              >
                <span>{quizStep + 1 < QUIZ_QUESTIONS.length ? 'Следующий вопрос' : 'Завершить и получить билет'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-2xl p-6 sm:p-8 border-2 border-amber-800/30 shadow-md space-y-6 text-center">
          <div className="w-14 h-14 rounded-full bg-amber-900 text-amber-50 flex items-center justify-center mx-auto shadow">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-800">
              Билет почетного посетителя музея
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Экскурсия успешно пройдена!
            </h3>
            <p className="text-stone-600 text-sm">
              Ваш результат: <span className="font-bold text-stone-900">{score} из {QUIZ_QUESTIONS.length}</span> правильных ответов
            </p>
          </div>

          <div className="max-w-sm mx-auto">
            <input
              type="text"
              value={visitorName}
              onChange={(e) => setVisitorName(e.target.value)}
              placeholder="Введите ваше имя для билета..."
              className="w-full px-4 py-2.5 rounded-xl border border-amber-300 bg-white text-center text-sm focus:outline-none focus:border-amber-800"
            />
          </div>

          <div className="max-w-md mx-auto bg-white rounded-xl p-5 border border-dashed border-amber-800 text-left space-y-2 shadow-sm">
            <div className="flex justify-between items-center text-xs text-stone-500 border-b border-stone-100 pb-2">
              <span>ПЕДАГОГИЧЕСКИЙ МУЗЕЙ К. Н. ВЕНТЦЕЛЯ</span>
              <span>№ 1917-2026</span>
            </div>
            <div className="font-serif font-bold text-lg text-stone-900">
              {visitorName.trim() || 'Почетный гость экскурсии'}
            </div>
            <div className="text-xs text-stone-600 leading-relaxed">
              Подтверждает изучение наследия К. Н. Вентцеля по серии «Антология гуманной педагогики».
            </div>
          </div>

          <button
            onClick={resetQuiz}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold transition cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Пройти квиз заново</span>
          </button>
        </div>
      )}
    </div>
  );
}