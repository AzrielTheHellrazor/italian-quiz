'use client';

import React, { useState, useEffect } from 'react';
import { QUIZ_TOPICS, QuizTopic } from '@/data/topics';
import { Question } from '@/data/questions';
import confetti from 'canvas-confetti';
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  BookText,
  HelpCircle,
  Clock
} from 'lucide-react';

export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<QuizTopic>(QUIZ_TOPICS[0]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [reviewMode, setReviewMode] = useState<boolean>(false);

  const questions = selectedTopic.questions;
  const currentQ: Question | undefined = questions[currentIdx];

  const handleSelectTopic = (topic: QuizTopic) => {
    setSelectedTopic(topic);
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
    setReviewMode(false);
  };

  const handleSelectOption = (opt: string) => {
    if (isAnswered) return;
    setSelectedOption(opt);
    setIsAnswered(true);

    if (currentQ && opt === currentQ.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
      if (score + (selectedOption === currentQ?.correctAnswer ? 0 : 0) >= questions.length * 0.7) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsCompleted(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8 text-center border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-500/20">
          <GraduationCap className="w-4 h-4" />
          İtalyanca 101 Vize Hazırlık Platformu
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
          Benvenuto! İtalyanca A1 Quiz Portalı
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          <em>In alto! A1</em> (s. 1–44) ve <em>Chiaro! A1</em> kitaplarındaki sınav kapsamına birebir uygun, interaktif vize çalışma ve pekiştirme modülü.
        </p>

        {/* Canlı Sayaç & Bilgilendirme */}
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            Toplam {QUIZ_TOPICS[0].questions.length} Soru
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            Vizeye 2 Gün Kaldı
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/60">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Otomatik Agent Güncellemeli
          </span>
        </div>
      </header>

      {/* Kategori Seçici Bar */}
      <div className="mb-8">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <BookText className="w-4 h-4 text-blue-400" />
          Çalışma Modülü Seç
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {QUIZ_TOPICS.map(topic => {
            const isSelected = selectedTopic.id === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => handleSelectTopic(topic)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg shadow-blue-500/10'
                    : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="text-xs font-bold truncate">{topic.title}</div>
                <div className="text-[11px] text-slate-400 truncate mt-0.5">{topic.scope}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quiz Alanı */}
      <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 sm:p-8 backdrop-blur shadow-xl">
        {!isCompleted && currentQ ? (
          <div>
            {/* Üst İlerleme Çubuğu */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
              <span className="font-semibold text-blue-400">
                {currentQ.categoryLabel}
              </span>
              <span>
                Soru {currentIdx + 1} / {questions.length}
              </span>
            </div>
            
            <div className="w-full bg-slate-700/60 h-2 rounded-full overflow-hidden mb-6">
              <div 
                className="bg-blue-500 h-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Soru Başlığı */}
            {currentQ.italianContext && (
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 font-mono text-xs sm:text-sm mb-4">
                🇮🇹 {currentQ.italianContext}
              </div>
            )}

            <h3 className="text-base sm:text-lg font-bold text-white mb-6">
              {currentQ.prompt}
            </h3>

            {/* Seçenekler */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((opt, i) => {
                const isSelected = selectedOption === opt;
                const isCorrect = opt === currentQ.correctAnswer;
                
                let btnStyle = 'bg-slate-900/60 border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-800';

                if (isAnswered) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200 shadow-md shadow-emerald-500/10';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-950/60 border-rose-500 text-rose-200';
                  } else {
                    btnStyle = 'bg-slate-900/30 border-slate-800 text-slate-500 opacity-50';
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(opt)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border font-medium text-sm transition-all flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 ml-2" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Açıklama Kutusu */}
            {isAnswered && (
              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/60 text-blue-200 text-xs sm:text-sm mb-6 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-blue-300 mb-1">Açıklama &amp; Sınav Tüyosu:</div>
                  <div className="text-blue-100/90 leading-relaxed">{currentQ.explanation}</div>
                </div>
              </div>
            )}

            {/* İlerle Butonu */}
            {isAnswered && (
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {currentIdx + 1 < questions.length ? (
                    <>
                      Sonraki Soru
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Sonuçları Gör
                      <Award className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Sonuç Ekranı */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              Modül Tamamlandı!
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              <strong>{selectedTopic.title}</strong> modülündeki performansın:
            </p>

            <div className="inline-flex items-baseline gap-2 px-6 py-3 rounded-2xl bg-slate-900 border border-slate-700 mb-6">
              <span className="text-4xl font-extrabold text-blue-400">{score}</span>
              <span className="text-slate-500 text-lg">/ {questions.length}</span>
              <span className="text-xs font-semibold text-slate-400 ml-2">
                (%{Math.round((score / questions.length) * 100)})
              </span>
            </div>

            <p className="text-sm text-slate-300 max-w-md mx-auto mb-8">
              {score === questions.length ? (
                '🏆 Muhteşem! Bu konudaki tüm soruları doğru bildin, vizeye hazırsın!'
              ) : score >= questions.length * 0.7 ? (
                '🎉 Çok başarılı! Ufak tefek eksiklerin var, testi tekrar çözerek pekiştirebilirsin.'
              ) : (
                '💪 Çalışmaya devam! Yanlış yaptığın kuralları PDF ders notlarından tekrar gözden geçirmeni öneririz.'
              )}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold text-sm transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Modülü Tekrar Çöz
              </button>
              <button
                onClick={() => handleSelectTopic(QUIZ_TOPICS[0])}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30"
              >
                Tam Kapsamlı Prova Sınavı Çöz
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Alt Bilgi */}
      <footer className="mt-8 text-center text-xs text-slate-500 border-t border-slate-800 pt-6">
        İtalyanca 101 Quiz &amp; Vize Hazırlık Portalı • Açık Kaynak Next.js &amp; Bun &amp; Vercel Projesi
      </footer>
    </div>
  );
}
