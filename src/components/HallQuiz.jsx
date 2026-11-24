import React, { useState } from 'react';
import {
  Check,
  ChevronRight,
  Award,
  RotateCcw,
  Ticket,
  Compass,
  ScrollText,
  Sparkles,
  Scale,
  Briefcase,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import {
  QUIZ_QUESTIONS,
  PEDAGOGICAL_CASES,
  SIMULATOR_SCENES,
  MANIFESTO_OPTIONS
} from '../data/museumData';

export default function HallQuiz() {
  const [mode, setMode] = useState('quiz');

  // Состояния для квиза
  const [quizStep, setQuizStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [visitorName, setVisitorName] = useState('');

  // Состояния для кейсов
  const [caseIdx, setCaseIdx] = useState(0);

  // Состояния для симулятора дня
  const [simStep, setSimStep] = useState(0);
  const [simChoice, setSimChoice] = useState(null);
  const [stats, setStats] = useState({ freedom: 50, discipline: 50, trust: 50 });
  const [simFinished, setSimFinished] = useState(false);

  // Состояния для конструктора манифеста
  const [pickedIds, setPickedIds] = useState(['m1', 'm4']);
  const [authorName, setAuthorName] = useState('');
  const [manifestoReady, setManifestoReady] = useState(false);

  const clamp = (val) => Math.max(0, Math.min(100, val));

  const handleQuizAnswer = (idx) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    if (idx === QUIZ_QUESTIONS[quizStep].correct) {
      setScore(score + 1);
    }
  };

  const nextQuizQuestion = () => {
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

  const handleSimSelect = (idx) => {
    if (simChoice !== null) return;
    const chosen = SIMULATOR_SCENES[simStep].choices[idx];
    setSimChoice(idx);
    setStats({
      freedom: clamp(stats.freedom + chosen.delta.freedom),
      discipline: clamp(stats.discipline + chosen.delta.discipline),
      trust: clamp(stats.trust + chosen.delta.trust),
    });
  };

  const nextSimScene = () => {
    if (simStep + 1 < SIMULATOR_SCENES.length) {
      setSimStep(simStep + 1);
      setSimChoice(null);
    } else {
      setSimFinished(true);
    }
  };

  const resetSim = () => {
    setSimStep(0);
    setSimChoice(null);
    setStats({ freedom: 50, discipline: 50, trust: 50 });
    setSimFinished(false);
  };

  const getSimVerdict = () => {
    if (stats.freedom >= 65 && stats.discipline >= 65 && stats.trust >= 65) {
      return {
        title: 'Идеал Дома свободного ребенка',
        badge: 'Гармония общины',
        desc: 'Вам удалось удержать тонкий баланс: дети сохранили свободу выбора, но через совместные договоры пришли к внутренней дисциплине и доверию.'
      };
    }
    if (stats.discipline > stats.freedom + 25) {
      return {
        title: 'Уклон в казенную гимназию',
        badge: 'Избыток контроля',
        desc: 'Порядок в классе есть, но ценой подавления инициативы. По Вентцелю, такая дисциплина держится только пока педагог смотрит на детей.'
      };
    }
    if (stats.freedom > stats.discipline + 25) {
      return {
        title: 'Стихийный хаос вместо общины',
        badge: 'Нехватка опоры',
        desc: 'Вы дали полную свободу, но не помогли детям выстроить общие правила. Без поддержки старшего товарища свобода превращается в скуку.'
      };
    }
    return {
      title: 'Поиск гуманистического пути',
      badge: 'Хороший старт',
      desc: 'Вы избежали крайностей, но в отдельных ситуациях можно смелее опираться на самоуправление самой детской общины.'
    };
  };

  const toggleManifestoItem = (id) => {
    if (pickedIds.includes(id)) {
      setPickedIds(pickedIds.filter((item) => item !== id));
    } else if (pickedIds.length < 4) {
      setPickedIds([...pickedIds, id]);
    }
  };

  const activeCase = PEDAGOGICAL_CASES[caseIdx];

  return (
    <div className="space-y-7">
      <div className="px-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 text-purple-800 text-xs font-bold">
          <span>Зал 06</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-stone-950 mt-2">
          Практика и интерактив
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-1">
          Четыре формата работы с наследием К. Н. Вентцеля: квиз, разбор школьных кейсов, симулятор дня и конструктор хартии.
        </p>
      </div>

      <div className="liquid-glass rounded-[26px] sm:rounded-full p-1.5 grid grid-cols-2 sm:grid-cols-4 gap-1 max-w-2xl">
        <button
          onClick={() => setMode('quiz')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
            mode === 'quiz' ? 'bg-stone-950 text-white shadow-sm' : 'text-stone-700 hover:bg-white/60'
          }`}
        >
          <Award className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Квиз</span>
        </button>

        <button
          onClick={() => setMode('cases')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
            mode === 'cases' ? 'bg-stone-950 text-white shadow-sm' : 'text-stone-700 hover:bg-white/60'
          }`}
        >
          <Briefcase className="w-4 h-4 text-purple-400 shrink-0" />
          <span>Кейсы</span>
        </button>

        <button
          onClick={() => setMode('sim')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
            mode === 'sim' ? 'bg-stone-950 text-white shadow-sm' : 'text-stone-700 hover:bg-white/60'
          }`}
        >
          <Compass className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Симулятор</span>
        </button>

        <button
          onClick={() => setMode('manifesto')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
            mode === 'manifesto' ? 'bg-stone-950 text-white shadow-sm' : 'text-stone-700 hover:bg-white/60'
          }`}
        >
          <ScrollText className="w-4 h-4 text-sky-400 shrink-0" />
          <span>Манифест</span>
        </button>
      </div>

      {mode === 'quiz' && (
        !quizFinished ? (
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
                    onClick={() => handleQuizAnswer(idx)}
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
                  onClick={nextQuizQuestion}
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
        )
      )}

      {mode === 'cases' && (
        <div className="liquid-glass rounded-[34px] p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/15 text-purple-700 flex items-center justify-center">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-stone-950">
                  Педагогический практикум
                </h3>
                <p className="text-xs text-stone-500">
                  Решение школьных конфликтов по методу К. Н. Вентцеля
                </p>
              </div>
            </div>

            <div className="flex gap-1.5">
              {PEDAGOGICAL_CASES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCaseIdx(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition cursor-pointer ${
                    caseIdx === idx
                      ? 'bg-stone-950 text-amber-300'
                      : 'bg-white/70 hover:bg-white text-stone-700'
                  }`}
                >
                  Кейс №{idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-stone-900 text-white rounded-2xl p-5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
              Проблемная ситуация
            </div>
            <p className="text-sm sm:text-base leading-relaxed font-medium">
              {activeCase.situation}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-800">
                <AlertTriangle className="w-4 h-4" />
                <span>Авторитарный путь (тупик)</span>
              </div>
              <p className="text-sm text-stone-800 leading-relaxed">
                {activeCase.authoritarian}
              </p>
            </div>

            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
                <CheckCircle2 className="w-4 h-4" />
                <span>Решение по Вентцелю</span>
              </div>
              <p className="text-sm text-stone-900 font-medium leading-relaxed">
                {activeCase.ventselWay}
              </p>
              <div className="text-[11px] text-emerald-900/80 pt-1">
                Опора: {activeCase.sourceNote}
              </div>
            </div>
          </div>
        </div>
      )}

      {mode === 'sim' && (
        <div className="space-y-5">
          <div className="grid grid-cols-3 gap-3">
            <div className="liquid-glass rounded-2xl p-4 space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-stone-600">Свобода</span>
                <span className="text-amber-700">{stats.freedom}%</span>
              </div>
              <div className="h-2 rounded-full bg-stone-200 overflow-hidden">
                <div className="h-full bg-amber-500 transition-all duration-500" style={{ width: `${stats.freedom}%` }} />
              </div>
            </div>

            <div className="liquid-glass rounded-2xl p-4 space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-stone-600">Самодисциплина</span>
                <span className="text-emerald-700">{stats.discipline}%</span>
              </div>
              <div className="h-2 rounded-full bg-stone-200 overflow-hidden">
                <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${stats.discipline}%` }} />
              </div>
            </div>

            <div className="liquid-glass rounded-2xl p-4 space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-stone-600">Доверие</span>
                <span className="text-sky-700">{stats.trust}%</span>
              </div>
              <div className="h-2 rounded-full bg-stone-200 overflow-hidden">
                <div className="h-full bg-sky-500 transition-all duration-500" style={{ width: `${stats.trust}%` }} />
              </div>
            </div>
          </div>

          {!simFinished ? (
            <div className="liquid-glass rounded-[34px] p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-stone-950 text-amber-300 text-xs font-bold">
                  {SIMULATOR_SCENES[simStep].time}
                </span>
                <span className="text-xs font-semibold text-stone-500">
                  Эпизод {simStep + 1} из {SIMULATOR_SCENES.length}
                </span>
              </div>

              <p className="text-base sm:text-xl font-bold text-stone-950 leading-relaxed">
                {SIMULATOR_SCENES[simStep].situation}
              </p>

              <div className="space-y-2.5">
                {SIMULATOR_SCENES[simStep].choices.map((ch, idx) => {
                  const isChosen = simChoice === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSimSelect(idx)}
                      disabled={simChoice !== null}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                        simChoice === null
                          ? 'bg-white/70 hover:bg-white border-white text-stone-900 active:scale-[0.99]'
                          : isChosen
                          ? 'bg-stone-950 text-white border-stone-950 shadow-md'
                          : 'bg-white/30 border-transparent text-stone-400'
                      }`}
                    >
                      <span className="text-sm sm:text-base font-medium leading-snug block">
                        {ch.text}
                      </span>
                    </button>
                  );
                })}
              </div>

              {simChoice !== null && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Педагогический разбор
                  </div>
                  <p className="text-sm text-stone-800 leading-relaxed">
                    {SIMULATOR_SCENES[simStep].choices[simChoice].feedback}
                  </p>
                  <button
                    onClick={nextSimScene}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-stone-950 text-white text-sm font-semibold hover:bg-stone-800 transition cursor-pointer"
                  >
                    <span>{simStep + 1 < SIMULATOR_SCENES.length ? 'Следующий час' : 'Подвести итог дня'}</span>
                    <ChevronRight className="w-4 h-4 text-amber-400" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="liquid-glass-dark text-white rounded-[34px] p-7 sm:p-9 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold">
                <Scale className="w-3.5 h-3.5" />
                <span>{getSimVerdict().badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {getSimVerdict().title}
              </h3>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                {getSimVerdict().desc}
              </p>
              <button
                onClick={resetSim}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-stone-950 text-xs font-bold hover:bg-amber-100 transition cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Прожить день заново</span>
              </button>
            </div>
          )}
        </div>
      )}

      {mode === 'manifesto' && (
        !manifestoReady ? (
          <div className="liquid-glass rounded-[34px] p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-950">
                  Конструктор «Декларации прав ученика 2026»
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                  Продолжите дело Вентцеля: выберите ровно 4 ключевых принципа для современной школы.
                </p>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-stone-950 text-amber-300 text-xs font-bold">
                Выбрано: {pickedIds.length} / 4
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {MANIFESTO_OPTIONS.map((item) => {
                const isPicked = pickedIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleManifestoItem(item.id)}
                    className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                      isPicked
                        ? 'bg-stone-950 text-white border-stone-950 shadow-md'
                        : 'bg-white/70 hover:bg-white border-white text-stone-900'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        isPicked ? 'bg-amber-400 text-stone-950' : 'bg-stone-200/80 text-stone-600'
                      }`}>
                        {item.tag}
                      </span>
                      {isPicked && <Check className="w-4 h-4 text-amber-400" />}
                    </div>
                    <div className="font-bold text-sm sm:text-base">{item.title}</div>
                    <p className={`text-xs leading-relaxed ${isPicked ? 'text-stone-300' : 'text-stone-600'}`}>
                      {item.text}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Ваше имя или номер группы..."
                className="flex-1 px-5 py-3 rounded-full bg-white/80 border border-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-stone-950"
              />
              <button
                onClick={() => setManifestoReady(true)}
                disabled={pickedIds.length === 0}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-stone-950 hover:bg-stone-800 disabled:opacity-40 text-white text-sm font-semibold transition cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Сформировать хартию</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="liquid-glass-dark text-white rounded-[36px] p-7 sm:p-10 space-y-6 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-amber-300">
                    В развитие идей К. Н. Вентцеля (1917 → 2026)
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-1">
                    Хартия свободного образования
                  </h3>
                </div>
                <ScrollText className="w-8 h-8 text-amber-400 shrink-0" />
              </div>

              <div className="space-y-3">
                {MANIFESTO_OPTIONS.filter((item) => pickedIds.includes(item.id)).map((item, idx) => (
                  <div key={item.id} className="bg-white/10 rounded-2xl p-4 border border-white/10">
                    <div className="text-xs font-bold text-amber-300">
                      Статья 0{idx + 1}. {item.title}
                    </div>
                    <p className="text-sm text-stone-200 mt-1 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/15">
                <div className="text-xs text-stone-400">
                  Составитель: <span className="text-white font-semibold">{authorName.trim() || 'Студент-исследователь'}</span> • 2026 г.
                </div>
                <button
                  onClick={() => setManifestoReady(false)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-stone-950 text-xs font-bold hover:bg-amber-100 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Изменить пункты</span>
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}