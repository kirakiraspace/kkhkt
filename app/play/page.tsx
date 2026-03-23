'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGame } from '@/context/GameContext';
import QuestionCard from '@/components/QuestionCard';
import GameControls from '@/components/GameControls';
import CountdownTimer from '@/components/CountdownTimer';
import { GAME_CONFIG, MODE_META } from '@/lib/gameConfig';
import { ArrowLeftIcon, resolveIcon } from '@/components/icons';

export default function PlayPage() {
  const router = useRouter();
  const {
    selectedScene,
    selectedType,
    currentQuestion,
    currentRound,
    roundSize,
    isRoundOver,
    nextQuestion,
    skipQuestion,
    toggleFavorite,
    markComplete,
    isFavorited,
  } = useGame();

  const handleTimerComplete = useCallback(() => {
    nextQuestion();
  }, [nextQuestion]);

  useEffect(() => {
    if (!selectedScene || !selectedType) {
      router.push('/scene');
    } else if (isRoundOver || !currentQuestion) {
      router.push('/result');
    }
  }, [selectedScene, selectedType, isRoundOver, currentQuestion, router]);

  if (!selectedScene || !selectedType || isRoundOver || !currentQuestion) {
    return null;
  }

  const activeMode = selectedType === 'mixed' ? currentQuestion.type : selectedType;
  const showTimer = activeMode === 'quickfire';
  const showTypeTag = selectedType === 'mixed';
  const modeMeta = MODE_META[selectedType];
  const ModeIcon = resolveIcon(modeMeta.icon);

  const handleFavorite = () => {
    toggleFavorite(currentQuestion);
  };

  return (
    <div className="flex flex-col min-h-screen px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.push('/type')}
          className="w-8 h-8 rounded-full flex items-center justify-center text-ink-muted hover:text-ink-sub hover:bg-shell transition-colors"
        >
          <ArrowLeftIcon size={18} />
        </button>
        <div className="flex items-center gap-1.5">
          <ModeIcon size={16} className="text-ink-muted" />
          <span className="text-sm text-ink-sub font-medium">{modeMeta.label}</span>
        </div>
        <span className="bg-cream rounded-full px-3 py-1 text-sm font-medium text-ink-sub tabular-nums">
          {currentRound} / {roundSize}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-shell rounded-full mb-8 overflow-hidden">
        <motion.div
          className="h-full bg-peach rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(currentRound / roundSize) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Timer (quickfire) */}
      {showTimer && (
        <div className="mb-6">
          <CountdownTimer
            key={currentQuestion.id}
            seconds={GAME_CONFIG.timer.quickfire}
            onComplete={handleTimerComplete}
          />
        </div>
      )}

      {/* Question Card */}
      <div className="flex-1 flex items-center justify-center mb-8">
        <QuestionCard question={currentQuestion} showTypeTag={showTypeTag} />
      </div>

      {/* Controls */}
      <GameControls
        mode={selectedType}
        question={currentQuestion}
        onNext={nextQuestion}
        onSkip={skipQuestion}
        onFavorite={handleFavorite}
        onComplete={markComplete}
        isFavorited={isFavorited(currentQuestion.id)}
      />
    </div>
  );
}
