'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGame } from '@/context/GameContext';
import { MODE_META } from '@/lib/gameConfig';
import { GameMode } from '@/types';
import TypeCard from '@/components/TypeCard';
import { ArrowLeftIcon, SparklesIcon } from '@/components/icons';

const modes = Object.entries(MODE_META) as [GameMode, typeof MODE_META[GameMode]][];

export default function TypePage() {
  const router = useRouter();
  const { selectedScene, selectedType, selectType, startGame } = useGame();

  useEffect(() => {
    if (!selectedScene) {
      router.push('/scene');
    }
  }, [selectedScene, router]);

  if (!selectedScene) {
    return null;
  }

  const handleStart = () => {
    if (!selectedType) return;
    startGame();
    router.push('/play');
  };

  return (
    <div className="flex flex-col min-h-screen px-6 py-10">
      {/* Step indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cream-peach text-ink-sub">
          步驟 2 / 2
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-ink">選擇題型</h2>
        <p className="mt-1 text-ink-sub">想用什麼方式暖場？</p>
      </motion.div>

      <div className="flex flex-col gap-3 flex-1">
        {modes.map(([key, meta], i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <TypeCard
              mode={key}
              label={meta.label}
              description={meta.description}
              icon={meta.icon}
              selected={selectedType === key}
              onClick={() => selectType(key)}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <button
          onClick={() => router.push('/scene')}
          className="flex-1 py-3 rounded-2xl border-2 border-shell text-ink-sub font-medium hover:bg-[#FFF3EB] transition-colors flex items-center justify-center gap-1.5"
        >
          <ArrowLeftIcon size={16} />
          返回
        </button>
        <button
          onClick={handleStart}
          disabled={!selectedType}
          className={`flex-1 py-3 rounded-2xl font-semibold text-white transition-colors flex items-center justify-center gap-1.5 ${
            selectedType
              ? 'bg-peach shadow-button hover:bg-peach-hover active:bg-peach-active'
              : 'bg-shell-disabled cursor-not-allowed'
          }`}
        >
          <SparklesIcon size={16} className="text-white" />
          開始遊戲
        </button>
      </div>
    </div>
  );
}
