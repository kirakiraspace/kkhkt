'use client';

import { Question, GameMode } from '@/types';
import { ArrowRightIcon, CheckIcon, SkipForwardIcon, HeartIcon } from './icons';

interface GameControlsProps {
  mode: GameMode;
  question: Question;
  onNext: () => void;
  onSkip: () => void;
  onFavorite: () => void;
  onComplete: () => void;
  isFavorited: boolean;
}

export default function GameControls({
  mode,
  question,
  onNext,
  onSkip,
  onFavorite,
  onComplete,
  isFavorited,
}: GameControlsProps) {
  const activeMode = mode === 'mixed' ? question.type : mode;

  return (
    <div className="flex flex-col gap-3 w-full">
      {activeMode === 'challenge' ? (
        <button
          onClick={() => { onComplete(); onNext(); }}
          className="w-full py-3 rounded-2xl bg-peach text-white font-semibold shadow-button hover:bg-peach-hover active:bg-peach-active transition-colors flex items-center justify-center gap-2"
        >
          <CheckIcon size={18} className="text-white" />
          完成
        </button>
      ) : (
        <button
          onClick={onNext}
          className="w-full py-3 rounded-2xl bg-peach text-white font-semibold shadow-button hover:bg-peach-hover active:bg-peach-active transition-colors flex items-center justify-center gap-2"
        >
          下一題
          <ArrowRightIcon size={18} className="text-white" />
        </button>
      )}

      <div className="flex gap-3">
        <button
          onClick={onSkip}
          className="flex-1 py-3 rounded-2xl border-2 border-shell text-ink-sub font-medium hover:bg-[#FFF3EB] transition-colors flex items-center justify-center gap-1.5"
        >
          <SkipForwardIcon size={16} className="text-ink-muted" />
          跳過
        </button>
        <button
          onClick={onFavorite}
          className={`flex-1 py-3 rounded-2xl font-medium transition-colors flex items-center justify-center gap-1.5 ${
            isFavorited
              ? 'bg-cream-pink text-tag-question-text border-2 border-cream-pink'
              : 'border-2 border-shell text-ink-sub hover:bg-[#FFF3EB]'
          }`}
        >
          <HeartIcon size={16} filled={isFavorited} />
          {isFavorited ? '已收藏' : '收藏'}
        </button>
      </div>
    </div>
  );
}
