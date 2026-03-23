'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GameMode, QuestionType, Category } from '@/types';
import { SCENE_META, MODE_META } from '@/lib/gameConfig';
import { resolveIcon, HeartIcon } from './icons';
import TypeTag from './TypeTag';

interface ResultSummaryProps {
  totalQuestions: number;
  totalFavorites: number;
  scene: Category;
  mode: GameMode;
  completedCount: number;
  typeStats: Record<QuestionType, number>;
}

function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (value === 0) { setDisplay(0); return; }
    const duration = 800;
    const steps = 20;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplay(value);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return <>{display}</>;
}

export default function ResultSummary({
  totalQuestions,
  totalFavorites,
  scene,
  mode,
  completedCount,
  typeStats,
}: ResultSummaryProps) {
  const sceneMeta = SCENE_META[scene];
  const modeMeta = MODE_META[mode];
  const SceneIcon = resolveIcon(sceneMeta.icon);
  const ModeIcon = resolveIcon(modeMeta.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-3xl shadow-card border-2 border-shell p-6 space-y-5"
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-cream rounded-2xl p-4 text-center">
          <div className="text-3xl font-bold text-ink">
            <AnimatedNumber value={totalQuestions} />
          </div>
          <div className="text-xs text-ink-muted mt-1">總題數</div>
        </div>
        <div className="bg-cream rounded-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-1">
            <HeartIcon size={20} filled className="text-cream-pink" />
            <span className="text-3xl font-bold text-ink">
              <AnimatedNumber value={totalFavorites} />
            </span>
          </div>
          <div className="text-xs text-ink-muted mt-1">收藏數</div>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-ink-sub">
        <div className="flex items-center gap-1.5">
          <SceneIcon size={16} className="text-ink-muted" />
          <span>{sceneMeta.label}</span>
        </div>
        <div className="w-px h-4 bg-shell" />
        <div className="flex items-center gap-1.5">
          <ModeIcon size={16} className="text-ink-muted" />
          <span>{modeMeta.label}</span>
        </div>
      </div>

      {mode === 'challenge' && (
        <div className="pt-2 border-t border-shell">
          <span className="text-sm text-ink-sub">完成挑戰數：</span>
          <span className="ml-1 font-semibold text-ink">{completedCount}</span>
        </div>
      )}

      {mode === 'mixed' && (
        <div className="pt-2 border-t border-shell space-y-2">
          <p className="text-sm text-ink-sub">題型統計</p>
          <div className="flex gap-3">
            {(Object.entries(typeStats) as [QuestionType, number][])
              .filter(([, count]) => count > 0)
              .map(([type, count]) => (
                <div key={type} className="flex items-center gap-1.5">
                  <TypeTag type={type} />
                  <span className="text-sm font-medium text-ink">x{count}</span>
                </div>
              ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
